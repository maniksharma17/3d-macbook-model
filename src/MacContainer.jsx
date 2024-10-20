import { useGLTF, useScroll, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'

const MacContainer = () => {
  let model = useGLTF('model/mac.glb')
  let meshes = {}

  // FETCHING MESHES
  model.scene.traverse(e => {
      meshes[e.name] = e
  })

  // SCREEN ROTATION
  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180)
  let data = useScroll()
  useFrame((state, delta)=>{
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset*90)
  }, [])

  // ADDING SCREEN DISPLAY
  let texture = useTexture('/model/red.jpg')
  meshes.matte.material.map = texture
  meshes.matte.material.emissiveIntensity = 0
  meshes.matte.material.metalness = 0
  meshes.matte.material.roughness = 1

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  )
}

export default MacContainer