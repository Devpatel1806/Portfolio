// import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { NavLink } from "react-router-dom";



export const HeroSection = () => {
    return (
        <>
            <section className="hero-section" id="hero-section">
                <div className="hero-container">
                    <div className="hero-items">
                        <img src="Logo.webp" alt="logo" />
                        <h1>Dev Patel</h1>
                        <p>I'm a Front-End developer</p>
                    </div>

                    <div className="icon">
                        <ul>
                            <li>
                                <NavLink to="https://www.instagram.com/aptech.solutions"> <FaInstagram /> </NavLink>
                            </li>
                            <li>
                                <NavLink to="https://www.linkedin.com/company/aptechsolutions-io"> <FaLinkedin /> </NavLink>
                            </li>
                            <li>
                                <NavLink to="https://mail.google.com/"><SiGmail /></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}