/*jshint esversion: 6 */

import React, { Component } from 'react';
import axios from 'axios';
import ReservationsRender from './ReservationsRender'


class App extends Component {

  render() {
    return (
      <div className="App">
        <ReservationsRender/>
      </div>
    );
  }
}

export default App;
