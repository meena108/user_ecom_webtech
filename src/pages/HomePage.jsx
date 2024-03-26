import React, { Component, Fragment } from "react";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProduct";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HomeTop />
        <FeaturedProducts />
        <NewArrival />
        <Collection />
        <Categories />
      </Fragment>
    );
  }
}

export default HomePage;
