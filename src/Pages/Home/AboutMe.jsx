export default function AboutMe () {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/about-me.png" alt="About Me"/>
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <h1 className="skills-section--heading" id="abt-head">
                        About Me
                    </h1>
                    <p className="hero--section-description" id="abt">
                        I am an aspiring Computer Engineer based in the Greater Toronto Area with a passion for using technology to 
                        bring ideas to life. My portfolio showcases a variety of projects I've worked on which
                        include embedded systems projects, game development, and web development which are areas I am primarily focused in. 
                        I thrive on the challenge of turning concepts into reality and my work reflects my commitment to exploring the 
                        intersection of creativity and technology.
                    </p>
                    <p className="hero--section-description" id="abt">
                        Currently I am studying in my 3rd year of Computer Engineering at McMaster University.
                        In my free time I enjoy playing competitive chess, video games and playing soccer. 
                    </p>
                </div>
            </div>
        </section>
    );
}