import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Hand from "./Hand";
import { ResizeObserver } from "@juggle/resize-observer";
import { Environment } from "@react-three/drei";
import { useProject } from "../../context/AppContext";

const Hands = ({ router }) => {
  const texture = [
    "/texture/HandT1.jpg",
    "/texture/HandT2.jpg",
    "/texture/HandT3.jpg",
    "/texture/HandT4.jpg",
  ];

  // const hoveredProject = useProject();

  return (
    <div
      className="w-[100vw] h-[100vh] fixed z-[100]"
      style={{ pointerEvents: "none" }}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 30], fov: 30 }}
        resize={{ polyfill: ResizeObserver }}
        style={{ pointerEvents: "none" }}
      >
        <hemisphereLight intensity={0.7} position={[0, 50, 0]} />
        <directionalLight intensity={0.8} position={[-8, 20, 8]} />

        <Suspense fallback={null}>
          <Hand
            firstPosition={[35, 10, 2]}
            secondPosition={[18.7, 10, 2]}
            rotation={[0, 0, 0.45]}
            scale={[0.85, 0.85, 0.85]}
            mouseP={1}
            textureMap={texture[1]}
            // hoveredProject={hoveredProject}
            router={router}
          />
          <Hand
            firstPosition={[35, 0, 2]}
            secondPosition={[20.7, 0, 2]}
            rotation={[0, 0, 0.05]}
            scale={[0.85, 0.85, 0.85]}
            mouseP={1}
            textureMap={texture[2]}
            // hoveredProject={hoveredProject}
            router={router}
          />

          <Hand
            firstPosition={[35, -9.5, 2]}
            secondPosition={[18.7, -9.5, 2]}
            rotation={[0, 0, -0.4]}
            scale={[0.85, 0.85, 0.85]}
            mouseP={1}
            textureMap={texture[0]}
            // hoveredProject={hoveredProject}
            router={router}
          />

          <Hand
            firstPosition={[-35, 10, 2]}
            secondPosition={[-18.7, 10, 2]}
            rotation={[0, 0, -0.45]}
            scale={[-0.85, 0.85, 0.85]}
            mouseP={-1}
            textureMap={texture[2]}
            // hoveredProject={hoveredProject}
            router={router}
          />

          <Hand
            firstPosition={[-35, 0, 2]}
            secondPosition={[-20.7, 0, 2]}
            rotation={[0, 0, -0.05]}
            scale={[-0.85, 0.85, 0.85]}
            mouseP={-1}
            textureMap={texture[0]}
            // hoveredProject={hoveredProject}
            router={router}
          />
          <Hand
            firstPosition={[-35, -9.5, 2]}
            secondPosition={[-18.7, -9.5, 2]}
            rotation={[0, 0, 0.4]}
            scale={[-0.85, 0.85, 0.85]}
            mouseP={-1}
            textureMap={texture[3]}
            // hoveredProject={hoveredProject}
            router={router}
          />
        </Suspense>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Hands;
