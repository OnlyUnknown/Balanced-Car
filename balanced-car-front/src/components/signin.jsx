import '../styling/signup.scss';

const Signin = () => (
  <div className="signup-p">
    <div className="shadow-box">
      <h3 className="title-sign">Sign In</h3>
      <input placeholder="Email" />
      <input placeholder="Pass" />
      <button type="submit">Sign in</button>
    </div>
  </div>
);

export default Signin;
