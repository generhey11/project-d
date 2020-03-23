import React, { Component } from 'react';
import reactDOM from 'react-dom';

export class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="header-container" id="header">
                <div className="login-container">
                    <ul className="login-options">
                        <li>
                            <a href="#" className="login-btn">Login</a>
                        </li>
                        <li>
                            <a href="#" className="signup-btn">Sign up</a>
                        </li>
                    </ul>
                </div>
                
                <ul className="navigation">
                    <li>
                        <a href="#home" >Home</a>
                    </li>
                    <li>
                        <a href="#" >Services</a>
                    </li>
                    <li>
                        <a href="#" >Features</a>
                    </li>
                    <li>
                        <a href="#" >About Us</a>
                    </li>
                    <li>
                        <a href="#" >Contacts</a>
                    </li>
                </ul>
            </div>
        )
    }
}