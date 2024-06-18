import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';
import './Booking_form.css'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const carOptions = ["Rent a car", "Sedan", "SUV", "Traveller", "Bus"];

const states = [
  { "name": "Andhra Pradesh", "type": "State" },
  { "name": "Arunachal Pradesh", "type": "State" },
  { "name": "Assam", "type": "State" },
  { "name": "Bihar", "type": "State" },
  { "name": "Chhattisgarh", "type": "State" },
  { "name": "Goa", "type": "State" },
  { "name": "Gujarat", "type": "State" },
  { "name": "Haryana", "type": "State" },
  { "name": "Himachal Pradesh", "type": "State" },
  { "name": "Jharkhand", "type": "State" },
  { "name": "Karnataka", "type": "State" },
  { "name": "Kerala", "type": "State" },
  { "name": "Madhya Pradesh", "type": "State" },
  { "name": "Maharashtra", "type": "State" },
  { "name": "Manipur", "type": "State" },
  { "name": "Meghalaya", "type": "State" },
  { "name": "Mizoram", "type": "State" },
  { "name": "Nagaland", "type": "State" },
  { "name": "Odisha", "type": "State" },
  { "name": "Punjab", "type": "State" },
  { "name": "Rajasthan", "type": "State" },
  { "name": "Sikkim", "type": "State" },
  { "name": "Tamil Nadu", "type": "State" },
  { "name": "Telangana", "type": "State" },
  { "name": "Tripura", "type": "State" },
  { "name": "Uttar Pradesh", "type": "State" },
  { "name": "Uttarakhand", "type": "State" },
  { "name": "West Bengal", "type": "State" },
  { "name": "Andaman and Nicobar Islands", "type": "Union Territory" },
  { "name": "Chandigarh", "type": "Union Territory" },
  { "name": "Dadra and Nagar Haveli and Daman and Diu", "type": "Union Territory" },
  { "name": "Lakshadweep", "type": "Union Territory" },
  { "name": "Delhi", "type": "Union Territory" },
  { "name": "Puducherry", "type": "Union Territory" },
  { "name": "Ladakh", "type": "Union Territory" },
  { "name": "Jammu and Kashmir", "type": "Union Territory" }
];


const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCars, setSelectedCars] = useState("");
  const [selectedStates, setSelectedStates] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    if (!name.trim() || !email.trim() || !phoneNumber.trim() || selectedCars.length === 0 || selectedStates.length === 0 || !selectedDate) {
      alert("All fields are required");
      return false;
    }
    return true;
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      const formattedDate = selectedDate ? dayjs(selectedDate.$d).format('DD.MM.YYYY') : '';
      const formData = {
        name,
        email,
        phoneNumber,
        selectedCars,
        selectedStates,
        selectedDate:formattedDate
      };

      const res= await fetch("https://deluxetravels-c6245-default-rtdb.firebaseio.com/Booking_Data.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            }
      )
      if(res.ok){
        alert("Form submitted successfully!");
      }

      // Log form data to console
      console.log("Form Data:", formData);
      console.log(formData.selectedDate)
      // Clear form fields
      setName("");
      setEmail("");
      setPhoneNumber("");
      setSelectedCars("");
      setSelectedStates("");
      setSelectedDate(null);
      
      

    }
  };

  return (
    <div className="bookingForm">
      <h1>
        <Link to="/">DeluxeTravels</Link>
      </h1>
      <p>Wherever You Need to Be, We'll Take You There.</p>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "100%", marginBottom: "0.9rem" }}
          id="name"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          sx={{ width: "100%", marginBottom: "0.9rem" }}
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ width: "100%", marginBottom: "0.9rem" }}
          id="phoneNumber"
          label="Phone Number"
          variant="outlined"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <CardOptionsInputField
          selectedItems={selectedCars}
          setSelectedItems={setSelectedCars}
        />
        <StatesInputField
          selectedItems={selectedStates}
          setSelectedItems={setSelectedStates}
        />
        <DatePickerValue
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <button className="submit_btn">Submit</button>
        <span>
          Back to{" "}
          <Link to="/" style={{ textDecoration: "underline" }}>
            Home
          </Link>
        </span>
      </form>
    </div>
  );
};


function CardOptionsInputField({ selectedItems, setSelectedItems }) {
  return (
    <div>
      <FormControl sx={{ width: "100%", marginBottom: "0.9rem" }}>
        <InputLabel id="car-options-label">Car options</InputLabel>
        <Select
          labelId="car-options-label"
          id="car-options"
          value={selectedItems} // Change to selectedCars
          onChange={(e) => setSelectedItems(e.target.value)}
          input={<OutlinedInput label="Car Options" />}
          MenuProps={MenuProps}
        >
          {carOptions.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

function StatesInputField({ selectedItems, setSelectedItems }) {
  return (
    <div>
      <FormControl sx={{ width: "100%", marginBottom: "0.9rem" }}>
        <InputLabel id="states-options-label">States</InputLabel>
        <Select
          labelId="states-options-label"
          id="states-options"
          value={selectedItems} // Change to selectedStates
          onChange={(e) => setSelectedItems(e.target.value)}
          input={<OutlinedInput label="States" />}
          MenuProps={MenuProps}
        >
          {states.map((state) => (
            <MenuItem key={state.name} value={state.name}>
              {state.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

function DatePickerValue({ selectedDate, setSelectedDate }) {
  return (
    <div>
      <FormControl sx={{ width: "100%", marginBottom: "0.9rem" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FormControl>
    </div>
  );
}

export default BookingForm;
