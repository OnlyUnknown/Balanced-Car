import '../styling/App.scss';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useGetUserDetailsQuery } from '../features/auth/authServices';
import { logout, setCredentials } from '../features/auth/authSlice';

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
    // perform a refetch every 15mins
      pollingInterval: 900000,
    })

    useEffect(() => {
      if (data) dispatch(setCredentials(data))
    }, [data, dispatch])

    console.log(data)


  return (<nav className="nav">
    <ul>
      <li> <span>
          {isFetching
            ? `Fetching your profile...`
            : userInfo !== null
            ? `Logged in as ${userInfo.email}`
            : "You're not logged in"}
        </span></li>
      <li> My cars</li>
      <li> {userInfo ? (
            <button className='button' onClick={() => dispatch(logout())}>
              Logout
            </button>
          ) : (
            <NavLink className='button' to='/signin'>
              Login
            </NavLink>
          )}</li>

    </ul>
  </nav>
)
};

export default Navigation;
