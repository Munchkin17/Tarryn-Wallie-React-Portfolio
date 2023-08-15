import { Col } from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, githubLink}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img className="projectImg" src={imgUrl} alt="project application"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span> <br></br>
                    <br></br>
                    <span><a href={githubLink}>Learn More</a></span>
                </div>
            </div>
        </Col>
    )
}