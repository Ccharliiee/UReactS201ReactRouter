import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductContainerFluidExample = () => {
  return (
    <Container fluid>
      <Link to="/">Home</Link>
      <Row>
        <Col>Product1</Col>
      </Row>
    </Container>
  );
};

export default ProductContainerFluidExample;
