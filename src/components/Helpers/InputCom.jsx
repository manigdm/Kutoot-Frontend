export default function InputCom({
  label,
  type,
  name,
  placeholder,
  children,
  inputHandler,
  value,
  inputClasses,
  error = false,
  labelClasses = "text-qgray text-[13px] font-normal",
  ...rest
}) {
  return (
    <div className="input-com w-full h-full">
      {label && (
        <label
          className={`input-label capitalize block  mb-2 ${labelClasses || ""}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div
        className={`input-wrapper border  w-full h-full overflow-hidden relative ${
          error ? "border-qred" : "border-qgray-border"
        }`}
      >
        <input
          placeholder={placeholder}
          value={value}
          onChange={inputHandler}
          className={`input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none ${
            inputClasses || "h-full"
          }`}
          type={type}
          id={name}
          {...rest}
        />
        {children && children}
      </div>
    </div>
  );
}
