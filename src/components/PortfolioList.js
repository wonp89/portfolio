import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import classes from '../assets/sass/PortfolioList.scss';

class PortfolioList extends Component {

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={6}>
                            hello
                        </Col>
                        <Col xs={6} md={6}>
                            hello
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} md={6}>
                            hello
                        </Col>
                        <Col xs={6} md={6}>
                            hello
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} md={6}>
                            hello
                        </Col>
                        <Col xs={6} md={6}>
                            hello
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default PortfolioList;