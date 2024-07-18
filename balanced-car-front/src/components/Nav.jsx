import '../styling/App.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useGetUserDetailsQuery } from '../features/auth/authServices';
import { logout, setCredentials } from '../features/auth/authSlice';

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
    // perform a refetch every 15mins
    pollingInterval: 900000,
  });

  useEffect(() => {
    if (data) dispatch(setCredentials(data));
  }, [data, dispatch]);

  const renderUserInfo = () => {
    if (isFetching) {
      return 'Fetching your profile...';
    }
    if (userInfo !== null) {
      return `Logged in as ${userInfo.email}`;
    }
    return "You're not logged in";
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <span>{renderUserInfo()}</span>
        </li>
        <NavLink className="button" to="/main"> My cars</NavLink>
        <li>
          {userInfo ? (
            <button className="button" type="button" onClick={() => dispatch(logout())}>
              Logout
            </button>
          ) : (
            <NavLink className="button" to="/signin">
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
