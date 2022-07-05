import {
    faAngular,
    faCss3,
    faGit,
    faHtml5,
    faJsSquare,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const About = () => {
    const [letterClass, setLetterClass] = React.useState("text-animate");

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa laboriosam exercitationem vero pariatur natus
                        repellat mollitia quis ratione distinctio alias.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa laboriosam exercitationem vero pariatur natus
                        repellat mollitia quis ratione distinctio alias.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa laboriosam exercitationem vero pariatur natus
                        repellat mollitia quis ratione distinctio alias.
                    </p>
                </div>

                <div className='state-cube-container'>
                    <div className='cubespinner'>
                        <div className='face1 face'>
                            <FontAwesomeIcon icon={faAngular} color='#dd0032' />
                        </div>
                        <div className='face2 face'>
                            <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
                        </div>
                        <div className='face3 face'>
                            <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                        </div>
                        <div className='face4 face'>
                            <FontAwesomeIcon icon={faCss3} color='#2ba4d9' />
                        </div>
                        <div className='face5 face'>
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                color='#efda1d'
                            />
                        </div>
                        <div className='face6 face'>
                            <FontAwesomeIcon icon={faGit} color='#ec4d28' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
};

export default About;
