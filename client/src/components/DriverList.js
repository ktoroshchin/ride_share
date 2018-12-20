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
              <button onClick={this.toggle} className="btn btn-link container" type="button">
                <div className="row driver-list-container" col-lg-12>
                    <span className="col-12">Test Testing</span>
                    <span className="col-12" id="driver-route">Ottawa <i class="fas fa-arrows-alt-h"></i> Montreal
                    {this.state.collapse ? <span className="arrow"><i class="fas fa-caret-up"></i></span>:<span className="arrow"><i class="fas fa-caret-down"></i></span> }</span>
                </div>
              </button>

          </div>
        <Collapse isOpen={this.state.collapse}>
            <div id="collapseOne">
              <div className="card-body">
              <ListGroup>
                 <ListGroupItem><span className="textPreFix">Driver Name</span>: Test Testing </ListGroupItem>
                 <ListGroupItem><span className="textPreFix">Pick-Up/Drop-Off in Ottawa</span>:<a href="https://goo.gl/maps/8cYXKPBJyJx">153 Laurier Ave E, Ottawa, ON K1N 6N8</a></ListGroupItem>
                 <ListGroupItem><span className="textPreFix">Pick-Up/Drop-Off in Montreal</span>:<a href="https://goo.gl/maps/as8Ye2Dabjx">4819 Av Van Horne Local 117a, Montreal, QC H3W 1J2</a></ListGroupItem>
                 <ListGroupItem><span className="textPreFix">Departures time from OTTAWA</span>: 10am; 4pm; 9pm </ListGroupItem>
                 <ListGroupItem><span className="textPreFix">Departure time from MONTREAL</span>: 1pm; 4pm; 6pm </ListGroupItem>
                 <ListGroupItem><span className="textPreFix">Phone #</span>:<a href="tel:+1(613)617-4482"  data-rel="external">+1(613)617-4482</a></ListGroupItem>
                 <ListGroupItem><span className="textPreFix">Email</span>: </ListGroupItem>
                 <ListGroupItem><span className="textPreFix">Price:</span> $20 </ListGroupItem>
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