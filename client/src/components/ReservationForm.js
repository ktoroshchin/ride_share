
/*jshint esversion: 6 */
import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class RegistrationForm extends Component {

  render() {

    return(
      <div className="container">
        <div className="row col-12 registrationform">
          <Form className="form-width">
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input type="text" name="name" id="name" placeholder="first name" />
            </FormGroup>
            <FormGroup>
              <Label for="leavingFrom">Leaving from:</Label>
              <Input type="select" name="select" id="leavingFrom" placeholder="Leaving from" >
                <option>Ottawa</option>
                <option>Montreal</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="goingTo">Going to:</Label>
              <Input type="select" name="select" id="leavingFrom" placeholder="Going to">
                <option>Ottawa</option>
                <option>Montreal</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="phoneNumber">Phone Number</Label>
              <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="(613)0000000" />
            </FormGroup>

            <FormGroup>
               <Label for="email">Email</Label>
               <Input type="email" name="email" id="email" placeholder="email@email.com" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate">Date</Label>
              <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Select Time</Label>
              <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                <option>5:45</option>
                <option>6:45</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Number of passengers</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </Input>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}