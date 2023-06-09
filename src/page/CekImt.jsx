import NavbarSipenting from "../component/Navbar";
import { Stack } from "react-bootstrap";
import { BmiProvider } from "../contex/BmiContex.jsx";
import BmiCalculator from "../component/Form";
import HeroCekKonsul from "../component/HeroKonsul";
import Footer from "../component/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "../component/cekimt.css";

function CekImt(params) {
  return (
    <>
      <div>
        <Stack gap={3}>
          <NavbarSipenting />

          <HeroCekKonsul
            img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1683201271/Assets/cekstunting_sxkcbq.png"}
            title={"Cek Status Gizi !"}
            descrip={"Pantau pertumbuhan dan perkembangan anak Anda secara berkala. Untuk mengetahui seberapa sehat anak Anda. Cek kondisi anak Anda bisa menggunakan layanan kami. "}
          />
          <BmiProvider>
            <BmiCalculator />
          </BmiProvider>

          <Container className="text-center text-lg-start mt-3 mt-md-5 mb-5">
            <h3 className="fw-bold mt-7 mb-4 pt-5 fs-3 layanan1">Layanan Konsultasi</h3>
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
              <div className="mb-3 mb-lg-0">
                <p className="ms-0 fs-5 layanan 2">Dapatkan konsultasi medis anak yang cepat dan mudah dari konselor kami yang berpengalaman. Konsultasi medis anak yang nyaman dan aman dari rumah Anda sendiri</p>
              </div>
              <div className="p-4 text-end">
                <a href="#" className="btn rounded-5 px-5 py-2 text-sm-center fs-6 text-white fw-semibold d-inline-block" style={{ backgroundColor: "#54bca4" }}>
                  Konseling
                </a>
              </div>
            </div>
          </Container>

          <Footer />
        </Stack>
      </div>
    </>
  );
}
export default CekImt;
