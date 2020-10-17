import React from 'react'
import {
  Container,
  Collapse, Navbar, NavbarToggler, NavbarBrand,
  Nav,
  Row, Col,
  Form, Input, Button
} from 'reactstrap'
import {Link} from 'react-router-dom'

// Import image
import Logo from '../assets/img/logo.svg'
import Cart from '../assets/img/shopping-cart (2) 1.svg'
import Search from '../assets/img/Search.svg'
import Filter from '../assets/img/filter 1.svg'

const {REACT_APP_BACKEND_URL} = process.env

class NavigationBar2 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      navbarOpen: false
    }
   }
  render(){
    return(
      <Navbar color="faded" light expand="md" className="shadow">
          <Container>
            <NavbarBrand className="mb-3"> <Link to="/"> <img src={`${REACT_APP_BACKEND_URL}:8080/${Logo}`} alt='logo.svg'/></Link></NavbarBrand>
            <NavbarToggler onClick={()=>this.setState({navbarOpen: !this.state.navbarOpen })}/>
            <Collapse isOpen={this.state.navbarOpen} navbar >
              <Form className='form-inline'>
                <div className='search-wrapper'>
                  <Input className='form-control' type='search' placeholder='Search' aria-label='Search'/>
                  <Link to='/'> <img src={`${REACT_APP_BACKEND_URL}:8080/${Search}`} alt='search.svg' /> </Link>
                </div>
                <Button> <img src={`${REACT_APP_BACKEND_URL}:8080/${Filter}`} alt='filter.svg' /> </Button>
              </Form>
              <Nav className="ml-auto">
                <Row>
                  <Col className='col-2'><Link to='/bag' className="m-2" > <img src={`${REACT_APP_BACKEND_URL}:8080/${Cart}`} alt="cart.svg" /> </Link></Col>
                  <div className="auth col-10 d-flex flex-row">
                    <Link to='/login'><button className="login">Login</button></Link> 
                    <Link to='/signup'><button className="signup ml-3">Signup</button></Link>
                  </div>
                </Row>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
    )
  }
}

export default NavigationBar2