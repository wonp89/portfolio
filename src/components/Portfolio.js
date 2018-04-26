import React, { Component } from 'react';
import classes from '../assets/sass/Portfolio.scss';

class Portfolio extends Component {

    render() {
        return (
            <div id={classes.portfolioBackground}>
                <div id={classes.portfolioHeader}>
                    <h1>PORTFOLIO</h1>
                    <p><a href="https://github.com/wonp89/portfolio" target="_blank">VIEW SOURCE CODE FOR THIS WEBSITE</a></p>
                </div>
            </div>
        )
    }
}

export default Portfolio;