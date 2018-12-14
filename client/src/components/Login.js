
/*jshint esversion: 6 */
import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router'
import { Link } from "react-router-dom";

export default class Login extends Component {

  state = {
    email: '',
    password: '',
    first_name: '',
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

  handleCancelButton = () => {
    return <Redirect to='/'/>
  }

  setUser = (data) => {
    this.props.setUserFirstName(this.state.first_name);
    // this.props.setUserLastName(this.state.last_name);
    this.setState({redirect:true});

  }



  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state;
    const arr = []
    console.log(arr)


    axios.get('/login').then(data => {
      data.data.map(obj => {
        if(this.state.email === obj.email && this.state.password === obj.password){
          arr.push(obj.email)
          arr.push(obj.password)
          this.setState({first_name: obj.first_name})
          this.setUser(data)
        }
      })
      if (arr.indexOf(email) === -1 || arr.indexOf(password) === -1) {
         alert("WRONG LOGIN or PASSWORD");
    }
  })
  }




render(){
  const { redirect } = this.state;


  if( redirect ) {
    return <Redirect to='/my-reservations'/>
  }
  return(
    <div className="container">
      <Form onSubmit={this.handleSubmit}>
        <h3>Login</h3>
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
          <button type="submit" className="btn btn-success" color="primary">Submit</button>
          <Button tag={Link} to="/" type="cancel" className="btn btn-danger" color="primary">Submit</Button>
      </Form>
      </div>
    )
  }
}