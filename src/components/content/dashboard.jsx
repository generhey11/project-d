import React, { Component } from 'react';
import reactDOM from 'react-dom';

export class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    render(){
       return (
            <div className="dashboard-container">
                <div className="dashboard-title" name="#home">
                    <p>Geonerd Software Development</p>
                </div>
            </div>
       )
    }
}