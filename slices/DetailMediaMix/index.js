import Image from "next/image";

const DetailMediaMix = ({ slice }) => {
  return (
    <>
      {slice.variation === "3411" ? (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[40.2vw] relative rounded md:place-self-start md:left-[2vw] aspect-[3/4] ">
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media1.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media1Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[40.2vw] relative rounded md:place-self-start md:left-[2vw] aspect-[3/4] ">
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
            <div className="col-start-3 md:col-start-5 w-[94vw] md:w-[53.5vw] relative md:place-self-end md:right-[2vw] aspect-square ">
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media2.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media2Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div className="col-start-3 md:col-start-5 w-[94vw] md:w-[53.5vw] relative md:place-self-end md:right-[2vw] aspect-square ">
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
      ) : slice.variation === "4545" ? (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[46.8vw] relative md:place-self-start md:left-[2vw] aspect-[4/5] ">
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media1.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media1Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[46.8vw] relative md:place-self-start md:left-[2vw] aspect-[4/5] ">
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
            <div className="col-start-3 md:col-start-5 w-[94vw] md:w-[46.8vw] relative md:place-self-end md:right-[2vw] aspect-[4/5]">
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media2.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media2Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div className="col-start-3 md:col-start-5 w-[94vw] md:w-[46.8vw] relative md:place-self-end md:right-[2vw] aspect-[4/5]">
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
      ) : slice.variation === "169916" ? (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <div
              className={`col-start-3 md:col-start-1 w-[94vw] md:w-[71.8vw] relative rounded md:place-self-start md:left-[2vw] aspect-video`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media1.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media1Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-1 w-[94vw] md:w-[71.8vw] relative rounded md:place-self-start md:left-[2vw] aspect-video`}
            >
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
            <div
              className={`col-start-3 md:col-start-5 w-[94vw] md:w-[22.7vw] relative rounded md:place-self-end md:right-[2vw] aspect-[9/16]`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media2.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media2Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-5 w-[94vw] md:w-[22.7vw] relative rounded md:place-self-end md:right-[2vw] aspect-[9/16]`}
            >
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
      ) : slice.variation === "91616X9" ? (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <div
              className={`col-start-3 md:col-start-1 w-[94vw] md:w-[22.7vw] relative rounded md:place-self-start md:left-[2vw] aspect-[9/16]`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media1.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media1Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-1 w-[94vw] md:w-[22.7vw] relative rounded md:place-self-start md:left-[2vw] aspect-[9/16]`}
            >
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
            <div
              className={`col-start-3 md:col-start-5 w-[94vw]  md:w-[71.8vw] relative rounded md:place-self-end md:right-[2vw] aspect-video`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media2.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media2Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-5 w-[94vw]  md:w-[71.8vw] relative rounded md:place-self-end md:right-[2vw] aspect-video`}
            >
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
      ) : slice.variation === "11Filter" ? (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <div
              className={`col-start-3 md:col-start-1 w-[94vw] md:w-[53.5vw] relative rounded md:place-self-start md:left-[2vw] aspect-square`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media1.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media1Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-1 w-[94vw] md:w-[53.5vw] relative rounded md:place-self-start md:left-[2vw] aspect-square`}
            >
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
            <div
              className={`col-start-3 md:col-start-5 w-[70vw] md:w-[30vw] relative rounded md:place-self-end md:right-[8vw] aspect-[9/16]`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media2.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media2Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-5 w-[70vw] md:w-[30vw] relative rounded md:place-self-end md:right-[8vw] aspect-[9/16]`}
            >
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
      ) : slice.variation === "11169" ? (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <div
              className={`col-start-3 md:col-start-1 w-[94vw] md:w-[34vw]  relative rounded md:place-self-start md:left-[2vw] aspect-square`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media1.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media1Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-1 w-[94vw]  md:w-[34vw]  relative rounded md:place-self-start md:left-[2vw]  aspect-square`}
            >
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
            <div
              className={`col-start-3 md:col-start-5 w-[94vw]  md:w-[60.4vw] relative rounded md:place-self-end md:right-[2vw] aspect-[16/9]`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media2.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media2Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-5 w-[94vw] md:w-[60.4vw] relative rounded md:place-self-end md:right-[2vw]  aspect-[16/9]`}
            >
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
      ) : slice.variation === "16911" ? (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <div
              className={`col-start-3 md:col-start-1 w-[94vw] md:w-[60.4vw] relative rounded md:place-self-start md:left-[2vw] aspect-[16/9]`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media1.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media1Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-1 w-[94vw]  md:w-[60.4vw]  relative rounded md:place-self-start md:left-[2vw]  aspect-[16/9]`}
            >
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
            <div
              className={`col-start-3 md:col-start-5 w-[94vw]   md:w-[34vw] relative rounded md:place-self-end md:right-[2vw] aspect-square`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media2.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media2Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-5 w-[94vw]  md:w-[34vw] relative rounded md:place-self-end md:right-[2vw]   aspect-square`}
            >
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
      ) : (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <div
              className={`col-start-3 md:col-start-1 w-[94vw] md:w-[60.15vw] relative rounded md:place-self-start md:left-[2vw] aspect-square`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media1.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media1Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-1 w-[94vw]  md:w-[60.15vw] relative rounded md:place-self-start md:left-[2vw] aspect-square`}
            >
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
            <div
              className={`col-start-3 md:col-start-5 w-[94vw] md:w-[33.8vw] relative rounded md:place-self-end md:right-[2vw] aspect-[9/16]`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media2.url.slice(
                  6
                )}?quality=1080p&loop=1${
                  slice.primary.media2Autoplay
                    ? "&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                autoPlay="1"
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-5 w-[94vw] md:w-[33.8vw] relative rounded md:place-self-end md:right-[2vw] aspect-[9/16]`}
            >
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

export default DetailMediaMix;
