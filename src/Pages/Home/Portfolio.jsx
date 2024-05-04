import data from "../../data/index.json";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function MyPortfolio(props) {  // Added props parameter here
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
        
    };
    return (
       <div className="carousel--box" id="Portfolio"> 
        <h2 className="section--heading--portfolio">My Portfolio</h2>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}  // Changed to props.deviceType
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          deviceType={props.deviceType}  // Changed to props.deviceType
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="portfolio--section--card--content">
              <h3 className="portfolio--section--title">{item.title}</h3>
              <p className="portfolio--section--description">{item.description}</p>
            </div>
          </div>
        ))}
        </Carousel>
      </div>
    );
}