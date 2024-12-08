import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-items">
        <div className="homeTag">
          <Link className="nav-link" to="/">Homepage</Link>
        </div>
        <div className="items">
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/menu">Menu</Link>
          <Link  className="nav-link"to="/add">Add</Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
