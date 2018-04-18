import React, { Component } from 'react';
import classes from '../assets/sass/Home.scss';
import { Jumbotron, Button } from 'react-bootstrap';

class HomePage extends Component {

    render() {
        return (
            <div className={classes.home}>
                <h1>Hello world</h1>
                <h2>Hello</h2>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button bsStyle="primary">Learn more</Button>
                    </p>
                </Jumbotron>;
            </div>
        )
    }
}

export default HomePage;