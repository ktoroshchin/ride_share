/*jshint esversion: 6 */
import React, { Component } from "react";




class DriverList extends Component {

  render(){
    return(



      <div className="col-xs-12 accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
              <button className="container" onClick={this.toggle} className="btn btn-link" type="button">
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
export default DriverList;