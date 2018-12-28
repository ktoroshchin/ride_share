
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


  setUser = (data) => {
    this.props.setUserFullName(this.state.fullname);
    this.props.setUserFirstName(this.state.first_name);
    this.props.setUserLastName(this.state.last_name);
    this.setState({redirect:true});

  }



  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state;
    let emailArr = [];
    let first;
    let last;
    let fullname;
    let hash;

    axios.get('/login').then((data) => {
      data.data.forEach(obj => {
        emailArr.push(obj.email)
        if(email === obj.email){
          hash = obj.password
          bcrypt.compare(password, hash, (err, res) => {
            if(res) {
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
            } else {
              alert("WRONG PASSWORD");
            }
          })
        }
    })
    if(emailArr.indexOf(email) === -1){
      alert("WRONG EMAIL")
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
            <a href="/" className="btn cancel-button">Cancel</a>
        </Form>
      </div>
    )
  }
}