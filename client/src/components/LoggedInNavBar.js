import React, {Component} from "react";
import { Link } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
} from 'reactstrap';



export default class LoggedInNavBar extends Component{

    state = {
      isOpen: false
    };



    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

render(){
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