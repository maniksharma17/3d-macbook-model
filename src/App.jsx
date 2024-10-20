import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import './style.css'
import './stylesheet.css'
import { Environment, ScrollControls } from "@react-three/drei"
import MacContainer from "./MacContainer"
import Navbar from "./Navbar"
import { useEffect } from "react"

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setWidth(window.innerWidth)
    })
  }, [])

  return (
    <>
    <div className="w-full h-screen">
      <Navbar></Navbar>
      <div className="absolute top-32 text-white text-7xl font-['Helvetica Now Display'] left-1/2 -translate-x-1/2">
        <h3 className="text-9xl max-md:text-5xl tracking-tighter font-bold glowing-text">macbook pro.</h3>
      </div>
      <Canvas camera={{fov:20, position: width<900?[0, -10, 250]:[0, -10, 120]}}>
        <Environment files={['hdri_lights.hdr']}/>
        <ScrollControls pages={3} damping={0.1}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
    </>
  )
}

export default App
