import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import homeAction from '../redux/actions/home'

import {
  Row, Col,
  Container, 
  Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText,
  Alert
} from 'reactstrap'

// importing image
import Star from '../assets/img/activated.png'
import homeIcon from '../assets/img/home.svg'
import electronicsIcon from '../assets/img/electronics.svg'
import fashionIcon from '../assets/img/fashion.svg'
import beautyIcon from '../assets/img/beauty.svg'
import Shoes from '../assets/img/sepatu.png'
import Next from '../assets/img/next.png'
import image1 from '../assets/img/carousel0.png'
import image2 from '../assets/img/carousel1.png'
import image3 from '../assets/img/carousel2.png'
import image4 from '../assets/img/carousel3.png'

// Importing page
import NavigationBar from '../components/NavigationBar'
import NavigationBar2 from '../components/NavigationBar2'

const {REACT_APP_BACKEND_URL} = process.env

class Home extends React.Component{
  state = {
    alert: false
  }

  componentDidMount() {
    this.props.getHome()
    this.props.getPopular()
    this.props.getCategory()
  }
  componentDidUpdate() {
    if(this.props.auth.successLogout){
      console.log('ok')
      if(!this.state.alert){
        this.setState({alert: true})
        // if(this.state.alert){
        //   setTimeout(() => {
        //     this.setState({alert: false})
        //   }, 4000);
        // }
      } 
    }    
  }
  
  render(){
    const {isLoading, data, dataPopular, isError, alertMsg} = this.props.home
    console.log(this.props)
    return(
    <>
    {this.props.auth.isLogin ? <NavigationBar/> : <NavigationBar2/>}
      {/* <NavigationBar/> */}
      <Container>
      <Alert color="info" isOpen={this.state.alert} toggle={!this.state.alert}>
          {this.props.auth.alertMsg}
      </Alert>

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
      {this.props.home.successGetCategory && this.props.home.categoryList.map(item => (
        <Col className="col-md" >
          <div className="borderImage1 rounded-lg d-flex flex-column align-content-center flex-wrap justify-content-center" style={{backgroundColor: `${item.colorBackground}`}}>
            <img src={`${REACT_APP_BACKEND_URL}/${item.image}`} alt="t-shirt.png" style={{width: 120, height: 120}}/>
            <p className='text-center text-white' style={{fontWeight: 600, fontSize: 24}}>{item.category}</p>
          </div>
        </Col>
      ))}
        <div className="rounded-circle d-flex align-content-center flex-wrap justify-content-center bg-white next-icon my-auto"><a href='#'><img src={Next} alt="next-icon.png"/></a></div>
      </Row>

      {data==undefined && (
          <div className="spinner-border text-danger text-center" role="status">
            <span className="sr-only">Loading...</span>
            <p>Loading...</p>
          </div>
        )}
      {!isLoading && !isError && !(data==undefined) &&(
      <div>
        <div className='category-new'>
          <p className="newThings mb-0">New</p>
          <p className="greyText">You've never seen it before!</p>
          <Row className="justify-content-between mb-4">
            {data.length!==0 && data.map(item=>(
              <Col className="card-deck col-sm-12 col-md-6 col-lg-3 col-xl-3" >
                <Card className="shadow border-0 mb-3">
                  <CardImg src={`${REACT_APP_BACKEND_URL}/${item.picture1}`} alt="suit.png" />
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
            </Row>
          </div> 
          <div className='category-popular'>
          <p className="newThings mb-0">Popular</p>
          <p className="greyText">You've never seen it before!</p>
          <Row className="justify-content-between mb-4">
            {data.length!==0 && dataPopular.map(item=>(
              <Col className="card-deck col-sm-12 col-md-6 col-lg-3 col-xl-3" >
                <Card className="shadow border-0 mb-3">
                  <CardImg src={`${REACT_APP_BACKEND_URL}/${item.picture1}`} alt="suit.png" />
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
            </Row>
          </div> 
        </div>  
      )}
        {isLoading && !isError && data==='undefined' && (
          <div className="spinner-border text-danger text-center" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {!isLoading && !isError && data==='undefined' && (
          <div className="spinner-border text-danger text-center" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {isError&& alertMsg!=='' && (
          <div>{alertMsg}</div>
        )}
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
  getHome: homeAction.getData,
  getPopular: homeAction.getPopular,
  getCategory: homeAction.getCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)