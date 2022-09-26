import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Adduser from "./Component/Adduser";
import Alluser from "./Component/Alluser";
function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Adduser  />
          </Col>
          <Col>
            <Alluser  />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default App;
