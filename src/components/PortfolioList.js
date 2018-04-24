import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import classes from '../assets/sass/PortfolioList.scss';

class PortfolioList extends Component {

    render() {
        return (
            <div>
                <div id={classes.portfolioListBackground}>
                    <Grid>

                        <Row className={classes.portfolioList}>
                            <h3>SUSHI FIELD</h3>
                            <p className={classes.dotDecoration}>•</p>
                            <Col xs={6} md={6} style={{ borderRight: "solid 1px #fff1b9" }}>
                                <img src="../src/assets/images/portfolio5-1.png" />
                            </Col>
                            <Col xs={6} md={6}>
                                <img src="../src/assets/images/portfolio5-2.png" />
                            </Col>
                            <p className={classes.dotDecoration}>•</p>
                            <div className={classes.linkContainer}>
                                <a href="https://github.com/wonp89/sushi-field" target="_blank">SOURCE CODE</a><span> | </span><a href="http://www.sushifield.com" target="_blank">VIEW WEBSITE</a>
                            </div>
                            <p className={classes.technologies}> NodeJS with Typescript, ExpressJS, Angular, MongoDB, Bootstrap, Jquery, GoogleMap Api</p>
                            <p> A Japanese restaurant website that owner has full control on editing the menu.</p>
                        </Row>

                        <Row className={classes.portfolioList}>
                            <h3>MILL BAY SUSHI</h3>
                            <p className={classes.dotDecoration}>•</p>
                            <Col xs={6} md={6} style={{ borderRight: "solid 1px #fff1b9" }}>
                                <img src="../src/assets/images/portfolio4-1.png" />
                            </Col>
                            <Col xs={6} md={6}>
                                <img src="../src/assets/images/portfolio4-2.png" />
                            </Col>
                            <p className={classes.dotDecoration}>•</p>
                            <div className={classes.linkContainer}>
                                <a href="https://github.com/wonp89/MillBay-Sushi" target="_blank">SOURCE CODE</a><span> | </span><a href="http://www.millbaysushi.com" target="_blank">VIEW WEBSITE</a>
                            </div>
                            <p className={classes.technologies}>NodeJS, ReactJS, Nodemailer, Google OAuth2, GoogleMap Api, MaterialUI</p>
                            <p>A Japanese restaurant website with a sending email option.</p>
                        </Row>

                        <Row className={classes.portfolioList}>
                            <h3>MAZE RUNNER</h3>
                            <p className={classes.dotDecoration}>•</p>
                            <Col xs={6} md={6} style={{ borderRight: "solid 1px #fff1b9" }}>
                                <img src="../src/assets/images/portfolio3-1.png" />
                            </Col>
                            <Col xs={6} md={6}>
                                <img src="../src/assets/images/portfolio3-2.png" />
                            </Col>
                            <p className={classes.dotDecoration}>•</p>
                            <div className={classes.linkContainer}>
                                <a href="https://github.com/wonp89/GGJ2018" target="_blank">SOURCE CODE</a><span> | </span><a href="https://globalgamejam.org/2018/games/mazerunner" target="_blank">DOWNLOAD GAME</a>
                            </div>
                            <p className={classes.technologies}>Unity and C#</p>
                            <p>A 3D maze escaping mini-game that player gets 30 secs to memorize the maze, and then transfer the movement data to the robot by typing arrow keys.</p>
                        </Row>

                        <Row className={classes.portfolioList}>
                            <h3>ORDER HELPER</h3>
                            <p className={classes.dotDecoration}>•</p>
                            <Col xs={6} md={6} style={{ borderRight: "solid 1px #fff1b9" }}>
                                <img src="../src/assets/images/portfolio2-1.png" />
                            </Col>
                            <Col xs={6} md={6}>
                                <img src="../src/assets/images/portfolio2-2.png" />
                            </Col>
                            <p className={classes.dotDecoration}>•</p>
                            <div className={classes.linkContainer}>
                                <a href="https://github.com/wonp89/orderHelper" target="_blank">SOURCE CODE</a>
                            </div>
                            <p className={classes.technologies}> NodeJS, ExpressJS, PostgreSQL, Knex, Bootstrap, Jquery, GoogleMap Api</p>
                            <p>Restaurant owners create order lists for keeping track of many different suppliers. They can also send orders with their lists to the suppliers. The suppliers then receive orders and keep track of many different restaurants order lists. </p>
                        </Row>

                        <Row className={classes.portfolioList}>
                            <h3>FORCE OF NATURE</h3>
                            <p className={classes.dotDecoration}>•</p>
                            <Col xs={6} md={6} style={{ borderRight: "solid 1px #fff1b9" }}>
                                <img src="../src/assets/images/portfolio1-1.png" />
                            </Col>
                            <Col xs={6} md={6}>
                                <img src="../src/assets/images/portfolio1-2.png" />
                            </Col>
                            <p className={classes.dotDecoration}>•</p>
                            <div className={classes.linkContainer}>
                                <a href="https://github.com/wonp89/forceofnature_mission_control" target="_blank">SOURCE CODE</a><span> | </span><a href="https://forceofnature.herokuapp.com/" target="_blank">VIEW WEBSITE</a>
                            </div>
                            <p className={classes.technologies}>Ruby on Rails, Bootstrap, PostgreSQL</p>
                            <p>Development of a website designed for the facilitation of and communication among volunteers and event hosts. The website has availability of posting volunteer events and calendar display for events availability.</p>
                        </Row>

                    </Grid>
                </div>
                <div></div>
            </div>
        )
    }
}

export default PortfolioList;