
/*jshint esversion: 6 */
import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import Confirmation from './Confirmation'


export default class ReservationForm extends Component {

  state = {
    driver_name: '',
    departure_date: '',
    first_name: '',
    leaving_from: '',
    going_to: '',
    departure_time: '',
    phone_number: '',
    email: '',
    number_of_people: '',
    message: '',
    redirect: false,
    driverList: [],
  };



  onChangeItem = (event) => {
    const target = event.target;
    const name = target.name;

    if(target.value.trim() === ""){
      this.setState({
        [name]: null
      })
    }

    this.setState({
      [name]: target.value,
    });
  }

  handleMesssage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { driver_name,departure_date,first_name,
      leaving_from,going_to,departure_time,phone_number,email,
      number_of_people,message } = this.state;
      if(!this.state.driver_name || !this.state.departure_date || !this.state.first_name ||
      !this.state.leaving_from || !this.state.going_to || !this.state.departure_time || !this.state.phone_number || !this.state.email ||
      !this.state.number_of_people){
        alert("All fields required to make reservation, EXCEPT 'Message to Driver'")
      } else {

        axios.post('/home', { driver_name: driver_name, departure_date: departure_date,
           first_name: first_name, leaving_from: leaving_from, going_to: going_to,
           departure_time: departure_time, phone_number: phone_number, email: email,
           number_of_people: number_of_people, message: message}
        ).then( data  => {
        })
        this.setState({
          redirect: true
        })
      }
    }


  componentWillMount(){
    this.getDrivers()
    }

  getDrivers = () => {
    axios.get('/driverInfo')
    .then( data  => {
      this.setState({
        driverList: data.data
        })
      })
    }


  render() {
  const { redirect } = this.state
  const { driver_name, departure_date, departure_time, going_to, leaving_from } = this.state
  if( redirect ){
    return  <Confirmation driver_name={driver_name} departure_date={departure_date} departure_time={departure_time} going_to={going_to} leaving_from={leaving_from}/>
  }

  return(
    <div className="container">
      <div className="col-12">
        <Form className="reservation-form" onSubmit={this.handleSubmit}>
          <h3>Reservation Form</h3>
          <FormGroup className="go">
            <Label for="selectDriver">Choose Driver:</Label>
            <Input type="select" name="driver_name" id="selectDriver" placeholder=""
              onChange={this.onChangeItem}>
              <option defaultValue></option>
              {this.state.driverList.map(( driver ) =>
            {
              return (<option key={driver.id}>{driver.first_name} {driver.last_name}</option>)
            })}

            </Input>
          </FormGroup>
            <FormGroup>
              <Label for="exampleDate">Departure Date</Label>
              <Input type="date" name="departure_date" id="exampleDate" placeholder=""
                onChange={this.onChangeItem} />
            </FormGroup>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input type="text" name="first_name" id="name" placeholder=""
                onChange={this.onChangeItem}/>
            </FormGroup>
            <FormGroup>
              <Label for="leavingFrom">Leaving from:</Label>
              <Input type="select" name="leaving_from" id="leavingFrom" placeholder=""
                onChange={this.onChangeItem}>
                <option defaultValue></option>
                <option>Ottawa</option>
                <option>Montreal</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="goingTo">Going to:</Label>
              <Input type="select" name="going_to" id="leavingFrom" placeholder=""
                onChange={this.onChangeItem}>
                <option defaultValue></option>
                <option>Ottawa</option>
                <option>Montreal</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="departureTime">Departure Time</Label>
              <Input type="select" name="departure_time" id="departureTime"
                onChange={this.onChangeItem}>
                <option defaultValue></option>
                <option>5:45</option>
                <option>6:45</option>
              </Input>
              <span><h6 className="warning">(Choose only your drivers available time)</h6></span>
            </FormGroup>
            <FormGroup>
              <Label for="phoneNumber">Phone Number</Label>
              <Input type="text" name="phone_number" id="phoneNumber" placeholder=""
                onChange={this.onChangeItem}/>
            </FormGroup>

            <FormGroup>
               <Label for="email">Email</Label>
               <Input type="email" name="email" id="email" placeholder=""
                 onChange={this.onChangeItem}/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Number of passengers</Label>
              <Input type="select" name="number_of_people" id="exampleSelect"
                onChange={this.onChangeItem}>
                <option defaultValue></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate">Message to Driver</Label>
              <Input type="textarea" name="message" id="exampleDate" placeholder=""
                onChange={this.handleMesssage} />
            </FormGroup>
            <button type="submit" className="btn reservation-submit">Submit</button>
          </Form>
        </div>
      </div>
    );
  }
}

