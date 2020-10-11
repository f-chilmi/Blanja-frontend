import React, { Component } from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {
  Row, Col, Jumbotron, Card, Container,
  Form, Label, Input, Button
} from 'reactstrap'

import NavigationBar from '../components/NavigationBar'

import Rectangle from '../assets/img/Rectangle 605.svg'
import Shape from '../assets/img/Shape1.svg'

import cartAction from '../redux/actions/cart'

class Cart extends Component {
  state = {
  }

  componentDidMount() {
    this.props.getCart(this.props.auth.token)
  }

  onChangeText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  render() {
    const { data } = this.props.cart.data
    console.log(Object.keys(this.props.cart.data).length)
    // return(
    //   <div>ini return</div>
    // )
    return (
      <>
      <NavigationBar/>
      <Container>
        <Row className='mt-5'>
          <div className='col-8'>
            <Card className='w-100 card-1 mb-3 shadow'>
              <div className="card-body first ">
                <input type="checkbox" />
                <span className="one ml-3">Select all items </span>
                <p className='ml-auto d-inline'>
                  <Link className='text-decoration-none ' style={{color: '#DB3022'}}>Delete</Link> 
                </p> 
              </div>
            </Card>

            {Object.keys(this.props.cart.data).length && data.map(item=>{
              return(
                <Card className=" card-2 w-100 mb-3 shadow">
                  <div className="card-body second">
                    <div className="caption d-flex flex-row align-items-center ">
                      <input type="checkbox" />
                      <img className="ml-4" alt=""/>
                      <div className="nama-toko align-items-center ml-3">
                        <p className="nama-barang mb-0"> {item.name}</p>
                        <p className="toko mb-1">Zalora Cloth</p>
                      </div>
                      <div className="ikon-plus-minus d-flex flex-row mr-4">
                        <button className="minus"><img src={Rectangle} alt=""/></button>
                        <p className="align-content-center"> {item.quantity} </p>
                        <button className="plus"><img src={Shape} alt=""/></button>
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
                <p>Total price <span className="harga mr-3"> Rp {this.props.cart.data["total price"]} </span> </p>
                <button> <Link to='/checkout' className='text-decoration-none text-white'> Buy</Link></button>
              </div>
            </Card>
          </div>
        </Row>
      
        
      </Container>
      </>
    )
  }
}


const mapStateToProps = state => ({
  cart: state.cart,
  auth: state.auth
})
const mapDispatchToProps = {
  getCart: cartAction.getCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)