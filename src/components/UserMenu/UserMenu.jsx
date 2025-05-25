import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2>Welcome, {user.name}!</h2>
        <nav className="flex justify-self-end gap-8 items-center">
          <NavLink to="/contacts">Contacts</NavLink>

          <button
            onClick={() => {
              dispatch(logoutThunk());
            }}
          >
            Log out
          </button>
        </nav>
      </div>
    </>
  );
};

export default UserMenu;
