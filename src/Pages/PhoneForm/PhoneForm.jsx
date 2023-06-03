import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkWhatsapp } from "../../Api/api";
import WrapperContainer from "../../Components/WrapperContainer/WrapperContainer";
import AuthTitle from "../../Components/AuthTitle/AuthTitle";
import AuthInput from "../../Components/AuthInput/AuthInput";
import AuthErrorMessage from "../../Components/AuthErrorMessage/AuthErrorMessage";
import AuthButton from "../../Components/AuthButton/AuthButton";

const PhoneForm = ({ authData, phoneNumber, setPhoneNumber }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const { idInstance, apiToken } = authData;
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await checkWhatsapp(idInstance, apiToken, phoneNumber);
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
    if (!authData.idInstance || !authData.apiToken) {
      navigate("/");
    }
  }, [result, authData, navigate]);

  return (
    <WrapperContainer>
      <AuthTitle text={"номер получателя"} />
      <form onSubmit={handleSubmit}>
        <AuthInput
          label={"Телефон"}
          inpytType={"text"}
          id={"PhoneNumber"}
          value={phoneNumber}
          placeholder="Пример формата: 79998887766"
          onChange={handlePhoneChange}
        />
        <AuthErrorMessage isLogin={false} result={result} />
        <AuthButton loading={loading} nameButton={"Создать чат"} />
      </form>
    </WrapperContainer>
  );
};

export default PhoneForm;
