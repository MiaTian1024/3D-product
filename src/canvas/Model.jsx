import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture ,Torus, Sphere} from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import state from '../store';

const Model = () => {
  const snap = useSnapshot(state);

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  
  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh castShadow dispose={null}>
        <Torus args={[0.2, 0.1, 30]} scale={1} >
       
        <meshStandardMaterial color={snap.color} />
       
        {snap.isFullTexture && (
          <Decal 
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={2}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal 
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
        </Torus>
      </mesh>
    </group>
  )
}

export default Model