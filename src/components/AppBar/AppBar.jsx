import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>;
};

export default AppBar;
