import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import facbook from './download.png'
import twitter from './twitter-logo.jpg'
import watsapp from './social-01-512.png'
import instagram from './1200x630wa.png'
import Stl_logo from './stl_logo.png'
export default class Footer extends Component {
    render(){
        return (
            <div>
        <div className="main-div-footer">
          <div className="foot1">
             <img src={Stl_logo} className="logo"></img>
             <div className="marg1">STL Algorithms</div>
             <div className="marg2">About Us</div>
             <div className="marg2">Services</div>
             <div className="marg2">Help</div>
        </div>
        <div className="foot2">
            <h4>RECENT NEWS</h4>
            <p>Footer with solid color background and a contact form, Easily add subscribe and contact forms without any server-side integration.</p>
            <p>Mobirise helps you cut down development time by providing you with a flexible website editor with a drag and drop interface.</p>
        </div>
        <div className="foot3">
            <center>
            <h4>SUBSCRIBE</h4>
            <h4>CONNECT WITH US:</h4>
           <a href="https://www.facebook.com/"><img className="footer-logo" src= {facbook}></img></a>
           <a href="https://www.instagram.com/accounts/login/?hl=en"><img className="footer-logo" src= {instagram}></img></a>
           <a href="https://twitter.com/login"><img className="footer-logo"src= {twitter}></img></a>
           <a href="https://www.whatsapp.com/"><img className="footer-logo"src= {watsapp}></img></a>
            </center>
        </div>
       
        </div>
        <div>
        <p className="col"><center> © Copyright 2018 Footer Template - All Rights Reserved</center> </p>
        </div>
        </div>
        )
    }
}