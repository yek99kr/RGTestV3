import Link from "next/link";

const ProjectBtn = ({ project, projects }) => {
  const currentIndex = projects.findIndex((x) => x.uid === project.uid);
  const previousProject = projects[currentIndex - 1]
    ? projects[currentIndex - 1].uid
    : null;
  const nextProject = projects[currentIndex + 1]
    ? projects[currentIndex + 1].uid
    : null;
  return (
    <>
      {/* Mobile bottom Buttons */}
      <div className="flex lg:hidden relative w-screen justify-between text-[2.9vw] sm:text-sm md:text-base pt-[9vw]">
        {previousProject ? (
          <Link href={`/work/${previousProject}`} passHref scroll={false}>
            <a>
              <div
                className={
                  "bg-white/60 backdrop-blur-sm w-[45.5vw] md:w-[47vw] rounded text-center p-2.5 thumbcursor text-black duration-150 hover:opacity-50 relative left-[3vw] md:left-[2vw]"
                }
              >
                Previous
              </div>
            </a>
          </Link>
        ) : (
          <div
            className={
              "bg-white/60 backdrop-blur-sm w-[45.5vw] md:w-[47vw] rounded text-center p-2.5 text-black opacity-50  relative left-[3vw] md:left-[2vw] pointer-events-none cursor-not-allowed"
            }
          >
            Previous
          </div>
        )}

        {nextProject ? (
          <Link href={`/work/${nextProject}`} passHref scroll={false}>
            <a>
              <div
                className={
                  "bg-white/60 backdrop-blur-sm w-[45.5vw] md:w-[47vw]  rounded text-center p-2.5 thumbcursor text-black duration-150 hover:opacity-50  relative right-[3vw] md:right-[2vw]"
                }
              >
                Next
              </div>
            </a>
          </Link>
        ) : (
          <div
            className={
              "bg-white/60 backdrop-blur-sm w-[45.5vw]  md:w-[47vw]  rounded text-center p-2.5 text-black opacity-50 pointer-events-none cursor-not-allowed relative right-[3vw] md:right-[2vw]"
            }
          >
            Next
          </div>
        )}
      </div>
      {/* Desktop bottom Buttons */}
      <div className="flex relative w-screen justify-between items-center text-[2.9vw] sm:text-sm md:text-base pt-[3.3vw] sm:pt-[2vw] lg:pt-[6rem] pb-[6vw] md:pb-[3rem] ">
        {previousProject ? (
          <Link href={`/work/${previousProject}`} passHref scroll={false}>
            <a>
              <div
                className={
                  "bg-white/60 backdrop-blur-sm lg:w-[150px] xl:w-[140px] rounded text-center p-3 thumbcursor text-black duration-150 hover:opacity-50 ml-[2vw] hidden lg:block"
                }
              >
                Previous
              </div>
            </a>
          </Link>
        ) : (
          <div className="pointer-events-none cursor-not-allowed ">
            <Link href="" className="pointer-events-none">
              <a>
                <div
                  className={
                    "bg-white/60 backdrop-blur-sm lg:w-[150px] xl:w-[140px] rounded text-center p-3 text-black opacity-50 ml-[2vw] pointer-events-none cursor-not-allowed hidden lg:block"
                  }
                >
                  Previous
                </div>
              </a>
            </Link>
          </div>
        )}

        <Link href="/work" passHref scroll={false}>
          <a>
            <div className="bg-white/60 backdrop-blur-sm w-[94vw] md:w-[96vw] lg:w-[350px] xl:w-[455px] rounded text-center p-2.5 md:p-3 thumbcursor text-black duration-150 hover:opacity-50">
              Back to Work
            </div>
          </a>
        </Link>

        {nextProject ? (
          <Link href={`/work/${nextProject}`} passHref scroll={false}>
            <a>
              <div
                className={
                  "bg-white/60 backdrop-blur-sm lg:w-[150px] xl:w-[140px] rounded text-center p-3 thumbcursor text-black duration-150 hover:opacity-50 mr-[2vw] hidden lg:block"
                }
              >
                Next
              </div>
            </a>
          </Link>
        ) : (
          <div className="pointer-events-none cursor-not-allowed ">
            <Link href="">
              <a>
                <div
                  className={
                    "bg-white/60 backdrop-blur-sm lg:w-[400px] xl:w-[140px] rounded text-center p-3 text-black opacity-50 mr-[2vw] pointer-events-none cursor-not-allowed hidden lg:block"
                  }
                >
                  Next
                </div>
              </a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectBtn;
