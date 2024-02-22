import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import SearchBar from "../../../utils/SearchBar/SearchBar";
import Login from "../../Auth/Login/Login";
import Signup from "../../Auth/Signup/Signup";
import css from "./NavigationBar2.module.css";
import downArrow from "/icons/down-arrow.png";
import menuBar from "/icons/menu.png";
import profilePic from "/images/profilepic.jpg";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineCircle } from "react-icons/md";
import { useLocation } from "react-router-dom";
import {Wrapper} from './NavigationBar2Style';
// import biryaniCImg from "http://localhost:3000/src/asets/images/biryani.png";

let NavigationBar = ({ toogleMenu, setToggleMenu }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;
  const [details, setDetails] = useState();

  const [billing, setBilling] = useState(false);
  let [menuDisplay, setMenuDisplay] = useState(false);
  let [loggedIn, setLoggedIn] = useState(localStorage.getItem("auth") || false);

  let [auth, setAuth] = useState({
    closed: true,
    login: false,
    signup: false,
  });

  const logoutHandler = async () => {
    // setLoggedIn(false);
    const remove = localStorage.removeItem("userData");
    console.log("remove", remove);
    console.log("details", details);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  useEffect(() => {
    const userdetails = JSON.parse(localStorage.getItem("userData"));
    setDetails(userdetails);
  }, []);
  const biryaniCImg = 'url("../src/asets/images/Logo.png")';
  return (
    <Wrapper>
    <div style={{ paddingBlock: "1%"}}>
      {/* style={{backgroundImage: 'linear-gradient(to right, #ffffff, #ffffff,#e90092, #e90092,#ffffff,#ffffff,#ffffff)'}} */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position:'relative'
        }}
      >
        <div style={{width:330,height:188, backgroundImage: biryaniCImg,backgroundSize: 'cover',backgroundPosition: 'center',position:'absolute',top:-54,display:'flex',justifyContent:'center',alignItems:'center',marginLeft:30}}>
          <h3 style={{color: "var(--text-color)",textAlign:'center',fontSize:50,paddingBottom:30,fontFamily:'Metropolis Italic 700',fontStyle:'italic'}}>Gezte</h3> 
        </div>

        <div style={{marginLeft:400}}>
          <SearchBar />
        </div>

        <div>
          {details ? (
            <div className={css.menuItem} style={{ marginRight: 60 }}>
              <div
                className={css.profile}
                onClick={() => setMenuDisplay((val) => !val)}
              >
                <div
                  className={css.profileName}
                  style={{
                    fontFamily: "metroitalic",
                    color: "var(--text-color)",
                    textTransform: "capitalize",
                  }}
                >
                  {details.name}
                </div>
                <div>
                  {<RiArrowDownSLine color="var(--text-color)" size={23} />}
                </div>
              </div>
              <div
                className={css.menu}
                style={{
                  display: menuDisplay ? "block" : "",
                  zIndex: menuDisplay ? 9000 : "",
                }}
              >
                <Link
                  to="/profile"
                  className={css.menuItemLinkTxt}
                  style={{
                    fontFamily: "DexaSemi",
                    color: "#3d4152",
                  }}
                >
                  <div
                    className={css.menuItemLink}
                    style={{
                      fontFamily: "DexaSemi",
                      color: "#3d4152",
                    }}
                  >
                    Profile
                  </div>
                </Link>

                <div
                  onClick={() => setBilling(!billing)}
                  className={css.menuItemLink}
                  style={{
                    fontFamily: "DexaSemi",
                    color: "#3d4152",
                  }}
                >
                  Billing
                </div>

                {billing === true && (
                  <>
                    <Link to="/billing" className={css.menuItemLinkTxt}>
                      <div
                        className={css.menuItemLink}
                        style={{
                          fontFamily: "DexaSemi",
                          color: "#3d4152",
                          fontSize: 14,
                        }}
                      >
                        <MdOutlineCircle size={10} /> Billing Overview
                      </div>
                    </Link>

                    <Link to="/invoice" className={css.menuItemLinkTxt}>
                      <div
                        className={css.menuItemLink}
                        style={{
                          fontFamily: "DexaSemi",
                          color: "#3d4152",
                          fontSize: 14,
                        }}
                      >
                        <MdOutlineCircle size={10} /> Invoices
                      </div>
                    </Link>
                  </>
                )}

                <Link to="/helpandsupport" className={css.menuItemLinkTxt}>
                  <div
                    className={css.menuItemLink}
                    style={{
                      fontFamily: "DexaSemi",
                      color: "#3d4152",
                    }}
                  >
                    Orders
                  </div>
                </Link>

                <Link to="/quotation" className={css.menuItemLinkTxt}>
                  <div
                    className={css.menuItemLink}
                    style={{
                      fontFamily: "DexaSemi",
                      color: "#3d4152",
                    }}
                  >
                    Quotation
                  </div>
                </Link>
                <Link to="/cart" className={css.menuItemLinkTxt}>
                  <div
                    className={css.menuItemLink}
                    style={{
                      fontFamily: "DexaSemi",
                      color: "#3d4152",
                    }}
                  >
                    Cart
                  </div>
                </Link>
                <Link to="/aboutus" className={css.menuItemLinkTxt}>
                  <div
                    className={css.menuItemLink}
                    style={{
                      fontFamily: "DexaSemi",
                      color: "#3d4152",
                    }}
                  >
                    About Us
                  </div>
                </Link>
                <Link to="/contactus" className={css.menuItemLinkTxt}>
                  <div
                    className={css.menuItemLink}
                    style={{
                      fontFamily: "DexaSemi",
                      color: "#3d4152",
                    }}
                  >
                    Contact Us
                  </div>
                </Link>
                <div
                  className={css.menuItemLinkTxt}
                  onClick={() => logoutHandler()}
                >
                  <div
                    className={css.menuItemLink}
                    style={{
                      fontFamily: "DexaSemi",
                      color: "#3d4152",
                    }}
                  >
                    Logout
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{ display: "flex", marginRight: 60, alignItems: "center" }}
            >
              <div
                onClick={() => navigate("/login")}
                // style={{
                //   fontFamily: "DexaLight",
                //   color: "var(--text-color)",
                //   fontWeight: "600",
                // }}
                // className={css.menuItem}
                style={{
                  width: 110,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: "var(--background-color)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "var(--text-color)",
                  fontSize: 18,
                  fontWeight:'bold'
                }}
              >
                Log in
              </div>
              <div
                // style={{
                //   fontFamily: "DexaLight",
                //   color: "var(--text-color)",
                //   fontWeight: "600",
                // }}
                // className={css.menuItem}
                style={{
                  width: 110,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: "var(--background-color)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "var(--text-color)",
                  fontSize: 18,
                  marginInline:20,
                  fontWeight:'bold'
                }}
                onClick={() =>
                  setAuth({ closed: false, login: false, signup: true })
                }
              >
                Sign up
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={css.modals}>
        {auth?.login ? (
          <Login setAuth={setAuth} setLoggedIn={setLoggedIn} />
        ) : null}
        {auth?.signup ? (
          <Signup setAuth={setAuth} setLoggedIn={setLoggedIn} />
        ) : null}
      </div>
    </div>
    </Wrapper>
  );
};

export default NavigationBar;
