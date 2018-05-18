import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Rules from './containers/Rules/Rules';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" component={Rules}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
