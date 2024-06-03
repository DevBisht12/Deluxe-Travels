import Typewriter from "typewriter-effect";
import InputField from "../../components/utils/inputField/InputField";
import MUIDateTimePicker from "../../components/utils/Time&DatePicker/TimeDatePicker";
import Input from "@mui/joy/Input";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { PiCarProfile } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import OfferCard from "../../components/Card/Card";
import Mini from "../../assets/Opations_Photos/Mini.png";
import Sedan from "../../assets/Opations_Photos/Sedan.png";
import SUV from "../../assets/Opations_Photos/SUV.png";
import Traveller from "../../assets/Opations_Photos/Traveller.png";
import Bus from "../../assets/Opations_Photos/Bus.png";
import OfferSlider from "../../components/offerSlider/OfferSlider";
import "./Home.css";
import { IoIosCall } from "react-icons/io";
import TestimonialSlider from "../../components/Testimonial/TestimonialSlider";

const Home = () => {
  return (
    <div className="home">
      <div className="call">
        <a href="tel:09988889998"><IoIosCall/></a>
      </div>
      <div className="hero_section ">
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
        <button>Book Now</button>
      </div>
      <div className="car_opation_section">
        <h3>Opations</h3>
        <div className="opationsCard">
          <div className="Card">
            <img src={Mini} alt="" />
            <p>Mini</p>
          </div>
          <div className="Card">
            <img src={Sedan} alt="" />
            <p>Sedan</p>
          </div>
          <div className="Card">
            <img src={SUV} alt="" />
            <p>SUV</p>
          </div>
          <div className="Card">
            <img src={Traveller} alt="" />
            <p>Traveller</p>
          </div>
          <div className="Card">
            <img src={Bus} alt="" />
            <p>Bus</p>
          </div>
        </div>
      </div>
      <div className="banner_section">
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
          <OfferCard imgSrc={"https://images.unsplash.com/photo-1571677465484-2dd540924245?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          <OfferCard imgSrc={"https://images.unsplash.com/photo-1506268452458-bfb3757ed859?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          <OfferCard imgSrc={"https://plus.unsplash.com/premium_photo-1697729600773-5b039ef17f3b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          <OfferCard imgSrc={"https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          <OfferCard imgSrc={"https://images.unsplash.com/photo-1571677465484-2dd540924245?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
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
            and 24-hour service.{" "}
          </p>
          <button>Know about us</button>
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
            {/* <div className="testimonial_left">
              <h3>Deluxe Travels holds the 4.2 rating  On Google.</h3>
              <p>Deluxe Travels, with its distinguished reputation, proudly maintains a stellar 4.2-star rating on Google, a testament to the countless exceptional experiences continually shared by our delighted customers. </p>
            </div> */}
            <div className="testimonial_right">
            <TestimonialSlider/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
