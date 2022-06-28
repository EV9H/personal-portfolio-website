import React from "react";
import {useParams} from "react-router-dom";
import {projectList} from "../helpers/ProjectList"
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css"
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import InstagramIcon from "@material-ui/icons/Instagram";

function ProjectDisplay(){
    const navigate = useNavigate();
    const {id} = useParams();
    const project = projectList[id];
    return (
        <div className="project">

            <h1>{project.name}</h1>
            <img src={project.image} alt=""/>
            <p> {project.skill}</p>
            <div className = "icons">

                <button className = "externalLinkButton" onClick = { () => {window.open(project.link, "_blank");}} >
                    <GitHubIcon/>
                </button>
                <button className = "backButton" onClick = { () => navigate(-1) }> <ArrowBackIosNewIcon className = "backIcon"></ArrowBackIosNewIcon> </button>

            </div>

        </div>)
}

export default ProjectDisplay;