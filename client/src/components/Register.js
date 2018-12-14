
/*jshint esversion: 6 */
import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

export default class Register extends Component {

  state = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    vehicle_type: '',
    redirect: false,
  };


  handleEmail = (event) => {
    const target = event.target;
    const name = target.name;

    if(target.value.trim() === '') {
      this.setState({email: null});
    } else {
      this.setState({
        [name]: target.value
      });
    }
  }

  handlePassword = (event) => {
    const target = event.target;
    const name = target.name;

    if(target.value.trim() === '') {
      this.setState({password: null});
    } else {
      this.setState({
        [name]: target.value
      });
    }
  }

    handleFirstName = (event) => {
      const target = event.target;
      const name = target.name;

      if(target.value.trim() === '') {
        this.setState({first_name: null});
      } else {
        this.setState({
          [name]: target.value
        });
      }
    }


    handleLastName = (event) => {
      const target = event.target;
      const name = target.name;

      if(target.value.trim() === '') {
        this.setState({last_name: null});
      } else {
        this.setState({
          [name]: target.value
        });
      }
    }

    handleVehicleType = (event) => {
      const target = event.target;
      const name = target.name;

      if(target.value.trim() === '') {
        this.setState({vehicleType: null});
      } else {
        this.setState({
          [name]: target.value
        });
      }
    }

    setUser = (data) => {
      this.props.setUserFirstName(this.state.first_name);
      this.props.setUserLastName(this.state.last_name);
      this.props.setUserID(data.data[0].id);
      this.setState({redirect:true});
    }

  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password, first_name, last_name, vehicle_type } = this.state;

    axios.post('/register', { email: email, password: password, first_name: first_name, last_name: last_name,
    vehicle_type: vehicle_type }).then(data => {
      this.setUser(data)
      })
    }



  render() {
    const { redirect } = this.state;

    if( redirect ) {
      return <Redirect to='/my-reservations'/>
    }
    return(
    <div className="container">
      <Form onSubmit={this.handleSubmit}>
      <h3>Registration Form</h3>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder=""
          onChange={this.handleEmail}  />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Create Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder=""
          onChange={this.handlePassword}/>
        </FormGroup>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="text" name="first_name" id="first_name" placeholder=""
          onChange={this.handleFirstName}/>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input type="text" name="last_name" id="last_name" placeholder=""
          onChange={this.handleLastName}/>
        </FormGroup>
        <FormGroup>
          <Label for="vehicleType">Vehicle Type</Label>
          <Input type="text" name="vehicle_type" id="vehicle_type" placeholder=""
          onChange={this.handleVehicleType}/>
        </FormGroup>
      <button type="submit" className="btn btn-success" color="primary">Submit</button>
      <Button tag={Link} to="/" type="cancel" className="btn btn-danger" color="primary">Cancel</Button>
    </Form>
    </div>
    )

    }
  }
