import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Call from './components/utils/Call/Call';

// Lazy loading components
const HomeLazy = lazy(() => import('./Pages/Home/Home'));
const AboutLazy = lazy(() => import('./Pages/About/About'));
const ContactLazy = lazy(() => import('./Pages/Contact_us/Contact'));
const ServicesLazy = lazy(() => import('./Pages/Services/Services'));
const BookingFormLazy = lazy(() => import('./components/utils/BookingForm/Booking_form'));
const NavbarLazy =lazy(()=>import('./components/navbar/Navbar'))
const FooterLazy =lazy(()=>import('./components/utils/Footer/Footer'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<WithoutHeaderAndFooter />} />
      </Routes>
    </BrowserRouter>
  );
}

function WithoutHeaderAndFooter() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/contact" && <NavbarLazy />}
      <Call />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomeLazy />} />
          <Route path="/about" element={<AboutLazy />} />
          <Route path="/Book_now" element={<BookingFormLazy />} />
          <Route path="/services" element={<ServicesLazy />} />
          <Route path="/contact" element={<ContactLazy />} />
        </Routes>
      </Suspense>
      {location.pathname !== "/contact" && <FooterLazy />}
    </>
  );
}

export default App;
