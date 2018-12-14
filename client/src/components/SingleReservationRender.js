/*jshint esversion: 6 */
import React, { Component } from "react";
import { ListGroupItem, ListGroup, Collapse } from 'reactstrap';



class SingleReservationRender extends Component {

   state = {
     collapse: false,
   };



toggle = () => {
  this.setState({ collapse: !this.state.collapse });
}




render() {
  const { id, firstName, leavingFrom, goingTo, phoneNumber, email, departureDate, departureTime, numberOfPeople, isConfirmed, message } = this.props;

  return (
    <div className="accordion" id="accordionExample">

      <div className="card">
        <div className="card-header" id="headingOne">
            <button onClick={this.toggle} className="btn btn-link" type="button">
              <span>Order #{id}      Departure Date: {departureDate}</span>
            </button>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <div id="collapseOne">
            <div className="card-body">
            <ListGroup>
               <ListGroupItem>First Name: {firstName}</ListGroupItem>
               <ListGroupItem>Departure Date: {departureDate}</ListGroupItem>
               <ListGroupItem>Leaving From: {leavingFrom}</ListGroupItem>
               <ListGroupItem>Departure Time: {departureTime}</ListGroupItem>
               <ListGroupItem>Going To: {goingTo}</ListGroupItem>
               <ListGroupItem>Phone #: {phoneNumber}</ListGroupItem>
               <ListGroupItem>Email: {email}</ListGroupItem>
               <ListGroupItem>Number of Passengers: {numberOfPeople}</ListGroupItem>
               <ListGroupItem>Message: {message}</ListGroupItem>
             </ListGroup>
            </div>
          </div>
        </Collapse>
      </div>
    </div>)}
}

export default SingleReservationRender;
