import React, { Component } from 'react';
import { Collapse, Well } from 'react-bootstrap';
import Scroll from 'react-scroll-to-element';
import classes from '../assets/sass/Header.scss';

class Header extends Component {
    state = {
        open: false
    };

    render() {
        return (
            <div id={classes.headerBackground}>

                <div id={classes.navContainer}>
                    <div className={classes.navDropdown} style={this.state.open === true ? { color: 'rgb(255, 230, 132)' } : null} onClick={() => this.setState({ open: !this.state.open })}>☰</div>
                    <Collapse in={this.state.open}>
                        <div>
                            <ul class="list-unstyled" id={classes.linkList}>
                                <Scroll type="id" element="Intro__introBackground__1Q0rq">
                                    <li>SKILLS</li>
                                </Scroll>
                                <Scroll type="id" element="Portfolio__portfolioBackground__EStaT">
                                    <li>PORTFOLIO</li>
                                </Scroll>
                                <Scroll type="id" element="Contact__contactBackground__3Rzxk">
                                    <li>CONTACT</li>
                                </Scroll>
                            </ul>
                        </div>
                    </Collapse>
                </div>

                <div id={classes.header}>
                    <h1 className={classes.myName}>WON PARK</h1>
                    <p>WEB DEVELOPER</p>
                </div>
            </div>
        )
    }
}

export default Header;