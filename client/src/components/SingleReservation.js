/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from 'axios';

class SingleReservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      reservation: {}
    };
  }
  
  componentDidMount(){
    axios.get('/admin').then(response => {
      console.log(response)
    })
  }

  render() {
    if(this.state.loading === true) {
      return (
        <h1> loading...</h1>
      )
    }
    return(
      <div>
      <p>Hello</p>
      </div>
    );


  }
}

export default SingleReservation;
