import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import ChatPage from "../pages/ChatPage";
import FAQ from "../pages/FaqPage";
import FormPage from "../pages/TryFormikPage";
import RegisterPage from "../pages/RegisterPage";
import RegisterPage2 from "../pages/RegisterPage2";

function RouterIndex() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/register2" element={<RegisterPage2 />} />
    </Routes>
  );
}

export default RouterIndex;
