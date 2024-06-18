import "./About.css";
import cars from "../../assets/About_page_img/cars.webp";
import AboutImg3 from "../../assets/About_page_img/About_img3.webp";
import AboutImg7 from "../../assets/About_page_img/About_img7.webp";
import ownerImg from "../../assets/About_page_img/main_img.webp";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="about">
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="DeluxeTravels, established in 1972, offers a wide range of modern, comfortable, and safe vehicles for all your travel needs. From cars and minivans to SUVs and buses, our meticulously maintained fleet ensures a seamless and enjoyable travel experience. Learn more about our commitment to passenger comfort, safety, and exceptional service." />
        <meta name="keywords" content="DeluxeTravels, taxi service, Chandigarh taxi service, best taxi service, car rental, travel service, safe travel, reliable taxi, comfortable taxi, luxury travel, SUV rental, sedan rental, bus rental, passenger comfort, safety, exceptional service" />

      </Helmet>
      <div className="aboutUs_banner_sec">
        <h1>About Us</h1>
      </div>
      <div className="about_us_main">
        <div className="aboutUs_Sec">
          <img loading="lazy" src={ownerImg} alt="Owner photo" />
          <div className="sec_info">
            <h3>About Us</h3>
            <p>
              Sunil Kumar Dhariwal founded DeluxeTravels in 1972 with the
              mission to provide the local community with the finest taxi
              service. DeluxeTravels offers an extensive range of cabs and
              self-driving vehicles, all meeting the highest standards of
              passenger comfort, safety, and reliability. Our fleet includes the
              latest models of cars, minivans, and SUVs, each equipped with
              advanced safety and comfort features. Our drivers are meticulously
              selected and rigorously trained to consistently deliver
              exceptional service to our clients.
            </p>
          </div>
        </div>
        <div className="aboutUs_Sec">
          <div className="sec_info">
            <h3>Wide Range of Vehicles</h3>
            <p>
              Our fleet boasts a comprehensive selection of modern vehicles,
              including cars, minivans, SUVs, and buses. Each vehicle is
              meticulously maintained to ensure comfort and reliability,
              catering to the diverse requirements of both business travelers
              and family vacationers, ensuring a seamless and enjoyable travel
              experience for all.
            </p>
          </div>
          <img loading="lazy" src={cars} alt="Cars" />
        </div>
        <div className="aboutUs_Sec">
          <img loading="lazy" src={AboutImg3} alt="car" />
          <div className="sec_info">
            <h3>Superior Comfort and Safety</h3>
            <p>
              Our vehicles, equipped with advanced safety and comfort features,
              prioritize passenger well-being and satisfaction. Each vehicle
              boasts state-of-the-art braking systems for enhanced safety and
              plush seating designed for maximum comfort, ensuring that every
              ride is both secure and exceptionally comfortable. Additionally,
              amenities such as climate control and entertainment options
              further enhance the overall travel experience, making each journey
              with us a truly enjoyable one.
            </p>
          </div>
        </div>
        <div className="aboutUs_Sec">
          <div className="sec_info">
            <h3>Ensure customer satisfaction</h3>
            <p>Our paramount objective is to orchestrate a delightful journey tailored precisely to your preferences and requirements, all the while guaranteeing a serene and thoroughly enjoyable travel experience. We meticulously craft every aspect of your trip with meticulous attention to detail, ensuring that every moment is imbued with comfort, convenience, and satisfaction, leaving you with cherished memories that linger long after the journey's end.</p>
          </div>
          <img loading="lazy" src={AboutImg7} alt="car img" />
        </div>
      </div>
    </div>
  );
};

export default About;

