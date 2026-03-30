import { NavLink } from "react-router-dom";

export const Header = () => {

  const handleScroll = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">

          <nav className="list">
            <ul>
              <li>
                <NavLink to="/" onClick={() => handleScroll("hero-section")}>
                  Home
                </NavLink>
              </li>

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
          </nav>

        </div>
      </div>
    </header>
  );
};