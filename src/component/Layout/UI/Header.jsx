import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);

    setMenuOpen(false); 
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">


          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>  

          <nav className={`list ${menuOpen ? "open" : ""}`}>

            <div className="top-two">
            <div className="logo">
              <ul>
                <li>
                  <NavLink to="/" onClick={() => handleScroll("hero-section")}>
                    DEV PATEL
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
            <ul>
              <li>
                <NavLink to="/" onClick={() => handleScroll("about")}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/" onClick={() => handleScroll("services")}>
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink to="/" onClick={() => handleScroll("contact")}>
                  Contact
                </NavLink>
              </li>
            </ul>
            </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};