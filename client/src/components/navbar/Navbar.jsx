import './navbar.css'
import DrawerMobileNavigation from './mobileMenu/MobileMenu'

const Navbar=()=>{
    return(
        <header className="navbar">
            <div className="logo_section">
                <h1><strong>Deluxe</strong>Travels</h1>
            </div>
            <div className="right_action_section">
                <ul>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Book Now</li>
                    <li>User</li>
                </ul>
            </div>
            {/* <div className="mobile_logo">
                <h1><strong>D</strong>T</h1>
            </div> */}
            <div className="mobile_menu">
                <DrawerMobileNavigation/>
            </div>
        </header>
    )
}

export default Navbar