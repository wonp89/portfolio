import React, { Component } from 'react';
import classes from '../assets/sass/Movie.scss';
import video from '../assets/images/mountainBackground.mov';

class Movie extends Component {

    render() {
        return (
            <div id={classes.movieContainer}>
                <video autoPlay muted loop id={classes.myVideo}>
                    <source src={video} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
        )
    }
}

export default Movie;