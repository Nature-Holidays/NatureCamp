import { Form, Button, Row, Col } from 'react-bootstrap';

const SearchBox = () => {
  return (
    <div className="search-box-overlay position-absolute top-50 start-50 translate-middle text-center w-75">
      <Form className="bg-light p-3 rounded shadow">
        <Row className="g-2 align-items-center">
          <Col md={4}><Form.Control type="text" placeholder="Destination" /></Col>
          <Col md={4}><Form.Control type="date" /></Col>
          <Col md={4}><Button variant="primary" type="submit">Search</Button></Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBox;
