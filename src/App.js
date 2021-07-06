import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Fav from './components/Fav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    return(
      <>
      <Header/>
        <Router>
          <Switch>
            <Route exact path="/">
<Home/>
            </Route>
            <Route  path="/Favorite">
<Fav/>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
