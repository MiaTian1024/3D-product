import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree} from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';

import Model from './Model';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  const sphereRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      const { left, top, width, height } = event.target.getBoundingClientRect();
      const x = (clientX - left) / width * 20 - 1;
      const y = -(clientY - top) / height * 20 + 1;

      const sphereRotationSpeed = 0.05;
      if (sphereRef.current) {
        sphereRef.current.rotation.y = x * sphereRotationSpeed;
        sphereRef.current.rotation.x = y * sphereRotationSpeed;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 5]} />
      <Environment preset="city" />

      <CameraRig>
        <Center>
          <Model ref={sphereRef}/>
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel