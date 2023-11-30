export default function ProductOptions({
  name,
  values,
  selectedOptions,
  setOptions,
}) {
  return (
    <fieldset className="mt-1">
      <legend className="text-[3vw] sm:text-base">{name}</legend>
      <div className="inline-flex items-center flex-wrap">
        {values.map((value) => {
          const id = `option-${name}-${value}`;
          const checked = selectedOptions[name] === value;

          return (
            <label key={id} htmlFor={id}>
              <input
                className="sr-only"
                type="radio"
                id={id}
                name={`option-${name}`}
                value={value}
                checked={checked}
                onChange={() => {
                  setOptions(name, value);
                }}
              />
              <div
                style={{ transition: " 0.3s" }}
                className={`thumbcursor pr-2 pl-2 pt-1.5 pb-1.5 sm:p-2 mt-3 text-lg rounded block mr-3 hover:bg-white/90  backdrop-blur-md   ${
                  checked
                    ? "bg-white/100 text-black"
                    : "bg-white/60  text-gray-300"
                }`}
              >
                <span className="px-2 text-[3vw] sm:text-base ">{value}</span>
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
