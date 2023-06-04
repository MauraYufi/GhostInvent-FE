import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import homeImg from "../../assets/Home.svg";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">GHOSTERY</div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <Link to="/login">
                <button className="--btn --btn-primary">Login</button>
              </Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HOME SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Kelola Barang dan Sumber Daya Rumah Sakit</h2>
          <p>
            Inventory penyimpanan barang kesehatan untuk peningkatan manajemen dan kontrol di rumah sakit.
          </p>
          <div className="hero-buttons">
            <Link to="/dashboard">
              <button className="--btn --btn-primary"> Kelola </button>
            </Link>
          </div>
        </div>

        <img className="hero-image" src={homeImg} alt="Inventory" />
      </section>
    </div>
  );
};

// const NumberText = ({ num, text }) => {
//   return (
//     <div className="--mr">
//       <h3 className="--color-white">{num}</h3>
//       <p className="--color-white">{text}</p>
//     </div>
//   );
// };

export default Home;
