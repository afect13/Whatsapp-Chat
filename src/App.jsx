import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import LoginForm from "./Pages/LoginForm/LoginForm";
import PhoneForm from "./Pages/PhoneForm/PhoneForm";
import Chat from "./Pages/Chat/Chat";
import { useState } from "react";

function App() {
  const [authData, setAuthData] = useState({ idInstance: "", apiToken: "" });
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginForm authData={authData} setAuthData={setAuthData} />} />
        <Route
          path="phone"
          element={<PhoneForm authData={authData} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />}
        />
        <Route path="chat" element={<Chat authData={authData} phoneNumber={phoneNumber} />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
