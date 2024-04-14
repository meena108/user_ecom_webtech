import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Favourite extends Component {
  state = {
    products: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    fetch("http://127.0.0.1:8000/api/list")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => this.setState({ products: data, isLoading: false }))
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  delete = (id) => {
    fetch(`http://127.0.0.1:8000/api/delete/${id}`, {
      method: "DELETE",
    }).then(() => this.fetchProducts());
  };

  render() {
    const { products, isLoading, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Container className="text-center" fluid>
        <div className="section-title text-center mb-55">
          <h2>MY PRODUCT LIST ITEMS</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>

        <Row>
          {products.map((product) => (
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
                  <div className="d-flex justify-content-center">
                    <Button
                      className="btn btn-sm me-2"
                      onClick={() => this.delete(product.id)}
                    >
                      <i className="fa fa-trash-alt"></i> Remove
                    </Button>

                    <Button
                      className="btn btn-sm"
                      onClick={() =>
                        this.props.history.push(`/notification/${product.id}`)
                      }
                    >
                      <i className="fa fa-edit"></i> Update
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default withRouter(Favourite);
