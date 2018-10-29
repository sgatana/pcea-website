import React, { Component, Fragment } from 'react';
import Header from './header'
import Footer from './footer'
import HomePaage from './main/Main'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Header />
            <Route path='/' component={HomePaage} />
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
