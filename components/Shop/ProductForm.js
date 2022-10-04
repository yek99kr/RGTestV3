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

  return (
    <div className="flex flex-col w-full lg:w-[38vw] pl-[5vw] pr-[5vw] pb-10 lg:p-4 lg:pt-[14%] text-[2.9vw] sm:text-base mt-5 lg:ml-[3vw] ">
      <h2 className="text-[3.2vw] sm:text-lg">{product.title}</h2>
      <span className="pb-3">
        {formatter.format(product.variants.edges[0].node.priceV2.amount)}
      </span>

      <span className="pb-3">{product.description}</span>

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
          className="bg-white/60 text-gray-500 backdrop-blur-md  rounded px-2 py-3 mt-3 hover:bg-white/100 hover:text-black  lg:w-[25vw] thumbcursor text-[2.9vw] sm:text-sm md:text-base "
          style={{ transition: "0.3s" }}
        >
          Add To Cart
        </button>
      ) : (
        <button className="rounded-lg px-2 py-3 mt-3 bg-white/60 backdrop-blur-md text-gray-300 cursor-not-allowed lg:w-[25vw] text-[2.9vw] sm:text-base ">
          Sold out!
        </button>
      )}
    </div>
  );
}
