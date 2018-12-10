/*jshint esversion: 6 */

import React, { Component } from 'react';
import axios from 'axios';
import ReservationsRender from './ReservationsRender'
import ReservationForm from './ReservationForm'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ReservationForm/>
        <ReservationsRender/>
      </div>
    );
  }
}

export default App;
