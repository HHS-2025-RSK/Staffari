import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";

function Model({ url }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => action.play());
    }
  }, [actions]);

  return (
    <group
      ref={group}
      rotation={[0, -Math.PI / 2, 0]}
      position={[0, -0.3, 0]} // Raised from -0.5 to reduce bottom gap
      scale={2.8} // Slightly reduced from 3.2 to fit taller profile
    >
      <primitive object={scene} />
    </group>
  );
}

export default function GLBModel({ url }) {
  return (
    <Canvas
      camera={{ position: [0, 2.2, 5], fov: 42 }} // Raised Y from 1.6, tightened FOV from 45
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: false }} // Optional perf boost
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} />
      <directionalLight position={[-5, 5, 0]} intensity={0.6} />
      <Suspense fallback={null}>
        <Model url={url} />
      </Suspense>
    </Canvas>
  );
}
