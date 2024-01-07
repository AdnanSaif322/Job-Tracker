import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          type="text"
          name="firstname"
          labelText="first name"
          defaultValue="adnan"
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="saif"
        />
        <FormRow type="email" name="email" defaultValue="saif@gmail.com" />
        <FormRow type="password" name="password" defaultValue="Saif@123456" />
        <button type="submit" className="btn btn-block">
          Register
        </button>
        <p>
          Already a memeber?
          <Link to="/login" className="member-btn">
            Log in
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
