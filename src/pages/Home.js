import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../styles/Home.css"
import Navbar from "../components/Navbar";

function Home(){
    return(
        <div className="home">
            <Navbar/>
            <div className = "about">
                {/*<div className="enter" id = "nav"> <Navbar/></div>*/}

                <h2 id = "entry-animation"> Haozhou Huang</h2>

                <div className="prompt">
                    <h3 className= "enter"> Portfolio Site</h3>
                    {/*<p className= "mini-prompt"> 「 Learning, Coping, Creating 」</p>*/}
                    <div className= "enter">
                        <button className = "externalLinkButton" onClick = { () => {window.open("https://github.com/EV9H", "_blank");}} >
                            <GithubIcon className = "icon1"/>
                        </button>

                        <button className = "externalLinkButton" onClick = { () => {window.open("https://www.linkedin.com/in/haozhou-huang-528682195/", "_blank");}} >
                            <LinkedInIcon className = "icon1"/>
                        </button>

                        <button className = "externalLinkButton" onClick = { () => {window.open("https://www.instagram.com/", "_blank");}} >
                            <InstagramIcon className = "icon1"/>
                        </button>

                    </div>

                </div>
            </div>

            <div className= "skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-end</h2>
                        <span>HTML, CSS, ReactJS,ReactNative </span>
                    </li>
                    <li className="item">
                        <h2>Back-end</h2>
                        <span>MySQL</span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span> Java, Python, C++, C, JavaScript</span>
                    </li>

                </ol>

            </div>

        </div>




        )

}

export default Home;