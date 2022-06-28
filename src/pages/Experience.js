import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import "../styles/Experience.css";
import Navbar from "../components/Navbar";

function Experience(){
    return <div className="experience">
        <Navbar/>
        <VerticalTimeline lineColor = "#3e497a">
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date = "2016 - 2019"
                iconStyle = {{background: "#3e497a", color : "#fff"}}
                icon = {<SchoolIcon/>}
            >
                <h3 className = "vertical-timeline-element-title">
                    JZIB, Shanghai, China
                </h3>

                <p> High School Diploma</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date = "2021"
                iconStyle = {{background: "#3e497a", color : "#fff"}}
                icon = {<WorkIcon/>}
            >
                <h3 className = "vertical-timeline-element-title">
                    GF Asset Management
                </h3>

                <p> Intern as Quantitative Investing Analyst </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date = "2019 - 2023"
                iconStyle = {{background: "#3e497a", color : "#fff"}}
                icon = {<SchoolIcon/>}
            >
                <h3 className = "vertical-timeline-element-title">
                    New York University
                </h3>

                <p> Computer Science, Economics </p>
            </VerticalTimelineElement>

        </VerticalTimeline>


    </div>;
}

export default Experience;