
import { Container, Row, Col } from "react-bootstrap";
/*import contactImg from "../assets/img/contact-img.svg";*/
import aboutMeImg from "../assets/img/me.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
   return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn aboutImg " : ""} src={aboutMeImg} alt="About Me"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>About Me</h2>
                <p>Hi, I'm Tarryn! I'm a junior full stack developer who is passionate about designing and creating unique, user-friendly online applications.
                   I became interested in designing and developing projects in high school when I studied computers, and I've been hooked ever since. 
                   I am a recent graduate from IIE Rosebank College Cape Town Campus, where I honed my skills in both front-end and back-end development, 
                   and I'm excited to start my career in the tech industry. </p>

                <p>In my spare time outside of coding, I like to learn about various cultures through music, entertainment, and literature. K-pop music, Korean dramas, Japanese anime,
                   Chinese dramas, and Thai dramas are my favourites. Through reading, I also enjoy immersing myself in various cultures and viewpoints. 
                   Reading broadens my perspective on the world and entertains me, whether it be in contemporary literature or fantasy books.
                   I appreciate bringing my interests in these fields into my daily life since I think that learning about many cultures may increase our understanding of the world.</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
  }
 

