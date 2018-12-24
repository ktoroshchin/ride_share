
/*jshint esversion: 6 */
import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

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
        <NavbarBrand className="logo" href="/">RideShare</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem >
              <NavLink href="/login">DRIVER LOGIN</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="/register">DRIVER REGISTER</NavLink>
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
          <NavbarBrand className="logo" href="/">RideShare</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                  <span className="greeting">Hello, {username}</span>
                  <NavLink href="/my-reservations">RESERVATIONS</NavLink>
                </NavItem>
                <NavItem className="logout-link" onClick={this.props.deleteUser}>
                  <NavLink href="/">LOGOUT</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
     </div>
    )
  }
}
export default NavBar;
