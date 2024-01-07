import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Error Page</h1>
      {/* <p>{error}</p> */}
      <Link to="/">Back to Home Page</Link>
    </>
  );
};
export default Error;
