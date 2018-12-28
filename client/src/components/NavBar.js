
/*jshint esversion: 6 */
import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,

} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {

  state = {
    isOpen: false
  };



  toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }



  render(){
    const username = this.props.getUserName();

    if(username === undefined){
    return(
    <div className="top-nav">
      <Navbar className="navbar" dark expand="md">
        <NavbarBrand className="logo" href="/">RideSsshare</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem >
              <NavLink className="nav-link" to="/login">DRIVER LOGIN</NavLink>
            </NavItem>
            <NavItem >
              <NavLink className="nav-link" to="/register">DRIVER REGISTER</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    )
  }
    return(
      <div className="top-nav">
        <Navbar dark expand="md">
          <NavbarBrand className="logo" href="/">RideSsshare</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                  <span className="greeting">Hello, {username}</span>
                  <NavLink className="nav-link" to="/my-reservations">RESERVATIONS</NavLink>
                </NavItem>
                <NavItem className="logout-link" onClick={this.props.deleteUser}>
                  <NavLink className="nav-link" to="/">LOGOUT</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
     </div>
    )
  }
}
export default NavBar;
