import '../styling/main.scss';
import Navigation from './Nav';
import { useSelector } from 'react-redux'

const Profile = () => {
    const { userInfo } = useSelector((state) => state.auth)
  return <div>
    <Navigation />
    <div className="main_box">
    <figure>{userInfo?.email.charAt(0).toUpperCase()}</figure>
      <span>
        Welcome <strong>{userInfo?.email}!</strong> You can view this page
        because you're logged in
      </span>
    </div>
  </div>
};

export default Profile;
