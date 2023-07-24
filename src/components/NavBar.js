import { useState, useEffect} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.png'
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
/*import { BsSun } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";*/
import cvTarrynWallie from '../assets/CV of Tarryn Emily Wallie.pdf';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const[scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);         
            }
        }

            window.addEventListener("scroll", onScroll);
            
            return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        
          <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
              <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>About</Nav.Link>
              <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Education</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/tarryn-wallie-a290441ba/" target="_blank"><BiLogoLinkedin/></a>
                <a href="https://github.com/Munchkin17" target="_blank"><BiLogoGithub/></a>
                 {/* <a href="#" target="_blank"><BsSun/></a>
                <a href="#" target="_blank"><BsMoonStars/></a> */}
              </div>
              
                <button className="connectBtn"><span><Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('connect')} style={{color: 'white'}}>Let's Connect</Nav.Link></span></button>
                <button className="downloadBtn"><span><a download="CV of Tarryn Emily Wallie" href={cvTarrynWallie} style={{color: 'white'}}>Download CV</a></span></button>

            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>  
    )
    }