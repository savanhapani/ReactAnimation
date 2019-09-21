import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Stl_logo from './stl_logo.png'
export default class Header extends Component {
    render(){
        return (
            
        <div className="main-div">
            <img className="logo" src={Stl_logo}></img>
            <input type="text" className="input" onChange={this.handleChange} placeholder="Search here..." />
            <i class="fa fa-search" id="abc"></i>
            <ul className="menu-ul">
                <li><Link className="decoration" to="/">Home</Link></li>
                <li><Link className="decoration" to="/Contact1">Contact</Link></li>
                <li><Link className="decoration" to="/contact">Help</Link></li>
            </ul>
        </div>
        )
    }
}