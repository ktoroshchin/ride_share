/*jshint esversion: 6 */
import React, { Component } from "react";
import { ListGroupItem, ListGroup, Collapse, Badge  } from 'reactstrap';
import PhoneNumber from 'react-phone-number'
import axios from 'axios';
import { Redirect } from 'react-router'

const arr = JSON.parse(localStorage.getItem('notification')) || [];


class SingleReservationRender extends Component {

  state = {
    collapse: false,
    remove: true,
    redirect: false,
  };



  toggle = () => {
      this.setState({
        collapse: !this.state.collapse
      })
    }







  //if id exist in local storage notification removes//
  componentDidMount(){
      let newTime = this.props.created_at.slice(11,22)
      if(arr.indexOf(newTime) !== -1) {
        this.setState({
          remove:false
        })
      }
    }


  //store id in local storage on click and remove notification, do not store duplicates id's//
  handler = () => {
    let created_at = this.props.created_at
    let newTime = created_at.slice(11,22)
    console.log(newTime)
    if(arr.indexOf(newTime) === -1){
      arr.push(newTime)
      localStorage.setItem('notification', JSON.stringify(arr))
      this.setState({
        remove:false,
        id: this.props.id
      })
    }
  }

//onClick delete order from DB and redirect to the same page to update info
  handleDelete = (event) => {
    event.preventDefault()
    let id = this.props.id
    axios.post("/admin/"+id)
    .then( response => {
      console.log(response)
    })
    this.setState({
      redirect: true,
    })
  }




render() {
  const { id, index, firstName, leavingFrom, goingTo, phoneNumber, email, departureDate, departureTime, numberOfPeople, message} = this.props;
  const { redirect } = this.state;


  if( redirect ){
    return  <Redirect to='/my-reservations'/>
  }

  return (
    <div className="col-xs-12 accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
            <button className="container btn btn-link" onClick={this.toggle} type="button">
              <div onClick={this.handler}  className="row container-for-order" col-lg-12>
                  <span className="col-12">Order #{index}</span>
                  <span className="col-12 departDate">Departure Date: {departureDate}</span>
                  {this.state.remove ? (<span className="col-12"><Badge className="badge" >New</Badge></span>):<span col-12><Badge style={{visibility:"hidden"}}>New</Badge></span>}
              </div>
            </button>
        </div>
        <div className="container delete-button">
            <button onClick={this.handleDelete} id={id}  className="btn btn-link delete" type="button">Delete</button>
        </div>
      <Collapse isOpen={this.state.collapse}>
          <div id="collapseOne">
            <div className="card-body">
            <ListGroup>
               <ListGroupItem><span className="textPreFix">First Name:</span> {firstName}</ListGroupItem>
               <ListGroupItem><span className="textPreFix">Departure Date:</span> {departureDate}</ListGroupItem>
               <ListGroupItem><span className="textPreFix">Leaving From:</span> {leavingFrom}</ListGroupItem>
               <ListGroupItem><span className="textPreFix">Departure Time:</span> {departureTime}</ListGroupItem>
               <ListGroupItem><span className="textPreFix">Going To:</span> {goingTo}</ListGroupItem>
               <ListGroupItem><span className="textPreFix">Phone #:</span><PhoneNumber number={phoneNumber} isLinked={true} style={{textColor:"black"}} /></ListGroupItem>
               <ListGroupItem><span className="textPreFix">Email:</span> {email}</ListGroupItem>
               <ListGroupItem><span className="textPreFix">Number of Passengers:</span> {numberOfPeople}</ListGroupItem>
               <ListGroupItem><span className="textPreFix">Message:</span> {message}</ListGroupItem>
             </ListGroup>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
    )
  }
}
export default SingleReservationRender;
