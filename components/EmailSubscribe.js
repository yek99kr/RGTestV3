import { useEffect, useState } from "react";
// import axios from "axios";
import MailchimpSubscribe from "react-mailchimp-subscribe";

// const EmailSubscribe = ({ projects }) => {
//   const [email, setEmail] = useState("");
//   const [state, setState] = useState("IDLE");

//   const [popupShow, setPopupShow] = useState(false);

//   const subscribe = async (e) => {
//     e.preventDefault();

//     setState("LOADING");

//     try {
//       const response = await axios.post("/api/newsletter", { email });
//       setState("SUCCESS");
//       setTimeout(() => {
//         setPopupShow(false);
//       }, "2000");
//       localStorage.setItem("popup", "false");
//     } catch (e) {
//       // setErrorMessage(e.response.data.error);
//       setState("ERROR");
//       // setTimeout(() => {
//       //   setPopupShow(false);
//       // }, "2000");
//     }
//   };

//   useEffect(() => {
//     if (localStorage.getItem("popup") === "1") {
//       localStorage.setItem("popup", "2");
//     } else if (localStorage.getItem("popup") === "2") {
//       localStorage.setItem("popup", "3");
//     } else if (localStorage.getItem("popup") === "3") {
//       localStorage.setItem("popup", "1");
//     }

//     console.log(localStorage.getItem("popup"));

//     if (localStorage.getItem("popup") === "1") {
//       setTimeout(() => {
//         setPopupShow(true);
//       }, "2200");
//     }
//   }, []);

//   return (
//     <>
//       <div
//         onClick={() => {
//           setPopupShow(false);
//         }}
//         className={`fixed z-[9999] w-[100vw] h-[100vh] bg-white bg-opacity-0 block ${
//           !popupShow && "hidden"
//         }`}
//       ></div>
//       <div
//         className={`fixed z-[10000] w-[100vw] h-[100vh] text-[2.6vw] sm:text-sm md:text-base lg:text-xl transition duration-[1s] translate-x-[100%]  ${
//           popupShow && "translate-x-[0%] pointer-events-none"
//         }`}
//       >
//         <div className="absolute pointer-events-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[108vw] sm:w-[650px] md:w-[720px] lg:w-[830px] xl:w-[950px] rotate-2 aspect-video">
//           <img src="newsletter.png"></img>

//           <p className="absolute top-[14%] left-[9.5%] font-bold sm:leading-tight">
//             Join our <br /> Mailing List
//           </p>

//           <div className="absolute font-bold bottom-[23vw] sm:bottom-[39%] right-[16%] w-[33.5vw] sm:w-[200px] md:w-[228px] lg:w-[260px] xl:w-[300px]">
//             <form
//               className={`pointer-events-auto ${
//                 state === "IDLE" ? "block" : "hidden"
//               }`}
//               onSubmit={subscribe}
//             >
//               <input
//                 type="email"
//                 className="appearance-none bg-none w-full bg-gray-100 font-bold leading-tight focus:outline-none "
//                 required
//                 pattern="^[^ ]+@[^ ]+\.[a-z]{2,6}$"
//                 placeholder="Your Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <hr className="border-[1.15px] border-black" />

//               <button
//                 className={`hover:underline text-center justify-self-center  font-bold mt-[2%]  thumbcursor ${
//                   state === "LOADING" ? "button-gradient-loading" : ""
//                 }`}
//                 type="submit"
//                 disabled={state === "LOADING"}
//                 // onClick={subscribe}
//               >
//                 Subscribe
//               </button>
//             </form>

//             {state === "LOADING" && (
//               <p className="mb-[3vw] sm:mb-[6%] font-bold">Loading...</p>
//             )}

//             {state === "ERROR" && (
//               <p className="font-bold">
//                 Something went wrong
//                 <br />
//                 Please try with this{" "}
//                 <a
//                   href="http://eepurl.com/iexcB9"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="thumbcursor underline hover:text-gray-600"
//                 >
//                   link
//                 </a>
//               </p>
//             )}
//             {state === "SUCCESS" && (
//               <p className="font-bold">
//                 You've been subscribed.
//                 <br />
//                 Thank you for joining!
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmailSubscribe;

const CustomForm = ({ status, message, onValidated, router }) => {
  const [email, setEmail] = useState("");

  const [popupShow, setPopupShow] = useState(false);

  if (status === "success") {
    setTimeout(() => {
      setPopupShow(false);
    }, "2000");
    localStorage.setItem("popup", "false");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  useEffect(() => {
    if (
      router.asPath === "/" ||
      router.asPath === "/work" ||
      router.asPath === "/realgoodfriends"
    ) {
      if (!localStorage.getItem("popup")) {
        localStorage.setItem("popup", "1");
      }
      if (localStorage.getItem("popup") === "1") {
        localStorage.setItem("popup", "2");
      } else if (localStorage.getItem("popup") === "2") {
        localStorage.setItem("popup", "3");
      } else if (localStorage.getItem("popup") === "3") {
        localStorage.setItem("popup", "1");
      }

      if (localStorage.getItem("popup") === "1") {
        setTimeout(() => {
          setPopupShow(true);
        }, "2000");
      }
    } else {
    }
  }, []);

  return (
    <>
      <div
        onClick={() => {
          setPopupShow(false);
        }}
        className={`fixed z-[9999] w-[100vw] h-[100vh] bg-white bg-opacity-0 block ${
          !popupShow && "hidden"
        }`}
      ></div>
      <div
        className={`fixed z-[10000] w-[100vw] h-[100vh] text-[2.6vw] sm:text-sm md:text-base lg:text-xl transition duration-[1s] translate-x-[100%]  ${
          popupShow && "translate-x-[0%] pointer-events-none"
        }`}
      >
        <div className="absolute pointer-events-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[108vw] sm:w-[650px] md:w-[720px] lg:w-[830px] xl:w-[950px] rotate-2 aspect-video">
          <img src="newsletter.png"></img>

          <p className="absolute top-[14%] left-[9.5%] font-bold sm:leading-tight">
            Join our <br /> Mailing List
          </p>

          <div className="absolute font-bold bottom-[23vw] sm:bottom-[39%] right-[16%] w-[33.5vw] sm:w-[200px] md:w-[228px] lg:w-[260px] xl:w-[300px]">
            <form
              className={`pointer-events-auto ${
                status === null ? "block" : "hidden"
              }`}
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                type="email"
                label="Email"
                className="appearance-none bg-none w-full bg-gray-100 font-bold leading-tight focus:outline-none "
                required
                pattern="^[^ ]+@[^ ]+\.[a-z]{2,6}$"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <hr className="border-[1.15px] border-black" />
              {/* 
            <input
              className={`hover:underline text-center justify-self-center  font-bold mt-[2%]  thumbcursor `}
              type="submit"
              label="subscribe"
              disabled={status === "sending"}
              formValues={[email]}
              // onClick={subscribe}
            >
              Subscribe
           /> */}
              <input
                className={`hover:underline text-center justify-self-center  font-bold mt-[2%]  thumbcursor `}
                label="subscribe"
                type="submit"
                // formValues={[email]}
              />
            </form>

            {status === "sending" && (
              <p className="mb-[3vw] sm:mb-[6%] font-bold">Loading...</p>
            )}

            {status === "error" && (
              <p className="font-bold">
                Something went wrong
                <br />
                Please try with this{" "}
                <a
                  href="http://eepurl.com/iexcB9"
                  target="_blank"
                  rel="noreferrer"
                  className="thumbcursor underline hover:text-gray-600"
                >
                  link
                </a>
              </p>
            )}
            {status === "success" && (
              <p className="font-bold">
                You&apos;ve been subscribed.
                <br />
                Thank you for joining!
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const EmailSubscribe = ({ router }) => {
  const U = process.env.MAILCHIMP_U;
  const ID = process.env.MAILCHIMP_ID;
  const postUrl = `https://realgood.us21.list-manage.com/subscribe/post?u=${U}&id=${ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            router={router}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};

export default EmailSubscribe;

// http://eepurl.com/iexcB9
// https://realgood.us21.list-manage.com/subscribe/post
// c1e5c1ac3b8f8b64525256cce
// e1c3210021

// MERGE0
