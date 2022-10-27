import classes from "./Header.module.css";

import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../store/authentication";

const Header = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.isLoggedIn);

  const logoutHandler = () => {
    dispatch(loginActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {login && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
