import { Container, Col } from "react-bootstrap";
import 'animate.css';

export const Education = () => {
    return (
        <section className="education" id="education">
            <Container>
                <Col className="align-item-center">
                    <h2>Education</h2>
                    
                    <div className="qualification">
                        <h4>Diploma in Software Development in Information Technology</h4>
                        <p>IIE Rosebank College Cape Town</p>
                        <span>2020 - 2022</span>
                    </div>
                    <div className="qualification">
                        <h4>Certificate in Systems Development</h4>
                        <p>CapaCiTi Tech Career ACCELERATOR</p>
                        <span>2023 - 2024</span>
                    </div>
                    <div className="qualification">
                        <h4>National Senior Certificate</h4>
                        <p>Muizenberg High School</p>
                        <span>2015 - 2019</span>
                    </div>

                    
                    
                </Col>
            </Container>
        </section>
    )
}