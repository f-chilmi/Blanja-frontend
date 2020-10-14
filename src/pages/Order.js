import React, { Component } from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {
  Row, Jumbotron, Card, Container, Nav,
  NavItem, NavLink
} from 'reactstrap'

import NavigationBar from '../components/NavigationBar'

import Pencil from '../assets/img/pensil.svg'
import UserLogo from '../assets/img/user 1.svg'
import Shipping from '../assets/img/map-pin (3) 1.svg'
import Clipboard from '../assets/img/clipboard 1.svg'

import store from '../redux/store'

import profileAction from '../redux/actions/profile'

class Profile extends Component {
  state = {
    radioMale: true,
    radioFemale: false,
    name: '',
    email: '',
    phone: '',
    gender: '',
    urlPicture: '',
    birth: ''
  }

  update = (e) => {
    e.preventDeafult()
    const { name, email, phone, gender, urlPicture, birth } = this.state
    const data = { name, email, phone, gender, urlPicture, birth }
    store.dispatch(profileAction.updateProfile(this.props.auth.token, data))
    // this.props.update(data)
  }
  componentDidMount() {
    this.props.getProfile(this.props.auth.token)
    // console.log(this.props.getProfile(this.props.auth.token))
  }

  // componentDidUpdate() {
  //   this.props.updateProfile(this.props.auth.token)
  // }
  

  onChangeText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  render() {
    // console.log(this.props.profile.data)
    // console.log(this.state)
    const { data } = this.props.profile
    return (
      <>
      <NavigationBar/>
      <Container>
      <Row className='mt-4'>
        <div className='sidenav vh-100 col-3 d-flex flex-column'>
          <div className='d-flex flex-row justify-content-end'>
            <img className='rounded-circle' src={data.urlPicture} alt='avatar' style={{width: 70, height: 70}} />
            <div className='mx-3 align-items-center'>
              <p className='mb-1 mt-2 text-center' style={{fontWeight: 600}}> {data.name}</p>
              <Link className='d-flex flex-row align-items-center text-decoration-none'>
                <img src={Pencil} alt='pencil' />
                <p className='mb-0 ml-2 text-muted '>Ubah profil</p>
              </Link>
            </div>
          </div>

          <div className='menu-wrapper'>
            <div className='d-flex flex-row'>
              <div class="user mr-3">
                <img src={UserLogo} alt='userLogo' />
              </div>
              <Link to='/profile' className='text-reset text-decoration-none' > <p className='text-muted '>My Profile</p></Link>
            </div>
            <div className='d-flex flex-row'>
              <div class="map mr-3">
                <img src={Shipping}  alt='shipping'/>
              </div>
              <Link to='/address' className='text-reset text-decoration-none' > <p className='text-muted '>Shipping Address</p></Link>
            </div>
            <div className='d-flex flex-row'>
              <div class="clipboard mr-3">
                <img src={Clipboard} alt='clipboard' />
              </div>
              <p style={{fontWeight: 600}} >My Order</p>
            </div>
          </div>

          <div className='logout-wrapper d-flex justify-content-end'>
            <Link to='/'><button className="signup ml-3">Logout</button></Link>
          </div>
        </div>

        {/* <Jumbotron className='col-9 bg-light'>
          <Card className='p-3'>
            <div className="card-body">
              <p className='heading-text mb-2'>My Order</p>
              <div class="status-order d-flex flex-row">
                  <div className="all bd-highlight"> All items <hr className="mt-2"/> </div>
                  <div className="abu pl-5 pr-3 bd-highlight"><Link >Not yet paid</Link> </div>
                  <div className="abu px-3 bd-highlight"><Link >Packed</Link> </div>
                  <div className="abu px-3 bd-highlight"><Link >Sent</Link></div>
                  <div className="px-3 abu bd-highlight"><Link >Completed</Link></div>
                  <div className="px-3 abu bd-highlight"><Link >Order cancel</Link></div>
              </div>
              <hr className="mt-2"/>
            </div>
            
            
          </Card>
        </Jumbotron> */}

        <Jumbotron>
          <Card className="p-3">
            <div className='card-body'>
              <p className='heading-text mb-2'>My Order</p>
              <Nav tabs className='status-order d-flex flex-row'>
                <NavItem>
                  <NavLink active>All items</NavLink>
                </NavItem>
                <NavItem >
                  <NavLink >Not yet paid</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Packed</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Sent</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Completed</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Cancelled</NavLink>
                </NavItem>
              </Nav>
            </div>
          </Card>
        </Jumbotron>
        
      </Row>
      </Container>
      </>
    )
  }
}


const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
})
const mapDispatchToProps = {
  getProfile: profileAction.getProfile,
  updateProfile: profileAction.updateProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)