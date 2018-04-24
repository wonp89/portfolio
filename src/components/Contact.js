import React, { Component } from 'react';
import classes from '../assets/sass/Contact.scss';

class Header extends Component {

    render() {
        return (
            <div id={classes.contactBackground}>
                <div id={classes.header}>
                    <h1></h1>
                    <p>wonpark89@gmail.com</p>
                    <div>
                        <a href="https://www.github.com/wonp89" target="_blank">github.com/wonp89</a>
                    </div>
                    <div>
                        <p></p>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/wonpark89" target="_blank">linkedin.com/in/wonpark89</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;