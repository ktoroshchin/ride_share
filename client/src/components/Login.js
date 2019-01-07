
/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router'

export default class Login extends Component {

  state = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    redirect: false,
  }



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


  setUser = (data) => {
    this.props.setUserFirstName(data.data.token2);
    // this.props.setUserLastName(this.state.last_name);
    this.props.setUserID(data.data.token);
    this.setState({redirect:true});

  }



  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state;

    axios.post('/login', { email: email, password: password})
    .then(data => {
      console.log(data)
      data.data.user.forEach(obj => {
        this.setState({
          first_name: obj.first_name,
          last_name: obj.last_name,
        })
        this.setUser(data)
      })
    })
    .catch(error => {
      if(error){
        alert("wrong email or password")
      }
    });
}




  render(){
  const { redirect } = this.state;


  if( redirect ) {
    return <Redirect to='/my-reservations'/>
  }
    return(
      <div className="container">
        <Form className="row login-form" onSubmit={this.handleSubmit}>
          <h3 className="login">Login</h3>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder=""
              onChange={this.handleEmail}/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder=""
              onChange={this.handlePassword}/>
            </FormGroup>
            <button type="submit" className="btn submit-button">Submit</button>
            <a href="/" className="btn cancel-button">Cancel</a>
        </Form>
      </div>
    )
  }
}