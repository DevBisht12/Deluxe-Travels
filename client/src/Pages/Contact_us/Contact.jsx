import "./Contact.css";
import BookingForm from "../../components/utils/BookingForm/Booking_form";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="contact">
      <Helmet>
        <title>Contact Us - Book Your Ride Now!</title>
        <meta name="description" content="Contact DeluxeTravels for your taxi bookings. Wherever you need to be, we'll take you there. Fill out our booking form for a hassle-free experience." />

        <meta name="description" content="" />
      </Helmet>
      <div className="contact_img_sec">
        <p>
          <strong>Deluxe</strong>Travels
        </p>
        <span>Wherever You Need to Be, We'll Take You There.</span>
      </div>
      <div className="form_sec">
        <BookingForm />
      </div>
    </div>
  );
};

export default Contact;
