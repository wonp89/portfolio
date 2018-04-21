import React, { Component } from 'react';
import classes from '../assets/sass/Header.scss';

class Header extends Component {

    render() {
        return (
            <div id={classes.headerBackground}>
                <div id={classes.header}>
                    <h1>WON PARK</h1>
                    <p>WEB DEVELOPER</p>
                </div>
            </div>
        )
    }
}

export default Header;