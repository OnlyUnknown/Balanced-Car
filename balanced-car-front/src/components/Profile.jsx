import '../styling/prof.scss';
import Navigation from './Nav';
import { useSelector } from 'react-redux'

const Profile = () => {
    const { userInfo } = useSelector((state) => state.auth)
  return <div>
    <Navigation />
    <div >
    <figure>{userInfo?.email.charAt(0).toUpperCase()}</figure>
      <div>
        Welcome <strong>{userInfo?.email}!</strong> You can view this page
        because you're logged in
      </div>
      <div>name:{userInfo?.name}</div>
      <div>phone number: {userInfo?.phone_number}</div>
      <div>number of cars: {userInfo?.number_of_cars}</div>
      <div>email: {userInfo?.email}</div>

    </div>
  </div>
};

export default Profile;
