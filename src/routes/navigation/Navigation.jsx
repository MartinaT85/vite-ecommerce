import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <Link className="nav-logo-container" to="/">
          <h1>Crown Clothes</h1>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <p>Shop</p>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
