/*jshint esversion: 6 */
import React, { Component } from "react";
import { Badge } from 'reactstrap';

export default class Confirmation extends Component {




  render(){
    return(
      <div className="container">
        <h1>Thank you for your reservation, {this.props.driver_name} will
        call or text you shortly to CONFIRM your trip</h1>
        <h2>Departure date: {this.props.departure_date}</h2>
        <h2>Departure time: {this.props.departure_time}</h2>
        <h2>From: {this.props.leaving_from}</h2>
        <h2>To: {this.props.going_to}</h2>
      </div>
    )
  }
}