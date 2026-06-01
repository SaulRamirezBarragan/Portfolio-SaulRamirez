
import Portrait from './assets/Portrait.jpg';

export default function About() {
    return (
        <>
            <div>
                <section id = "about">
                    <h2>About Me</h2>
                    <h1>Saul Ramirez Barragan</h1>
                    <div class = "portrait">
                        <img src={Portrait} width="315" height="465" alt="" />
                    </div>
                    <a href="https://github.com/SaulRamirezBarragan/Portfolio-SaulRamirez/blob/main/client/src/assets/Saul_Resume.pdf">My Resume</a>
                    <p>
                        I currently study Software Engineering Technician at Centennial College. 
                        I have educational experience in robotics, neural networks, Internet of Things (IoT), 
                        cyber-physical systems and cybersecurity. Throughout my career I have learned that there 
                        are several ways to address a problem and being able to combine knowledge from different 
                        areas gives us the opportunity to generate a solution that meets the requirements and exceeds 
                        the client's expectations.
                    </p>
                </section>
            </div>
        </>
    );
}