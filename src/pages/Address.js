import React, { Component } from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {
  Row, Modal, Jumbotron, Card, Container,
  Form, Label, Input, Button, ModalBody,
  ModalHeader, ModalFooter, FormGroup
} from 'reactstrap'

import NavigationBar from '../components/NavigationBar'

import Pencil from '../assets/img/pensil.svg'
import UserLogo from '../assets/img/user 1.svg'
import Shipping from '../assets/img/map-pin (3) 1.svg'
import Clipboard from '../assets/img/clipboard 1.svg'

import store from '../redux/store'

import addressAction from '../redux/actions/address'
import profileAction from '../redux/actions/profile'

const {REACT_APP_BACKEND_URL} = process.env

class Address extends Component {
  state = {
    modal: false,
    data: '',
    nameAddress: '',
    recipientsName: '',
    address: '',
    recipientsPhone: '',
    city: '',
    postalCode: '',
    isPrimary: ''
  }

  componentDidMount() {
    this.props.getAddress(this.props.auth.token)
  }

  componentDidUpdate(){
    if(Object.keys(this.props.address.data).length>0){
      const { data } = this.props.address
      if(this.state.data==''){
        this.setState({
          data: data
          // name: data.nameAddress,
          // email: data.recipientsName,
          // phone: data.address,
          // gender: data.recipientsPhone,
          // urlPicture: data.city,
          // postalCode: data.postalCode,
          // isPrimary: data.isPrimary
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

  addAddress = (e) => {
    e.preventDefault()
    const {
      nameAddress,
      recipientsName,
      address,
      recipientsPhone,
      city,
      postalCode,
      isPrimary
    } = this.state
    const data = {
      nameAddress,
      recipientsName,
      address,
      recipientsPhone,
      city,
      postalCode,
      isPrimary
    }
    store.dispatch(addressAction.addAddress(this.props.auth.token, data))
    this.props.getAddress(this.props.auth.token)
    this.setState({modal: false})
  }
  
  render() {
    console.log(this.state)
    console.log(this.props)
    const { data } = this.props.address
    return (
      <>
      <NavigationBar/>
      <Container>
      <Row className='mt-4'>
        <div className='sidenav vh-100 col-3 d-flex flex-column'>
          <div className='d-flex flex-row justify-content-end'>
            <img className='rounded-circle' src={`${REACT_APP_BACKEND_URL}/${this.props.profile.data.urlPicture}`}  alt='avatar' style={{width: 70, height: 70}} />
            <div className='mx-3 align-items-center'>
              <p className='mb-1 mt-2' style={{fontWeight: 600}} className="text-center"> {this.props.profile.data.name}</p>
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
                <Link to='/profile' className='text-reset text-decoration-none'> <p className='text-muted '>My Profile</p></Link>
            </div>
            <div className='d-flex flex-row'>
              <div class="map mr-3">
                <img src={Shipping}  alt='shipping'/>
              </div>
              <p style={{fontWeight: 600}} >Shipping Address</p>
            </div>
            <div className='d-flex flex-row'>
              <div class="clipboard mr-3">
                <img src={Clipboard} alt='clipboard' />
              </div>
              <Link to='/order' className='text-reset text-decoration-none'> <p className='text-muted '>My Order</p></Link>
            </div>
          </div>

          <div className='logout-wrapper d-flex justify-content-end'>
            <Link to='/'><button className="signup ml-3">Logout</button></Link>
          </div>
        </div>

        <Jumbotron className='col-9 bg-light'>
          <Card className='p-3'>
            <p className='heading-text mb-1'>Choose another address</p>
            <p className='subheading-text mb-1'>Manage your shipping address</p>
            <hr/>
            <div className='rounded-lg address-border d-flex align-items-center justify-content-center mb-4'>
              <p className='text-muted '><Link onClick={()=>this.setState({modal: true})} className='text-decoration-none text-reset '> Add new address</Link></p>
            </div>

            {data.length && data.map(item=>{
              return (
                <div className='rounded-lg address-border-list p-3 mb-3' >
                  <p style={{fontWeight: 600}} className='mb-2' > {item.recipientsName} </p>
                  <p>{item.address}{','} {item.city} {item.postalCode} </p>
                  <p>{item.recipientsPhone}</p>
                  <Link className='text-decoration-none' style={{color: '#DB3022'}}>Change address</Link>
                </div>
              )
            }) }
            
            
          </Card>
        </Jumbotron>
      </Row>
      <Modal isOpen={this.state.modal} >
        <Form onSubmit={this.addAddress}>
          <ModalHeader className='border-0' style={{fontSize: 20, fontWeight: 600}}>Add new address</ModalHeader>
          <ModalBody>
            <FormGroup className='row'>
              <div className='col'>
                <Label>Save address as (ex:home, office)</Label>
                <Input type='text' onChange={this.onChangeText} name='nameAddress'/>   
              </div>
              <div className='col'>
                <Label >Recipient's name</Label>
                <Input type='text' onChange={this.onChangeText} name='recipientsName'/> 
              </div> 
            </FormGroup>   
            <FormGroup className='row'>
              <div className='col'>
                <Label>Recipient's phone number</Label>
                <Input type='text' onChange={this.onChangeText} name='recipientsPhone'/>  
              </div>    
              <div className='col'>
                <Label>Address</Label>  
                <Input type='text' onChange={this.onChangeText} name='address'/> 
              </div>
            </FormGroup>
            <FormGroup className='row'>
              <div className='col'>
                <Label>City or Subdistrict</Label>   
                <Input type='text' onChange={this.onChangeText} name='city'/>
              </div>         
              <div className='col'>
                <Label>Postal code</Label>    
                <Input type='text' onChange={this.onChangeText} name='postalCode'/>  
              </div>        
            </FormGroup>
            <FormGroup>
              <Label check className=''> 
                <Input type='radio' value='true' name='isPrimary' onChange={this.onChangeText} className='ml-0' />{' '}
                <span className='ml-4'>Make as primary address</span>
              </Label> 
            </FormGroup>
          </ModalBody>
          <ModalFooter className='border-0'>
            <Button className='button-cancel' onClick={()=>this.setState({modal: false})} >Cancel</Button>{' '}
            <Button className='button-save' >Save</Button>
          </ModalFooter>
        </Form>
      </Modal>
      </Container>
      </>
    )
  }
}


const mapStateToProps = state => ({
  profile: state.profile,
  address: state.address,
  auth: state.auth
})
const mapDispatchToProps = {
  // getProfile: profileAction.getProfile,
  getAddress: addressAction.getAddress,
  addAddress: addressAction.addAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(Address)