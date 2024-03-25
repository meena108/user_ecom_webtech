import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Correct import statement
import AppRoute from './route/AppRoute';

class App extends React.Component { // Ensure you're extending React.Component instead of Component
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
