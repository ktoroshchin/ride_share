



/*jshint esversion: 6 */
import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default class Register extends Component {

  state = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    vehicle_type: '',
  }


  onChangeItem = (event) => {
    const target = event.target;
    const name = target.name;

    this.setState({
    [name]: target.value
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, first_name, last_name, vehicle_type } = this.state;
    axios.post('/register', { email: email, password: password, first_name: first_name, last_name: last_name,
    vehicle_type: vehicle_type }).then(data => {
      console.log(data)
    })
    .catch(function(error){
      console.log(error);
    })
  }



  render(){
    return(
    <div className="container">
      <Form onSubmit={this.handleSubmit}>
      <h3>Registration Form</h3>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder=""
          onChange={this.onChangeItem}  />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder=""
          onChange={this.onChangeItem}/>
        </FormGroup>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="text" name="first_name" id="name" placeholder=""
          onChange={this.onChangeItem}/>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input type="text" name="last_name" id="name" placeholder=""
          onChange={this.onChangeItem}/>
        </FormGroup>
        <FormGroup>
          <Label for="vehicleType">Vehicle Type</Label>
          <Input type="text" name="vehicle_type" id="name" placeholder=""
          onChange={this.onChangeItem}/>
        </FormGroup>
      <button type="submit" className="btn btn-success" color="primary">Submit</button>
      </Form>
    </div>
    )
  }
}


