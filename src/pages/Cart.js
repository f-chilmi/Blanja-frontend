import React, { Component } from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {
  Row, Card, Container
} from 'reactstrap'

import NavigationBar from '../components/NavigationBar'

import Rectangle from '../assets/img/Rectangle 605.svg'
import Shape from '../assets/img/Shape1.svg'

import cartAction from '../redux/actions/cart'
import store from '../redux/store'

const {REACT_APP_BACKEND_URL} = process.env

class Cart extends Component {
  state = {
    data: [],
    totalPrice: ''
  }

  componentDidMount() {
    this.props.getCart(this.props.auth.token)
  }

  componentDidUpdate(){
    if(Object.keys(this.props.cart).length>0){
      const { data } = this.props.cart
      if(!this.state.data.length){
        if(Object.keys(this.props.cart.data).length>0){
          console.log(data)
          this.setState({
            data: data.data,
            totalPrice: data["total price"]
          })
        } else {
          console.log('menunggu data dari cart')
        }
      } else {
        console.log('updated')
      }
      
    } else {
      console.log('belum siap')
    }
  }

  onChangeText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  DecreaseItem = (i) => {
    const {data} = this.state
    let {totalPrice} = this.state
    data[i] = {
      ...this.state.data[i],
      quantity: this.state.data[i].quantity-1,
      total: this.state.data[i].price * (this.state.data[i].quantity-1)
    }
    totalPrice = totalPrice - (this.state.data[i].price)
    const itemsId = data[i].items_id
    const quantity = data[i].quantity
    const updateQty = {
      itemsId,
      quantity
    }
    console.log(updateQty)
    this.setState({data, totalPrice})
    store.dispatch(cartAction.updateCart(this.props.auth.token, updateQty))
  }

  IncreaseItem = (i) => {
    const {data} = this.state
    let {totalPrice} = this.state
    data[i] = {
      ...this.state.data[i],
      quantity: this.state.data[i].quantity+1,
      total: this.state.data[i].price * (this.state.data[i].quantity+1)
    } 
    totalPrice = totalPrice + (this.state.data[i].price)
    const itemsId = data[i].items_id
    const quantity = data[i].quantity
    const updateQty = {
      itemsId,
      quantity
    }
    console.log(updateQty)
    this.setState({data, totalPrice})
    store.dispatch(cartAction.updateCart(this.props.auth.token, updateQty))
  }
  
  render() {
    const { data } = this.state
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

            {Object.keys(this.state.data).length && data.map((item, index)=>{
              return(
                <Card className=" card-2 w-100 mb-3 shadow">
                  <div className="card-body second">
                    <div className="row caption d-flex flex-row align-items-center ">
                      <div className="col-1">
                        <input type="checkbox" value="item.id" name="id"/>
                      </div>
                      <div className="col-2 p-0">
                        <img alt="product" src={`${REACT_APP_BACKEND_URL}/${item.picture1}`} className='image-product' />
                      </div>
                      <div className="col-3 nama-toko align-items-center ml-3">
                        <p className="nama-barang mb-0"> {item.name}</p>
                        <p className="toko mb-1">Zalora Cloth</p>
                      </div>
                      <div className="col-2 ikon-plus-minus d-flex flex-row mr-4">
                        <button className="minus" name="quantity"  onClick={()=>this.DecreaseItem(index)}>
                          <img src={Rectangle} alt=""/>
                        </button>
                        <p className="align-content-center"> {item.quantity} </p>
                        <button className="plus" name="quantity" onClick={()=>this.IncreaseItem(index)}>
                          <img src={Shape} alt=""/>
                        </button>
                      </div>
                      <p className="col-2 harga ml-auto mr-3"> Rp {item.total} </p>                  
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
                <p>Total price <span className="harga mr-3"> Rp {this.state.totalPrice} </span> </p>
                <button > 
                  <Link to='/checkout' className='text-decoration-none text-white'> Buy</Link>
                </button>
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