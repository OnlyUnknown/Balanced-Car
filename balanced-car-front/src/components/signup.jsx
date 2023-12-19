import '../styling/signup.scss';

const Signup = () => (
  <div className="signup">
    <h3 className="title">Sign Up</h3>
    <div className="shadow-box">
      <input placeholder="Email" />
      <input placeholder="Pass" />
      <input placeholder="Re Pass" />
    </div>
  </div>
);

export default Signup;
