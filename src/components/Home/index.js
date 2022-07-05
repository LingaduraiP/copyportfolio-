import React from "react";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png";
import "./home.scss";
import AnimatedLetters from "../AnimatedLetters/index";
import Logo from "./logo";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = React.useState("text-animate");
    const nameArray = ["l", "o", "b", "o", "d", "a", "n"];
    const jobArray = [
        "w",
        "e",
        "b",
        " ",
        "d",
        "e",
        "v",
        "e",
        "l",
        "o",
        "p",
        "e",
        "r",
    ];

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I'</span>
                        <span className={`${letterClass} _14`}>m</span>

                        <img src={LogoTitle} alt='Logo' />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
                    </h1>
                    <h2>Frontend developer / Javascript Expert</h2>
                    <Link to='/contact' className='flat_btn'>
                        CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </>
    );
};

export default Home;
