import React, { Fragment } from "react";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Provider } from "./context/Context";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Books from "./components/Books";
import About from "./components/About";
import BookCart from "./components/BookCart";
import BookDetails from "./components/BookDetails";
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'

function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <Header />
                <Books />
              </Fragment>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/book-cart" component={BookCart} />
          <Route path="/book/details/:id" component={BookDetails} />
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/forget-password" component={ForgetPasswordPage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
