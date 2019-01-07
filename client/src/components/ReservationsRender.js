/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from 'axios';
import SingleReservationRender from './SingleReservationRender';


class ReservationsRender extends Component {
  state = {
    reservations: [],
    driverID: this.props.getUserID(),
  };

  componentDidMount(){
    var idObj = this.state.driverID;
    var id = idObj.id
    axios.get('/admin/'+id).then(response => {
      this.setState({
        reservations: response.data.filter(driver => driver)
      })
    })
  }

  render() {
    return(
      <div className="container">
        {this.state.reservations.map (({ id, first_name, leaving_from, going_to,
          phone_number, email, departure_date, departure_time, number_of_people, is_confirmed, message, created_at}, index) => {
        return (
            <div key={id}>
              <SingleReservationRender  {...this.state} deleteHandler={this.handleDelete} handler={this.handler} id={id} index={index} firstName={first_name} leavingFrom={leaving_from} goingTo={going_to} phoneNumber={phone_number}
                email={email} departureDate={departure_date} departureTime={departure_time} numberOfPeople={number_of_people}
                isConfirmed={is_confirmed} message={message} created_at={created_at} >
              </SingleReservationRender>
            </div>
          )})}
      </div>
    );
  }
}
export default ReservationsRender;
