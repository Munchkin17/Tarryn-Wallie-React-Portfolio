import { useState, useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
/*import { ArrowRightCircle } from "react-bootstrap-icons";*/
import me from "../assets/img/profilePicture.png";
/*import headerImg from "../assets/img/header-img.svg";*/
import 'animate.css';
import TrackVisibility from "react-on-screen";
/*import { isVisible } from "@testing-library/user-event/dist/utils";*/
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
/*import { BsSun } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";*/
import cvTarrynWallie from '../assets/CV of Tarryn Emily Wallie.pdf';


export const Banner  = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full Stack Developer", "Software Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100); 
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return() => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        
        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi I'm Tarryn Wallie`}<span className="wrap"> {text}</span></h1>
                                <p> A junior developer with experience in front-end and back-end development.</p>
                                
                                <span className="buttons-in-banner">
              {/*<div className="social-icon">
                <a href="https://www.linkedin.com/in/tarryn-wallie-a290441ba/" ><BiLogoLinkedin/></a>
                <a href="https://github.com/Munchkin17"><BiLogoGithub/></a>
                 
</div>*/}
              
                <button className="connectBtn"><span><a href="#connect" style={{color: 'white'}}>Let's Connect</a></span></button>
                <button className="downloadBtn"><span><a download="CV of Tarryn Emily Wallie" href={cvTarrynWallie} style={{color: 'white'}}>Download CV</a></span></button>

            </span>
                            </div>}
                            
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={me} alt="This is Me" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}