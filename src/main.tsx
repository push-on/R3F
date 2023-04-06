import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Page } from './Components/Page'
import './index.css'
import { Canvas, useFrame } from '@react-three/fiber'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Page />
    <Canvas shadows >
      <App />
    </Canvas>
  </React.StrictMode>,
)
