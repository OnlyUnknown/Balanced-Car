import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import styles from '../styling/Navbar.module.scss';
import { useGetUserDetailsQuery } from '../features/auth/authServices';
import { logout, setCredentials } from '../features/auth/authSlice';

function Navbarv2() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { data } = useGetUserDetailsQuery('userDetails', {
    // perform a refetch every 15mins
    pollingInterval: 900000,
  });

  useEffect(() => {
    if (data) dispatch(setCredentials(data));
  }, [data, dispatch]);

  // const renderUserInfo = () => {
  //   if (isFetching) {
  //     return 'Fetching your profile...';
  //   }
  //   if (userInfo !== null) {
  //     return `Logged in as ${userInfo.email}`;
  //   }
  //   return "You're not logged in";
  // };
  // adding the states
  const [isActive, setIsActive] = useState(false);
  // add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
    // clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App">

      <nav className={`${styles.navbar}`}>
        {/* logo */}
        <a href="#home" className={`${styles.logo}`}>Dev. </a>
        <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
          {/* <li className={`${styles.navLink}`}>
          {renderUserInfo()}
        </li> */}
          <li>
            <NavLink onClick={removeActive} className={`${styles.navLink}`} to="/main">My cars</NavLink>
          </li>
          <li>
            <NavLink onClick={removeActive} className={`${styles.navLink}`} to="/bills">Bills</NavLink>
          </li>
          <li>
            <NavLink onClick={removeActive} className={`${styles.navLink}`} to="/revenues">Revenues</NavLink>
          </li>
          <li>
            <NavLink onClick={removeActive} className={`${styles.navLink}`} to="/groups">Groups</NavLink>
          </li>
          <li>
            {userInfo ? (
              <NavLink onClick={removeActive} className={`${styles.navLink}`} to="/drivers">
                Drivers
              </NavLink>
            ) : null}
          </li>
          <li>
            {userInfo ? (
              <NavLink className={`${styles.navLink}`} type="button" onClick={() => dispatch(logout())}>
                Logout
              </NavLink>
            ) : (
              <NavLink className={`${styles.navLink}`} to="/signin">
                Login
              </NavLink>
            )}
          </li>
        </ul>
        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
          onClick={toggleActiveClass}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              toggleActiveClass();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Toggle navigation"
        >
          <span className={`${styles.bar}`} />
          <span className={`${styles.bar}`} />
          <span className={`${styles.bar}`} />
        </div>
      </nav>

    </div>
  );
}
export default Navbarv2;
