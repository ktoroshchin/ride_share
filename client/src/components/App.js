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
import Confirmation from './Confirmation'
import NavBar from './NavBar'



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
    state = {
      loading: true,
    };




    componentDidMount() {
      // the setTimeout just simulates an async action, after which the component will render the content
      setTimeout(() => this.setState({ loading: false }), 1500);
    }

  render() {
    const { loading } = this.state;
    if(loading) {
      return (<div className="preload-title">
        Loading page...
      </div>)
    }
    return (
        <Router>
          <div className="App">
            <NavBar deleteUser={deleteUser} getUserName={getUserName} />
            <Container className="mainContainer">
              <Route exact path="/" render={() => <ReservationForm getUserName={getUserName}/>}/>
              <Route path="/register" render={() => <Register setUserFirstName={setUserFirstName} setUserLastName={setUserLastName} setUserID={setUserID} getUserID={getUserID}/>} />
              <Route path="/login" render={() => <Login setUserFirstName={setUserFirstName} setUserLastName={setUserLastName} setUserID={setUserID} getUserName={getUserName} getUserID={getUserID}/>} />
              <Route path="/my-reservations" render={() => <ReservationsRender  getUserName={getUserName}/>} />
              <Route path="/confirmation" component={Confirmation}/>
            </Container>
        </div>
        </Router>

    );
  }
}

export default App;
