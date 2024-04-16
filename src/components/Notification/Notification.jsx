import React, { Component, Fragment } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Notification extends Component {
  state = {
    product: {
      name: "",
      description: "",
      price: "",
      file_path: null,
    },
    selectedFile: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/product/${id}`)
      .then((response) => {
        this.setState({ product: response.data });
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      product: {
        ...prevState.product,
        [name]: value,
      },
    }));
  };

  handleFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    const formData = new FormData();
    Object.keys(this.state.product).forEach((key) =>
      formData.append(key, this.state.product[key])
    );
    if (this.state.selectedFile) {
      formData.append("file", this.state.selectedFile);
    }

    axios
      .put(`http://127.0.0.1:8000/api/update/${id}`, formData)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/favourite"); // Redirect to the favourite page after update
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  render() {
    const { product } = this.state;

    return (
      <Fragment>
        <Container>
          <div className="section-title text-center mb-55">
            <h2>UPDATE PRODUCT</h2>
            <p>Some Of Our Exclusive Collection, You May Add</p>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={product.name}
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="productDescription">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={product.description}
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="productPrice">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={product.price}
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="productFilePath">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="file"
                name="file"
                onChange={this.handleFileChange}
              />
            </Form.Group>

            {product.file_path && (
              <div className="text-center my-3">
                <img
                  src={`http://127.0.0.1:8000/storage/${product.file_path}`}
                  alt="Product"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            )}

            <div className="d-flex justify-content-center mt-4">
              <Button variant="primary" type="submit">
                Update Product
              </Button>
            </div>
          </Form>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(Notification);
