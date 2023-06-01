import { useEffect, useState } from "react";
import { getStateInstance } from "../../Api/api";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ authData, setAuthData }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await getStateInstance(authData.idInstance, authData.apiToken);
      setResult(response.data.stateInstance);
    } catch (error) {
      setResult(error.message);
    }
    setLoading(false);
  };

  const handleIdInstanceChange = (e) => {
    setAuthData((prev) => ({ ...prev, idInstance: e.target.value }));
  };
  const handleApiTokenChange = (e) => {
    setAuthData((prev) => ({ ...prev, apiToken: e.target.value }));
  };

  useEffect(() => {
    if (result === "authorized") {
      navigate("/phone");
    }
  }, [result, navigate]);
  return (
    <div className=" flex flex-col  items-center">
      <div className="w-[320px]">
        <h2 className="text-center uppercase font-bold text-lg  mb-8">учетные данные</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label htmlFor="IdIntstance" className="block mb-2 text-sm font-medium text-gray-900">
              ID Instance
            </label>
            <input
              type="text"
              id="IdIntstance"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              required
              value={authData.idInstance}
              onChange={handleIdInstanceChange}
            />
          </div>
          <div className="mb-8">
            <label htmlFor="ApiToken" className="block mb-2 text-sm font-medium text-gray-900 ">
              API Token Instance
            </label>
            <input
              type="text"
              id="ApiToken"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              required
              value={authData.apiToken}
              onChange={handleApiTokenChange}
            />
          </div>
          {result !== null && result !== "authorized" && result !== "Network Error" ? (
            <div className=" mb-4 text-red-600 text-sm  pb-2">
              <span>{`Ошибка ${result}. Подробности можно узнать по  `} </span>
              <a className="text-blue-500 underline" href="https://green-api.com/docs/api/account/GetStateInstance/">
                ссылке.
              </a>
            </div>
          ) : (
            result === "Network Error" && (
              <div className=" mb-4 text-red-600 text-sm  pb-2">
                <span>{`Ошибка ввода. Проверьте корректность введенных данных  `} </span>
              </div>
            )
          )}
          <button
            disabled={loading}
            type="submit"
            className="text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full px-6 py-2.5 text-center"
          >
            {loading === true ? (
              <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 40 40" stroke="currentColor">
                <g fill="none" fillRule="evenodd">
                  <g transform="translate(2 2)" strokeWidth="4">
                    <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                    <path d="M36 18c0-9.94-8.06-18-18-18">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>
                </g>
              </svg>
            ) : (
              "Войти"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
