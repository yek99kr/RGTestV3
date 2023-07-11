import ProjectThumbnailDesktop from "./ProjectThumbnailDesktop";
import useMediaQueryWidth from "../../utils/useMediaQueryWidth";
import useIsTouch from "../../utils/useIsTouch";
import ProjectThumbnailMobile from "./ProjectThumbnailMobile";

const ProjectList = ({ projects }) => {
  const isSmallestHeight = useMediaQueryWidth(768);
  const isTouch = useIsTouch();
  const mouseAnimation = isSmallestHeight || isTouch;

  const classes = [
    "md:mt-[2vw] md:rotate-[0deg] md:col-start-1 md:top-[-0px]",
    "md:mt-[6vw] md:rotate-[-8deg] md:col-start-3 md:top-[20px]",
    "md:mt-[0vw] md:rotate-[9deg] md:col-start-5 md:top-[-30px]",

    "md:mt-[-5vw] md:rotate-[3deg] md:col-start-2 md:-ml-[13rem] md:top-[-40px]",
    "md:mt-[-3vw] md:rotate-[-4deg] md:col-start-4 md:-mr-[10rem] md:top-[-30px]",

    "md:mt-[0vw] md:rotate-[6deg] md:col-start-1 md:top-[-130px] md:-ml-[20px]",
    "md:mt-[-3vw] md:rotate-[-2deg] md:col-start-3 xl:top-[80px] md:-ml-[-10px]",
    "md:mt-[-5vw] md:rotate-[2deg] md:col-start-5 md:top-[-10px]",

    "md:mt-[0vw] md:rotate-[-3deg] md:col-start-2 md:-ml-[10rem] md:top-[-0px]",
    "md:mt-[-3vw] md:rotate-[4deg] md:col-start-4 md:-mr-[12rem] xl:top-[100px] ",

    "md:mt-[2vw] md:rotate-[10deg] md:col-start-1 md:top-[-100px] xl:top-[-80px] xl:-ml-[100px]",
    "md:mt-[6vw] md:rotate-[-8deg] md:col-start-3  md:top-[30px]  md:-ml-[0px] xl:-ml-[0px] lg:pb-[100px]",
    "md:mt-[0vw] md:rotate-[4deg] md:col-start-5 md:top-[-80px] xl:top-[-60px] xl:-ml-[0px]",

    "md:mt-[-3vw] md:rotate-[3deg] md:col-start-2 md:-ml-[13rem] md:top-[-0px]",
    "md:mt-[-3vw] md:rotate-[-4deg] md:col-start-4 md:-mr-[10rem] md:top-[-30px]",
  ];

  const sizes = [25, 29, 26, 28, 28, 25, 23, 24, 27, 25, 26, 26, 25, 29, 30];

  return (
    <div className="mx-auto py-16 px-5 sm:px-6 lg:px-0 sm:mt-[1rem] md:w-[90vw] lg:w-[80vw] xl:w-[75vw] ">
      <div className="grid grid-cols-1 gap-y-0 md:gap-x-1 md:grid-cols-5">
        {projects.map((project, i) => (
          <div
            className={`relative ${
              classes[i % classes.length]
            } mb-1 md:mb-20 justify-self-center`}
            key={project.uid}
          >
            {!mouseAnimation ? (
              <ProjectThumbnailDesktop
                project={project}
                size={sizes[i % sizes.length]}
              />
            ) : (
              <ProjectThumbnailMobile project={project} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
