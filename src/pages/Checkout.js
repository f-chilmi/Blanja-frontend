import React, { Component } from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {
  Row, Card, Container,
  Modal, ModalHeader,
  Button, ModalFooter, ModalBody,
  Form, Input, FormGroup, Label
} from 'reactstrap'

import NavigationBar from '../components/NavigationBar'

import checkoutAction from '../redux/actions/checkout'
import addressAction from '../redux/actions/address'

class Checkout extends Component {
  state = {
    modalOpen: false,
    modalAddress: false,
    modalShowAddress: false
  }
  componentDidMount() {
    this.props.getCheckout(this.props.auth.token)
    this.props.getAddress(this.props.auth.token)
    this.props.payment(this.props.auth.token)
  }

  onChangeText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  render() {
    const { checkout, address } = this.props
    console.log(address)
    {Object.keys(checkout.data).length>0 ? console.log(checkout.dataPayment) : console.log('no')}
    return (
      <>
      <NavigationBar/>
      <Container>
        <h3 className='my-4'>Checkout</h3>
        <Row >
          <div className='col-8'>
            <h5>Shipping address</h5>
            {Object.keys(checkout.data).length && checkout.data.data.address.map(item=>{
              return(
                <Card className='w-100 card-1 mb-3 shadow'>
                  <div className=' p-3 mb-3 button' >
                    <p style={{fontWeight: 600}} className='mb-2' > {item.recipientsName} </p>
                    <p>{item.address}{','} {item.city} {item.postalCode} </p>
                    <p>{item.recipientsPhone}</p>
                    <Button className='signup' onClick={()=>this.setState({modalShowAddress: true})} style={{width: 250}}> <Link className='text-decoration-none' style={{color: '#DB3022'}}>Choose another address</Link></Button>
                  </div>
                </Card>
            )
            })}
            <h5>Shopping summary</h5>
            {Object.keys(checkout.data).length && checkout.data.data.product.map(item=>{
              return(
                <Card className=" card-2 w-100 mb-3 shadow">
                  <div className="card-body second">
                    <div className="caption d-flex flex-row align-items-center ">
                      <img className="ml-4" alt=""/>
                      <div className="nama-toko align-items-center ml-3">
                        <p className="nama-barang mb-0 font-weight-bold"> {item.name}</p>
                        <p className="toko mb-1">Zalora Cloth</p>
                      </div>
                      <p className="harga ml-auto mr-3"> Rp {item.price} </p>                  
                  </div>
                </div>
              </Card>
            )
            })}
            
          </div>
          <div className="col-4 ">
            <Card className='card-3 w-100 shadow'>
              <div className="card-body">
                <h3>Shopping summary</h3>
                <p>Total price <span className="harga mr-3"> Rp {checkout.data["total price"]} </span> </p>
                <p>Shipping Cost <span className="harga mr-3"> Rp {checkout.data["shipping cost"]} </span> </p>
                <hr/>
                <p className='text-body'>Total <span className="harga mr-3 text-body"> Rp {checkout.data.total} </span> </p>
                <button onClick={()=>this.setState({modalOpen: true})}> <Link className='text-decoration-none text-white'> Select payment</Link></button>
              </div>
            </Card>
          </div>
        </Row>
      <Modal isOpen={this.state.modalOpen} >
        <ModalHeader >
          Payment
          <Button close onClick={()=>this.setState({modalOpen: false})} />
          </ModalHeader>
        <ModalBody>
          <h6>Payment method</h6>
          <div>
            <img />
            <span>BlanjaCash <span className='text-muted'>(Rp{checkout.dataPayment.saldo})</span>  </span>
          </div>
        </ModalBody>
        <ModalBody className='greytext-wrapper'>
          <h6>Shopping summary</h6>
          <p>Total price <span className="harga mr-3"> Rp {checkout.data["total price"]} </span> </p>
          <p>Shipping Cost <span className="harga mr-3"> Rp {checkout.data["shipping cost"]} </span> </p>
        </ModalBody>
        <ModalFooter className='d-flex justify-content-between'>
          <div>
            <h5>Shopping summary</h5>
            <p className='text-body harga mr-3' ><span style={{color: '#DB3022', fontWeight: 600}}> Rp {checkout.dataPayment.total} </span>  </p>
          </div>
          <button className='red-button w-25'> <Link className='text-decoration-none text-white'> Buy</Link></button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={this.state.modalShowAddress} >
        <ModalBody>
        <p className='heading-text mb-1'>Choose another address</p>
          <p className='subheading-text mb-1'>Manage your shipping address</p>
          <hr/>
          <div className='rounded-lg address-border d-flex align-items-center justify-content-center mb-4'>
            <p className='text-muted '><Link onClick={()=>this.setState({modalAddress: true})} className='text-decoration-none text-reset '> Add new address</Link></p>
          </div>

          {address.data.length && address.data.map(item=>{
            return (
              <div className='rounded-lg address-border-list p-3 mb-3' >
                <p style={{fontWeight: 600}} className='mb-2' > {item.recipientsName} </p>
                <p>{item.address}{','} {item.city} {item.postalCode} </p>
                <p>{item.recipientsPhone}</p>
                <Link className='text-decoration-none' style={{color: '#DB3022'}}>Change address</Link>
              </div>
            )
          }) }
        </ModalBody>
        <ModalFooter className='border-0'>
          <Button className='button-cancel' onClick={()=>this.setState({modalShowAddress: false})} >Cancel</Button>{' '}
          <Button className='button-save' >Save</Button>
        </ModalFooter>
      </Modal>
      
      <Modal isOpen={this.state.modalAddress} >
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
            <Button className='button-cancel' onClick={()=>this.setState({modalAddress: false})} >Cancel</Button>{' '}
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
  auth: state.auth,
  checkout: state.checkout,
  address: state.address,
  payment: state.checkout
})
const mapDispatchToProps = {
  getCheckout: checkoutAction.getCheckout,
  payment: checkoutAction.payment,
  getAddress: addressAction.getAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)