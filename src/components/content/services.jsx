
import React, { Component } from 'react';
import reactDOM from 'react-dom';
import WebappIcon from './../images/webdev.png';
import MobileappIcon from './../images/appdev.png';

export class Services extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="services-container container">
                <p className="services-title ">SERVICES</p>
                <ul className="services-icons">
                    <li>
                        <img src={WebappIcon} alt="" className="webapp-icon"/>
                        <p className="service-label">Web Application Deveolopment</p>
                    </li>
                    <li>
                        <img src={MobileappIcon} alt="" className="mobileapp icon"/>
                        <p className="service-label">Mobile Application Development</p>
                    </li>
                </ul>
            </div>
        )
    }
}