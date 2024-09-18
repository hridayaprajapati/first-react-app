import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/students">Students</Link>
      </nav>
    </>
  );
}

export default Sidebar;
