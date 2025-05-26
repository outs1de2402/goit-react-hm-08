import { NavLink } from "react-router-dom";
const AuthNav = () => {
  return (
    <>
      <div>
        <nav className="flex  gap-8 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">LogIn</NavLink>
        </nav>
      </div>
    </>
  );
};

export default AuthNav;
