const LoginForm = () => {
  return (
    <div className=" flex flex-col  items-center">
      <div className="w-[320px]">
        <h2 className="text-center uppercase font-bold text-lg  mb-8">учетные данные</h2>
        <form>
          <div className="mb-8">
            <label htmlFor="IdIntstance" className="block mb-2 text-sm font-medium text-gray-900">
              ID Instance
            </label>
            <input
              type="text"
              id="IdIntstance"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-12">
            <label htmlFor="ApiToken" className="block mb-2 text-sm font-medium text-gray-900 ">
              API Token Instance
            </label>
            <input
              type="text"
              id="ApiToken"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full px-6 py-2.5 text-center"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
