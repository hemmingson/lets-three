import { TextureLoader } from 'three'

export function Ground({ ...props }) {
  const texture = new TextureLoader().load('/grass.jpg')
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} {...props}>
      <planeBufferGeometry attach="geometry" args={[50, 50]} />
      <meshStandardMaterial map={texture} attach="material" />
    </mesh>
  )
}
