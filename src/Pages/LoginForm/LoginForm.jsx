import { useEffect, useState } from "react";
import { getStateInstance } from "../../Api/api";
import { useNavigate } from "react-router-dom";
import WrapperContainer from "../../Components/WrapperContainer/WrapperContainer";
import AuthTitle from "../../Components/AuthTitle/AuthTitle";
import AuthInput from "../../Components/AuthInput/AuthInput";
import AuthErrorMessage from "../../Components/AuthErrorMessage/AuthErrorMessage";
import AuthButton from "../../Components/AuthButton/AuthButton";

const LoginForm = ({ authData, setAuthData }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const { idInstance, apiToken } = authData;
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await getStateInstance(idInstance, apiToken);
      setResult(response.data.stateInstance);
    } catch (error) {
      setResult("error");
    }
    setLoading(false);
  };
  const handleIdInstanceChange = (e) => {
    setAuthData((prev) => ({ ...prev, idInstance: e.target.value.trim() }));
  };
  const handleApiTokenChange = (e) => {
    setAuthData((prev) => ({ ...prev, apiToken: e.target.value.trim() }));
  };
  useEffect(() => {
    if (result === "authorized") {
      navigate("/phone");
    }
  }, [result, navigate]);
  return (
    <WrapperContainer>
      <AuthTitle text={"учетные данные"} />
      <form onSubmit={handleSubmit}>
        <AuthInput
          label={"ID Instance"}
          inpytType={"text"}
          id={"IdIntstance"}
          value={idInstance}
          onChange={handleIdInstanceChange}
        />
        <AuthInput
          label={"API Token Instance"}
          inpytType={"text"}
          id={"ApiToken"}
          value={apiToken}
          onChange={handleApiTokenChange}
        />
        <AuthErrorMessage isLogin={true} result={result} />
        <AuthButton loading={loading} nameButton={"Войти"} />
      </form>
    </WrapperContainer>
  );
};

export default LoginForm;
