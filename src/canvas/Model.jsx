import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture ,Torus, Sphere} from '@react-three/drei';
import { MeshStandardMaterial, MeshLambertMaterial, MeshPhongMaterial } from 'three';
import state from '../store';

const Model = () => {
  const snap = useSnapshot(state);

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  
  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh castShadow dispose={null}>
        <Sphere args={[0.2, 100, 200]} scale={1} >
       
        <meshPhongMaterial color={snap.color} />
       
        {snap.isFullTexture && (
          <Decal 
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={0.5}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal 
            position={[0.04, 0.04, 0.14]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
        </Sphere>
      </mesh>
    </group>
  )
}

export default Model