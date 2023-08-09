import InputErrorMessage from "./inputerrormessage";

export default function PaymentInput({
  name,
  placeholder,
  grid,
  onChange,
  value,
  isInvalid,
}) {
  const text = isInvalid ? (
    <InputErrorMessage message={isInvalid} placeholder={placeholder} />
  ) : (
    placeholder
  );

  return (
    <>
      <div className={`flex flex-col text-sm ${grid}`}>
        <label for={name} className="mx-2">
          {text}
        </label>
        <input
          type="text"
          id={name}
          className="border border-gray-400 rounded-lg text-sm py-2 px-4 mx-2"
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </>
  );
}
