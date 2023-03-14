import { useState, useEffect, useContext } from "react";
import { formatter } from "../../utils/helpers";
import ProductOptions from "./ProductOptions";
import { CartContext } from "../../context/shopContext";
import axios from "axios";
import useSWR from "swr";

// setup inventory fetcher
const fetchInventory = (url, id) =>
  axios
    .get(url, {
      params: {
        id: id,
      },
    })
    .then((res) => res.data);

export default function ProductForm({ product }) {
  const { data: productInventory } = useSWR(
    ["/api/available", product.handle],
    (url, id) => fetchInventory(url, id),
    { errorRetryCount: 3 }
  );

  const [available, setAvailable] = useState(true);

  const { addToCart } = useContext(CartContext);

  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  useEffect(() => {
    if (productInventory) {
      const checkAvailable = productInventory?.variants.edges.filter(
        (item) => item.node.id === selectedVariant.id
      );

      if (checkAvailable[0].node.availableForSale) {
        setAvailable(true);
      } else {
        setAvailable(false);
      }
    }
  }, [productInventory, selectedVariant]);

  useEffect(() => {
    if (productInventory) {
      const checkAvailable = productInventory?.variants.edges.filter(
        (item) => item.node.id === selectedVariant.id
      );

      if (checkAvailable[0].node.availableForSale) {
        setAvailable(true);
      } else {
        setAvailable(false);
      }
    }
  }, [productInventory, selectedVariant]);

  // console.log(
  //   product.description.split("|").map((t, i) => {
  //     return t;
  //   })
  // );

  return (
    <div className="flex flex-col w-full lg:w-[38vw] xl:w-[28vw] pl-[5vw] pr-[5vw] pb-0 lg:pb-10 lg:p-4 lg:pt-[14%] text-[2.9vw] sm:text-base mt-10 lg:ml-[3vw] ">
      <h2 className="text-[4vw] pb-0.5 sm:text-2xl">{product.title}</h2>
      {/* <span className="pb-0 lg:pb-0">Real Good X Person</span> */}
      <span className="pb-4 lg:pb-10">
        {formatter.format(product.variants.edges[0].node.priceV2.amount)}
      </span>

      <span className="pb-1 lg:pb-1">Details</span>

      <div className=" pb-4 lg:pb-10 text-[2.5vw] sm:text-sm">
        {product.description.split("|").map((t, i) => (
          <div className="pt-0.5" key={i}>
            {t}
          </div>
        ))}
      </div>

      {product.options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
          selectedVariant={selectedVariant}
          productInventory={productInventory}
          available={available}
        />
      ))}
      {available ? (
        <button
          onClick={() => {
            addToCart(selectedVariant);
          }}
          className="bg-white/60 backdrop-blur-md  rounded px-2 py-3 mt-3  duration-150 hover:opacity-50 hover:text-black  w-[90vw]  lg:w-[400px] xl:w-[455px]  thumbcursor text-[2.9vw] sm:text-sm md:text-base "
          style={{ transition: "0.3s" }}
        >
          Add To Cart
        </button>
      ) : (
        <button className="rounded-lg px-2 py-3 mt-3 bg-white/60 backdrop-blur-md text-gray-300 cursor-not-allowed  w-[90vw]  lg:w-[400px] xl:w-[455px]  text-[2.9vw] sm:text-base ">
          Sold out!
        </button>
      )}
    </div>
  );
}
