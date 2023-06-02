const AuthErrorMessage = ({ isLogin, result }) => {
  return (
    <>
      {isLogin ? (
        <>
          {result !== null && result !== "authorized" && result !== "error" ? (
            <div className="mb-4 text-red-600 text-sm pb-2">
              <span>{`Ошибка ${result}. Подробности можно узнать по `}</span>
              <a className="text-blue-500 underline" href="https://green-api.com/docs/api/account/GetStateInstance/">
                ссылке.
              </a>
            </div>
          ) : (
            result === "error" && (
              <div className="mb-4 text-red-600 text-sm pb-2">
                <span>{`Ошибка ввода. Проверьте корректность введенных данных.`}</span>
              </div>
            )
          )}
        </>
      ) : (
        <>
          {result !== null && result !== true && result !== "error" ? (
            <div className="mb-4 text-red-600 text-sm pb-2">
              <span>{`Ошибка. Пользователя с данным номером в Whatsapp не зарегистрировано.`}</span>
            </div>
          ) : (
            result === "error" && (
              <div className="mb-4 text-red-600 text-sm pb-2">
                <span>{`Ошибка ввода. Проверьте корректность введенных данных.`}</span>
              </div>
            )
          )}
        </>
      )}
    </>
  );
};

export default AuthErrorMessage;
