import { useRef, useEffect } from 'react'
import { Text, Html, OrbitControls, PivotControls } from '@react-three/drei'
import { DoubleSide, Mesh } from 'three'

export const App = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight position-y={3} castShadow />
      <TextObject />
      <Objects />
      <Plane />
      <OrbitControls makeDefault />
    </>
  )
}

export function TextObject() {
  return (
    <Text
      position-y={3}
      maxWidth={3}
      color="skyblue"
      textAlign='center'
    >
      This is R3F
    </Text>
  )
}

export function Objects() {
  const sphere = useRef<Mesh>(null!)
  const cube = useRef<Mesh>(null!)
  return (
    <group>
      <PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={2}>
        <mesh ref={cube} position-x={-2} scale={1.99} castShadow receiveShadow>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </PivotControls>
      <mesh ref={sphere} position-x={2} castShadow receiveShadow>
        <sphereGeometry />
        <meshStandardMaterial color="mediumpurple" />
        <Html
          position={[1, 1, 0]}
          wrapperClass='lable'
          className='bg-black/50 p-2 rounded-full whitespace-nowrap border-2 border-white/50'
          center
          occlude={[sphere, cube]}
        >👍 this Is A Sphere HTML</Html>
      </mesh>
    </group>
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
