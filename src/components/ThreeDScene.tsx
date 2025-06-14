
import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

function Starfield(props: any) {
  const ref: any = useRef()

  const positions = useMemo(() => {
    const points = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
        let i3 = i * 3;
        const r = 3 + Math.random() * 2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        points[i3] = r * Math.sin(phi) * Math.cos(theta);
        points[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        points[i3 + 2] = r * Math.cos(phi);
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x -= delta / 25
        ref.current.rotation.y -= delta / 40
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.009}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function ThreeDScene() {
  return (
    <div className="absolute inset-0 z-0 bg-transparent">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Starfield />
        </Canvas>
    </div>
  )
}
