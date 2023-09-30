import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import ChatPage from "../pages/ChatPage";
import FAQ from "../pages/FaqPage";

function RouterIndex() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}

export default RouterIndex;
