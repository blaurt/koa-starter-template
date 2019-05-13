import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Book from "./Component/Book";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Book} />
    </Router>
    );
  }
}

export default App;