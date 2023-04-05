import { useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { Stats, OrbitControls, } from '@react-three/drei'

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
    <div className='w-full h-screen bg-slate-950 text-slate-50'>
      <h1 className="text-5xl font-bold text-center fixed left-0 right-0">R3F</h1>
      <Canvas shadows>
        <ambientLight intensity={0.3} />
        <spotLight position-y={3} castShadow />
        <group>
          <Cube />
          <Sphere />
        </group>
        <Plane />
        <OrbitControls />
      </Canvas>
    </div>
  )
}


