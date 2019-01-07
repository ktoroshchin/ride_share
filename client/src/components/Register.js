
/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router'

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
        this.props.setUserFirstName(data.data.token2);
        // this.props.setUserLastName(this.state.last_name);
        this.props.setUserID(data.data.token);
        this.setState({redirect:true});
    }

    handleSubmit = (event) => {
      event.preventDefault()
      const { email, password, first_name, last_name, vehicle_type } = this.state;

      if(!first_name || !email || !password ||
      !last_name || !vehicle_type){
        alert("Please fill out all required fields")
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            this.setState({
              password: hash
            })
            axios.post('/register', { email: email, password: hash, first_name: first_name, last_name: last_name,
            vehicle_type: vehicle_type }).then(data => {
              console.log(data)
              this.setUser(data)
            })
            .catch(error => {
              if(error){
                console.log(error)
                alert("Please fill in required fields")
              }
            })
          });
        });
      }
    }



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
      <button type="submit" className="btn submit-button">Submit</button>
      <a href="/" className="btn cancel-button">Cancel</a>
    </Form>
    </div>
    )
  }
}
