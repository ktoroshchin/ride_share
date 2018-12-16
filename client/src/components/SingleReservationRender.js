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
      if(arr.indexOf(this.props.id) != -1) {
        this.setState({
          remove:false
        })
      }
    }


  //store id in local storage on click and remove notification, do not store duplicates id's//
  handler = () => {
    let orderID = this.props.id
    if(arr.indexOf(orderID) == -1){
      arr.push(orderID)
      localStorage.setItem('notification', JSON.stringify(arr))
      this.setState({
        remove:false
      })
    }
  }




render() {
  const { id, firstName, leavingFrom, goingTo, phoneNumber, email, departureDate, departureTime, numberOfPeople, isConfirmed, message } = this.props;


  return (
    <div className="accordion" id="accordionExample">

      <div className="card">
        <div className="card-header" id="headingOne">
            <button onClick={this.toggle} className="btn btn-link" type="button">

              <div  onClick={this.handler}  className="container-for-order" col-lg-12>
                  <span col-lg-4>Order #{id}</span>
                  <span col-lg-4 className="departDate">Departure Date: {departureDate}</span>
                  {this.state.remove ? (<span col-lg-4><Badge className="badge" >New</Badge></span>):<span col-lg-4><Badge style={{visibility:"hidden"}}>New</Badge></span>}

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
               <ListGroupItem><a id="phone-link" href="tel:{phoneNumber}"><span className="textPreFix">Phone #:</span> {phoneNumber}</a></ListGroupItem>
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
