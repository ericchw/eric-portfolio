import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// A small scene: three paths, data packets, and one shared processing core.
export default function SystemScene({ dark }) {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    const stage = host.parentElement
    let renderer
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      })
    } catch {
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x000000, 0)
    renderer.domElement.setAttribute('aria-hidden', 'true')
    host.appendChild(renderer.domElement)
    stage.classList.add('has-webgl')

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 60)
    camera.position.set(0, 0, 10)
    const system = new THREE.Group()
    scene.add(system)
    const ink = dark ? 0xcbd1c4 : 0x454c3e
    const accent = dark ? 0xd7f769 : 0x657a25
    const resources = new Set()
    const track = (resource) => {
      resources.add(resource)
      return resource
    }
    const lineMaterial = track(
      new THREE.LineBasicMaterial({
        color: ink,
        transparent: true,
        opacity: 0.38,
      }),
    )
    const packetMaterial = track(new THREE.MeshBasicMaterial({ color: accent }))
    const packetGeometry = track(new THREE.SphereGeometry(0.055, 12, 8))
    const paths = []

    for (let index = 0; index < 3; index++) {
      const points = []
      for (let tick = 0; tick <= 100; tick++) {
        const angle = (tick / 100) * Math.PI * 2
        const point = new THREE.Vector3(
          Math.cos(angle) * 2.6,
          Math.sin(angle) * 1.5,
          0,
        )
        point.applyAxisAngle(
          new THREE.Vector3(1, 0, 0),
          (index * Math.PI) / 3 + 0.45,
        )
        point.applyAxisAngle(new THREE.Vector3(0, 0, 1), (index * Math.PI) / 3)
        points.push(point)
      }
      const curve = new THREE.CatmullRomCurve3(points.slice(0, -1), true)
      system.add(
        new THREE.Line(
          track(new THREE.BufferGeometry().setFromPoints(points)),
          lineMaterial,
        ),
      )
      const packet = new THREE.Mesh(packetGeometry, packetMaterial)
      system.add(packet)
      paths.push({ curve, packet, offset: index / 3 })
      const node = new THREE.Mesh(
        track(new THREE.BoxGeometry(0.17, 0.17, 0.17)),
        track(new THREE.MeshBasicMaterial({ color: ink, wireframe: true })),
      )
      node.position.copy(curve.getPoint(index / 3))
      system.add(node)
    }

    const core = new THREE.Group()
    const geometry = track(new THREE.IcosahedronGeometry(0.88, 0))
    core.add(
      new THREE.LineSegments(
        track(new THREE.EdgesGeometry(geometry)),
        track(
          new THREE.LineBasicMaterial({
            color: ink,
            transparent: true,
            opacity: 0.85,
          }),
        ),
      ),
    )
    core.add(
      new THREE.Mesh(
        track(new THREE.IcosahedronGeometry(0.48, 0)),
        track(
          new THREE.MeshBasicMaterial({
            color: accent,
            wireframe: true,
            transparent: true,
            opacity: 0.7,
          }),
        ),
      ),
    )
    system.add(core)

    const pointer = new THREE.Vector2()
    let visible = false
    let elapsed = 0
    let previous = 0
    const render = (timestamp) => {
      if (previous) elapsed += Math.min((timestamp - previous) / 1000, 0.05)
      previous = timestamp
      system.rotation.y += (pointer.x * 0.3 - system.rotation.y) * 0.025
      system.rotation.x += (-pointer.y * 0.2 - system.rotation.x) * 0.025
      system.rotation.z = Math.sin(elapsed * 0.12) * 0.08
      core.rotation.y = elapsed * 0.16
      core.rotation.z = elapsed * 0.07
      for (const { curve, packet, offset } of paths)
        packet.position.copy(curve.getPoint((elapsed * 0.055 + offset) % 1))
      renderer.render(scene, camera)
    }
    const syncAnimation = () => {
      previous = 0
      renderer.setAnimationLoop(visible && !document.hidden ? render : null)
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      syncAnimation()
    })
    observer.observe(host)
    document.addEventListener('visibilitychange', syncAnimation)
    const resize = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      if (!width || !height) return
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.render(scene, camera)
    })
    resize.observe(host)
    const move = (event) => {
      const box = host.getBoundingClientRect()
      pointer.set(
        ((event.clientX - box.left) / box.width) * 2 - 1,
        ((event.clientY - box.top) / box.height) * 2 - 1,
      )
    }
    const reset = () => pointer.set(0, 0)
    host.addEventListener('pointermove', move)
    host.addEventListener('pointerleave', reset)
    const lost = (event) => {
      event.preventDefault()
      renderer.setAnimationLoop(null)
      stage.classList.remove('has-webgl')
    }
    renderer.domElement.addEventListener('webglcontextlost', lost)

    return () => {
      observer.disconnect()
      resize.disconnect()
      document.removeEventListener('visibilitychange', syncAnimation)
      host.removeEventListener('pointermove', move)
      host.removeEventListener('pointerleave', reset)
      renderer.domElement.removeEventListener('webglcontextlost', lost)
      renderer.setAnimationLoop(null)
      resources.forEach((resource) => resource.dispose())
      renderer.dispose()
      renderer.domElement.remove()
      stage.classList.remove('has-webgl')
    }
  }, [dark])

  return <div ref={hostRef} className="webgl-host" aria-hidden="true" />
}
