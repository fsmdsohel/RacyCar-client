import { Col, Container, Row } from "react-bootstrap";

const Dellvered = () => {
  return (
    <div
      className="py-5"
      style={{
        backgroundColor: "#000",
      }}
    >
      <Container>
        <div
          className="p-4"
          style={{ color: "#fff", background: "var(--dark-color)" }}
        >
          <Row>
            <Col lg="7" md="12">
              <h3 className="mb-3">Great cars. Dellvered to you. Get In.</h3>
              <p
                style={{
                  color: "#ddd",
                }}
              >
                Count on us to make your next car buying experience the best
                you’ve ever had.
              </p>
            </Col>
            <Col lg="5" md="12" className="d-flex align-items-center">
              <div className="d-flex w-100 justify-content-end justify-content-md-center great_cars">
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  className="btn_round p-md-2 m-3 fs-6"
                >
                  BUY NOW!
                </div>
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  className="btn_round_outline p-md-2 m-3 fs-6"
                >
                  LEARN MORE
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Dellvered;
