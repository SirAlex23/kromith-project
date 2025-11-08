import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">KroMith: Portal Mitológico</Link>
      </div>
    </header>
  );
};

export default Header;
