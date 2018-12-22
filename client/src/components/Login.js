
/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
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
    let emailArr = [];
    console.log(emailArr)
    let first;
    let last;
    let fullname;
    let hash;




    axios.get('/login').then(data => {
      data.data.map(obj => {
        emailArr.push(obj.email)
        if(email === obj.email){
          hash = obj.password
          bcrypt.compare(password, hash, (err, res) => {
            console.log(res)

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
              alert("PASSWORD");
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
          <Button tag={Link} to="/" type="cancel" className="btn cancel-button">Cancel</Button>
      </Form>
      </div>
    )
  }
}