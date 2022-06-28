import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";
import GithubIcon from "@material-ui/icons/GitHub";
function Footer() {

    return (
        <div className="footer">
            <div className="socialMedia">
                {/*<InstagramIcon></InstagramIcon>
                <LinkedInIcon></LinkedInIcon>
                <GitHubIcon></GitHubIcon>*/}

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
            <p>&copy; 2022 Haozhou Huang </p>
        </div>
    );
}

export default Footer;
