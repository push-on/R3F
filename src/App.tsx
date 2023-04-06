import { OrbitControls, } from '@react-three/drei'

export const Cube = () => {
  return (
    <mesh position-x={-2} scale={2} castShadow receiveShadow>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}
export const Sphere = () => {
  return (
    <mesh position-x={2} castShadow receiveShadow>
      <sphereGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
  )
}
export const Plane = () => {
  return (
    <mesh position-y={- 1} scale={15} rotation-x={-Math.PI * 0.5} receiveShadow>
      <planeGeometry />
      <meshStandardMaterial color="greenyellow" />
    </mesh>
  )
}

export const App = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight position-y={3} castShadow />
      <group>
        <Cube />
        <Sphere />
      </group>
      <Plane />
      <OrbitControls />
    </>
  )
}
