import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import LoginForm from "./Pages/LoginForm/LoginForm";
import PhoneFrom from "./Pages/PhoneForm/PhoneFrom";
import Chat from "./Pages/Chat/Chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginForm />} />
        <Route path="phone" element={<PhoneFrom />} />
        <Route path="chat/:phone" element={<Chat />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
