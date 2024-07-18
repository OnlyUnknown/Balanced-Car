import '../styling/prof.scss';
import { useSelector } from 'react-redux';
import Navigation from './Nav';

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div>
      <Navigation />
      <div>
        <figure>{userInfo?.email.charAt(0).toUpperCase()}</figure>
        <div>
          Welcome
          `&apos;`
          <strong>
            {userInfo?.email}
            !
          </strong>
          `&apos;`
          You can view this page
          because you`&apos;`re logged in
        </div>
        <div>
          name:
          {userInfo?.name}
        </div>
        <div>
          phone number:
          {userInfo?.phone_number}
        </div>
        <div>
          number of cars:
          {userInfo?.number_of_cars}
        </div>
        <div>
          email:
          {userInfo?.email}
        </div>

      </div>
    </div>
  );
};

export default Profile;
