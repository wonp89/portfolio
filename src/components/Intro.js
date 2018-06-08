import React, { Component } from 'react';
import { Grid, Row, Col, Media } from 'react-bootstrap';
import classes from '../assets/sass/Intro.scss';

class Intro extends Component {

    render() {
        return (
            <div id={classes.introBackground}>
                <Grid>
                    <div>{/* flex with ceterizing */}
                        <Row className="show-grid">
                            <h1>SKILLS</h1>
                            <Media>
                                <Media.Body>
                                    <div className={classes.introTextContainer}>
                                        <Media.Heading><span>FRONT END</span></Media.Heading>
                                        <p>JavaScript, Typescript, HTML5, CSS3, SASS, ReactJS, Redux, Angular, AJAX, jQuery</p>
                                    </div>
                                </Media.Body>
                            </Media>
                            <Media>
                                <Media.Body>
                                    <div className={classes.introTextContainer}>
                                        <Media.Heading><span>BACK END</span></Media.Heading>
                                        <p>NodeJS, ExpressJS, Ruby on Rails, Firebase, Webpack</p>
                                    </div>
                                </Media.Body>
                            </Media>
                            <Media>
                                <Media.Body>
                                    <div className={classes.introTextContainer}>
                                        <Media.Heading><span>DATABASES</span></Media.Heading>
                                        <p>MySQL, PostgreSQL, MongoDB, ActiveRecord</p>
                                    </div>
                                </Media.Body>
                            </Media>
                            <Media>
                                <Media.Body>
                                    <div className={classes.introTextContainer}>
                                        <Media.Heading><span>DEPLOYMENT & DEVELOPMENT TOOLS</span></Media.Heading>
                                        <p>Heroku, GitHub</p>
                                    </div>
                                </Media.Body>
                            </Media>
                            <Media>
                                <Media.Body>
                                    <div className={classes.introTextContainer}>
                                        <Media.Heading><span>ADDITIONAL SKILLS</span></Media.Heading>
                                        <p>Photoshop, Unity</p>
                                    </div>
                                </Media.Body>
                            </Media>
                        </Row>
                    </div>
                </Grid >
            </div >
        )
    }
}

export default Intro;