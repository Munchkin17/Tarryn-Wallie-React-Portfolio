import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import htmlLogo from "../assets/img/html_logo.png";
import cssLogo from "../assets/img/css_logo.png";
import nodeLogo from "../assets/img/node_js_logo.png";
import sqlLogo from "../assets/img/sql-logo.png";
import bsLogo from "../assets/img/bs_logo.png";
import csharpLogo from "../assets/img/csharp_logo.png";
import javaLogo from "../assets/img/java_logo.png";
import phpLogo from "../assets/img/php_logo.png";
import pythonLogo from "../assets/img/python_logo.png";
import reactLogo from "../assets/img/react_logo.png";
import jsLogo from "../assets/img/js_logo.png";
import wordpressLogo from "../assets/img/js_logo.png";
import adobeIllusLogo from "../assets/img/adobe illustrator logo.png";
import photoshopLogo from "../assets/img/adobe-photoshop-logo.png";
//import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={htmlLogo} alt="HTML logo" />
                                    <h3>HTML</h3>
                                    <img src={cssLogo} alt="CSS logo" />
                                    <h3>CSS</h3>
                                </div>
                                <div className="item">
                                    <img src={bsLogo} alt="Bootstrao logo" />
                                    <h3>Bootstrap</h3>
                                    <img src={jsLogo} alt="Javascript logo" />
                                    <h3>JavaScript</h3>
                                </div>
                                <div className="item">
                                    <img src={reactLogo} alt="React logo" />
                                    <h3>React</h3>
                                    <img src={nodeLogo} alt="Node JS logo" />
                                    <h3>Node JS</h3>
                                </div>
                                <div className="item">
                                <img src={pythonLogo} alt="Python logo" />
                                    <h3>Python</h3>
                                    <img src={javaLogo} alt="Java logo" />
                                    <h3>Java</h3>
                                </div>
                                <div className="item">
                                    <img src={sqlLogo} alt="SQL logo" />
                                    <h3>SQL</h3>
                                    <img src={phpLogo} alt="PHP logo" />
                                    <h3>PHP</h3>
                                </div>
                                <div className="item">
                                <img src={csharpLogo} alt="C# logo" />
                                    <h3>C#</h3>
                                    <img src={"https://th.bing.com/th/id/R.7cab80917990eac1c026ad65766f75eb?rik=UQZMnibMe5Z9Vw&riu=http%3a%2f%2fareteit.com%2fwp-content%2fuploads%2f2014%2f12%2fWordpress_logo_8.png&ehk=O4jA0BXTCzM8FjsJcMOmQ51LNT8uoQgxImTdb9q4FDg%3d&risl=&pid=ImgRaw&r=0"} alt="Wordpress logo" style={{width: "100px", marginTop: "50px"}} />
                                    <h3 style={{marginTop:"50px"}}>Wordpress</h3>
                                </div>
                                <div className="item">
                                <img src={adobeIllusLogo} alt="Adobe Illustrator logo" style={{width: "130px", marginTop: "65px"}}/>
                                    <h3 style={{marginTop:"55px"}}>Adobe Illustrator</h3>
                                    <img src={photoshopLogo} alt="Photoshop logo" style={{width: "130px", marginTop: "30px"}}/>
                                    <h3 style={{marginTop:"40px"}}>Adobe Photoshop</h3>
                                </div>
                            
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/*<img className="background-image-left" src={colorSharp} alt=" " />*/}
        </section>
      )
    
}