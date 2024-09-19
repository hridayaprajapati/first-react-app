import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <nav className="d-flex flex-row gap-2">
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/students">Students</Link>
      </nav>
    </>
  );
}

export default Sidebar;
