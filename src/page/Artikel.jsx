import { Stack } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import "../component/artikel.css";
import NavbarSipenting from "../component/Navbar";
import CardArtikel from "../component/CardArtikel";
import Footer from "../component/Footer";
function Artikel(params) {
  return (
    <>
      <div>
        <Stack gap={3}>
          <NavbarSipenting />
          <div className="hero-artikel mt-5">
            <Container>
              <Row className="align-items-center">
                <Col lg={4} className="py-lg-5 hero-artikel-content">
                  <div className="py-5">
                    <h5 className="text-lg-start fw-bold text-warna">Dampak</h5>
                    <h1 className="text-lg-start main-title judul-list-artikel">Dampak Stunting Untuk Anak Kini dan Nanti</h1>
                    <p className="text-lg-start main-content fw-light hero-artikel-deskripsi">
                      Stunting adalah penyakit yang disebabkan oleh kekurangan gizi kronis pada masa awal kehidupan anak. Risiko dari masalah stunting terbilang wajib diwaspadai karena akan mempengaruhi tumbuh kembang anak
                    </p>
                    <a className="text-lg-start fw-bold text-warna" style={{ textDecoration: "none" }} href="http://127.0.0.1:5503/isianArtikel.html?id=3">
                      Selengkapnya
                    </a>
                  </div>
                </Col>
                <Col lg={8} className="hero-artikel-image">
                  <div className="text-center text-lg-center mt-5">
                    <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683354904/dampak-stunting-anak_ycp7bt.jpg" className="hero-img img-fluid" alt="Hero" />
                  </div>
                </Col>
              </Row>
            </Container>

            <Container className="artikel mt-5">
              <Row>
                <Col>
                  <div className="text-center">
                    <h1 className="fw-bold ">Artikel Terbaru</h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="artikel-list my-5">
                  <CardArtikel />
                </Col>
              </Row>
            </Container>
          </div>
          <Footer />
        </Stack>
      </div>
    </>
  );
}
export default Artikel;
