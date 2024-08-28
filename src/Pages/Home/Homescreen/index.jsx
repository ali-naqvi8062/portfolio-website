import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Featured from "../Featured";

export default function Home () {
    return(
        <>
            <HeroSection />
            <AboutMe />   
            <Featured />       
            <ContactMe />
            <Footer />
        </>
    );
}

