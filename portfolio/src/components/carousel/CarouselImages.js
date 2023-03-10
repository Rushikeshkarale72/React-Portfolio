import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";
import { GoProject } from 'react-icons/go'
import { FaArrowCircleDown } from 'react-icons/fa'
import Hello from '../images/Hello.jpg'
import Pencil from '../images/Pencil.jpg'
// import laptop1 from '../images/laptop1.jpg'

class CarouselImages extends Component {
    render() {
        return (
            <div className={classes.carousel_container} id="start">
                {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
                <Carousel className={classes.carousel} dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay showStatus={false} showThumbs={false} >
                    <div className={classes.image_container} >
                        <img className={classes.image} src={Hello} alt="myImage" />
                        <div className={classes.h1}>
                            <h1 >I'm Rushikesh</h1>
                            <a href="https://drive.google.com/file/d/1l5VSDveuzolRRzh7eD4-i0Rl2uv73tMA/view?usp=share_link" rel="opener noreferrer" target="_blank">VIEW CV   <FaArrowCircleDown /></a>
                        </div>
                    </div>
                    <div className={classes.image_container} id="project">
                        <img className={classes.image} src={Pencil} alt="myImage" />
                        <div className={classes.h2} >
                            <h1> I love building</h1>
                            <h1>THINGS!!</h1>
                            <a href="https://github.com/Rushikeshkarale72" rel="opener noreferrer" target="_blank">VIEW PROJECTS   <GoProject /></a>
                        </div>
                    </div>
                    {/* <div className={classes.image_container}>
                    <img className={classes.image} src={laptop1} alt="myImage"/>
                    <div  className={classes.h1}> 
                    </div>
                </div> */}
                </Carousel>
                {/* </ScrollAnimation> */}
            </div>
        )
    }
}
export default CarouselImages