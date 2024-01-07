import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";

const Login = () => {
  return (
    <Wrapper>
      <div className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue="saif@gmail.com" />
        <FormRow type="password" name="password" defaultValue="Saif@123456" />
        <button type="submit" className="btn btn-block">
          Log In
        </button>
        <button type="button" className="btn btn-block">
          Explore as a guest
        </button>
        <p>
          Create new account?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </div>
    </Wrapper>
  );
};
export default Login;
