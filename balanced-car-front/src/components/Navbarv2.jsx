import { useState } from 'react'
import styles from '../styling/Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUserDetailsQuery } from '../features/auth/authServices';
import { logout, setCredentials } from '../features/auth/authSlice';

function Navbarv2() {
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
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }
    return (
      <div className="App">

          <nav className={`${styles.navbar}`}>
            {/* logo */}
            <a href='#home' className={`${styles.logo}`}>Dev. </a>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
              <li onClick={removeActive}>
                <NavLink className={`${styles.navLink}`} to="/main">My cars</NavLink>
              </li>
              <li onClick={removeActive}>
              <NavLink className={`${styles.navLink}`} to="/bills">Bills</NavLink>
              </li>
              <li onClick={removeActive}>
              <NavLink className={`${styles.navLink}`} to="/revenues">Revenues</NavLink>
              </li>
              <li onClick={removeActive}>
              {userInfo ? (
            <NavLink className={`${styles.navLink}`} to="/drivers">
              Drivers
            </NavLink>
          ) : null}
              </li>
              <li onClick={removeActive}>
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
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          </nav>

      </div>
    );
  }
  export default Navbarv2;
  ;