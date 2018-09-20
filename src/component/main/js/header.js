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
import { connect } from 'react-redux'
import { setLocale } from 'react-redux-i18n'
import '../style/header.css';
const locale = require('react-redux-i18n').I18n

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

  handleChangLanguage = (l) => {
    if (this.props.l !== l) {
      this.props.setLang(l)
    }
  }

  render(){

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
            <NavItem componentClass={Link} href="/" to="/"  active={window.location.pathname ==='/'} >{locale.t('Home')}</NavItem>
            <NavItem componentClass={Link} href="/quote" to="/quote" active={window.location.pathname === '/quote'} >{locale.t('Quote')}</NavItem>
        </Nav>

        <Nav pullRight>
          <div className="MenuHeader">
            <a href="#"onClick={() => this.handleChangLanguage('en')}>
              <span className="lableLang">EN</span>
            </a>
            |
            <a href="#" onClick={() => this.handleChangLanguage('th')}>
              <span className="lableLang">ไทย</span>
            </a>
          </div>

          <NavDropdown id='dropdown-menu' onClick={this.checkLogin.bind(this)} title={locale.t('Menu')}>
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


const mapStateToProps = state => ({
  l: state.i18n.locale,
})

const mapDispatchToProps = dispatch => ({
  setLang: (l) => {
    console.log(l);
    dispatch(setLocale(l))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
