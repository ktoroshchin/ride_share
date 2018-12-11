
/*jshint esversion: 6 */
import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class Register extends Component {

render(){
  return(
    <div className="container">
      <Form onSubmit={this.handleSubmit}>
        <h3>Login</h3>
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
          <button type="submit" className="btn btn-success" color="primary">Submit</button>
        </Form>
      </div>









  )
}

}