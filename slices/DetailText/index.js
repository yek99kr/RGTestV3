import { RichText } from "prismic-reactjs";

const DetailText = ({ slice }) => {
  return (
    <>
      <div className="col-start-3 relative leading-[4vw] md:leading-7 text-[3.3vw] md:text-[22px] text-center w-[94vw] md:w-[650px] lg:w-[800px] xl:w-[900px] mt-[2vw] mb-[2vw] md:mt-[40px] md:mb-[40px] lg:mt-[50px] lg:mb-[50px]">
        <div className="text-left">
          {slice.primary.text ? (
            <>
              {slice.primary.text.map((t, i) => (
                <div key={i} className={`${i === 0 ? "mt-0" : "mt-5"}`}>
                  {t.text}
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default DetailText;

{
  /* <RichText render={slice.primary.text} /> */
}
