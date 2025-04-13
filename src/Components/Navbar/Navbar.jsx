import './Navbar.css';

const Navbar = ({ activeSection }) => {
  return (
    <nav className='nav'>
      <a href="#home" aria-label="EV-olution home">
        <div className="nav-logo">EV-olution</div>
      </a>
      <ul className="nav-menu" role="navigation">
        <li className={activeSection === "home" ? "active" : ""}>
          <a href="#home">Home</a>
        </li>
        <li className={activeSection === "explore" ? "active" : ""}>
          <a href="#explore">Explore</a>
        </li>
        <li className={activeSection === "about" ? "active" : ""}>
          <a href="#about">About</a>
        </li>
        <li className={`nav-contact ${activeSection === "contact" ? "active" : ""}`}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;