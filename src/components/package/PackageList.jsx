import { Container, Row, Col } from 'react-bootstrap';
import PackageCard from './PackageCard';

const PackageList = ({ packages }) => {
  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Popular Packages</h2>
      <Row>
        {packages.map((pack, idx) => (
          <Col key={idx} md={4}>
            <PackageCard pack={pack} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PackageList;
