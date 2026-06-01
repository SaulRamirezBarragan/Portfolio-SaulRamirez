export default function Home() {
    const styles = {
        fontSize: "18px"
    };
        return (
            <>
                <section id="welcome">
                    <h2>Welcome</h2>
                    <p style={styles}>
                        This is my portfolio, here you will find evidence of projects that I've worked on.
                        This is an ongoing project, the design and format of this web page may change in the future.
                    </p>
                </section>
                <section id="mission">
                    <h2>Mission</h2>
                    <p style={styles}>
                        My mission is to contribute to the development of innovative hardware and software technologies.
                        I strive to expand my knowledge every day and apply my skills to create high-quality projects.
                    </p>
                </section>
            </>
        );
    }