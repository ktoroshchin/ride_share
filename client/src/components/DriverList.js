/*jshint esversion: 6 */
import React, { Component } from "react";
import PhoneNumber from 'react-phone-number'
import { ListGroupItem, ListGroup, Collapse } from 'reactstrap';



class DriverList extends Component {


    state = {
      collapse: false,
    };


    toggle = () => {
        this.setState({
          collapse: !this.state.collapse
        })
      }


  render(){
    return(



      <div className="accordion-driver col-xs-12" >
        <div className="card driver-card">
          <div className="card-header" >
              <button onClick={this.toggle} className="btn btn-link" type="button">
                <div className="row driver-list-container" col-lg-12>
                    <span className="col-12">Test Testing</span>
                    <span className="col-12" id="driver-route">Ottawa  Montreal</span>
                </div>
              </button>
          </div>
        <Collapse isOpen={this.state.collapse}>
            <div id="collapseOne">
              <div className="card-body">
              <ListGroup>
                 <ListGroupItem><span className="textPreFix">Driver Name: Test Testing</span> </ListGroupItem>
                 <ListGroupItem><span className="textPreFix">Pick-Up/Drop-Off in Ottawa:</span> </ListGroupItem>
                 <ListGroupItem><span className="textPreFix">Pick-Up/Drop-Off in Montreal:</span> </ListGroupItem>
                 <ListGroupItem><span className="textPreFix">Departures time from OTTAWA:</span> </ListGroupItem>
                 <ListGroupItem><span className="textPreFix">Departure time from MONTREAL:</span> </ListGroupItem>
                 <ListGroupItem><span className="textPreFix">Phone #:</span><a href="tel:+1(613)617-4482"  data-rel="external">+1(613)617-4482</a></ListGroupItem>
                 <ListGroupItem><span className="textPreFix">Email:</span> </ListGroupItem>
                 <ListGroupItem><span className="textPreFix">Price: $20</span> </ListGroupItem>
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