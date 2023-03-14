import Image from "next/image";

const DetailMedia1X1 = ({ slice }) => {
  // {`${slice.primary.media.url.slice(6)}?quality=1080p&autopause=0&loop=1`}
  // slice.primary.onMobile
  return (
    <>
      {slice.variation === "2Rows" ? (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <>
              <div
                className={`col-start-3 md:col-start-1 w-[94vw] md:w-[47.1vw] relative rounded md:place-self-start md:left-[2vw] aspect-square ${
                  slice.primary.onMobile === false && "hidden sm:block"
                }`}
              >
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media1.url.slice(6)}?quality=1080p${
                    slice.primary.media1Autoplay
                      ? "&autopause=0&loop=1&background=1&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                  autoPlay="1"
                ></iframe>
              </div>
            </>
          ) : (
            <>
              <div
                className={`col-start-3 md:col-start-1 w-[94vw] md:w-[47.1vw] relative rounded md:place-self-start md:left-[2vw] aspect-square ${
                  slice.primary.onMobile === false && "hidden sm:block"
                }`}
              >
                <Image
                  src={slice.primary.media1.url}
                  alt={slice.primary.media1.alt}
                  priority={true}
                  loading="eager"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </>
          )}

          {slice.primary.media2.link_type === "Web" ? (
            <>
              <div
                className={`col-start-3 md:col-start-5 w-[94vw] md:w-[47.1vw] relative rounded md:place-self-end md:right-[2vw] aspect-square ${
                  slice.primary.onMobile === false && "hidden sm:block"
                }`}
              >
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media2.url.slice(6)}?quality=1080p${
                    slice.primary.media2Autoplay
                      ? "&autopause=0&loop=1&background=1&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                  autoPlay="1"
                ></iframe>
              </div>
            </>
          ) : (
            <>
              <div
                className={`col-start-3 md:col-start-5 w-[94vw] md:w-[47.1vw] relative rounded md:place-self-end md:right-[2vw] aspect-square ${
                  slice.primary.onMobile === false && "hidden sm:block"
                }`}
              >
                <Image
                  src={slice.primary.media2.url}
                  alt={slice.primary.media2.alt}
                  priority={true}
                  loading="eager"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </>
          )}
        </>
      ) : slice.variation === "1Big2Smalls" ? (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <>
              <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[63.5vw] relative rounded md:place-self-start md:left-[2vw] aspect-square">
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media1.url.slice(6)}?quality=1080p${
                    slice.primary.media1Autoplay
                      ? "&autopause=0&loop=1&background=1&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                  autoPlay="1"
                ></iframe>
              </div>
            </>
          ) : (
            <>
              <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[63.5vw] relative rounded md:place-self-start md:left-[2vw] aspect-square">
                <Image
                  src={slice.primary.media1.url}
                  alt={slice.primary.media1.alt}
                  priority={true}
                  loading="eager"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </>
          )}
          <div className="relative col-start-3 md:col-start-5 md:place-self-end md:right-[2vw]">
            {slice.primary.media2.link_type === "Web" ? (
              <>
                <div className="w-[94vw] md:w-[31vw]  aspect-square mb-[5.6vw] md:mb-[1.5vw]  ">
                  <iframe
                    className="w-[100%] h-[100%]"
                    src={`${slice.primary.media2.url.slice(6)}?quality=1080p${
                      slice.primary.media2Autoplay
                        ? "&autopause=0&loop=1&background=1&autoplay=1&muted=1&controls=0"
                        : ""
                    }`}
                    allowFullScreen
                    autoPlay="1"
                  ></iframe>
                </div>
              </>
            ) : (
              <>
                <div className="w-[94vw] md:w-[31vw]  aspect-square mb-[5.6vw] md:mb-[1.5vw]  ">
                  <Image
                    src={slice.primary.media2.url}
                    alt={slice.primary.media2.alt}
                    priority={true}
                    loading="eager"
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
              </>
            )}
            {slice.primary.media3.link_type === "Web" ? (
              <>
                <div className="w-[94vw] md:w-[31vw]  aspect-square mb-[5.6vw]   ">
                  <iframe
                    className="w-[100%] h-[100%]"
                    src={`${slice.primary.media3.url.slice(6)}?quality=1080p${
                      slice.primary.media3Autoplay
                        ? "&autopause=0&loop=1&background=1&autoplay=1&muted=1&controls=0"
                        : ""
                    }`}
                    allowFullScreen
                    autoPlay="1"
                  ></iframe>
                </div>
              </>
            ) : (
              <>
                <div className="w-[94vw] md:w-[31vw]  aspect-square mb-[5.6vw]   ">
                  <Image
                    src={slice.primary.media3.url}
                    alt={slice.primary.media3.alt}
                    priority={true}
                    loading="eager"
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <>
              <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[31vw] relative rounded md:place-self-start md:left-[2vw] aspect-square">
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media1.url.slice(6)}?quality=1080p${
                    slice.primary.media1Autoplay
                      ? "&autopause=0&loop=1&background=1&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                  autoPlay="1"
                ></iframe>
              </div>
            </>
          ) : (
            <>
              <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[31vw] relative rounded md:place-self-start md:left-[2vw] aspect-square">
                <Image
                  src={slice.primary.media1.url}
                  alt={slice.primary.media1.alt}
                  priority={true}
                  loading="eager"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </>
          )}

          {slice.primary.media2.link_type === "Web" ? (
            <>
              <div className="col-start-3 w-[94vw] md:w-[31vw] rounded aspect-square">
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media2.url.slice(6)}?quality=1080p${
                    slice.primary.media2Autoplay
                      ? "&autopause=0&loop=1&background=1&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                  autoPlay="1"
                ></iframe>
              </div>
            </>
          ) : (
            <>
              <div className="relative col-start-3 w-[94vw] md:w-[31vw] rounded aspect-square">
                <Image
                  src={slice.primary.media2.url}
                  alt={slice.primary.media2.alt}
                  priority={true}
                  loading="eager"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </>
          )}

          {slice.primary.media3.link_type === "Web" ? (
            <>
              <div className="col-start-3 md:col-start-5 w-[94vw] md:w-[31vw] relative rounded md:place-self-end md:right-[2vw] aspect-square">
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media3.url.slice(6)}?quality=1080p${
                    slice.primary.media3Autoplay
                      ? "&autopause=0&loop=1&background=1&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                  autoPlay="1"
                ></iframe>
              </div>
            </>
          ) : (
            <>
              <div className="relative col-start-3 md:col-start-5 w-[94vw] md:w-[31vw]  rounded md:place-self-end md:right-[2vw] aspect-square">
                <Image
                  src={slice.primary.media3.url}
                  alt={slice.primary.media3.alt}
                  priority={true}
                  loading="eager"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default DetailMedia1X1;

{
  /* <>
{slice.primary.media1.link_type === "Web" ? (
  <>
    <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[63.5vw] relative rounded md:place-self-start md:left-[2vw] aspect-square">
      <iframe
        className="w-[100%] h-[100%]"
        src={`${slice.primary.media1.url.slice(
          6
        )}?quality=1080p${
          slice.primary.media1Autoplay
            ? "&background=1&autoplay=1&muted=1&controls=0"
            : ""
        }`}
        allowFullScreen
        autoPlay="1"
      ></iframe>
    </div>
  </>
) : (
  <>
    <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[63.5vw] relative rounded md:place-self-start md:left-[2vw] aspect-square">
      <Image
        src={slice.primary.media1.url}
        alt={slice.primary.media1.alt}
        priority={true}
        loading="eager"
        layout="fill"
        objectFit="cover"
      ></Image>
    </div>
  </>
)}
<div className="relative col-start-3 md:col-start-5 md:place-self-end md:right-[2vw]">
  {slice.primary.media2.link_type === "Web" ? (
    <>
      <div className="w-[94vw] md:w-[31vw]  aspect-square mb-[5.6vw] md:mb-[1.5vw]  ">
        <iframe
          className="w-[100%] h-[100%]"
          src={`${slice.primary.media2.url.slice(
            6
          )}?quality=1080p&autopause=0&loop=1&${
            slice.primary.media2Autoplay
              ? "&background=1&autoplay=1&muted=1&controls=0"
              : ""
          }`}
          allowFullScreen
          autoPlay="1"
        ></iframe>
      </div>
    </>
  ) : (
    <>
      <div className="w-[94vw] md:w-[31vw]  aspect-square mb-[5.6vw] md:mb-[1.5vw]  ">
        <Image
          src={slice.primary.media2.url}
          alt={slice.primary.media2.alt}
          priority={true}
          loading="eager"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
    </>
  )}

  <div className="relative col-start-3 md:col-start-5 md:place-self-end md:right-[2vw]">
  {slice.primary.media2.link_type === "Web" ? (
    <>
     <div className="w-[94vw] md:w-[31vw] relative  aspect-square">
        <iframe
          className="w-[100%] h-[100%]"
          src={`${slice.primary.media2.url.slice(
            6
          )}?quality=1080p&autopause=0&loop=1&${
            slice.primary.media2Autoplay
              ? "&background=1&autoplay=1&muted=1&controls=0"
              : ""
          }`}
          allowFullScreen
          autoPlay="1"
        ></iframe>
      </div>
    </>
  ) : (
    <>
      <div className="w-[94vw] md:w-[31vw] relative  aspect-square">
        <Image
          src={slice.primary.media2.url}
          alt={slice.primary.media2.alt}
          priority={true}
          loading="eager"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
    </>
  )}

  </> */
}
