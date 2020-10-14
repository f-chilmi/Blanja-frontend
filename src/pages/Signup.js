import React, { Component } from 'react'
import {Form, Input, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import store from '../redux/store'
import auth from '../redux/actions/auth'

// import image
import Logo from '../assets/img/logo.svg'

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    buttonSeller: false,
    buttonCust: true
  }

  signup = (e) => {
    e.preventDefault()
    const { name, email, password } = this.state
    const data = {
      name,
      email,
      password
    }
    store.dispatch(auth.signup(data))
    // this.props.history.push('/')
  }

  toggleButton = (val) => {
    if(val==='seller'){
      this.setState({
        buttonCust: false,
        buttonSeller: true
      })
    } else if(val==='customer') {
      this.setState({
        buttonCust: true,
        buttonSeller: false
      })
    }
  }

  onChangeText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidUpdate(){
    console.log(this.props.auth)
    if(this.props.auth.successLogin){
      console.log('ok')
      this.props.history.push('/')
    } 
  }
  

  render() {
    // console.log(this.props.match.path)
    return (
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <div style={{width: 400}}>
          <div className='header-login text-center'>
            <Link to="/"> <img className='logo mb-3' src={Logo} alt='logo.svg' /></Link>
            <div className='message mb-4'>
              <span>Register your new account</span>
            </div>
            <div style={{width: 200}} className='btn-group button-wrap mb-4 text-center'>
              <Button color='danger' onClick={()=>this.toggleButton('customer')} active={this.state.buttonCust} className='greyColorButton' style={{width: 120}}>Customer</Button>
              <Button color='danger' onClick={()=>this.toggleButton('seller')} active={this.state.buttonSeller} className='greyColorButton' style={{width: 120}}>Seller</Button>
              
            </div>
          </div>
          <Form onSubmit={this.signup}>
            <Input onChange={this.onChangeText} name='name' type='name' id='name' placeholder='Name'/>
            <Input className='mt-3' onChange={this.onChangeText} name='email' type='email' id='email' placeholder='Email'/>
            <Input className='mt-3' onChange={this.onChangeText} name='password' type='password' id='password' placeholder='Password'/>
     
            <Button block type='submit' className='mt-3 theme-color rounded-pill'>Signup</Button>
          </Form>
          <div class="text-center quest-wrapper mt-3">
            <span>Have an account? </span> <Link to='/login' className='red-text' >Login</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({auth: state.auth})

const mapDispatchToProps = {
  signup: auth.signup
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)