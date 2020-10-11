import React from 'react'
import {connect} from 'react-redux'
import {
  Container,
  Collapse, Navbar, NavbarToggler, NavbarBrand,
  Nav,
  Row, Col
} from 'reactstrap'
import {Link} from 'react-router-dom'

import profileAction from '../redux/actions/profile'

// Import image
import Logo from '../assets/img/logo.svg'
import Cart from '../assets/img/shopping-cart (2) 1.svg'
import Bell from '../assets/img/bell (1) 1.svg'
import Mail from '../assets/img/mail (3) 1.svg'
import Smile from '../assets/img/orang.png'

class NavigationBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      navbarOpen: false
    }
   }
   componentDidMount() {
    this.props.getProfile(this.props.auth.token)
   }
   
  render(){
    // console.log(this.props.profile.data.urlPicture)
    return(
      <Navbar color="faded" light expand="md" className="shadow">
          <Container>
            <NavbarBrand className="mb-3"> <Link to="/"> <img src={Logo} alt='logo.svg'/></Link></NavbarBrand>
            <NavbarToggler onClick={()=>this.setState({navbarOpen: !this.state.navbarOpen })}/>
            <Collapse isOpen={this.state.navbarOpen} navbar >
              <Nav className="ml-auto">
                <Row className='d-flex align-items-center'>
                  <Col><Link to='/bag' className="m-2" > <img src={Cart} alt="cart.svg" /> </Link></Col>
                  <Col><Link to='' className="m-2" to="#"> <img src={Bell} alt="bell.svg" /> </Link></Col>
                  <Col><Link to='' className="m-2" to="#"> <img src={Mail} alt="mail.svg" /> </Link></Col>
                  <Col><Link to='/profile' className="m-2" > <img src={this.props.profile.data.urlPicture} alt="ava" style={{width: 70, height: 70}} /></Link></Col>
                </Row>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
})
const mapDispatchToProps = {
  getProfile: profileAction.getProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)