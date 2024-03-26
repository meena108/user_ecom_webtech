import React, { Component, Fragment } from 'react';
import FeaturedProduct from '../components/home/FeaturedProduct';
import Categories from '../components/home/Categories';

export class HomePage extends Component {
  render() {
    return (
        <Fragment>
            <FeaturedProduct/>
            <Categories/>
        </Fragment>
    )
  }
}

export default HomePage
