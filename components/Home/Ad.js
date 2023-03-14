import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Flowerbed from "./Flowerbed";
import { ResizeObserver } from "@juggle/resize-observer";

const Ad = ({ props }) => {
  const [close, setClose] = useState(false);

  // 320px 568px 768 x 1076 Pixels

  return (
    <div className="absolute w-[190px] h-[60px] 4xs:w-[315px] 4xs:h-[104px] 3xs:w-[345px] 3xs:h-[118px] 2xs:w-[375px] 2xs:h-[140px] xs:w-[438px] xs:h-[146px] sm:w-[480px] sm:h-[160px] md:w-[600px] md:h-[200px] lg:w-[630px] lg:h-[210px] xl:w-[750px] xl:h-[250px] bottom-10 sm:bottom-5 top-[1] left-1/2 transform -translate-x-1/2">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 15 }}
        resize={{ polyfill: ResizeObserver }}
      >
        <ambientLight intensity={0.7} />
        <pointLight intensity={0.7} position={[8, 7, 5]} />

        <Suspense fallback={null}>
          <Flowerbed
            close={close}
            setClose={setClose}
            position={[0, -0.4, 0]}
            scale={[0.58, 0.58, 0.58]}
            rotation={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Ad;
