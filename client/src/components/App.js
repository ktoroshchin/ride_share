/*jshint esversion: 6 */

import React, { Component } from 'react';
import axios from 'axios';
import ReservationsRender from './ReservationsRender'
import ReservationForm from './ReservationForm'
import Register from './Register'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Register/>
        <ReservationForm/>
        <ReservationsRender/>
      </div>
    );
  }
}

export default App;
