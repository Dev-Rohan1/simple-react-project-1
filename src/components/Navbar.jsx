import BrandImage from "../assets/images/brand_logo.png";
import classes from "../assets/css/navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav className={`${classes.navbar} container`}>
        <div className={classes.logo}>
          <img src={BrandImage} alt="image" />
        </div>
        <ul className={classes.menu}>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className={classes.btn}>Login</button>
      </nav>
    </header>
  );
};

export default Navbar;
