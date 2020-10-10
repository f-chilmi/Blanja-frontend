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
// import auth from '../redux/actions/auth'

import addressAction from '../redux/actions/address'
import profileAction from '../redux/actions/profile'

class Address extends Component {
  state = {
    modal: false
  }

  componentDidMount() {
    this.props.getAddress(this.props.auth.token)
    this.props.getProfile(this.props.auth.token)
    // console.log(this.props.getProfile(this.props.auth.token))
  }

  onChangeText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  render() {
    // console.log(this.state)
    // console.log(this.props.profile.data.name)
    const { data } = this.props.address
    return (
      <>
      <NavigationBar/>
      <Container>
      <Row className='mt-4'>
        <div className='sidenav col-3'>
          <div className='d-flex flex-row justify-content-end'>
            <img className='rounded-circle' src={this.props.profile.data.urlPicture}  alt='avatar' style={{width: 70, height: 70}} />
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
                  <p>{item.address}</p>
                  <Link className='text-decoration-none' style={{color: '#DB3022'}}>Change address</Link>
                </div>
              )
            }) }
            
            
          </Card>
        </Jumbotron>
      </Row>
      <Modal isOpen={this.state.modal} >
        <Form>
        <ModalHeader className='border-0 ' style={{fontSize: 20, fontWeight: 600}}>Add new address</ModalHeader>
        <ModalBody>
          <FormGroup className='row'>
            <div className='col'>
              <Label>Save address as (ex:home, office)</Label>
              <Input type='text' name='nameAddress'/>   
            </div>
            <div className='col'>
              <Label >Recipient's name</Label>
              <Input type='text' name='recipientsName'/> 
            </div> 
          </FormGroup>   
          <FormGroup className='row'>
            <div className='col'>
              <Label>Recipient's phone number</Label>
              <Input type='text' name='recipientsPhone'/>  
            </div>    
            <div className='col'>
              <Label>Address</Label>  
              <Input type='text' name='address'/> 
            </div>
          </FormGroup>
          <FormGroup className='row'>
            <div className='col'>
              <Label>City or Subdistrict</Label>   
              <Input type='text' name='city'/>
            </div>         
            <div className='col'>
              <Label>Postal code</Label>    
              <Input type='text' name='postalCode'/>  
            </div>        
          </FormGroup>
          <FormGroup>
            <Label check className=''> 
              <Input type='radio' value='' className='ml-0' />{' '}
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
  getProfile: profileAction.getProfile,
  getAddress: addressAction.getAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(Address)