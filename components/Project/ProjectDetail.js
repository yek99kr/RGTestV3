import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import ProjectBtn from "./ProjectBtn";

const ProjectDetail = ({ project, projects }) => {
  return (
    <div
      style={{
        background: project.data.bgColor,
        color: project.data.textColor,
      }}
    >
      <div
        className="relative top-0 grid justify-items-center w-[100vw] grid-cols-5 gap-y-[5.6vw] md:gap-y-[1.5rem]
        "
      >
        <div className="absolute bg-red text-center w-[90vw] h-[11vw] lg:h-[5vw] top-[22vw] md:top-[23vw] lg:top-[21vw] xl:top-[23vw] 2xl:top-[20vw] z-[100]">
          <h1 className="text-[5.7vw] sm:text-[40px] lg:text-[50px] 2xl:text-[55px]">
            <span className="text-white bg-black p-[0.3vw] md:p-0.5 pl-3 pr-3 font-bold">
              {project.data.client}
            </span>
          </h1>

          <p className="title relative text-[3.1vw] sm:text-[22px] lg:text-[24px] xl:text-[26px] mb-[2vw] md:mb-[30px] font-mono">
            <span className="text-white bg-black p-[0.2vw] md:p-0.5 pl-2 pr-2">
              {project.data.title}
            </span>
          </p>
        </div>
        <SliceZone slices={project.data.slices} components={components} />
        {/* <iframe
          className="w-[100%] h-[100%]"
          src="
                https://player.vimeo.com/video/794674119?h=5323d8e65d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?quality=1080p&loop=1&background=1&autoplay=1&muted=1&controls=0"
          allowFullScreen
        ></iframe>{" "}
        <iframe
          className="w-[100%] h-[100%]"
          src="
              https://player.vimeo.com/video/794674119?h=5323d8e65d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?quality=1080p&loop=1&background=1&autoplay=1&muted=1&controls=0"
          allowFullScreen
        ></iframe>{" "}
        <iframe
          className="w-[100%] h-[100%]"
          src="
            https://player.vimeo.com/video/794674119?h=5323d8e65d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?quality=1080p&loop=1&background=1&autoplay=1&muted=1&controls=0"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-[100%] h-[100%]"
          src="
                https://player.vimeo.com/video/794674119?h=5323d8e65d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?quality=1080p&loop=1&background=1&autoplay=1&muted=1&controls=0"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-[100%] h-[100%]"
          src="
                https://player.vimeo.com/video/794674119?h=5323d8e65d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?quality=1080p&loop=1&background=1&autoplay=1&muted=1&controls=0"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-[100%] h-[100%]"
          src="
                https://player.vimeo.com/video/794674119?h=5323d8e65d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?quality=1080p&loop=1&background=1&autoplay=1&muted=1&controls=0"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-[100%] h-[100%]"
          src="
                https://player.vimeo.com/video/794674119?h=5323d8e65d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?quality=1080p&loop=1&background=1&autoplay=1&muted=1&controls=0"
          allowFullScreen
        ></iframe> */}
      </div>

      <ProjectBtn project={project} projects={projects} />
    </div>
  );
};

export default ProjectDetail;
