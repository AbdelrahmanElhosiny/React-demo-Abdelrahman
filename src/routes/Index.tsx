import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import ChatPage from "../pages/ChatPage";
import FAQ from "../pages/FaqPage";
import FormPage from "../pages/FormPage";
import RegisterPage from "../pages/RegisterPage";

function RouterIndex() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default RouterIndex;
