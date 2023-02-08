const stevenDiller = () => {
  return (
    <div className="md:w-[90vw] w-[100vw] h-[100vh]">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[50%] font-bold ">
        <div className=" md:p-0 w-[94vw] md:w-[80vw] aspect-video">
          <iframe
            className="w-[100%] h-[100%]"
            src="https://player.vimeo.com/video/796843845?h=2bb29bf39e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?quality=1080p&loop=1"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default stevenDiller;

// https://player.vimeo.com/video/796843845?h=2bb29bf39e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
