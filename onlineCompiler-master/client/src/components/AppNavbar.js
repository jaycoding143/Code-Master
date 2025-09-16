import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { logout } from '../actions/authActions'
import { Navbar, Nav, Container, ButtonGroup, Button } from 'react-bootstrap';
import './navbar.css'


export class AppNavbar extends Component {
    state = {
        open: false
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                    <Nav.Link href="/files"><span className='nav-text'>Files</span></Nav.Link>
                    <Nav.Link onClick={this.props.logout} href="/"><span className='nav-text'>Logout</span></Nav.Link>
                    <span className="navbar-text mr-3">
                        <strong className='nav-text'>{ user ? `Welcome ${user.name}` : '' }</strong>
                    </span>
            </Fragment>
        )

        const guestLinks = (
            <Fragment>
                    <Nav.Link href="/register"><span className='nav-text'>Register</span></Nav.Link>
                    <Nav.Link href="/login"><span className='nav-text'>Login</span></Nav.Link>
            </Fragment>
        )

        return (
           <Navbar expand="md" className={`mb-5 nav ${this.props.darkMode ? 'navbar-dark-custom' : 'navbar-light-custom'}`}>

                <Container>
                    <Navbar.Brand href="/"><span className='nav-text'>Online Compiler</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar-collapse' />
                    <Navbar.Collapse id='navbar-collapse'>
                        <Nav className="mr-auto" navbar>
                                <Nav.Link href="/"><span className='nav-text'>Home</span></Nav.Link>
                            {isAuthenticated ? authLinks : guestLinks}
                        </Nav>
                        {/* <ButtonGroup toggle className="mb-2 theme-button">
                            <Button
                                type="checkbox"
                                variant={this.props.darkMode ? "outline-dark" : "dark"}
                                onClick={this.props.toggleMode}
                                className='toggle-btn'
                            >
                            {this.props.darkMode ? "Light Mode" : "Dark Mode"}
                            </Button>
                        </ButtonGroup> */}

                        <div className="theme-button-wrapper d-flex align-items-center mt-2 mt-md-0">
                            <Button
                                variant={this.props.darkMode ? "outline-light" : "dark"}
                                onClick={this.props.toggleMode}
                                className="toggle-btn"
                            >
                                {this.props.darkMode ? "Light Mode" : "Dark Mode"}
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(AppNavbar)