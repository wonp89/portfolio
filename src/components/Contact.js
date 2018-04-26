import React, { Component } from 'react';
import classes from '../assets/sass/Contact.scss';

class Header extends Component {

    render() {
        return (
            <div id={classes.contactBackground}>
                <div id={classes.header}>
                    <h1>CONTACT</h1>
                    <span>wonpark89@gmail.com</span>
                    <div>
                        <a href="https://www.linkedin.com/in/wonpark89" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://www.github.com/wonp89" target="_blank"><i class="fab fa-github-square"></i></a>
                        <p><a href="../src/assets/images/WonPark_Resume.pdf" target="_blank"  id={classes.resume}>RESUME</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;

