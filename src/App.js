import React, { Component, Fragment } from 'react';
import Header from './header'
import Footer from './footer'
import HomePaage from './main/Main'
import { JPRC } from './main/jprc'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePaage} />
              <Route path='/jprc' component={JPRC} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
