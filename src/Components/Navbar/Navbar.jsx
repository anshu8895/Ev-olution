import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <a href="https://anshu8895.github.io/Ev-olution/">
      <div className="nav-logo">EV-olution</div>
      </a>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Exlpore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar