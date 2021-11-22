import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Stars,
  Sky,
  Html,
  PerspectiveCamera,
} from '@react-three/drei'

import { Ground } from './components'
import ShibaInu from './components/ShibaInu'
import Dino from './components/Dino'

export default function App() {
  return (
    <>
      <Canvas style={{ height: 'calc(100vh - 23.2px)' }}>
        <OrbitControls />
        <Sky
          distance={50}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <Stars />
        <ambientLight intensity={0.5} />
        <Html as="div">
          {/* <h1 style={{ color: '#fff' }}>hem cosmos</h1> */}
        </Html>
        <Suspense fallback={null}>
          <ShibaInu position={[-5, 1, 0]} />
          <Dino position={[5, 1.5, 2]} />
        </Suspense>
        <Ground />
      </Canvas>
      <p
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          margin: 0,
          backgroundColor: '#000',
          color: '#fff',
        }}
      >
        {'let us 3 ❤️'}
      </p>
    </>
  )
}
