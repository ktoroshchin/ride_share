/*jshint esversion: 6 */
import React, { Component } from "react";
import { ListGroupItem, ListGroup, Collapse } from 'reactstrap';
import axios from 'axios';
import SingleReservationRender from './SingleReservationRender'



class ReservationsRender extends Component {
  state = {
    reservations: [],
    driver_name: this.props.getUserName(),
  };

  // const  {userID} = this.props.getUserID;
  componentDidMount(){
    axios.get('/admin').then(response => {
      this.setState({
        reservations: response.data.filter(driver => driver.driver_name === this.state.driver_name)
      })
    })
  }


  render() {
    return (
      <div className="container">
        {this.state.reservations.map (({ id, first_name, leaving_from, going_to,
          phone_number, email, departure_date, departure_time, number_of_people, is_confirmed, message}, index) => {
        return (
            <div>
              <SingleReservationRender id= {index} firstName={first_name} leavingFrom={leaving_from} goingTo={going_to} phoneNumber={phone_number}
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
