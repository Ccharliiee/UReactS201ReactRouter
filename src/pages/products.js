import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

const ProductContainerFluidExample = () => {
  return (
    <Container fluid>
      <Nav.Link href="/">Home</Nav.Link>
      <Row>
        <Col>Product1</Col>
      </Row>
    </Container>
  );
};

export default ProductContainerFluidExample;
