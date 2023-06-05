import { Route, Routes } from "react-router-dom";
import CekImt from "./page/CekImt";
import Konsultasi from "./page/Konsultasi";
import LandinngPage from "./page/LandingPage";
import Artikel from "./page/Artikel";
import NotFound from "./page/NoteFound";
import ChatDokter from "./page/Chat";
import ChatBox from "./page/ChatBox";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandinngPage />} />
        <Route path="/konsultasi" element={<Konsultasi />} />
        <Route path="/cekgizi" element={<CekImt />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/chat" element={<ChatBox />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <CekImt /> */}
      {/* <Konsultasi />  */}
    </>
  );
}

export default App;
