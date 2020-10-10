import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import productAction from '../redux/actions/page-product'

import {
  Row,
  Container,
  Col,
  Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText
} from 'reactstrap'

// importing image
import Star from '../assets/img/activated.png'
import Rectangle from '../assets/img/Rectangle 605.svg'
import Shape from '../assets/img/Shape1.svg'

// Importing page
import NavigationBar from '../components/NavigationBar'
import NavigationBar2 from '../components/NavigationBar2'

class PageProduct extends React.Component{
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getProduct(id)
  }
  // componentDidUpdate() {
  //   const { id } = this.props.match.params
  //   this.props.getProduct(id)   
  // }
  render(){
    console.log(this.props)
    return(
    <>
    {this.props.auth.isLogin ? <NavigationBar/> : <NavigationBar2/>}
      <Container className='mt-4'>
        <div className='menu-category'>
          <p> 
            <Link className='menu-link' to='/'>Home</Link> {' > '} 
            <Link  className='menu-link'to='category'>Category</Link> {' > '} 
            <Link className='menu-link' to='/'> {this.props.product.data.category} </Link> 
          </p>
        </div>
        <Row>
          <div className='col-6'>
            <div className='row justify-content-around'>
              <img className='mb-3 mr-1 col-5' src={this.props.product.data.picture1} style={{width: 263, height: 300}} alt='product.png' />
              <img className='mb-3 mr-1 col-5' style={{width: 263, height: 329}} alt='product.png' />
            </div>
            <div className='row justify-content-around'>
              <img className='mb-3 mr-1 col-5' style={{width: 263, height: 329}} alt='product.png' />
              <img className='mb-3 mr-1 col-5' style={{width: 263, height: 329}} alt='product.png' />
            </div>
          </div>
          <div className='col-6 name-detil'>
            <p className="nama-produk">{this.props.product.data.name}</p>
            <p className="merk">Nike</p>
            <p className="star">
              <img src= {Star}  alt="star" />
              <img src= {Star}  alt="star" /> 
              <img src= {Star}  alt="star" /> 
              <img src= {Star}  alt="star" /> 
              <img src= {Star}  alt="star" /> 
              (10)
            </p>
            <p className="price-text mb-0">Price</p>
            <p className="price">Rp {this.props.product.data.price}</p>

            <div class="amount-wrapper mb-4">
              <p>Jumlah</p>
              <div class="add-min-size d-flex flex-row">
                  <div class="min">
                      <img src={Rectangle} alt="minus" />
                  </div>
                  <p>1</p>
                  <div class="plus">
                      <img src={Shape} alt="plus" />
                  </div>
              </div>
            </div>

            <div className='button'>
              <div className="abu d-flex flex-row mb-4">
                <Link><button className="signup">Chat</button></Link> 
                <button className="signup ml-3">Add bag</button>
              </div>
              <button className="login">Buy now</button>
            </div>
              
          </div>
        </Row>

        <div class="tengah mt-5">
            <p class="informasi-text">Informasi Produk</p>
            <p class="cond-text">Condition</p>
            <p class="new-text">New</p>
            <p class="desc-text mb-0">Description</p>
            <p class="p-abu">{this.props.product.data.description}</p>
            <p class="review-text mt-5">Product review</p>
            <div class="d-flex flex-row">
                <div class="row-1">
                    <p class="big mb-0">5.0<span class="small-grey">/10</span> </p>
                    <p className="star">
                      <img src= {Star}  alt="star" />
                      <img src= {Star}  alt="star" /> 
                      <img src= {Star}  alt="star" /> 
                      <img src= {Star}  alt="star" /> 
                      <img src= {Star}  alt="star" /> 
                      (10)
                    </p>
                </div>
                <div class="row-2">
                    <p class="mb-0"><img src= {Star}  alt="star" /> 5</p>
                    <p  class="mb-0"><img src= {Star}  alt="star" /> 4</p>
                    <p  class="mb-0"><img src= {Star}  alt="star" /> 3</p>
                    <p class="mb-0"><img src= {Star}  alt="star" /> 2</p>
                    <p class="mb-0"><img src= {Star}  alt="star" /> 1</p>
                </div>
                <div class="row-3 ml-4">
                    <hr/>
                </div>
                <div class="row-4 ml-4">
                    <p  class="mb-0">4</p>
                    <p class="mb-0">0</p>
                    <p class="mb-0">0</p>
                    <p class="mb-0">0</p>
                    <p class="mb-0">0</p>
                </div>
            </div>
        </div>
        <hr/>
        <div class="bawah">
            <p class="big-bold">You can also like this</p>
            <p class="grey-small">You've never seen it before!</p>
            <div class="d-flex flex-row justify-content-between mb-4 ">
            <Col className="card-deck col-sm-12 col-md-6 col-lg-3 col-xl-3" >
              <Card className="shadow border-0 mb-3">
                <CardImg  alt="suit.png" />
                <CardBody>
                  <CardTitle className="cardTitle"> item.name </CardTitle>
                  <CardSubtitle className="cardPrice">Rp item.name</CardSubtitle>
                  <CardText className="cardStore mb-0">Zalora Cloth</CardText>
                  <div className="">
                    <img src={Star} alt="star.png"/>
                    <img src={Star} alt="star.png"/>
                    <img src={Star} alt="star.png"/>
                    <img src={Star} alt="star.png"/>
                    <img src={Star} alt="star.png"/>
                    <p className="greyText d-inline"> item.name</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            </div>
        </div>

      </Container>
      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  product: state.product
})

const mapDispatchToProps = {
  getProduct: productAction.getData
}

export default connect(mapStateToProps, mapDispatchToProps)(PageProduct)