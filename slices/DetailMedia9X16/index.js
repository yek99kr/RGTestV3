import Image from "next/image";
const DetailMedia9X16 = ({ slice }) => {
  return (
    <>
      {slice.variation !== "2Rows" ? (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[31vw] relative rounded md:place-self-start md:left-[2vw] aspect-[9/16]">
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media1.url.slice(6)}?quality=1080p${
                  slice.primary.media1Autoplay
                    ? "&autopause=0&loop=1&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
          ) : (
            <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[31vw] relative rounded md:place-self-start md:left-[2vw] aspect-[9/16]">
              <Image
                src={slice.primary.media1.url}
                //   alt={thumbnails[0]}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          )}

          {slice.primary.media2.link_type === "Web" ? (
            <div className="col-start-3 w-[94vw] md:w-[31vw] rounded aspect-[9/16]">
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media2.url.slice(6)}?quality=1080p${
                  slice.primary.media2Autoplay
                    ? "&autopause=0&loop=1&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="col-start-3 w-[94vw] md:w-[31vw] rounded aspect-[9/16]">
              <Image
                src={slice.primary.media2.url}
                //   alt={thumbnails[0]}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          )}

          {slice.primary.media3.link_type === "Web" ? (
            <div className="col-start-3 md:col-start-5 w-[94vw] md:w-[31vw] relative rounded md:place-self-end md:right-[2vw] aspect-[9/16]">
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media3.url.slice(6)}?quality=1080p${
                  slice.primary.media3Autoplay
                    ? "&autopause=0&loop=1&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="col-start-3 md:col-start-5 w-[94vw] md:w-[31vw] relative rounded md:place-self-end md:right-[2vw] aspect-[9/16]">
              <Image
                src={slice.primary.media3.url}
                //   alt={thumbnails[0]}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          )}
        </>
      ) : (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <div className="md:mt-10 col-start-3 md:col-start-2 w-[70vw] md:w-[26vw] relative rounded md:place-self-end md:left-[3vw] aspect-[9/16] md:mb-5 rotate-[-2deg] ">
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media1.url.slice(6)}?quality=1080p${
                  slice.primary.media1Autoplay
                    ? "&autopause=0&loop=1&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="md:mt-10  col-start-3 md:col-start-2 w-[94vw] md:w-[26vw] relative rounded md:place-self-end md:left-[3vw] aspect-[9/16] ">
              <Image
                src={slice.primary.media1.url}
                //   alt={thumbnails[0]}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          )}
          {slice.primary.media2.link_type === "Web" ? (
            <div className="md:mt-10  col-start-3 md:col-start-4 w-[70vw] md:w-[26vw] rounded aspect-[9/16] rotate-[2deg] md:mb-5  ">
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media2.url.slice(6)}?quality=1080p${
                  slice.primary.media2Autoplay
                    ? "&autopause=0&loop=1&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="md:mt-10  col-start-3 md:col-start-4  w-[94vw] md:w-[26vw] rounded aspect-[9/16] rotate-[-2deg] md:mb-5 ">
              <Image
                src={slice.primary.media2.url}
                //   alt={thumbnails[0]}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DetailMedia9X16;

// <div className="col-start-3 md:col-start-2 w-[94vw] md:w-[31vw] relative rounded md:place-self-end md:left-[3vw] aspect-[9/16] ">
// <div className="w-[94vw] md:w-[31vw] rounded aspect-[9/16] rotate-[-2deg]">
//   <iframe
//     className="w-[100%] h-[100%]"
//     src="//player.vimeo.com/video/769651566?h=d9b4a656a2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
//     allowFullScreen
//   ></iframe>
// </div>
// </div>

// <div className="col-start-3 md:col-start-4 w-[94vw] md:w-[31vw] relative rounded md:place-self-start md:right-[3vw] aspect-[9/16] md:pt-[2rem]">
// <div className="w-[94vw] md:w-[31vw] rounded aspect-[9/16] rotate-[3deg]">
//   <iframe
//     className="w-[100%] h-[100%]"
//     src="//player.vimeo.com/video/769577000?h=5ae6c81625&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
//     allowFullScreen
//   ></iframe>
// </div>
// </div>
