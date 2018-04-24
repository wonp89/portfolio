import React, { Component } from 'react';
import classes from '../assets/sass/Portfolio.scss';

class Portfolio extends Component {

    render() {
        return (
            <div id={classes.portfolioBackground}>
                <div id={classes.portfolioHeader}>
                    <h1>PORTFOLIO</h1>
                    <p><a href="#" target="_blank">VIEW SOUCE CODE FOR THIS WEBSITE</a></p>
                </div>
            </div>
        )
    }
}

export default Portfolio;