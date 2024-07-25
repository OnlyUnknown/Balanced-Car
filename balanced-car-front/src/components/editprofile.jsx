import '../styling/prof.scss';
import { useSelector } from 'react-redux';
import Navigation from './Nav';

const EditProfile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { userName } = useSelector((state) => state.auth);
console.log(userName)

  return (
    <div>
      <Navigation />
      <div>
        <figure>{userInfo?.email.charAt(0).toUpperCase()}</figure>
        <div>
          This is edit profile page
          `&apos;`
          <strong>
            {userName?.email}
            ! 
          </strong>
          `&apos;`
          You can view this page
          because you`&apos;`re logged in
        </div>
        <div>
          name:
          {userInfo?.name} <span><input type='text' name='name'/></span>
        </div>
        <div>
          phone number:
          {userInfo?.phone_number} <span><input type='integer' name='phone_number'/></span>
        </div>
        <div>
          email:
          {userInfo?.email} <span><input type='email' name='email'/></span>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
