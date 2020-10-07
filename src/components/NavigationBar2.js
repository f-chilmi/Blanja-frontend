import React from 'react'
import {
  Container,
  Collapse, Navbar, NavbarToggler, NavbarBrand,
  Nav, NavLink,
  Row, Col,
  Form, Input, Button
} from 'reactstrap'
import {Link} from 'react-router-dom'

// Import image
import Logo from '../assets/img/logo.svg'
import Cart from '../assets/img/shopping-cart (2) 1.svg'
import Search from '../assets/img/Search.svg'
import Filter from '../assets/img/filter 1.svg'

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
            <NavbarBrand className="mb-3"> <Link to="/"> <img src={Logo} alt='logo.svg'/></Link></NavbarBrand>
            <NavbarToggler onClick={()=>this.setState({navbarOpen: !this.state.navbarOpen })}/>
            <Collapse isOpen={this.state.navbarOpen} navbar >
              <Form className='form-inline'>
                <div className='search-wrapper'>
                  <Input className='form-control' type='search' placeholder='Search' aria-label='Search'/>
                  <Link to='/'> <img src={Search} alt='search.svg' /> </Link>
                </div>
                <Button> <img src={Filter} alt='filter.svg' /> </Button>
              </Form>
              <Nav className="ml-auto">
                <Row>
                  <Col className='col-2'><Link className="m-2" to="#"> <img src={Cart} alt="cart.svg" /> </Link></Col>
                  <div className="auth col-10 d-flex flex-row">
                    <Link to='/login'><button className="login">Login</button></Link> 
                    <button className="signup ml-3">Signup</button>
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