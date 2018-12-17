/*jshint esversion: 6 */
import React, { Component } from "react";
import { Badge } from 'reactstrap';

export default class Confirmation extends Component {




  render(){
    return(
      <div className="container confirmation">
        <div className="row confirmation-row">
          <h1 className="col-12 thank-you-row">Thank you for your reservation, {this.props.driver_name} will
          call or text you shortly to CONFIRM your trip.</h1>
        <h3 className="col-12">Departure date: {this.props.departure_date}</h3>
          <h3 className="col-12">Departure time: {this.props.departure_time}</h3>
          <h3 className="col-12">From: {this.props.leaving_from}</h3>
          <h3 className="col-12">To: {this.props.going_to}</h3>
          <h5 className="col-12 thanks-from-rideshare">Thank you for using RideShare!</h5>
        </div>
    </div>
    )
  }
}