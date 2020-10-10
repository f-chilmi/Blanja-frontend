import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import homeAction from '../redux/actions/home'

import {
  Row, Col,
  Container, 
  Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText,
  
} from 'reactstrap'

// importing image
import Star from '../assets/img/activated.png'
import TShirt from '../assets/img/kaos.png'
import Shorts from '../assets/img/celanapendek.png'
import Jacket from '../assets/img/jaket (2).png'
import Pants from '../assets/img/celana.png'
import Shoes from '../assets/img/sepatu.png'
import Next from '../assets/img/next.png'
import image1 from '../assets/img/carousel0.png'
import image2 from '../assets/img/carousel1.png'
import image3 from '../assets/img/carousel2.png'
import image4 from '../assets/img/carousel3.png'

// Importing page
import NavigationBar from '../components/NavigationBar'
import NavigationBar2 from '../components/NavigationBar2'

class Home extends React.Component{
  componentDidMount() {
    this.props.getHome()
  }
  // componentDidUpdate() {
  //   this.props.getHome()    
  // }
  
  render(){
    // console.log(this.props)
    // console.log(this.props.home)
    const {isLoading, data, isError, alertMsg} = this.props.home
    return(
    <>
    {this.props.auth.isLogin ? <NavigationBar/> : <NavigationBar2/>}
      {/* <NavigationBar/> */}
      <Container>

      <Row className="mb-4 mt-5 d-flex justify-content-between divRow">
        <Col className="col-sm-1 col-md-1 " >
          <img src={image1} alt="image.png" className="rounded-lg"/>
        </Col>
        <Col className="col-sm-5 col-md-5 d-flex align-content-center flex-wrap justify-content-center divImg" >
          <img src={image2} alt="image.png" className="rounded-lg" />
          <p className="pAbsolute">Trends in 2020</p>
        </Col>
        <Col className="col-sm-5 col-md-5 d-flex align-content-center flex-wrap justify-content-center divImg" >
          <img src={image3} alt="image.png" className="rounded-lg" />
          <p className="pAbsolute">Black edition</p>
        </Col>
        <Col className="col-sm-1 col-md-1" >
          <img src={image4} alt="image.png" className="rounded-lg" />
        </Col>
        <div className="rounded-circle d-flex align-content-center flex-wrap justify-content-center bg-white nextCarousel my-auto"><a href='#'><img src={Next} alt="next-icon.png"/></a></div>
        <div className="rounded-circle d-flex align-content-center flex-wrap justify-content-center bg-white prevCarousel my-auto"><a href='#'><img src={Next} alt="next-icon.png"/></a></div>
      </Row>


      <p className="newThings mb-0">Category</p>
      <p className="greyText">What are you currently looking for?</p>
      <Row className="divRow mb-4">
        <Col className="col-sm-4 col-md" >
          <div className="borderImage1 rounded-lg d-flex align-content-center flex-wrap justify-content-center"><img src={TShirt} alt="t-shirt.png" /></div>
        </Col>
        <Col className="col-sm-4 col-md" >
          <div className="borderImage2 rounded-lg d-flex align-content-center flex-wrap justify-content-center"><img src={Shorts} alt="shorts.png"/></div>
        </Col>
        <Col className="col-sm-4 col-md" >
          <div className="borderImage3 rounded-lg d-flex align-content-center flex-wrap justify-content-center"><img src={Jacket} alt="jacket.png" /></div>
        </Col>
        <Col className="col-sm-4 col-md" >
          <div className="borderImage4 rounded-lg d-flex align-content-center flex-wrap justify-content-center"><img src={Pants} alt="pants.png" /></div>
        </Col>
        <Col className="col-sm-4 col-md" >
          <div className="borderImage5 rounded-lg d-flex align-content-center flex-wrap justify-content-center"><img src={Shoes} alt="shoes.png" /></div>
        </Col>
        <div className="rounded-circle d-flex align-content-center flex-wrap justify-content-center bg-white next-icon my-auto"><a href='#'><img src={Next} alt="next-icon.png"/></a></div>
      </Row>

      <p className="newThings mb-0">New</p>
      <p className="greyText">You've never seen it before!</p>
      <Row className="justify-content-between mb-4">
      {!isLoading && !isError && data.length!==0 && data.map(item=>(
          
          <Col className="card-deck col-sm-12 col-md-6 col-lg-3 col-xl-3" >
            <Card className="shadow border-0 mb-3">
              <CardImg src={item.picture1} alt="suit.png" />
              <CardBody>
                <Link to={`/page-product/${item.id}`} className='text-decoration-none'>
                  <CardTitle className="cardTitle"> {item.name} </CardTitle>
                </Link>
                <CardSubtitle className="cardPrice">Rp {item.price}</CardSubtitle>
                <CardText className="cardStore mb-0">Zalora Cloth</CardText>
                <div className="">
                  <img src={Star} alt="star.png"/>
                  <img src={Star} alt="star.png"/>
                  <img src={Star} alt="star.png"/>
                  <img src={Star} alt="star.png"/>
                  <img src={Star} alt="star.png"/>
                  <p className="greyText d-inline"> {item.rating}</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        
        ))}
        {isLoading&& !isError && (
          <div>Loading</div>
        )}
        {isError&& alertMsg!=='' && (
          <div>{alertMsg}</div>
        )}
        </Row>
      </Container>
      </>
    )
  }
}

const mapStateToProps = state => ({
  home: state.home,
  auth: state.auth
})

const mapDispatchToProps = {
  getHome: homeAction.getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)