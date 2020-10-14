import React, { Component } from 'react'
import moment from 'moment'
import Moment from 'react-moment';
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {
  Row, Col, Jumbotron, Card, Container,
  Form, Label, Input, Button,
  Alert
} from 'reactstrap'

import NavigationBar from '../components/NavigationBar'

import Pencil from '../assets/img/pensil.svg'
import UserLogo from '../assets/img/user 1.svg'
import Shipping from '../assets/img/map-pin (3) 1.svg'
import Clipboard from '../assets/img/clipboard 1.svg'

import store from '../redux/store'
import auth from '../redux/actions/auth'

import profileAction from '../redux/actions/profile'

class Profile extends Component {
  state = {
    alert: false,
    name: '',
    email: '',
    phone: '',
    gender: '',
    urlPicture: '',
    birth: ''
  }

  update = () => {
    // e.preventDeafult()
    const { name, email, phone, gender, urlPicture, birth } = this.state
    const data = { name, email, phone, gender, urlPicture, birth }
    store.dispatch(profileAction.updateProfile(this.props.auth.token, data))
    switch(this.props.profile.successUpdate){
      case true: {
        console.log('ok')
        this.setState({
          alert: true
        })
      }
      case false: {
        console.log('waiting')
      }
    }
  }
  componentDidMount() {
    this.props.getProfile(this.props.auth.token)
  }
  
  componentDidUpdate(){
    if(Object.keys(this.props.profile.data)){
      const { data } = this.props.profile
      if(this.state.name=='' && this.state.email==''){
        this.setState({
          name: data.name,
          email: data.email,
          phone: data.phone,
          gender: data.gender,
          urlPicture: data.urlPicture,
          birth: moment(`${data.birth}`).format('YYYY[-]MM[-]DD')
        })
      } else {
        console.log('done setState')
      }
      
    } else {
      console.log('belum siap')
    }
  }

  onChangeText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  logout = () => {
    store.dispatch(auth.logout())
    this.props.history.push('/')
  }
  
  render() {
    const { name, email, phone, gender, urlPicture, birth } = this.state
    const { data } = this.props.profile
    // console.log(this.props)
    return (
      <>
      <NavigationBar/>
      <Container>
      <Alert color="info" isOpen={this.state.alert} toggle={!this.state.alert}>
          {this.props.profile.alertMsg}
      </Alert>
      <Row className='mt-4'>
        <div className='sidenav vh-100 col-3 d-flex flex-column'>
          <div className='d-flex flex-row justify-content-end'>
            <img className='rounded-circle' src={urlPicture} alt='avatar' style={{width: 70, height: 70}} />
            <div className='mx-3 align-items-center'>
              <p className='mb-1 mt-2' style={{fontWeight: 600}} className="text-center"> {data.name}</p>
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
              <p style={{fontWeight: 600}} >My Account</p>
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
              <Link to='/order' className='text-reset text-decoration-none'> <p className='text-muted '>My Order</p></Link>
            </div>
          </div>
          
          <div className='logout-wrapper d-flex justify-content-end'>
            <button onClick={()=>this.logout()} className="signup ml-3">Logout</button>
          </div>
        </div>

        <Jumbotron className='col-9 bg-light'>
          <Card className='p-3'>
            <p className='heading-text mb-1'>My Profile</p>
            <p className='subheading-text mb-1'>Manage your profile information</p>
            <hr/>
            
            {/* <Form onSubmit={this.update}> */}
            <Row>
              <div className='col-8 row left-form'>
                  <Label className='col-5 label mb-4 text-right'>Name</Label>
                  <Input type='text' name='name' className='col-7 mb-3' value={name} onChange={this.onChangeText}/>
                  <Label className='col-5 label mb-4 text-right '>Email</Label>
                  <Input className='col-7 mb-3' name='email' value={email} onChange={this.onChangeText}></Input>
                  <Label className='col-5 label mb-4 text-right ' >Phone number</Label>
                  <Input className='col-7 mb-3' name='phone' value={phone} onChange={this.onChangeText}></Input>
                  <Label className='col-5 label mb-4 text-right '>Gender</Label>
                  <div className='col-3 mb-4'>
                    {['male', 'female'].map(o=>{
                        return(
                          <Label >
                            <Input type="radio" name="gender" checked={o===gender} value={o} onChange={this.onChangeText}/>{' '}
                              {o}
                          </Label>
                        )
                      })}
                  </div>
                  <Label className='col-5 label mb-4 text-right '>Date of birth</Label>
                  <Input className='col-7 mb-3' type="text" name="birth" 
                    value={birth} 
                    onChange={this.onChangeText}
                  />
                  <Button className='save mx-auto mt-2' onClick={()=>this.update()}>Save</Button>
              </div>
              <hr style={{width: 1, height: 300}} color= '#848494'/>
              <div className='col-4 d-flex flex-column'>
                <img src={urlPicture} alt='smile' style={{width: 120, height: 120}} />
                {/* <Input type='file'/>  */}
                <Input type="file" name="urlPicture" />
                {/* <Link> <Button className='greyColorButton mx-auto mt-2 rounded-pill' >Select Image</Button></Link> */}
              </div>
            </Row>
            {/* </Form> */}
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