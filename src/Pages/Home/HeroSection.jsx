export default function HeroSection () {
    return(
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hi, I'm Ali!</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Computer Engineer</span>{" "}
                    <br />
                    Student
                </h1>
                <p className="hero--section--description">Third year Computer Engineering at McMaster University with a strong 
                <br/> focus on Embedded Systems and Software Development.
                </p>
            </div>
            <button className="btn btn-primary">Get in Touch</button>

        </div>
        <div className="hero--section--img">
            <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>  
    );
}





