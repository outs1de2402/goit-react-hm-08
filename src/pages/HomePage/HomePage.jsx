import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Sayntres</h1>
          <p className="py-6"></p>
          <Link to="/register">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
