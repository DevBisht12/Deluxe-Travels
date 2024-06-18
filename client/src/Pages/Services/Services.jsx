import './Services.css'
import WeddingCar from '../../assets/Our_Services/Car1.webp'
import Bus from '../../assets/Our_Services/bus.webp'
import RentCar from '../../assets/Our_Services/RentCar.webp'
import Sedan from '../../assets/Our_Services/sedan.webp'
import SUV from '../../assets/Our_Services/SUV.webp'
import Traveler from '../../assets/Our_Services/Traveler.webp'
import { Helmet } from 'react-helmet'

const Services=()=>{
    return (
      <div className="services">
        <Helmet>
          <title>Our Services - DeluxeTravels</title>
          <meta
            name="description"
            content="Discover DeluxeTravels' extensive range of vehicle services, including rental cars, wedding cars, SUVs, sedans, travelers, and buses. Professional, efficient, and tailored to your specific needs."
          />
          <meta
            name="keywords"
            content="DeluxeTravels, vehicle services, rental cars, wedding cars, SUVs, sedans, travelers, buses, professional service, hassle-free rental, wedding transportation, group travel, family adventures, comfortable ride"
          />
        </Helmet>
        <div className="ourServices_banner_sec">
          <h1>Our Services</h1>
        </div>
        <div className="ourServices_main">
          <h2>Wide Range of Options</h2>
          <p>
            <strong>DeluxeTravels</strong> offers an extensive range of options
            tailored to your specific requirements. Whether you seek rental
            cars, wedding car services, SUVs, sedans, travelers, or buses, we
            have precisely what you need. Our comprehensive selection ensures
            that we can accommodate your every need with utmost professionalism
            and efficiency.
          </p>
        </div>
        <div className="ourServices_opations">
          <div className="opations">
            <div className="opatons_info">
              <h3>Rent a Car</h3>
              <p>
                DeluxeTravels offers a hassle-free rental experience with our
                diverse fleet of vehicles suitable for any journey. Whether you
                need a compact car for zipping around the city or a spacious SUV
                for a family road trip, we have the perfect option to suit your
                needs. Our rental process is simple and transparent, ensuring
                that you can hit the road with confidence and convenience.
              </p>
            </div>
            <img src={RentCar} alt="Rent Car Img" />
          </div>
          <div className="opations">
            <div className="opatons_info">
              <h3>Car for Weddings</h3>
              <p>
                Make your special day even more memorable with DeluxeTravels'
                exquisite fleet of wedding cars. From classic luxury sedans to
                sleek modern vehicles, our collection is designed to add
                elegance and sophistication to your wedding day transportation.
                Our professional chauffeurs will ensure that you arrive in
                style, leaving you free to focus on creating lifelong memories
                with your loved ones.
              </p>
            </div>
            <img src={WeddingCar} alt="Wedding Car Img" />
          </div>
          <div className="opations">
            <div className="opatons_info">
              <h3>Sedan</h3>
              <p>
                Experience comfort and style with our selection of sedans,
                perfect for both daily commutes and leisurely drives. Whether
                you're navigating city streets or cruising down the highway, our
                sedans offer a smooth and refined ride, with spacious interiors
                and advanced features to enhance your driving experience.
              </p>
            </div>
            <img src={Sedan} alt="Sedan car img" />
          </div>
          <div className="opations">
            <div className="opatons_info">
              <h3>SUV</h3>
              <p>
                For those seeking versatility and rugged performance, look no
                further than our SUV lineup. Designed to tackle any terrain with
                confidence, our SUVs offer ample space for passengers and cargo,
                making them ideal for family adventures or outdoor escapades.
                With advanced safety features and cutting-edge technology, you
                can explore the world with peace of mind.
              </p>
            </div>
            <img src={SUV} alt="Suv car img" />
          </div>
          <div className="opations">
            <div className="opatons_info">
              <h3>Traveler</h3>
              <p>
                Embark on group journeys with comfort and convenience in our
                traveler vans. With spacious interiors and flexible seating
                arrangements, our vans provide ample room for passengers and
                luggage, ensuring a comfortable ride for everyone. Whether
                you're planning a family vacation or a group outing, our
                traveler vans are the perfect choice for memorable adventures.
              </p>
            </div>
            <img src={Traveler} alt="Travvler Image" />
          </div>
          <div className="opations">
            <div className="opatons_info">
              <h3>Bus</h3>
              <p>
                For larger groups and organized excursions, our fleet of buses
                offers comfortable seating and amenities for a smooth and
                enjoyable journey. Whether you're traveling with colleagues,
                friends, or students, our buses provide ample space and comfort,
                allowing you to relax and unwind while we take care of the rest.
                Sit back, relax, and enjoy the ride with DeluxeTravels.
              </p>
            </div>
            <img src={Bus} alt="Bus Image" />
          </div>
        </div>
      </div>
    );
}

export default Services