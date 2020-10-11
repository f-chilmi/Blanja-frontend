import React, { Component } from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {
  Row, Card, Container,
  Modal, ModalHeader,
  Button, ModalFooter, ModalBody
} from 'reactstrap'

import NavigationBar from '../components/NavigationBar'

import checkoutAction from '../redux/actions/checkout'

class Checkout extends Component {
  state = {
    modalOpen: false
  }
  componentDidMount() {
    this.props.getCheckout(this.props.auth.token)
    this.props.payment(this.props.auth.token)
  }

  onChangeText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  render() {
    console.log(this.props.checkout.dataPayment)
    const { checkout } = this.props
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
                    <Button className='signup' style={{width: 250}}> <Link className='text-decoration-none' style={{color: '#DB3022'}}>Choose another address</Link></Button>
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
        
      </Container>
      </>
    )
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
  checkout: state.checkout,
  payment: state.checkout
})
const mapDispatchToProps = {
  getCheckout: checkoutAction.getCheckout,
  payment: checkoutAction.payment
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)