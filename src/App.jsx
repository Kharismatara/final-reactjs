import { Route, Routes, Navigate } from "react-router-dom";
import CekImt from "./page/CekImt";
import Konsultasi from "./page/Konsultasi";
import LandinngPage from "./page/LandingPage";
import Artikel from "./page/Artikel";
import NotFound from "./page/NoteFound";
import ChatDokter from "./page/Chat";
import ChatBox from "./page/ChatBox";
import LoginPage from "./page/Login";
import RegisterPage from "./page/Register";
import { AuthProvider, AuthContext } from "./contex/AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandinngPage />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
          <Route path="/cekgizi" element={<CekImt />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/chat" element={<ChatBox />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
      {/* <CekImt /> */}
      {/* <Konsultasi />  */}
    </>
  );
}

export default App;
