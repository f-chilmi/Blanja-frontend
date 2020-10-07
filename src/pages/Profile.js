import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import {
  Row, Col, Jumbotron, Card, Container,
  Form, Label, Input, Button
} from 'reactstrap'

import NavigationBar from '../components/NavigationBar'

import Smile from '../assets/img/orang1.png'
import Pencil from '../assets/img/pensil.svg'
import UserLogo from '../assets/img/user 1.svg'
import Shipping from '../assets/img/map-pin (3) 1.svg'
import Clipboard from '../assets/img/clipboard 1.svg'

export default class Profile extends Component {
  render() {
    return (
      <>
      <NavigationBar/>
      <Container>
      <Row className='mt-4'>
        <div className='sidenav col-3'>
          <div className='d-flex flex-row justify-content-end'>
            <img className='rounded-circle' src={Smile} alt='avatar'/>
            <div className='mx-3 align-items-center'>
              <p className='mb-1 mt-2' style={{fontWeight: 600}}> Johanes Mikael</p>
              <Link className='d-flex flex-row align-items-center'>
                <img src={Pencil} alt='pencil' />
                <p className='mb-0 ml-2'>Ubah profil</p>
              </Link>
            </div>
          </div>

          <div className='menu-wrapper'>
            <div className='d-flex flex-row'>
              <div class="user mr-3">
                <img src={UserLogo} />
              </div>
              <p>My Account</p>
            </div>
            <div className='d-flex flex-row'>
              <div class="map mr-3">
                <img src={Shipping} />
              </div>
              <p>Shipping Address</p>
            </div>
            <div className='d-flex flex-row'>
              <div class="clipboard mr-3">
                <img src={Clipboard} />
              </div>
              <p>My Order</p>
            </div>
          </div>
        </div>

        <Jumbotron className='col-9 bg-light'>
          <Card className='p-3'>
            <p className='heading-text mb-1'>My Profile</p>
            <p className='subheading-text mb-1'>Manage your profile information</p>
            <hr/>
            <Row>
              <div className='col-8 row left-form'>
                <Label className='col-5 label mb-3 '>Name</Label>
                <Input className='col-7 mb-3'></Input>
                <Label className='col-5 label mb-3'>Email</Label>
                <Input className='col-7 mb-3'></Input>
                <Label className='col-5 label mb-3'>Phone number</Label>
                <Input className='col-7 mb-3'></Input>
                <Label className='col-5 label mb-3'>Gender</Label>
                  <Label check className='col-4 mb-3'>
                    <Input type="radio" name="radio2" />{' '}
                    Laki-laki
                  </Label>
                  <Label check className='col-3 mb-3'>
                    <Input type="radio" name="radio2" />{' '}
                    Perempuan
                  </Label>
                <Label className='col-5 label mb-3'>Date of birth</Label>
                <Input className='col-7 mb-3'
                  type="date"
                  name="date"
                  id="exampleDate"
                  placeholder="date placeholder"
                />

                <Button className='save mx-auto mt-2'>Save</Button>

              </div>
              <div className='col-4'>
                <img src={Smile} />
              </div>
            </Row>
          </Card>
        </Jumbotron>

      

      {/* <div class="menu-ikon">
      <div class="user-wrapper d-flex flex-row ">
          <div class="user mr-3">
              <img class="" src="./assets/img/user 1.svg" alt="">
          </div>
          <p>My Account</p>
      </div>
      <div class="map-wrapper d-flex flex-row">
          <div class="map mr-3">
              <img class="" src="./assets/img/map-pin (3) 1.svg" alt="">
          </div>
          <p>Shipping Address</p>
      </div>
      <div class="clipboard-wrapper d-flex flex-row">
          <div class="clipboard mr-3">
              <img  src="./assets/img/clipboard 1.svg" alt="">
          </div>
          <p>My Order</p>
      </div> */}
      </Row>
      </Container>
      </>
    )
  }
}
