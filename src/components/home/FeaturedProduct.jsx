import React, { Component, Fragment } from "react";
import{Container, Row, Col, Card} from 'react-bootstrap';


class FeaturedProduct extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid = {true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCT</h2>
            <p>Some of Our Exclusive Collection, You may like</p>
          </div>

          <Row>

            <Col className="p-1"  key = {1} xl = {2} lg = {2}  md = {2} sm = {4} xs = {6}>
            <Card className="image-box card">
              <img className="center" src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/9/i/h/-original-imagt4tdvvhyag9j.jpeg?q=70&crop=false" alt=""/>
            <Card.Body>
            <p className="product-name-on-card">Poco C21(Cross balck 128 GB)</p>
             <p className="product-price-on-card">Price: $130</p>
            </Card.Body>
            </Card>
            </Col>

            <Col className="p-1"  key = {1} xl = {2} lg = {2}  md = {2} sm = {4} xs = {6}>
            <Card className="image-box card">
              <img className="center" src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/o/y/g34-5g-pb1v0000in-motorola-original-imagwu4s8naevwyq.jpeg?q=70&crop=false"/>
            <Card.Body>
            <p className="product-name-on-card">Poco C21(Cross balck 128 GB)</p>
             <p className="product-price-on-card">Price: $130</p>
            </Card.Body>
            </Card>
            </Col>

            <Col className="p-1"  key = {1} xl = {2} lg = {2}  md = {2} sm = {4} xs = {6}>
            <Card className="image-box card">
              <img className="center" src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/w/j/g24-pb1c0000in-motorola-original-imagxm3afhhxpqz9.jpeg?q=70" alt=""/>
            <Card.Body>
            <p className="product-name-on-card">Poco C21(Cross balck 128 GB)</p>
             <p className="product-price-on-card">Price: $130</p>
            </Card.Body>
            </Card>
            </Col>

            <Col className="p-1"  key = {1} xl = {2} lg = {2}  md = {2} sm = {4} xs = {6}>
            <Card className="image-box card">
              <img className="center" src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/h/e/-original-imagzjhwmsamexfk.jpeg?q=70" alt=""/>
            <Card.Body>
            <p className="product-name-on-card">Poco C21(Cross balck 128 GB)</p>
             <p className="product-price-on-card">Price: $130</p>
            </Card.Body>
            </Card>
            </Col>

            <Col className="p-1"  key = {1} xl = {2} lg = {2}  md = {2} sm = {4} xs = {6}>
            <Card className="image-box card">
              <img className="center" src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70" alt=""/>
            <Card.Body>
            <p className="product-name-on-card">Poco C21(Cross balck 128 GB)</p>
             <p className="product-price-on-card">Price: $130</p>
            </Card.Body>
            </Card>
            </Col>

            <Col className="p-1"  key = {1} xl = {2} lg = {2}  md = {2} sm = {4} xs = {6}>
            <Card className="image-box card">
              <img className="center" src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/9/i/h/-original-imagt4tdvvhyag9j.jpeg?q=70&crop=false" alt=""/>
            <Card.Body>
            <p className="product-name-on-card">Poco C21(Cross balck 128 GB)</p>
             <p className="product-price-on-card">Price: $130</p>
            </Card.Body>
            </Card>
            </Col>



          </Row>

        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProduct;
