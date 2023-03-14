import Image from "next/image";

const DetailMedia = ({ slice }) => {
  // console.log(slice.primary.autoplay);
  // https://images.prismic.io/realgoodweb/75952b89-745d-4209-85c4-7e66facb4fcb_SKOHTitle.webp?auto=compress,format
  return (
    <>
      {slice.variation === "header" ? (
        <>
          {slice.primary.media.link_type === "Web" ? (
            <>
              <div className="col-start-3 w-[100vw] aspect-video 2xl:overflow-hidden 2xl:aspect-[19/9]">
                <div className="relative md:p-0 w-[100vw] md:w-[100vw] aspect-video 2xl:top-[-10%]">
                  <iframe
                    className="w-[100%] h-[100%]"
                    src={`${slice.primary.media.url.slice(6)}?quality=1080p${
                      slice.primary.autoplay
                        ? "&autopause=0&loop=1&background=1&autoplay=1&muted=1&controls=0"
                        : ""
                    }`}
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            </>
          ) : (
            slice.primary.media.url && (
              <>
                <div className="col-start-3 w-[100vw] aspect-video  2xl:overflow-hidden 2xl:aspect-[19/9]">
                  <div className="relative md:p-0 w-[100vw] md:w-[100vw] aspect-video 2xl:top-[-10%]">
                    <Image
                      src={slice.primary.media.url}
                      alt={slice.primary.media.alt}
                      priority={true}
                      loading="eager"
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  </div>
                </div>
              </>
            )
          )}
        </>
      ) : (
        <>
          {slice.primary.media.link_type === "Web" ? (
            <>
              <div className="col-start-3 md:p-0 w-[94vw] md:w-[96vw] aspect-video">
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media.url.slice(6)}?quality=1080p${
                    slice.primary.autoplay
                      ? "&autopause=0&loop=1&background=1&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
            </>
          ) : (
            slice.primary.media.url && (
              <>
                <div className="relative col-start-3 md:p-0 w-[94vw] md:w-[96vw] aspect-video">
                  <Image
                    src={slice.primary.media.url}
                    alt={slice.primary.media.alt}
                    priority={true}
                    loading="eager"
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
              </>
            )
          )}
        </>
      )}
    </>
  );
};

export default DetailMedia;
