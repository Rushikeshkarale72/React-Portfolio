import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
            <div className={classes.box} id="education">
                {/* <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}> */}
                    <span className={classes.head}>MY JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        {/* <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}> */}
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Experience  <span>July(2022)-Present</span></h2>
                                                    <p>I am currently Traniee as <b>Full Stack Web Developer </b> at <a target="_blank" href="https://www.geekster.in/"><b>Geekster</b></a> <i>(Geekster is on a mission to help people build great careers.)</i> and boosting my professional skills.</p>
                                                </div>
                                            </article>
                                        {/* </ScrollAnimation> */}
                                        {/* <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}> */}
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Undergraduation at DVVPCOE <span>2017-2022</span></h2>
                                                    <p>I completed my undergraduation in EE (Electrical Engineering) from <a href='https://enggnagar.com/'>DVVPCOE</a> with overall CGPA 8.22/10.</p>
                                                </div>
                                            </article>
                                        {/* </ScrollAnimation> */}
                                        {/* <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}> */}
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FaSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Higher Education  <span>2014-2016</span></h2>
                                                    <p>I have completed my higher education from SBMV with major subjects as Physics,Chemistry & Maths with 68.7% in state board. </p>
                                                </div>
                                            </article>
                                        {/* </ScrollAnimation> */}

                                        {/* <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}> */}
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Internship</h2>
                                                    <p>Completed Two month Internship in React Js with Geekster</p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div className={classes.timeline_icon_3 || classes.color_none}></div></div>
                                            </article>
                                        {/* </ScrollAnimation> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                {/* </ScrollAnimation> */}
            </div>

        )
    }
}

export default Education;