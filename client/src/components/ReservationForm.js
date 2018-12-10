
/*jshint esversion: 6 */
import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
export default class RegistrationForm extends Component {

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
    message: ''
  };

  onChangeItem = (event) => {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { driver_name,departure_date,first_name,
      leaving_from,going_to,departure_time,phone_number,email,
      number_of_people,message } = this.state;

      axios.post('/home', { driver_name: driver_name, departure_date: departure_date,
         first_name: first_name, leaving_from: leaving_from, going_to: going_to,
         departure_time: departure_time, phone_number: phone_number, email: email,
         number_of_people: number_of_people, message: message, driver_id: 1 }
      ).then( data  => {

        console.log(data.data);
      })
      .catch(function(error){
        console.log(error);
      })
    }




  render() {

    return(
      <div className="container">
        <div className="row col-12 registrationform">
          <form onSubmit={this.handleSubmit}>
            <Form>
            <FormGroup>
              <Label for="selectDriver">Choose Driver:</Label>
              <Input type="select" name="driver_name" id="selectDriver" placeholder="Leaving from"
                onChange={this.onChangeItem} >
                <option>Bob</option>
                <option>John</option>
              </Input>
            </FormGroup>

              <FormGroup>
                <Label for="exampleDate">Departure Date</Label>
                <Input type="date" name="departure_date" id="exampleDate" placeholder="date placeholder"
                  onChange={this.onChangeItem} />
              </FormGroup>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input type="text" name="first_name" id="name" placeholder="first name"
                  onChange={this.onChangeItem}/>
              </FormGroup>
              <FormGroup>
                <Label for="leavingFrom">Leaving from:</Label>
                <Input type="select" name="leaving_from" id="leavingFrom" placeholder="Leaving from"
                  onChange={this.onChangeItem}>
                  <option>Ottawa</option>
                  <option>Montreal</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="goingTo">Going to:</Label>
                <Input type="select" name="going_to" id="leavingFrom" placeholder="Going to"
                  onChange={this.onChangeItem}>
                  <option>Ottawa</option>
                  <option>Montreal</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="departureTime">Departure Time</Label>
                <Input type="select" name="departure_time" id="departureTime"
                  onChange={this.onChangeItem}>
                  <option>5:45</option>
                  <option>6:45</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="phoneNumber">Phone Number</Label>
                <Input type="text" name="phone_number" id="phoneNumber" placeholder="(613)0000000"
                  onChange={this.onChangeItem}/>
              </FormGroup>

              <FormGroup>
                 <Label for="email">Email</Label>
                 <Input type="email" name="email" id="email" placeholder="email@email.com"
                   onChange={this.onChangeItem}/>
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">Number of passengers</Label>
                <Input type="select" name="number_of_people" id="exampleSelect"
                  onChange={this.onChangeItem}>
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
                <Input type="textarea" name="message" id="exampleDate" placeholder="date placeholder"
                  onChange={this.onChangeItem} />
              </FormGroup>
              <button type="submit" className="btn btn-success" color="primary">Submit</button>
            </Form>
          </form>
        </div>
      </div>
    );
  }
}