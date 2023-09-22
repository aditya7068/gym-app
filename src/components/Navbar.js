import React from "react";
import logo2 from "../assets/images/logo2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* <div className="leftHand">
        <div className="headerLogo">
          <img src={logo2} alt="..load" />
        </div>
        <h3>
          FIT<span>club</span>
        </h3>
      </div>
      <div className="rightHand">
        <Link to="/" className="menu">
          home
        </Link>
        <Link to="/about" className="menu">
          about
        </Link>
        <Link to="/exercise/0001" className="menu">
          exercise
        </Link>
        <Link to="/blog" className="menu">
          Blog
        </Link>
      </div> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <div className="leftHand">
            <div className="headerLogo">
              <img src={logo2} alt="..load" />
            </div>
            <h3>
              FIT<span>club</span>
            </h3>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <Link to="/" className="menu">
                  home
                </Link>
              </li>
              <li>
                <Link to="/about" className="menu">
                  about
                </Link>
              </li>
              <li>
                <Link to="/exercise/0001" className="menu">
                  exercise
                </Link>
              </li>
              {/* <li>
                <Link to="/blog" className="menu">
                  Blog
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Exersice
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// import React from "react";
// import { Stack } from "@mui/system";
// import { Link } from "react-router-dom";
// import logo from "../assets/images/Logo.png";

// const Navbar = () => {
//   return (
//     <Stack
//       direction="row"
//       justifyContent="space-around"
//       sx={{
//         gap: { sm: "122px", xs: "48px" },
//         mt: { sm: "32px", xs: "20px" },
//         justifyContent: "none",
//       }}
//     >
//       <Link to="/" style={{ width: "48px", height: "40px", margin: "0 20px" }}>
//         <img src={logo} alt="" />
//       </Link>
//       <Stack direction="row" gap="40px" fontSize=" 24px" alignItems="flex-end">
//         <Link
//           to="/"
//           style={{
//             color: "#3A1212",
//             borderBottom: "3px solid #FF2625",
//             textDecoration: "none",
//           }}
//         >
//           Home
//         </Link>
//         <Link
//           to="/exercise/0001"
//           style={{ textDecoration: "none", color: "#3A1212" }}
//         >
//           Exercise
//         </Link>
//       </Stack>
//     </Stack>
//   );
// };

// export default Navbar;
