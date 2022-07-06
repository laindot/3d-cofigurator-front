import React from 'react';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Box = ({ color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh position={[0, 0, 0]} ref={ref}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial attach='material' color={color} />
    </mesh>
  );
};

const Sphere = ({ color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry attach='geometry' args={[1]} />
      <meshStandardMaterial attach='material' color={color} />
    </mesh>
  );
};

const Octahedron = ({ color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref}>
      <octahedronBufferGeometry attach='geometry' args={[1]} />
      <meshStandardMaterial attach='material' color={color} />
    </mesh>
  );
};

const Render = ({ entry }) => {
  const renderShape = () => {
    switch (entry.shape) {
      case 'box':
        return <Box color={entry.color} />;
      case 'sphere':
        return <Sphere color={entry.color} />;
      case 'octahedron':
        return <Octahedron color={entry.color} />;
      default:
        return <Box color={entry.color} />;
    }
  };

  return (
    <div style={{ height: '500px', width: '500px' }}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} />
        {entry ? renderShape() : 'no entry'}
      </Canvas>
    </div>
  );
};

export default Render;
