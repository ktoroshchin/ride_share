
/*jshint esversion: 6 */
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import LoggedInNavBar from "./LoggedInNavBar";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



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
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem >
            <Link to="/login">DRIVER LOGIN</Link>
          </NavItem>
          <NavItem >
            <Link to="/register">DRIVER REGISTER</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    </div>
  )}
  return(
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">reactstrap</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>Hello, {this.props.getUserName}
                  <NavItem onClick={this.props.deleteUser}>
                    <Link to="/">LOGOUT</Link>
                  </NavItem>
                </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
        </div>
      )
  }
}
export default NavBar;
