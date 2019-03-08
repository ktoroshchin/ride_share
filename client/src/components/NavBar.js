
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
    };

  renderAdmin(){
    if(this.props.getUserName() === null){
      return (
        <React.Fragment>
          <NavItem>
            <NavLink className="nav-link" to="/login">
              DRIVER LOGIN
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link" to="/register">
              DRIVER REGISTER
            </NavLink>
          </NavItem>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <NavItem>
            <span className="greeting">
              Hello, {this.props.getUserName().first_name}
            </span>
            <NavLink className="nav-link" to="/my-reservations">
              RESERVATIONS
            </NavLink>
          </NavItem>
          <NavItem onClick={this.props.deleteUser}>
            <NavLink to="/" className="nav-link logout-link" >
              LOGOUT
            </NavLink>
          </NavItem>
        </React.Fragment>
      )
    }
  }



  render(){
    return(
    <div className="top-nav">
      <Navbar className="navbar" dark expand="md">
        <NavbarBrand className="logo" href="/">RideSsshare</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.renderAdmin()}
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    )
  }
}
export default NavBar;
