import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Featured from "../Featured";
import MyPortfolio from "../Portfolio";

export default function Home () {
    return(
        <>
            <HeroSection />
            <Featured />
            <AboutMe />
            <MyPortfolio />            
            <ContactMe />
            <Footer />
        </>
    );
}

