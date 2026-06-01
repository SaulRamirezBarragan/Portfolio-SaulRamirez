/* 
author: Saul Ramirez Barragan
course: COMP229 - Web Application Development
Date: June 02
Week2 Lab1
*/
//Home Page
export default function Home() {
        return (
            <>
            {/* Welcome message */}
                <section id="welcome">
                    <h2>Welcome</h2>
                    <p>
                        This is my portfolio, here you will find evidence of projects that I've worked on.
                        This is an ongoing project, the design and format of this web page may change in the future.
                    </p>
                </section>
            {/* Mission message */}
                <section id="mission">
                    <h2>Mission</h2>
                    <p>
                        My mission is to contribute to the development of innovative hardware and software technologies.
                        I strive to expand my knowledge every day and apply my skills to create high-quality projects.
                    </p>
                </section>
            </>
        );
    }