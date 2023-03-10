import React, { Component } from 'react'
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                {/* <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}> */}
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is <b>RUSHIKESH KARALE</b> and I am currently Traniee at Full Stack Web Developer at <a target="_blank" href="https://www.geekster.in/"><b>Geekster</b></a>. I completed my degree in Bachelor of Engineering in Electrical Engineering from Dr.Vithalrav Vikhe Patil Colleage of Engineering Ahmednagar. I am much interested in developing new things which excite me a lot. :  </p>
                        <p className={classes.br}>I love exploring new technologies and being a practitioner, I like to stay on top of latest trends. I try to leave every line of code I write more readable, accessible, and modular.
                        </p>
                    </div>
                {/* </ScrollAnimation> */}
            </div>
        )
    }
}

export default About;