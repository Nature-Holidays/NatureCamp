import { Card, Button } from 'react-bootstrap';

const PackageCard = ({ pack }) => (
  <Card className="shadow-sm mb-4">
    <Card.Img variant="top" src={pack.image} />
    <Card.Body>
      <Card.Title>{pack.title}</Card.Title>
      <Card.Text>{pack.description}</Card.Text>
      <Button variant="outline-primary">View Details</Button>
    </Card.Body>
  </Card>
);

export default PackageCard;
