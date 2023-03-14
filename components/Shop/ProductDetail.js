import ProductForm from "./ProductForm";
import Link from "next/link";
import LoadImage from "../LoadImage";
import { useKeenSlider } from "keen-slider/react";

import Recommend from "./Recommend";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
}

export default function ProductPageContent({ product }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 8,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  // const slicedArray = product.images.edges.slice(4);

  return (
    <>
      <div className="lg:ml-[5vw] grid grid-cols-1 lg:grid-cols-2 mt-[16vw] md:mt-[95px]  lg:mt-[120px] xl:mt-[80px]">
        <div className="flex flex-col pl-[5vw] pr-[5vw] lg:ml-[5vw] lg:p-0">
          <div>
            <div
              ref={sliderRef}
              className="keen-slider max-w-[90vw] w-[90vw] h-[90vw] lg:max-w-[45vw] lg:w-[45vw] lg:h-[42vw] rounded block"
            >
              {product.images.edges.map((image, i) => {
                return (
                  <div
                    key={`number-slide${i}`}
                    className={`keen-slider__slide number-slide${i} w-full h-full `}
                  >
                    <LoadImage
                      src={image.node.originalSrc}
                      alt={image.node.altText}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                );
              })}
            </div>

            <div
              ref={thumbnailRef}
              className="keen-slider max-w-[90vw] lg:max-w-[45vw] thumbnail rounded mb-[4vw] sm:mb-[20px] lg:mb-[50px]"
            >
              {product.images.edges.map((image, i) => {
                return (
                  <div
                    key={`number-slide${i}`}
                    className={`keen-slider__slide number-slide${i} flex justify-center items-center w-[10vw] h-[10vw] lg:w-[4.5vw] lg:h-[4.5vw]`}
                  >
                    <LoadImage
                      src={image.node.originalSrc}
                      alt={image.node.altText}
                      layout="fill"
                      objectFit="cover"
                      className="thumbcursor"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <ProductForm product={product} />
      </div>
      <Recommend
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />

      <div className="flex relative w-screen justify-center items-center text-[2.9vw] sm:text-sm md:text-base pt-[3.3vw] sm:pt-[2vw] lg:pt-[1vw] pb-[6vw] md:pb-[3rem] ">
        <Link href="/shop" passHref scroll={false}>
          <a>
            <div className="bg-white/60 backdrop-blur-sm w-[90vw] lg:w-[400px] xl:w-[455px] rounded text-center p-3  thumbcursor text-black duration-150 hover:opacity-50">
              Back to Shop
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
