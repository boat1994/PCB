import React from 'react';
import {Link } from 'react-router-dom';
import {
  Modal,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Button,
} from 'react-bootstrap';
import '../style/header.css';

class Header extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      login: false
    };
  }

  handleClose() {
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
  }

  checkLogin() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({login: true});
    } else {
      this.setState({login: false});
    }
  }

  logout() {
    localStorage.removeItem("token");
  }

  renderDropdwon() {

    if (this.state.login) {
      return <MenuItem onClick={this.logout}>Logout</MenuItem>;

    } else {
      return <MenuItem onClick={this.handleShow}>Login</MenuItem>;
    }
  }
  render() {

    return (<Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>
            PCB
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
            <NavItem componentClass={Link} href="/" to="/"  active={window.location.pathname ==='/'} >Home</NavItem>
            <NavItem componentClass={Link} href="/quote" to="/quote" active={window.location.pathname === '/quote'} >Quote</NavItem>

        </Nav>

        <Nav pullRight>
          <NavDropdown id='dropdown-menu' onClick={this.checkLogin.bind(this)} title='menu'>
            {this.renderDropdwon()}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

    </Navbar>);
  }
}

export default Header;
