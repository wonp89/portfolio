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
                            <h3>CONNECT SCHOOL</h3>
                            <p className={classes.dotDecoration}>•</p>
                            <Col md={6} className={classes.firstImageContainer}>
                                <img src="../src/assets/images/portfolio6-1.png" />
                            </Col>
                            <Col md={6} >
                                <img src="../src/assets/images/portfolio6-2.png" />
                            </Col>
                            <p className={classes.dotDecoration}>•</p>
                            <div className={classes.linkContainer}>
                                <a href="https://github.com/wonp89/connect-school" target="_blank">SOURCE CODE</a><span> | </span><a href="https://connect-school.herokuapp.com" target="_blank">VIEW WEBSITE</a>
                            </div>
                            <p className={classes.technologies}> NodeJS, ExpressJS, ReactJS, Redux, MongoDB, PassportJS, Sendgrid, Materialize-css, Redux-Form</p>
                            <p> A website that connects students in Vancouver by creating and joining events. A user can login in with his/her google account and search through the events by selecting school names. When user join the event, he/she will get a confirmation email with the event detail. If the event date has been expired, the event status will be automatically changed to ‘expired event’. User can also view joined or expired event from user Information page. If user changed major or transferred to another school, he/she can updates the user information anytime. This project has been achieved with NoSql database and react/redux.</p>
                        </Row>

                        <Row className={classes.portfolioList}>
                            <h3>SUSHI FIELD</h3>
                            <p className={classes.dotDecoration}>•</p>
                            <Col md={6} className={classes.firstImageContainer}>
                                <img src="../src/assets/images/portfolio5-1.png" />
                            </Col>
                            <Col md={6} >
                                <img src="../src/assets/images/portfolio5-2.png" />
                            </Col>
                            <p className={classes.dotDecoration}>•</p>
                            <div className={classes.linkContainer}>
                                <a href="https://github.com/wonp89/sushi-field" target="_blank">SOURCE CODE</a><span> | </span><a href="http://www.sushifield.com" target="_blank">VIEW WEBSITE</a>
                            </div>
                            <p className={classes.technologies}> NodeJS with Typescript, ExpressJS, Angular, MongoDB, Bootstrap, Jquery, GoogleMap Api</p>
                            <p>  A Japanese restaurant website that owner has full control on updating the menu. The owner can login with his account and set up names, prices, and descriptions for his menus. The menu can be also moved from one section to another. Both backend and frontend are done with typescript.
                            </p>
                        </Row>

                        <Row className={classes.portfolioList}>
                            <h3>MILL BAY SUSHI</h3>
                            <p className={classes.dotDecoration}>•</p>
                            <Col md={6} className={classes.firstImageContainer}>
                                <img src="../src/assets/images/portfolio4-1.png" />
                            </Col>
                            <Col md={6}>
                                <img src="../src/assets/images/portfolio4-2.png" />
                            </Col>
                            <p className={classes.dotDecoration}>•</p>
                            <div className={classes.linkContainer}>
                                <a href="https://github.com/wonp89/MillBay-Sushi" target="_blank">SOURCE CODE</a><span> | </span><a href="http://www.millbaysushi.com" target="_blank">VIEW WEBSITE</a>
                            </div>
                            <p className={classes.technologies}>NodeJS, ReactJS, Nodemailer, Google OAuth2, GoogleMap Api, MaterialUI</p>
                            <p>A static Japanese restaurant website with unique design and illustrations. A customer can send an email to the owner directly through the website.
                            </p>
                        </Row>

                        <Row className={classes.portfolioList}>
                            <h3>MAZE RUNNER</h3>
                            <p className={classes.dotDecoration}>•</p>
                            <Col md={6} className={classes.firstImageContainer}>
                                <img src="../src/assets/images/portfolio3-1.png" />
                            </Col>
                            <Col md={6}>
                                <img src="../src/assets/images/portfolio3-2.png" />
                            </Col>
                            <p className={classes.dotDecoration}>•</p>
                            <div className={classes.linkContainer}>
                                <a href="https://github.com/wonp89/GGJ2018" target="_blank">SOURCE CODE</a><span> | </span><a href="https://globalgamejam.org/2018/games/mazerunner" target="_blank">DOWNLOAD GAME</a>
                            </div>
                            <p className={classes.technologies}>Unity and C#</p>
                            <p>A 3D maze escaping mini-game that player gets 30 secs to memorize the maze, and then transfer the movement data to the robot by typing arrow keys. 4 members including my-self joined hackathon to achieve this project. I was responsible for camera movement, lighting, and overall design of the maze.</p>
                        </Row>

                        <Row className={classes.portfolioList}>
                            <h3>ORDER HELPER</h3>
                            <p className={classes.dotDecoration}>•</p>
                            <Col md={6} className={classes.firstImageContainer}>
                                <img src="../src/assets/images/portfolio2-1.png" />
                            </Col>
                            <Col md={6}>
                                <img src="../src/assets/images/portfolio2-2.png" />
                            </Col>
                            <p className={classes.dotDecoration}>•</p>
                            <div className={classes.linkContainer}>
                                <a href="https://github.com/wonp89/orderHelper" target="_blank">SOURCE CODE</a>
                            </div>
                            <p className={classes.technologies}> NodeJS, ExpressJS, PostgreSQL, Knex, Bootstrap, Jquery, GoogleMap Api</p>
                            <p>There are two types of users in this project. One is a restaurant owner, and the other is a supplier. When restaurant owner select a name of supplier, they will be connected to each other to share the lists of orders and delivery status. Restaurant owner can send orders to the suppliers after updating the lists. When suppliers received orders, a map of the restaurant location and estimated travel time will be shown. This project is a good example of MVC, server side rendering, and complex structure of postgresql data table.
                            </p>
                        </Row>

                        <Row className={classes.portfolioList}>
                            <h3>FORCE OF NATURE</h3>
                            <p className={classes.dotDecoration}>•</p>
                            <Col md={6} className={classes.firstImageContainer}>
                                <img src="../src/assets/images/portfolio1-1.png" />
                            </Col>
                            <Col md={6}>
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