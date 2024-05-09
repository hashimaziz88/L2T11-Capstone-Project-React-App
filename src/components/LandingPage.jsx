// Home component displaying welcome message, featured products, and special offers
import React from "react";
import { Button, Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "./styles/Home.css"; // Import CSS file for styling

const Home = () => {
  return (
    // Container for content
    <div className="home-container">
      <Container>
        {/* Welcome message */}
        <div className="welcome-message text-center">
          <h1>Welcome to Our Online Store!</h1>
          <p>Discover the latest trends and exclusive deals.</p>
        </div>
        <Row className="mt-5">
          <Col md={6}>
            {/* Featured product */}
            <div className="featured-product">
              <h2>Featured Product</h2>
              <Card className="product-card">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  alt="Product"
                />
                <Card.Body>
                  <Card.Title>Product 1</Card.Title>
                  <Card.Text>Description of Product 1.</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={6}>
            {/* Special offers carousel */}
            <div className="special-offers">
              <h2>Special Offers</h2>
              <Carousel className="offer-carousel">
                {/* Special Offer 1 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x300"
                    alt="Special Offer 1"
                  />
                  <Carousel.Caption>
                    <h3>Special Offer 1</h3>
                    <p>Details of Offer 1.</p>
                    <Button variant="success">Claim Offer</Button>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* Special Offer 2 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x300"
                    alt="Special Offer 2"
                  />
                  <Carousel.Caption>
                    <h3>Special Offer 2</h3>
                    <p>Details of Offer 2.</p>
                    <Button variant="success">Claim Offer</Button>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
