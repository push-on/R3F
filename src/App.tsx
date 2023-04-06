import { useRef, useEffect } from 'react'
import { Html, OrbitControls, PivotControls } from '@react-three/drei'
import { DoubleSide } from 'three'

export const App = () => {

  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight position-y={3} castShadow />
      <PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={2}>
        <Cube />
      </PivotControls>
      <Sphere />
      <Plane />
      <OrbitControls makeDefault />
    </>
  )
}

export function Cube() {
  return (
    <mesh position-x={-2} scale={1.99} castShadow receiveShadow>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}
export function Sphere() {
  return (
    <mesh position-x={2} castShadow receiveShadow>
      <Html className='bg-black/50 p-2 rounded-full whitespace-nowrap' center>👍 That Is A Sphere </Html>
      <sphereGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
  )
}
export function Plane() {
  return (
    <mesh position-y={-1} scale={15} rotation-x={-Math.PI * 0.5} receiveShadow>
      <planeGeometry />
      <meshStandardMaterial color="greenyellow" side={DoubleSide} />
    </mesh>
  )
}
