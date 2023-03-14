import { motion } from "framer-motion";

const DragBackground = () => {
  return (
    <>
      <img
        src="/inside.webp"
        className=" top-0 left-0 w-[100vw] h-[100vh] z-[0] fixed noselect pointer-events-none"
      ></img>

      <motion.div
        drag
        dragMomentum={false}
        className="top-0 left-0  w-[100vw] h-[100vh] fixed"
      >
        <div className="font-mono absolute inline top-0 left-0 w-[100vw] h-[100vh] text-sm 2xl:text-md p-4 overflow-hidden bg-blue z-[0]">
          <div className="bg-white absolute top-0 left-0  w-[100vw] h-[100vh] z-[-9]"></div>
          <p style={{ color: "gray" }}> &lt;!DOCTYPE html&gt;</p>
          <p style={{ color: "#c10058" }}>&lt;html&gt;</p>
          <p style={{ marginLeft: "1%", color: "#c10058" }}> &lt;head&gt;</p>
          <p style={{ marginLeft: "2%" }}>
            <span style={{ color: "#c10058" }}>&lt;meta</span> charset=
            <span style={{ color: "red" }}>&quot;utf-8&quot;</span>{" "}
            <span style={{ color: "#c10058" }}>/&gt;</span>
          </p>
          <p style={{ marginLeft: "2%" }}>
            <span style={{ color: "#c10058" }}>&lt;title&gt;</span>Real Good
            Studio<span style={{ color: "#c10058" }}>&lt;/title&gt;</span>
          </p>
          <p style={{ marginLeft: "2%" }}>
            <span style={{ color: "#c10058" }}>&lt;link</span> rel=
            <span style={{ color: "red" }}>&quot;icon&quot;</span> type=
            <span style={{ color: "red" }}>&quot;image/png&quot;</span> href=
            <span style={{ color: "red" }}>
              &quot;img/favicon-32x32.png&quot;
            </span>{" "}
            sizes=<span style={{ color: "red" }}>&quot;32x32&quot;</span>{" "}
            <span style={{ color: "#c10058" }}>/&gt;</span>
          </p>
          <p style={{ marginLeft: "2%" }}>
            &lt;link rel=
            <span style={{ color: "red" }}>&quot;icon&quot;</span> type=
            <span style={{ color: "red" }}>&quot;image/png&quot;</span>
            href=
            <span style={{ color: "red" }}>
              &quot;img/favicon-16x16.png&quot;
            </span>{" "}
            sizes=<span style={{ color: "red" }}>&quot;16x16&quot;</span>{" "}
            <span style={{ color: "#c10058" }}>/&gt;</span>
          </p>
          <p style={{ marginLeft: "2%" }}>
            &lt;meta name=
            <span style={{ color: "red" }}>&quot;viewport&quot;</span> content=
            <span style={{ color: "red" }}>
              &quot;width=device-width, initial-scale=1&quot;
            </span>{" "}
            <span style={{ color: "#c10058" }}>/&gt;</span>
          </p>
          <p style={{ marginLeft: "2%" }}>
            &lt;link rel=
            <span style={{ color: "red" }}>&quot;stylesheet&quot;</span> href=
            <span style={{ color: "red" }}>&quot;style.css&quot;</span>{" "}
            <span style={{ color: "#c10058" }}>/&gt;</span>
          </p>
          <p style={{ marginLeft: "1%", color: "#c10058" }}>&lt;/head&gt;</p>
          <p style={{ marginLeft: "1%", color: "#c10058" }}>&lt;body&gt;</p>
          <p style={{ marginLeft: "2%" }}>
            <span style={{ color: "#c10058" }}>&lt;div</span> className=
            <span style={{ color: "red" }}>&quot;About&quot;</span>&gt;
          </p>
          <p style={{ marginLeft: "3%" }}>
            <span style={{ color: "#c10058" }}>&lt;p</span> className=
            <span style={{ color: "red" }}>&quot;font-[400]&quot;</span>&gt;
          </p>
          {/* Paragraph Start */}
          <p style={{ marginLeft: "4%" }}> We&amp;apos;re </p>
          <p style={{ marginLeft: "4%" }}>
            <span style={{ color: "#c10058" }}>&lt;img</span> src=
            <span style={{ color: "red" }}>&quot;/logo.png&quot;</span>{" "}
            className=
            <span style={{ color: "red" }}>&quot;logo&quot;</span>{" "}
            <span style={{ color: "#c10058" }}>/&gt;</span>
          </p>
          <p style={{ marginLeft: "4%" }}>
            . We&amp;apos;re a{" "}
            <span style={{ color: "#c10058" }}>&lt;AboutDropDown</span>{" "}
            madWords=
            <span style={{ color: "red" }}>&#123;madWords1&#125;</span>{" "}
            <span style={{ color: "#c10058" }}>/&gt;</span> creative studio
            specializing in &#123;&quot; &quot;&#125;
          </p>
          <p style={{ marginLeft: "4%" }}>
            <span style={{ color: "#c10058" }}>&lt;AboutDropDown</span>{" "}
            madWords=
            <span style={{ color: "red" }}>&#123;madWords2&#125;</span>{" "}
            <span style={{ color: "#c10058" }}>/&gt;</span>.
          </p>
          <p style={{ marginLeft: "3%", color: "#c10058" }}>&lt;/p&gt;</p>
          <p style={{ marginLeft: "3%" }}>
            <span style={{ color: "#c10058" }}>&lt;p</span> className=
            <span style={{ color: "red" }}>&quot;font-[400]&quot;</span>&gt;
          </p>
          <p style={{ marginLeft: "4%" }}>
            We work with{" "}
            <span style={{ color: "#c10058" }}>&lt;AboutDropDown</span>{" "}
            madWords=
            <span style={{ color: "red" }}>&#123;madWords3&#125;</span>{" "}
            <span style={{ color: "#c10058" }}>/&gt;</span> to make &#123;&quot;
            &quot;&#125;
          </p>
          <p style={{ marginLeft: "4%" }}>
            <span style={{ color: "#c10058" }}>&lt;AboutDropDown</span>{" "}
            madWords=
            <span style={{ color: "red" }}>&#123;madWords4&#125;</span>{" "}
            <span style={{ color: "#c10058" }}>/&gt;</span>. &#123;&quot;
            &quot;&#125;
          </p>
          <p style={{ marginLeft: "3%", color: "#c10058" }}>&lt;/p&gt;</p>
          <p style={{ marginLeft: "3%" }}>
            <span style={{ color: "#c10058" }}>&lt;p</span> className=
            <span style={{ color: "red" }}>&quot;font-[400]&quot;</span>&gt;
          </p>
          <p style={{ marginLeft: "4%" }}>
            We make work that{" "}
            <span style={{ color: "#c10058" }}>&lt;AboutDropDown</span>{" "}
            madWords=
            <span style={{ color: "red" }}>&#123;madWords7&#125;</span>{" "}
            <span style={{ color: "#c10058" }}>/&gt;</span> the &#123;&quot;
            &quot;&#125;
          </p>
          <p style={{ marginLeft: "4%" }}>
            <span style={{ color: "#c10058" }}>&lt;AboutDropDown</span>{" "}
            madWords=
            <span style={{ color: "red" }}>&#123;madWords8&#125;</span>{" "}
            <span style={{ color: "#c10058" }}>/&gt;</span> between &#123;&quot;
            &quot;&#125;
          </p>
          <p style={{ marginLeft: "4%" }}>
            <span style={{ color: "#c10058" }}>&lt;AboutDropDown</span>{" "}
            madWords=
            <span style={{ color: "red" }}>&#123;madWords9&#125;</span>{" "}
            <span style={{ color: "#c10058" }}>/&gt;</span> and &#123;&quot;
            &quot;&#125;
          </p>
          <p style={{ marginLeft: "4%" }}>
            <span style={{ color: "#c10058" }}>&lt;AboutDropDown</span>{" "}
            madWords=
            <span style={{ color: "red" }}>&#123;madWords10&#125;</span>{" "}
            <span style={{ color: "#c10058" }}>/&gt;</span>.
          </p>
          <p style={{ marginLeft: "3%", color: "#c10058" }}>&lt;/p&gt;</p>
          <p style={{ marginLeft: "3%" }}>
            <span style={{ color: "#c10058" }}>&lt;p</span> className=
            <span style={{ color: "red" }}>&quot;font-[400] pt-8&quot;</span>
            &gt;
          </p>
          <p style={{ marginLeft: "4%" }}>
            {" "}
            We have an&#123;&quot; &quot;&#125;
          </p>
          <p style={{ marginLeft: "4%" }}>
            <span style={{ color: "red" }}>&lt;a</span> href=
            <span style={{ color: "MediumBlue" }}>
              &quot;https://www.instagram.com/real.good.studio/&quot;
            </span>
            &gt;
          </p>
          <p style={{ marginLeft: "5%" }}>
            <span style={{ color: "#c10058" }}>&lt;span</span> className=
            <span style={{ color: "red" }}>
              &quot;hover:underline cursor-pointer&quot;
            </span>
            &gt;instagram
            <span style={{ color: "#c10058" }}>&lt;/span&gt;</span>
          </p>
          <p style={{ marginLeft: "4%" }}>
            <span style={{ color: "#c10058" }}>&lt;/a&gt;</span>
          </p>
          <p style={{ marginLeft: "4%" }}>
            with some work and a&#123;&quot; &quot;&#125;
          </p>
          <p style={{ marginLeft: "4%" }}>
            <span style={{ color: "red" }}>&lt;a</span> href=
            <span style={{ color: "MediumBlue" }}>
              &quot;https://realgooddeck.netlify.app/#0/&quot;
            </span>
            &gt;
          </p>
          <p style={{ marginLeft: "5%" }}>
            <span style={{ color: "#c10058" }}>&lt;span</span> className=
            <span style={{ color: "red" }}>
              &quot;hover:underline cursor-pointer&quot;
            </span>
            &gt;deck
            <span style={{ color: "#c10058" }}>&lt;/span&gt;</span>
          </p>
          <p style={{ marginLeft: "4%" }}>
            <span style={{ color: "#c10058" }}>&lt;/a&gt;</span>
          </p>
          <p style={{ marginLeft: "4%" }}>
            <span>with some more work.</span>
          </p>
          <p style={{ marginLeft: "3%", color: "#c10058" }}> &lt;/p&gt;</p>
          <p style={{ marginLeft: "3%" }}>
            {" "}
            <span style={{ color: "#c10058" }}>&lt;p</span> className=
            <span style={{ color: "red" }}>&quot;font-[400] pt-8&quot;</span>
            &gt;
          </p>
          <p style={{ marginLeft: "4%" }}>
            Currently taking on select projects&#123;&quot; &quot;&#125;
          </p>
          <p style={{ marginLeft: "4%" }}>
            <span style={{ color: "#c10058" }}>&lt;span</span> className=
            <span style={{ color: "red" }}>
              &quot;hover:underline cursor-pointer&quot;
            </span>
            &gt;hi@realgood.tv
            <span style={{ color: "#c10058" }}>&lt;/span&gt;</span>
          </p>
          <p style={{ marginLeft: "3%", color: "#c10058" }}> &lt;/p&gt;</p>
          <p style={{ marginLeft: "3%" }}>
            <span style={{ color: "#c10058" }}>&lt;div</span> className=
            <span style={{ color: "red" }}>
              &quot;absolute z-[-1] top-1/2 left-1/2 transform -translate-x-1/2
              -translate-y-[50%]
            </span>{" "}
          </p>{" "}
          <p style={{ marginLeft: "3%" }}>
            <span style={{ color: "red" }}>
              rounded-sm w-[105%] h-[110%] opacity-[0.8] bg-white&quot;
            </span>
            &gt;<span style={{ color: "#c10058" }}>&lt;/div&gt;</span>
          </p>
          <p style={{ marginLeft: "3%", color: "#c10058" }}>&lt;/div&gt;</p>
          <p style={{ marginLeft: "3%" }}>
            <span style={{ color: "#c10058" }}>&lt;script</span> src=
            <span style={{ color: "red" }}>&quot;secret.js&quot;</span> async
            defer&gt;
            <span style={{ color: "#c10058" }}>&lt;/script&gt;</span>
          </p>
          <p style={{ marginLeft: "2%", color: "#c10058" }}>&lt;/body&gt;</p>
          <p style={{ marginLeft: "2%", color: "#c10058" }}>&lt;/html&gt;</p>
        </div>
      </motion.div>

      {/* <div className="absolute top-1/2 left-1/2 transform rounded -translate-x-1/2 -translate-y-[57%] w-[91vw] sm:w-[88vw] md:w-[76vw] lg:w-[70vw] xl:w-[63vw] 2xl:w-[60vw] h-[45%] xl:h-[43%] 2xl:h-[55%] opacity-[0.4] bg-white z-[0] pointer-events-none"></div> */}

      <motion.div
        drag
        dragMomentum={false}
        className="fixed top-0 left-0 bg-[#e9ebf0] w-[100vw] h-[100vh]"
      ></motion.div>
    </>
  );
};

export default DragBackground;
