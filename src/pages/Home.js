import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css"

function Home(){
    return(
        <div className="home">
            <div className = "about">
                <h2> Hi, My Name is Haozhou</h2>
                <div className="prompt">
                    <p>
                        A computer science student at NYU with passion for creating and learning.
                    </p>
                    <GithubIcon/>
                    <LinkedInIcon/>
                    <EmailIcon/>
                </div>
            </div>

            <div className= "skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-end</h2>
                        <span>IDK</span>
                    </li>
                    <li className="item">
                        <h2>Back-end</h2>
                        <span>IDK</span>
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