import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="header">
        <h1 className="h1-head">IIOT Dashboard</h1>
      </div>

      <Link to="/dashboard">Dashboard</Link><br></br>
      <Link to="/login">Login</Link><br></br>
      <Link to="/sign-up">Sign Up</Link>
    </>
  );
}

export default Home;
