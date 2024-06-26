import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
/*import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";*/
import colorSharp2 from "../assets/img/color-sharp2.png";
import hangmanGame from "../assets/img/simple hangman game.png"
import schoolWebsite from "../assets/img/school website.png";
import chatApp from "../assets/img/react chat app.png";
import pythonCalculator from "../assets/img/simple python calculator.png";
import bankingApp from "../assets/img/python banking app.png";
import redQueen from "../assets/img/red-queen-lpage.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Projects = () => {

  const websiteProjects = [
    {
      title: "Mzamomtsha School Website",      
      description: "A school website developed using HTML, CSS, Bootstrap & Javascript",
      imgUrl: schoolWebsite,
      githubLink:"https://github.com/Munchkin17/Mzamomtsha-Primary-School-Website",
      demoLink: ""
    },
    {
      title: "React Chat App",
      description: "Chat application designed and developed using React Js, Node Js, and Chat Engine",
      imgUrl: chatApp,
      githubLink:"https://github.com/Munchkin17/React-Chat-App",
      demoLink: ""
    },
    {
      title: "Simple Python Calculator",
      description: "A python calculator developed and designed using python & tkinter",
      imgUrl: pythonCalculator,
      githubLink: "https://github.com/Munchkin17/Simple-Python-Calculator-with-GUI",
      demoLink: ""
    },
    {
      title: "Banking App with GUI",
      description: "A banking app developed and designed using python & tkinter",
      imgUrl: bankingApp,
      githubLink: "https://github.com/Munchkin17/BankingAppWithGUI",
      demoLink: ""
    },
    {
      title: "Red Queen Landing Page",
      description: "A simple landing page developed and designed using React.js",
      imgUrl: redQueen,
      githubLink: "https://github.com/Munchkin17/RED_QUEEN",
      demoLink: "https://red-queen-landing-page.netlify.app/"
    },
    
  ];

  const mobileProjects = [
    
  ];

  const gameProjects = [
    {
      title: "Word Wizard",
      description: "A simple hangman game using HTML, CSS & Javascript",
      imgUrl: hangmanGame,
      githubLink: "https://github.com/Munchkin17/Word-Wizard-Game",
      demoLink: ""
    }
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <h2>Projects</h2>
                    <br></br>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                    <Nav.Link eventKey="first">Web Applications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Mobile Applications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">Game Applications</Nav.Link>
                </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          websiteProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          mobileProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          gameProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}