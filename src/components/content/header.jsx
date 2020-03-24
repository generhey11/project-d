import React, { Component } from 'react';
import reactDOM from 'react';
import {Navbar, Nav, Button, Form, FormControl, Row, Col} from 'react-bootstrap';

export class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Navbar fluid bg="success" className="bg-light justify-content-start" sticky="top">
                <Row>
                    <Col md="auto">
                        <Navbar.Brand>GEONERD</Navbar.Brand>
                    </Col>
                    <Col md="auto">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Col>
                    <Col md="auto">
                        <Nav fill variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">About Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Contact Us</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
        </Navbar>
        )
    }
}