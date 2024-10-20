import { Canvas } from "@react-three/fiber"
import './style.css'
import './stylesheet.css'
import { Environment, ScrollControls } from "@react-three/drei"
import MacContainer from "./MacContainer"
import Navbar from "./Navbar"
import {gsap} from 'gsap'
import { useEffect, useRef, useState } from "react"

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setWidth(window.innerWidth)
    })
  }, [])

  const macRef = useRef()
  useEffect(()=>{
    gsap.to('#heading', {
      opacity: 1,
      delay: 1,
      duration: 1,
      ease: 'power2.out'
    })
    if(macRef.current){
      gsap.fromTo(macRef.current, {
        scale: 1.2,
      }, {
        scale: 1,
        duration: 1,
        ease: 'power2.out',
      })
    }
    
  }, [])

  return (
    <>
    <div className="w-full h-screen overflow-hidden">
      <Navbar></Navbar>
      <div className="absolute top-32 text-white text-7xl font-['Helvetica Now Display'] left-1/2 -translate-x-1/2">
        <h3 id="heading" className="opacity-0 z-50 text-9xl max-md:text-5xl tracking-tighter font-bold glowing-text">macbook pro.</h3>
      </div>
      <Canvas ref={macRef} camera={{fov:20, position: width<900?[0, -10, 250]:[0, -10, 120]}}>
        <Environment files={['hdri_lights.hdr']}/>
        <ScrollControls pages={1} damping={0.1}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
    </>
  )
}

export default App
