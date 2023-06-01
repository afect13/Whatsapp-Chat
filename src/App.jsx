import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import LoginForm from "./Pages/LoginForm/LoginForm";
import PhoneForm from "./Pages/PhoneForm/PhoneForm";
import Chat from "./Pages/Chat/Chat";
import { useState } from "react";

function App() {
  const [authData, setAuthData] = useState({ idInstance: "", apiToken: "" });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginForm authData={authData} setAuthData={setAuthData} />} />
        <Route path="phone" element={<PhoneForm />} />
        <Route path="chat/:phone" element={<Chat />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
