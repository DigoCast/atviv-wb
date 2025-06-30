import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-header">
      <Link to={"/"} style={{ color: "inherit" }}>
        <div className="logo">
          <h1>World Beauty</h1>
        </div>
      </Link>

      <nav className="menu">
        <Link to="/cliente" style={{ color: "inherit" }}>
          <li>Clientes</li>
        </Link>
      </nav>
    </div>
  );
};
export default Header;
