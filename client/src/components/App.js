/*jshint esversion: 6 */

import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container} from 'reactstrap';

import ReservationsRender from './ReservationsRender'
import ReservationForm from './ReservationForm'
import Register from './Register'
import Login from './Login'


const cookies = new Cookies();
const setUserID = function(userID) {
  cookies.set('userID', userID, {path: '/'})
}
const setUserFirstName = function(userFirstName) {
  cookies.set('userFirstName', userFirstName, {path: '/'});
}
const setUserLastName = function(userLastName) {
  cookies.set('userLastName', userLastName, {path: '/'});
}
const getUserID = function() {
  return cookies.get('userID');
}
const getUserName = function() {
  return cookies.get('userFirstName')
}


const deleteUser = function() {
  cookies.remove('userID');
  cookies.remove('userFirstName');
  cookies.remove('userLastName');
}


class App extends Component {

  render() {
    return (
      <div>
      <Router>
        <div className="App">
          <Container className="mainContainer p-0">
            <Route exact path="/" component={ReservationForm}/>
            <Route path="/register" render={() => <Register setUserFirstName={setUserFirstName} setUserLastName={setUserLastName} setUserID={setUserID} getUserID={getUserID}/>} />
            <Route path="/login" render={() => <Login setUserFirstName={setUserFirstName} setUserLastName={setUserLastName} setUserID={setUserID} getUserName={getUserName} getUserID={getUserID}/>} />
            <Route path="/my-reservations" render={() => <ReservationsRender  getUserName={getUserName}/>} />

          </Container>
        </div>
      </Router>
    </div>
    );
  }
}

export default App;
