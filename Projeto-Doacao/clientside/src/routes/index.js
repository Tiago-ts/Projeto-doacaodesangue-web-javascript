import React, { Component } from 'react';
import Home from '../components/Home';
import { Provider } from 'react-redux';
import Login from '../components/Login';
import store from '../components/store/index';
import ProtectedRoute from './ProtectedRoute';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Routes extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
  console.log(props,'aaaaa')
    }
    render() {
      return (
        <Router>
          <Provider store={store}>
          <div className="App">
            <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/App" >
                  <ProtectedRoute exact path="/App/index" component={(props) => <Home {...props} />} />
            </Route>
            <Route  path="*" component={()=>{return(<h1>404</h1>)}} />
            </Switch>
          </div>
          </Provider>
        </Router>
      )
    }
  }
  
  export default Routes