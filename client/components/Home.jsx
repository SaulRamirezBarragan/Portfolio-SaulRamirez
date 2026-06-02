/* 
author: Saul Ramirez Barragan
course: COMP229 - Web Application Development
Date: June 02
Week2 Lab1
*/
//Home Page

export default function Home() {
    
    const redirect = () => {
        window.location.href = "/about";
    }
    const redirect2 = () => {
        window.location.href = "/education";
    }
    const redirect3 = () => {
        window.location.href = "/project";
    }
    const redirect4 = () => {
        window.location.href = "/services";
    }
    const redirect5 = () => {
        window.location.href = "/contact";
    }
    
    return (
            <>
            <section id = "home">
                {/* Welcome message */}
                <div class="welcome">
                    <h1>Welcome</h1>
                    <p>
                        This is my portfolio, here you will find evidence of projects that I've worked on.
                        This is an ongoing project, the design and format of this web page may change in the future.
                    </p>
                </div>
                {/* Mission message */}
                <div class="mission">
                    <h1>Mission</h1>
                    <p>
                        My mission is to contribute to the development of innovative hardware and software technologies.
                        I strive to expand my knowledge every day and apply my skills to create high-quality projects.
                    </p>
                </div>
                <div class = "home-buttons">
                    <button onClick={redirect}>About Me</button>
                    <button onClick={redirect2}>Education</button>
                    <button onClick={redirect3}>Projects</button>
                    <button onClick={redirect4}>Services</button>
                    <button onClick={redirect5}>Contact Me</button>
                </div>
            </section>
            </>
        );
    }