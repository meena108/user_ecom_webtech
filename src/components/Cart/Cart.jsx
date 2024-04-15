import React, { Component } from "react";
import { Navbar, Container, Row, Col, Button, Card } from "react-bootstrap";
import Product1 from "../../assets/images/product/product1.png";
import { debounce } from "lodash";

class Cart extends Component {
  state = {
    searchResults: [],
    isLoading: true,
    error: null,
  };

  handleSearch = debounce(async (event) => {
    const searchKey = event.target.value;

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/search/${searchKey}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      this.setState({ searchResults: data, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }, 300); // delay of 300ms

  render() {
    const { searchResults, isLoading, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Container className="text-center" fluid>
        <input
          type="text"
          onChange={this.handleSearch}
          placeholder="Search products..."
        />

        <Row>
          {searchResults.map((product) => (
            <Col key={product.id} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  alt={`Product ${product.name}`}
                  className="center w-75"
                  src={`http://127.0.0.1:8000/storage/${product.file_path}`}
                />
                <Card.Body>
                  <h5 className="product-name-on-card">{product.name}</h5>
                  <p className="product-id-on-card">ID: {product.id}</p>
                  <p className="product-description-on-card">
                    {product.description}
                  </p>
                  <p className="product-price-on-card">
                    Price: ${product.price}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Cart;
