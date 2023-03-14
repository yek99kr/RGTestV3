import Link from "next/link";
import { useState } from "react";

import MouseAnimation from "../MouseAnimation";

const ProjectThumbnailDesktop = ({ project, size }) => {
  const [hovered, setHovered] = useState(false);

  const thumbnails = project.data.thumbnails.map((url) => {
    return url.thumbnail.url;
  });

  const wsize = "w-[" + size + "vw]";
  const hsize = "w-[" + size + "vw]";
  // console.log(wsize);

  return (
    <>
      <Link href={`/work/${project.uid}`} passHref scroll={false}>
        <a className="group thumbcursor">
          <div
            className="w-full overflow-hidden "
            onMouseOver={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
          >
            <div
              style={{ width: `${size}vw`, height: `${size}vw` }}
              className={`relative w-[80vw] h-[80vw] sm:w-[80vw] sm:h-[80vw] `}
            >
              <MouseAnimation thumbnails={thumbnails} size={size} />
            </div>
          </div>

          <div
            className={`opacity-0 ${
              hovered ? "md:opacity-100" : "md:opacity-0"
            } `}
            style={{ transition: "opacity 0.2s" }}
          >
            <p className="text-center md:text-xl lg:text-2xl m-[-0.1rem]">
              {/* <span className="bg-black text-white p-1"> */}
              {project.data.client}
              {/* </span> */}
            </p>
            <p className="text-center md:text-base lg:text-lg m-[0rem]">
              {/* <span className="bg-black text-white p-1"> */}{" "}
              {project.data.title}
              {/* </span> */}
            </p>
          </div>
        </a>
      </Link>
    </>
  );
};

export default ProjectThumbnailDesktop;

{
  /* 
          <img
            src={
              project.data.thumbnails[1]
                ? project.data.thumbnails[moveImg].thumbnail.url
                : project.data.thumbnails[0].thumbnail.url
            }
            className="w-full h-full"
            onMouseMove={(e) => {
              var rect = e.target.getBoundingClientRect();
              var x = e.clientX - rect.left;

              var percent = (rect.width * 20) / 100;

              if (moveImg !== 1 && x > 0 && x < percent) {
                setMoveImg(0);
              } else if (
                moveImg !== 2 &&
                x > percent &&
                x < percent + percent
              ) {
                setMoveImg(1);
              } else if (moveImg !== 3 && x > percent * 2 && x < percent * 3) {
                setMoveImg(2);
              } else if (moveImg !== 4 && x > percent * 3 && x < percent * 4) {
                setMoveImg(3);
              } else if (
                moveImg !== 5 &&
                x > rect.width - percent &&
                x < rect.width
              ) {
                setMoveImg(4);
              }
            }}
          /> */
}
