/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useRef, useEffect, useState } from "react";
import { useGLTF, Html, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Vimeo from "@u-wave/react-vimeo";

export default function Model({ close, setClose, hinge, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/flowerbed.glb");
  const { actions } = useAnimations(animations, group);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (close) {
      actions.Grow1.clampWhenFinished = true;
      actions.Grow1.setLoop(THREE.LoopOnce);
      actions.Grow1.play().reset();

      actions.Grow2.clampWhenFinished = true;
      actions.Grow2.setLoop(THREE.LoopOnce);
      actions.Grow2.play().reset();

      actions.Grow3.clampWhenFinished = true;
      actions.Grow3.setLoop(THREE.LoopOnce);
      actions.Grow3.play().reset();

      actions.Grow4.clampWhenFinished = true;
      actions.Grow4.setLoop(THREE.LoopOnce);
      actions.Grow4.play().reset();

      actions.Grow5.clampWhenFinished = true;
      actions.Grow5.setLoop(THREE.LoopOnce);
      actions.Grow5.play().reset();

      actions.Grow6.clampWhenFinished = true;
      actions.Grow6.setLoop(THREE.LoopOnce);
      actions.Grow6.play().reset();
    }
  }, [close]);

  useFrame((state) => {
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      close ? Math.PI / 2 + 0.4 : 0,
      0.1
    );
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          geometry={nodes.Wood.geometry}
          material={materials.wood}
          onClick={(e) => {
            e.stopPropagation(), setClose(!close);
          }}
        >
          <Html
            transform
            occlude
            style={{ width: "402px", height: "88px" }}
            position={[0, 0, 0.54]}
          >
            <div
              className="absolute w-[402px] h-[88px] top-[0px] right-[-1px] 
          "
              style={{
                borderColor: "#AEAEAE",
                overflow: "hidden",
              }}
            >
              <a
                href="https://www.instagram.com/real.good.studio/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-[402px] h-[88px] top-[0px] right-[-1px] 
          
                "
                >
                  <Vimeo
                    video="https://vimeo.com/700887737"
                    autoplay={true}
                    controls={false}
                    loop={true}
                    showTitle={false}
                    height="235%"
                    muted={true}
                    className="absolute top-[-80%] left-0 pointer-events-none "
                  />
                </div>
              </a>

              <div className="absolute left-0 w-[16px] h-[15px] bg-white rounded-br text-[9px] pl-[1px] text-gray-600 font-semibold">
                AD
              </div>

              <div
                className="absolute right-0 top-[-6px] h-[15px]"
                onClick={(e) => {
                  e.stopPropagation(), setClose(!close);
                }}
              >
                {showText && (
                  <div className="relative hidden lg:text-[8px] h-[15px] top-[-3px] pl-[2px] pr-[2px] bg-white rounded-bl lg:inline-block">
                    AdChoices
                  </div>
                )}
                <img
                  src="/adIcon.png"
                  className="relative w-[15px] h-[15px] inline-block"
                  onMouseEnter={() => setShowText(true)}
                  onMouseLeave={() => setShowText(false)}
                ></img>
                <img
                  src="/adClose.jpg"
                  className="relative w-[15px] h-[15px] inline-block"
                ></img>
              </div>
            </div>
          </Html>
        </mesh>

        <mesh
          geometry={nodes.Soil.geometry}
          material={materials.soil}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />

        <mesh
          name="Daisy2"
          geometry={nodes.Daisy2.geometry}
          material={materials.daisy}
          position={[-2.51, -0.12, -0.48]}
          scale={0.21}
        />
        <mesh
          name="Daisy1"
          geometry={nodes.Daisy1.geometry}
          material={materials.daisy}
          position={[-3.99, -0.26, -0.13]}
          rotation={[0.49, -0.35, 2.42]}
          scale={0.33}
        />
        <mesh
          name="Daisy4"
          geometry={nodes.Daisy4.geometry}
          material={materials.daisy}
          position={[0.39, -0.06, -0.22]}
          rotation={[-0.13, -0.23, 0.77]}
          scale={0.24}
        />
        <mesh
          name="Daisy6"
          geometry={nodes.Daisy6.geometry}
          material={materials.daisy}
          position={[3.9, -0.32, -0.3]}
          rotation={[0.32, -0.29, 1.63]}
          scale={0.25}
        />
        <mesh
          name="Daisy5"
          geometry={nodes.Daisy5.geometry}
          material={materials.daisy}
          position={[2.14, -0.01, -0.05]}
          rotation={[0.12, 0.22, -2.42]}
          scale={0.32}
        />
        <mesh
          name="Daisy3"
          geometry={nodes.Daisy3.geometry}
          material={materials.daisy}
          position={[-0.72, -0.04, -0.18]}
          rotation={[0.41, 0.21, -2.89]}
          scale={0.28}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/flowerbed.glb");
