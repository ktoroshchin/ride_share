
/*jshint esversion: 6 */
import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

const formStyle ={
  width: '100%',
  marginTop: '3%'
}

const buttonStyle = {
  width: '100%'
}

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
         number_of_people: number_of_people, message: message}
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
        <div className="row col-12">
            <Form style={formStyle} onSubmit={this.handleSubmit}>
              <h3>Reservation Form</h3>
              <FormGroup className="go">
                <Label for="selectDriver">Choose Driver:</Label>
                <Input type="select" name="driver_name" id="selectDriver" placeholder=""
                  onChange={this.onChangeItem}>
                  <option selected disabled></option>
                  <option>Bob</option>
                  <option>John</option>
                  <option>test</option>
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
                    <option selected disabled></option>
                    <option>Ottawa</option>
                    <option>Montreal</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="goingTo">Going to:</Label>
                  <Input type="select" name="going_to" id="leavingFrom" placeholder=""
                    onChange={this.onChangeItem}>
                    <option selected disabled></option>
                    <option>Ottawa</option>
                    <option>Montreal</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="departureTime">Departure Time</Label>
                  <Input type="select" name="departure_time" id="departureTime"
                    onChange={this.onChangeItem}>
                    <option selected disabled></option>
                    <option>5:45</option>
                    <option>6:45</option>
                  </Input>
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
                    <option selected disabled></option>
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
                    onChange={this.onChangeItem} />
                </FormGroup>
                <button style={buttonStyle} type="submit" className="btn btn-success" color="primary">Submit</button>
              </Form>

        </div>
      </div>
    );
  }
}