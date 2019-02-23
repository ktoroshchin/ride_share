
/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router'

export default class Register extends Component {

  state = {
    redirect: false,
  };


  handleInputs = (event) => {
    const target = event.target;
    const name = target.name;

    if(target.value.trim() === '') {
      this.setState({[name]: null});
    } else {
      this.setState({
        [name]: target.value
      });
    }
  };

    setUser = (data) => {
        this.props.setUserFirstName(data.data.token2);
        this.props.setUserID(data.data.token);
        this.setState({redirect:true});
    };

    handleSubmit = (event) => {
      event.preventDefault()
      const { email, password, first_name, last_name, vehicle_type } = this.state;
      if(!first_name || !email || !password ||
      !last_name || !vehicle_type){
        alert("Please fill out all required fields")
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            axios.post('/register', { email: email, password: hash, first_name: first_name, last_name: last_name,
            vehicle_type: vehicle_type })
            .then(data => {
              this.setUser(data)
            })
            .catch(error => {
            if(error){
              console.log("something wrong with registration")
            }
          })
        })
      })
    }
  };



  render() {
  const { redirect } = this.state;

    if( redirect ) {
      return <Redirect to='/my-reservations'/>
    }
    return(
    <div className="container">
      <Form className="row register-form" onSubmit={this.handleSubmit}>
      <h3 className="register">Registration Form</h3>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail"
          onChange={this.handleInputs}  />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Create Password</Label>
          <Input type="password" name="password" id="examplePassword"
          onChange={this.handleInputs}/>
        </FormGroup>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="text" name="first_name" id="first_name"
          onChange={this.handleInputs}/>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input type="text" name="last_name" id="last_name"
          onChange={this.handleInputs}/>
        </FormGroup>
        <FormGroup>
          <Label for="vehicleType">Vehicle Type</Label>
          <Input type="text" name="vehicle_type" id="vehicle_type"
          onChange={this.handleInputs}/>
        </FormGroup>
      <button type="submit" className="btn submit-button">Submit</button>
      <a href="/" className="btn cancel-button">Cancel</a>
    </Form>
    </div>
    )
  }
}
