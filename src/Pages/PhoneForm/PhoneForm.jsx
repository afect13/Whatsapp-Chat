import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkWhatsapp } from "../../Api/api";

const PhoneForm = ({ authData, phoneNumber, setPhoneNumber }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await checkWhatsapp(authData.idInstance, authData.apiToken, phoneNumber);
      setResult(Boolean(response.data.existsWhatsapp));
    } catch (error) {
      console.error(e);
      setResult("error");
    }
    setLoading(false);
  };
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value.trim());
  };
  useEffect(() => {
    if (result === true) {
      navigate("/chat");
    }
  }, [result, navigate]);
  return (
    <div className=" flex flex-col  items-center">
      <div className="w-[320px]">
        <h2 className="text-center uppercase font-bold text-lg  mb-8">номер получателя</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-12">
            <label htmlFor="IdIntstance" className="block mb-2 text-sm font-medium text-gray-900">
              Телефон
            </label>
            <input
              type="tel"
              id="PhoneNumber"
              placeholder="Пример: 79998887766"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              required
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
          </div>
          {result !== null && result !== true && result !== "error" ? (
            <div className=" mb-4 text-red-600 text-sm  pb-2">
              <span>{`Ошибка. Пользователя с номером ${phoneNumber} в Whatsapp не зарегистрировано`} </span>
            </div>
          ) : (
            result === "error" && (
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
              "Создать чат"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneForm;
