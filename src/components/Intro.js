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
                            <p>"I am a web developer who has passion in learning new web technologies and creating innovative websites that satisfy people."</p>
                            <Media>
                                    <Media.Body>
                                        <div className={classes.introTextContainer}>
                                            <Media.Heading>FRONT END/LANGUAGES</Media.Heading>
                                            <p>JavaScript, Typescript, Ruby, HTML5, CSS3, SASS, ReactJS, Angular, jQuery</p>
                                        </div>
                                    </Media.Body>
                            </Media>
                            <Media>
                                    <Media.Body>
                                        <div className={classes.introTextContainer}>
                                            <Media.Heading>BACK END</Media.Heading>
                                            <p>NodeJS, ExpressJS, Ruby on Rails, Firebase, Webpack</p>
                                        </div>
                                    </Media.Body>
                            </Media>
                            <Media>
                                    <Media.Body>
                                        <div className={classes.introTextContainer}>
                                            <Media.Heading>DATABASES</Media.Heading>
                                            <p>MySQL, PostgreSQL, MongoDB, ActiveRecord</p>
                                        </div>                                       
                                    </Media.Body>
                            </Media>
                            <Media>
                                    <Media.Body>
                                        <div className={classes.introTextContainer}>
                                            <Media.Heading>DEPLOYMENT & DEVELOPMENT TOOLS</Media.Heading>
                                            <p>Linux (Ubuntu), Heroku, GitHub</p>
                                        </div>                                      
                                    </Media.Body>
                            </Media>
                            <Media>
                                    <Media.Body>
                                        <div className={classes.introTextContainer}>
                                            <Media.Heading>ADDITIONAL SKILLS</Media.Heading>
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