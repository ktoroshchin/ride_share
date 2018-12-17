/*jshint esversion: 6 */
import React, { Component } from "react";
import { ListGroupItem, ListGroup, Collapse, Badge  } from 'reactstrap';

const arr = JSON.parse(localStorage.getItem('notification')) || [];
console.log(arr)

class SingleReservationRender extends Component {

  state = {
    collapse: false,
    remove: true,
    color: "#ac3b61"
  };



  toggle = () => {
      this.setState({
        collapse: !this.state.collapse
      })
    }

  //if id exist in local storage notification removes//
  componentDidMount(){
      let newTime = this.props.created_at.slice(11,22)
      if(arr.indexOf(newTime) != -1) {
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
    if(arr.indexOf(newTime) == -1){
      arr.push(newTime)
      localStorage.setItem('notification', JSON.stringify(arr))
      this.setState({
        remove:false
      })
    }
  }




render() {
  const { id, firstName, leavingFrom, goingTo, phoneNumber, email, departureDate, departureTime, numberOfPeople, isConfirmed, message, created_at } = this.props;


  return (
    <div className="col-xs-12 accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
            <button className="container" onClick={this.toggle} className="btn btn-link" type="button">

              <div onClick={this.handler}  className="row container-for-order" col-lg-12>
                  <span className="col-12">Order #{id}</span>
                  <span className="col-12 departDate">Departure Date: {departureDate}</span>
                  {this.state.remove ? (<span className="col-12"><Badge className="badge" >New</Badge></span>):<span col-12><Badge style={{visibility:"hidden"}}>New</Badge></span>}
              </div>
            </button>
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
               <ListGroupItem><a id="phone-link" href="tel:+{phoneNumber}" data-rel="external">{phoneNumber}</a></ListGroupItem>
               <ListGroupItem><span className="textPreFix">Email:</span> {email}</ListGroupItem>
               <ListGroupItem><span className="textPreFix">Number of Passengers:</span> {numberOfPeople}</ListGroupItem>
               <ListGroupItem><span className="textPreFix">Message:</span> {message}</ListGroupItem>
             </ListGroup>
            </div>
          </div>
        </Collapse>
      </div>
    </div>)}
}

export default SingleReservationRender;
