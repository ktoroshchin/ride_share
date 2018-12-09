/*jshint esversion: 6 */
import React, { Component } from "react";
import { ListGroupItem, ListGroup, Collapse } from 'reactstrap';
import axios from 'axios';
import SingleReservationRender from './SingleReservationRender'

class ReservationsRender extends Component {
  state = {
    reservations: [],
  };


  componentDidMount() {
    axios.get('/admin').then(response => {
      this.setState({
        reservations: response.data.filter(driver => driver.driver_id === 1 )
      })
    })
  }
  render() {
    return (
      <div className="container">
        {this.state.reservations.map (({ id, first_name, leaving_from, going_to,
          phone_number, email, departure_date, departure_time, number_of_people, is_confirmed, message}) => {
        return (
            <div>
              <SingleReservationRender id={id} firstName={first_name} leavingFrom={leaving_from} goingTo={going_to} phoneNumber={phone_number}
                email={email} departureDate={departure_date} departureTime={departure_time} numberOfPeople={number_of_people}
                isConfirmed={is_confirmed} message={message} >
              </SingleReservationRender>
            </div>
)})}
      </div>
    );
  }
}



export default ReservationsRender;
