import Link from "next/link";
import LoadImage from "../LoadImage";

const ProjectThumbnailMobile = ({ project }) => {
  return (
    <Link href={`/work/${project.uid}`} passHref scroll={false}>
      <a className="group thumbcursor">
        {
          <div className="w-full overflow-hidden">
            <div className="relative w-[80vw] h-[80vw] mt-10 md:mt-0 md:w-[24vw] md:h-[24vw] xl:w-[23vw] xl:h-[23vw]">
              <LoadImage
                src={
                  project.data.mobileThumbnail.url
                    ? project.data.mobileThumbnail.url
                    : "/shop/test-1/test0.webp"
                }
                alt={project.data.mobileThumbnail.alt}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        }

        <div className="block mt-4">
          <p className=" text-center  text-[4.2vw] md:text-xl lg:text-2xl">
            {project.data.client}
          </p>
          <p className=" text-center  text-[3.5vw] md:text-base lg:text-lg m-[-0.1rem]">
            {project.data.title}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ProjectThumbnailMobile;
