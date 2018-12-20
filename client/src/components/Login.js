
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
    last_name: '',
    fullname: '',
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
    this.props.setUserFullName(this.state.fullname);
    this.props.setUserFirstName(this.state.first_name);
    this.props.setUserLastName(this.state.last_name);
    this.setState({redirect:true});

  }



  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state;
    const arr = []
    var first;
    var last;
    var fullname;



    axios.get('/login').then(data => {
      data.data.map(obj => {
        if(this.state.email === obj.email && this.state.password === obj.password){
          arr.push(obj.email)
          arr.push(obj.password)
          this.setState({first_name: obj.first_name})
          this.setState({last_name: obj.last_name})
          var first_name = this.state.first_name;
          var last_name = this.state.last_name;
            if(first_name.indexOf("") !== -1 || last_name.indexOf("") !== -1){
              first = first_name.replace(/\s/g, "")
              last = last_name.replace(/\s/g, "")
            }
          fullname = first+" "+last
          this.setState({fullname: fullname})
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
          <Button tag={Link} to="/" type="cancel" className="btn cancel-button">Cancel</Button>
      </Form>
      </div>
    )
  }
}