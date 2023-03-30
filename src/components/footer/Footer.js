import React from 'react'
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"
import GoogleStore from "../../assests/google.png"
import AppleStore from "../../assests/applestore.png"
import SupportIcon from '@mui/icons-material/Support';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Footer() {
  return (
    <>
      <div className='footer'>
        <Container className='footer_container'>
          <hr />
          <Row className='footer_links'>

            <Col sm={3}>
              <h4>COMPANY</h4>
              <ul type="none">
                <li>
                  <Link to="/faq" className='supportLink' >FAQ</Link>
                </li>
                <li>
                  <Link to="/about" className='supportLink'>About</Link>
                </li>
                <li>
                  <Link to="/careers" className='supportLink'>Careers</Link>
                </li>
                <li>
                  <Link to="/blog" className='supportLink'>Blog</Link>
                </li>
                <li>
                  <Link to="/terms" className='supportLink'> Terms </Link>
                </li>
                <li>
                  <Link to="/privacy" className='supportLink'> Privacy </Link>
                </li>
              </ul>
            </Col>
            <Col sm={3}>
              <h4>HELP & CONTACT</h4>
              <ul type="none">
                <li>
                  <Link to="/helpcenter" className='supportLink' ><SupportIcon />Help Center</Link>
                </li>
                <li>
                  <Link to="/helpcenter" className='supportLink'><EmailIcon />Email Us</Link>
                </li>
                <li>
                  <Link to="/helpcenter" className='supportLink'><CallIcon />080-4042-4242</Link>
                </li>
              </ul>
            </Col>
            <Col sm={3}>
              <h4>MORE FROM US</h4>
              <ul type="none">
                <li>
                  <Link to="/bulkpartyorder" className='supportLink' >Bulk/Party Order</Link>
                </li>
                <li>
                  <Link to="/cakeorder" className='supportLink'>Cake Order</Link>
                </li>
                <li>
                  <Link to="/freshclub" className='supportLink'>FreshClub</Link>
                </li>
                <li>
                  <Link to="/offers" className='supportLink'>Offers</Link>
                </li>
              </ul>
            </Col>


            <Col sm={3} >
              <div>
                <Form>
                  <h4>SUBSCRIBE TO OUR DROOLWORTHY NEWSLETTER</h4>
                  <Form.Control type="email" className='m-1' placeholder="Enter your email" />
                  <Button variant="light" className='m-1 subscribebutton' type="submit"> Subscribe</Button>
                </Form>
              </div>


              <div>
                <ul className="list-unstyled">
                  <Row className="justify-content-between align-items-center">
                    <Col sm={12} md={12} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0 align-items-center">
                      <Link to="https://play.google.com/store/apps/details?id=com.freshmenu&utm_source=website&utm_medium=dlink&utm_campaign=appdownload" target="_blank">
                        <img className="googlestore" src={GoogleStore} alt="Download from Google Store" />
                        </Link>
                      <Link to="https://apps.apple.com/in/app/freshmenu-fresh-meal-delivery/id957179182?utm_campaign=appdownload&utm_medium=dlink&utm_source=website" target="_blank">
                      <img className="applestore" src={AppleStore} alt="Download from Apple Store" />
                      </Link>
                    </Col>
                    <Col sm={12} md={12} className="d-flex justify-content-center justify-content-md-end align-items-center">
                      <Link className='supportLink facebooklink' to="https://www.facebook.com/FreshMenuIndia" target="_blank" rel="noreferrer">
                        <FacebookIcon className="socialfooterlink" />
                      </Link>
                      <Link className='supportLink twitterlink ml-md-3' to="https://twitter.com/FreshMenuINDIA" target="_blank" rel="noreferrer">
                        <TwitterIcon className="socialfooterlink" />
                      </Link>
                      <Link className='supportLink instagramlink ml-md-3' to="https://www.instagram.com/freshmenu/" target="_blank" rel="noreferrer">
                        <InstagramIcon className="socialfooterlink" />
                      </Link>
                    </Col>
                  </Row>
                </ul>
              </div>




              {/* <div>
                <ul type="none">
                  <Row>
                    <Col sm={6}>
                      <Link> <img className="googlestore" src={GoogleStore} alt="Down from Google store" /> </Link>
                      <Link><img className="applestore" src={Applestore} alt="Down from Apple store" /></Link>
                    </Col>
                    <Col sm={6}>
                    <Link className='supportLink facebooklink' to="https://www.facebook.com/FreshMenuIndia" target="_blank"> <FacebookIcon className="socialfooterlink" /></Link>
                    <Link className='supportLink  twitterlink' to="https://twitter.com/FreshMenuINDIA" target="_blank"><TwitterIcon className="socialfooterlink" /></Link>
                    <Link className='supportLink  instagramlink' to="https://www.instagram.com/freshmenu/" target="_blank"><InstagramIcon className="socialfooterlink" /></Link>
                    </Col>
                  </Row>

                </ul>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer