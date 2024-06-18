import Typewriter from "typewriter-effect";
import { Suspense , lazy } from "react";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { PiCarProfile } from "react-icons/pi";
import { Link } from "react-router-dom";
import OfferCard from "../../components/Card/Card";
import Mini from "../../assets/Opations_Photos/Mini.webp";
import Sedan from "../../assets/Opations_Photos/Sedan.webp";
import SUV from "../../assets/Opations_Photos/SUV.webp";
import Traveller from "../../assets/Opations_Photos/Traveller.webp";
import Bus from "../../assets/Opations_Photos/Bus.webp";
import OfferSlider from "../../components/offerSlider/OfferSlider";
import Marquee from "react-fast-marquee";
import BasicModal from "../../components/Modal/Modal";
import TestimonialCard from "../../components/Testimonial/TestimonialsCard";
import DelhiImg from '../../assets/ServicesCard_img/Delhi.webp'
import ManaliImg from '../../assets/ServicesCard_img/Manali.webp'
import Dalhousie from '../../assets/ServicesCard_img/Dalhousie Dharamshala.webp'
import jaipurImg from '../../assets/ServicesCard_img/jaipur.webp'
import {Helmet} from "react-helmet";
import "./Home.css";


const Home = () => {
  const reviews = [
    {
      name: "Vinay Kumar",
      shortName: "VK",
      color: "#33691e",
      rating:4,
      message:
        "Very good service. The driver was cooperative, and the journey to Delhi was safe with my family.",
    },
    {
      name: "Raj Kishor",
      shortName: "RK",
      color: "#fbbc04",
      rating:5,
      message:
        "I booked a cab from Deluxe Taxi Stand a few months ago. It was a very good experience. The entire trip was excellent.",
    },
    {
      name: "Amit Kumar",
      shortName: "AK",
      color: "#03a9f4",
      rating:5,
      message:
        "Excellent experience with Deluxe Taxi. Seamless booking and fantastic trip. Highly recommend for reliability and comfort.",
    },
    {
      name: "Rakesh Kumar",
      shortName: "RK",
      color: "#bf360c",
      rating:4,
      message:
        "Thoroughly impressed with Deluxe Taxi. Easy booking, smooth ride, and professional driver. Highly recommend for quality service.",
    },
    {
      name: "Uday",
      shortName: "U",
      color: "#7b1fa2",
      rating:5,
      message:
        "Outstanding experience with Deluxe Taxi. Hassle-free booking, perfect ride, clean vehicle, and courteous driver. Will choose again.",
    },
  ];



  return (
    <div className="home">
      <Helmet>
        <title>Deluxe Travels - Book Your Ride Now!</title>
        <meta name="author" content="Rahul Bisht"></meta>
        <meta name="description" content="Book your ride with Deluxe Taxi Stand, the most reliable 
        and comfortable taxi service in town. Get instant quotes and book now!" />
       <meta name="keywords" content="Deluxe Travels, Best taxi service in Chandigarh, Best taxi service in Chandigarh sector 19, taxi service, car rental, book your ride, transportation, reliable taxi, comfortable taxi, luxury travel, SUV rental, sedan rental, traveler rental, bus rental, taxi booking, travel services, safe journey, 24/7 taxi service" />

      </Helmet>
      <div className="hero_section " >
        <h1>
          Deluxe Travels ensures you <br /> travel with{" "}
          <Typewriter
            options={{
              strings: ["Comfort", "Luxury", "Peace"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p>Wherever You Need to Be, We'll Take You There</p>
        <BasicModal/>
      </div>

      <div className="car_opation_section" >
        <h3>Opations</h3>
        <div className="opationsCard">
          <Link to='/contact' ><div className="Card">
            <img loading="lazy" src={Mini} alt="Rent Car logo" />
            <p>Rent</p>
          </div></Link>
          <Link to='/contact' ><div className="Card">
            <img loading="lazy" src={Sedan} alt="Sedan Car logo" />
            <p>Sedan</p>
          </div></Link>
          <Link to='/contact' ><div className="Card">
            <img loading="lazy" src={SUV} alt="SUV Car logo" />
            <p>SUV</p>
          </div></Link>
          <Link to='/contact' ><div className="Card">
            <img loading="lazy" src={Traveller} alt="Traveller logo" />
            <p>Traveller</p>
          </div></Link>
          <Link to='/contact' ><div className="Card">
            <img loading="lazy" src={Bus} alt="Bus logo" />
            <p>Bus</p>
          </div></Link>
        </div>
      </div>
      <div className="banner_section"  >
        <div className="banner_main">
          <h2>
            Book Your Trip With <br /> Deluxe Travels <br /> <span>Now!</span>
          </h2>
        </div>
      </div>
      <div className="Our_Servies">
        <h3>Our Services</h3>
        <div className="services_card">
          <OfferSlider />
        </div>
        <div className="services_card_mobile">
          <OfferCard
            imgSrc={
              DelhiImg
            }
            cardTitle={"Chandigarh to Delhi"}
            subTitle={"Economical compact car"}
          />
          <OfferCard
            imgSrc={
              jaipurImg
            }
            cardTitle={"Jaipur Tour"}
            subTitle={"Economical compact car"}
          />
          <OfferCard
            imgSrc={ManaliImg}
            cardTitle={"Shimla Manali Tour"}
            subTitle={"Economical compact car"}
          />
          <OfferCard
            imgSrc={Dalhousie}
            cardTitle={"Dalhousie Dharamshala"}
            subTitle={"Economical compact car"}
          />

        </div>
      </div>
      <div className="what_we_do_Section">
        <div className="left_sec">
          <h3>What We Do</h3>
          <p>
            Deluxe travels provides comfortable, safe, and dependable
            transportation services with diverse fleets of Cars. Experienced
            drivers provide efficient navigation and recommendations, ensuring
            customer satisfaction and a memorable experience. Competitive rates
            and 24-hour service.
          </p>
          <Link to="/about"><button>  Know about us</button></Link>
        </div>
        <div className="right_img_sec"></div>
      </div>
      <div className="why_choose_us_sec">
        <h2>Why Choose Us</h2>
        <div className="why_Choose_main_section">
          <div className="why_Choose_left_section">
            <h4>
              <AiTwotoneSafetyCertificate /> Safety First:
            </h4>
            <p>
              <strong>Ensure Your Safety:</strong> Our drivers are rigorously
              vetted, background-checked, and trained to provide the safest
              journey possible.
            </p>
            <p>
              <strong>Clean and Sanitized Vehicles:</strong> Each vehicle is
              regularly cleaned and sanitized to maintain the highest hygiene
              standards.
            </p>
          </div>
          <div className="why_Choose_right_section">
            <h4>
              <PiCarProfile /> Convenience and Comfort:
            </h4>
            <p>
              <strong>24/7 Availability:</strong> Whether it's an early morning
              flight or a late-night, our cabs are available round the clock.
            </p>
            <p>
              <strong>Multiple Car Options:</strong> Choose from a range of
              vehicles to suit your needs, from economical rides to luxurious
              journeys.
            </p>
          </div>
        </div>
      </div>
      <div className="Testimonials_section">
        <h2>Testimonials</h2>
        <div className="testimonial_main">
          <div className="testimonial_right">
            <Marquee pauseOnHover={true}
            gradientWidth={50}
            gradient={true}>
              {reviews.map((review, i) => (
                <TestimonialCard
                  key={i}
                  rating={review.rating}
                  name={review.name}
                  shortName={review.shortName}
                  color={review.color}
                  message={review.message}
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};




 export default Home;
