import { useState } from "react";

const DetailMainText = ({ slice }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <>
      {slice.variation !== "noReadMore" ? (
        <div className="col-start-3 relative leading-[4vw] md:leading-7 text-[3.3vw] md:text-[22px] text-center w-[94vw] md:w-[650px] lg:w-[800px] xl:w-[900px] mt-[2vw] mb-[2vw] md:mt-[40px] md:mb-[40px] lg:mt-[50px] lg:mb-[50px]">
          <div className="text-left">
            {slice.primary.summary[0] && (
              <>
                <div className={`mt-0`}>{slice.primary.summary[0].text}</div>
                {slice.primary.summary.slice(1).map((t, i) => (
                  <div key={i} className={`mt-5`}>
                    {t.text}
                  </div>
                ))}
              </>
            )}

            <div className={`${isReadMore ? "hidden" : "block"}`}>
              {slice.primary.moreInfo.map((t, i) => (
                <div key={i} className={`mt-5`}>
                  {t.text}
                </div>
              ))}
            </div>
            {slice.primary.moreInfo[0] && (
              <div
                onClick={() => {
                  setIsReadMore(!isReadMore);
                }}
                className="thumbcursor block mt-5 underline"
              >
                {isReadMore ? "Read more" : "Show less"}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="col-start-3 relative leading-[4vw] md:leading-7 text-[3.3vw] md:text-[22px] text-center w-[94vw] md:w-[650px] lg:w-[800px] xl:w-[900px] mt-[2vw] mb-[2vw] md:mt-[40px] md:mb-[40px] lg:mt-[50px] lg:mb-[50px]">
          <div className="text-left">
            {slice.primary.moreInfo.map((t, i) => (
              <div key={i} className={`${i === 0 ? "mt-0" : "mt-5"}`}>
                {t.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailMainText;
