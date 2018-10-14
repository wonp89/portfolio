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
                            <Media>
                                <Media.Body>
                                    <div className={[classes.introTextContainer, classes.firstIntroContainer].join(' ')}>
                                        <Media.Heading><h1>Hello, My Name is Won!</h1></Media.Heading>
                                        <p>I am a web developer who lives in Vancouver, Canada. The most exciting part of web development is the moment that I build web apps that people can actually use. I like sharing ideas with people and challenging myself to acquire new knowledge. Other than coding, I enjoy hiking, cooking and eating.</p>
                                    </div>
                                </Media.Body>
                            </Media>
                            <Media style={{ marginTop: 0 }}>
                                <Media.Body>
                                    <div className={classes.introTextContainer}>
                                        <Media.Heading><span>FRONT END</span></Media.Heading>
                                        <p>JavaScript, Typescript, ReactJS, React-Native, Redux, Angular2+, HTML5, CSS3, SASS, AJAX, jQuery</p>
                                    </div>
                                </Media.Body>
                            </Media>
                            <Media>
                                <Media.Body>
                                    <div className={classes.introTextContainer}>
                                        <Media.Heading><span>BACK END</span></Media.Heading>
                                        <p>NodeJS, ExpressJS, Ruby on Rails, Webpack</p>
                                    </div>
                                </Media.Body>
                            </Media>
                            <Media>
                                <Media.Body>
                                    <div className={classes.introTextContainer}>
                                        <Media.Heading><span>DATABASES</span></Media.Heading>
                                        <p>PostgreSQL, MongoDB, Firebase, ActiveRecord</p>
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