import '../styling/signup.scss';

const Signin = () => (
  <div className="signup">
    <h3 className="title">Sign In</h3>
    <div className="shadow-box">
      <input placeholder="Email" />
      <input placeholder="Pass" />
      <button type="submit">Sign in</button>
    </div>
  </div>
);

export default Signin;
