// import {useState} from 'react'
// import { Banner } from '../components/Banner/Banner'
// import { Card, Container, Button, Form, Row, Col } from "react-bootstrap";
// import './home.css';


// const destinations = [
//   {
//     name: "Munnar",
//     country: "munnar",
//     image: "src/assets/images/03.jpg",
//   },
//   {
//     name: "Alleppy",
//     country: "alleppy",
//     image: "src/assets/images/04.jpg",
//   },
//   {
//     name: "Varkala",
//     country: "Varkala",
//     image: "src/assets/images/Boating.jpg",
//   },
//   {
//     name: "Wayanad",
//     country: "Wayanad",
//     image: "src/assets/images/02.jpg",
//   },
//   {
//     name: "Rome",
//     country: "Italy",
//     image: "src/assets/images/02.jpg",
//   },
// ];

// const VISIBLE_CARDS = 4;


// function Home() {

//   const [startIndex, setStartIndex] = useState(0);

//   const handlePrev = () => {
//     setStartIndex((prev) => Math.max(prev - VISIBLE_CARDS, 0));
//   };

//   const handleNext = () => {
//     setStartIndex((prev) =>
//       Math.min(prev + VISIBLE_CARDS, destinations.length - VISIBLE_CARDS)
//     );
//   };

//   const visibledest = destinations.slice(startIndex, startIndex + VISIBLE_CARDS);

//   return (
//     <>
//     <Banner />
//     <div className='dest'>
//     <Container className="my-5 text-center">
//       <h2 className="mb-4" style={{fontSize:"40px", margin : "100px"}}>Top Destinations to Travel</h2>
//       <div className="d-flex justify-content-center align-items-center mb-3">
//         <Button variant="outline-secondary" onClick={handlePrev} disabled={startIndex === 0}>
//           ←
//         </Button>
//         <div className="d-flex justify-content-center gap-3 px-4" >
//           {visibledest.map((dest, index) => (
//             <Card key={index} style={{ width: "20rem"}}>
//               <Card.Img variant="top" src={dest.image} style={{ height: "250px", objectFit:"fill" }} />
//               <Card.Body>
//                 <Card.Title>{dest.name}</Card.Title>
//                 <Card.Text>{dest.country}</Card.Text>
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//         <Button
//           variant="outline-secondary"
//           onClick={handleNext}
//           disabled={startIndex + VISIBLE_CARDS >= destinations.length}
//           >
//           →
//         </Button>
//       </div>
//     </Container>
//     </div>
      
//     <div className='contact'>
//      <Container className="my-5 contact-section" >
//       <h2 className="text-center mb-4" style = {{fontSize : "35px"}}>Contact Us</h2>
//       <h3 className="text-center mb-4" style = {{fontSize : "30px"}}>Need Assistance - Get a call back</h3>
//       <Form>
//         <Row className="align-items-end mb-3 justify-content-center">
//           <Col md={3}>
//             <Form.Group controlId="formName">
//               <Form.Control type="text" placeholder="Enter your name" required />
//             </Form.Group>
//           </Col>
//           <Col md={3}>
//             <Form.Group controlId="formPhone">
//               <Form.Control type="tel" placeholder="Enter your phone number" required />
//             </Form.Group>
//           </Col>
//         </Row>

//           <div className="text-center">
//             <Button variant="success" type="submit">
//               Submit
//             </Button>
//           </div>
//         </Form>
//       </Container>
//     </div>
//     </>
//   )
// }

// export default Home

import { useState } from 'react';
import { Banner } from '../components/Banner/Banner';
import { Card, Container, Button, Form, Row, Col } from "react-bootstrap";
import { FaMountain, FaTree, FaUserFriends, FaUtensils } from "react-icons/fa";
import './home.css';

const destinations = [
  { name: "Munnar", country: "India", image: "src/assets/images/03.jpg" },
  { name: "Alleppy", country: "India", image: "src/assets/images/04.jpg" },
  { name: "Varkala", country: "India", image: "src/assets/images/Boating.jpg" },
  { name: "Wayanad", country: "India", image: "src/assets/images/02.jpg" },
  { name: "Rome", country: "Italy", image: "src/assets/images/02.jpg" },
];

const VISIBLE_CARDS = 4;

function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const handlePrev = () => setStartIndex((prev) => Math.max(prev - VISIBLE_CARDS, 0));
  const handleNext = () => setStartIndex((prev) => Math.min(prev + VISIBLE_CARDS, destinations.length - VISIBLE_CARDS));
  const visibledest = destinations.slice(startIndex, startIndex + VISIBLE_CARDS);

  return (
    <>
      <Banner />

      {/* Destinations Section */}
      <div className='dest'>
        <Container className="my-5 text-center">
          <h2 className="mb-4" style={{ fontSize: "40px", margin: "100px" }}>Top Destinations to Travel</h2>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <Button variant="outline-secondary" onClick={handlePrev} disabled={startIndex === 0}>←</Button>
            <div className="d-flex justify-content-center gap-3 px-4">
              {visibledest.map((dest, index) => (
                <Card key={index} style={{ width: "20rem" }}>
                  <Card.Img variant="top" src={dest.image} style={{ height: "250px", objectFit: "fill" }} />
                  <Card.Body>
                    <Card.Title>{dest.name}</Card.Title>
                    <Card.Text>{dest.country}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
            <Button variant="outline-secondary" onClick={handleNext} disabled={startIndex + VISIBLE_CARDS >= destinations.length}>→</Button>
          </div>
        </Container>
      </div>

      {/* Why Choose Section */}
      <Container className="text-center my-5 py-5">
        <h2 className="mb-4" style={{ fontSize: "35px" }}>Why Choose Nature Camp?</h2>
        <Row className="justify-content-center gap-4">
          <Col md={2}>
            <FaMountain size={40} color="green" />
            <h5 className="mt-2">Scenic Locations</h5>
          </Col>
          <Col md={2}>
            <FaTree size={40} color="green" />
            <h5 className="mt-2">Eco-Friendly Stays</h5>
          </Col>
          <Col md={2}>
            <FaUserFriends size={40} color="green" />
            <h5 className="mt-2">Guided Treks</h5>
          </Col>
          <Col md={2}>
            <FaUtensils size={40} color="green" />
            <h5 className="mt-2">Local Cuisine</h5>
          </Col>
        </Row>
      </Container>

      {/* Final CTA Section */}
      <Container className="text-center my-5 py-5 bg-light rounded">
        <h2 style={{ fontSize: "32px" }}>Ready for your next adventure?</h2>
        <p className="lead mb-4">Let Nature Camp guide you to the wild!</p>
        <Button variant="primary" size="lg" className="mx-2">Explore Packages</Button>
      </Container>
      {/* Contact Us */}
      <div className='contact'>
        <Container className="my-5 contact-section">
          <h2 className="text-center mb-4" style={{ fontSize: "35px" }}>Contact Us</h2>
          <h3 className="text-center mb-4" style={{ fontSize: "30px" }}>Need Assistance - Get a call back</h3>
          <Form style={{margin : "5px"}}>
            <Row className="align-items-end mb-3 justify-content-center">
              <Col md={3}>
                <Form.Group controlId="formName">
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formPhone">
                  <Form.Control type="tel" placeholder="Enter your phone number" required />
                </Form.Group>
              </Col>
            </Row>
            <div className="text-center">
              <Button variant="success" type="submit">Submit</Button>
            </div>
          </Form>
        </Container>
      </div>
    </>

  );
}

export default Home;
