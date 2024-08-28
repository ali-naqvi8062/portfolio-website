export default function HeroSection () {
    return(
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hey, I'm Ali!</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Computer Engineer</span>{" "}
                    <br />
                    Student
                </h1>
                <p className="hero--section--description">Third year Computer Engineering student at McMaster University's co-op program 
                <br/>with a strong focus on Embedded Systems and Software Development.
                </p>
            </div>
            <a href="/Ali_Naqvi_Resume.pdf" target="_blank" className="btn btn-primary">Download CV</a>
        </div>
        <div className="hero--section--img">
            <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>  
    );
}





