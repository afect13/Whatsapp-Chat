const AuthInput = ({ label, inpytType, id, value, onChange, placeholder = "" }) => {
  return (
    <div className="mb-8">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={inpytType}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default AuthInput;
