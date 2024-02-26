import React, { useEffect, useState } from "react";
import "./Landing.css";
import NavigationBar2 from "../../components/Navbars/NavigationBar2/NavigationBar2";
import Search from "../../asets/svg/Search";
import SearchIcon from "../../asets/svg/SearchIcon";
import SearchBar from "../../utils/SearchBar/SearchBar";
import ExploreCard from "../../components/Cards/ExploreCard";
import Footer from "../../components/Footer/Footer";
import catering from "../../asets/images/cateringIcon.png";
import resturant from "../../asets/images/resturanticon.png";
import corporate from "../../asets/images/corporate.png";
import flower from "../../asets/images/flowerimg.png";
import Lightings from "../../asets/images/lightIcon.png";
import Marquee from "../../asets/images/marqueeimg.png";
import collectionone from "../../asets/images/collection1.png";
import collectiontwo from "../../asets/images/collection2.png";
import collectionthree from "../../asets/images/collection3.png";
import collectionfour from "../../asets/images/collection4.png";
import TopBrands from "../../components/HomeComponents/TopBrands/TopBrands";
import GetTheApp from "../../components/HomeComponents/GetTheApp/GetTheApp";
import topapp from '../../asets/images/topimg.png'
import website_page_Image from "../../asets/images/website_page_Image_1.jpg";
import image01 from "../../asets/images/image01.png";
import image02 from "../../asets/images/image02.png";
import newCater01 from "../../asets/images/newCater01.jpg";
import newcater02 from "../../asets/images/newCater02.jpg";
import newcater03 from "../../asets/images/newcater03.jpg";
import cImage01 from "../../asets/images/cImage01.jpg";
import cImage02 from "../../asets/images/cImage02.jpg";
import cImage03 from "../../asets/images/cImage03.jpg";
import cImage04 from "../../asets/images/cImage04.jpg";
import getzImg from "../../asets/images/getzImg.png";
import round1 from "../../asets/images/round1.png";
import round2 from "../../asets/images/round2.png";
import App_1 from "../../asets/images/landingImage/App_1.png";
import App_2 from "../../asets/images/landingImage/App_2.png";
import App_3 from "../../asets/images/landingImage/App_3.png";
import App_4 from "../../asets/images/landingImage/App_4.png";
import App_5 from "../../asets/images/landingImage/App_5.png";
import { useNavigate } from "react-router-dom";
import Feedback from "../../components/Feedback/Feedback";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../pages/Login/redux/login.action";
import { toast } from "react-toastify";
import App from "../../App";
const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [details, setDetails] = useState();

  const userData = useSelector((state) => state.LoginReducer.getusers.data);
  console.log("userData", userData);

  const [data, setData] = useState(userData);

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 10,
    background: "rgba(0, 0, 0, 0.1)", // Adjust the opacity as needed
  };

  useEffect(() => {
    const userdetails = JSON.parse(localStorage.getItem("userData"));
    console.log("userdetails", userdetails);
    setDetails(userdetails);
  }, [details]);

  return (
    <div >
      {/* I am going to change background color and logo here ==> KRISHNA KUAMR */}
      <div style={{ backgroundColor: "#c3eaef" /*, height: '80vh'*/ }}>
        <NavigationBar2 />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingInline: "5%",
            paddingBlock: "3%",
            marginTop: 100,
            position: 'relative',
            // borderBottom: "1px groove #efefef",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 35,
                fontFamily: "dexaSemi",
              }}
            >
              Discover everything you need <br /> to plan your big day
            </p>

            <p style={{ margin: 0, fontSize: 18, fontFamily: "DexaLight" }}>
              Search over 73,000 local professionals with reviews,
              <br /> pricing, and more
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: 'white',
                borderRadius: 10
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                  borderRadius: 10,
                }}
              >
                <div style={{ paddingInline: 10, }}>
                  <SearchIcon />
                </div>

                <div>
                  <input
                    placeholder="Search for"
                    style={{
                      fontSize: 20,
                      paddingBlock: 15,
                      outline: "none",
                      border: "none",
                    }}
                  />
                </div>
                <div
                  style={{ borderLeft: "1px groove grey", paddingInline: 10 }}
                >
                  in
                </div>
                <div>
                  <input
                    placeholder="(ex Bang)"
                    style={{
                      fontSize: 20,
                      paddingBlock: 15,
                      outline: "none",
                      border: "none",
                    }}
                  />
                </div>
                <div>
                  <button
                    style={{
                      backgroundColor: "var(--background-color)",
                      color: "var(--text-color)",
                      outline: "none",
                      border: "none",
                      width: "100%",
                      paddingInline: 28,
                      paddingBlock: 18,
                      fontWeight: "600",
                      fontSize: 18,
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                  >
                    Find
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", height: 300, width: 600, marginTop: -15, marginLeft: 340 }}>
            <img src={round2} alt="img-getz" style={{ position: "absolute", bottom: '0px', right: '95px', maxWidth: '33%' }} />
          </div>

        </div>
      </div>

      <div
        style={{
          paddingInline: "5%",
          paddingBlock: "3%",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 35,
            fontFamily: "dexaSemi",
          }}
        >
          Enjoy planning your wedding
        </p>

        <p style={{ margin: 0, fontSize: 18, fontFamily: "DexaLight" }}>
          Start planning your wedding with us its free
        </p>
      </div>

      <div style={{ paddingInline: "5%" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <div
            style={{ flex: 1, cursor: "pointer" }}
            onClick={() => {
              if (details) {
                navigate("/caters");
              } else {
                toast.warn("Please login or register", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                setTimeout(() => {
                  navigate("/login");
                }, 1000);
              }
            }}
          >
            <ExploreCard
              image={newCater01}
              title="Catering"
              paraone="Choose from 500+ Best"
              paratwo="Catering Service providers"
              btntext="Explore Venues"
            />
          </div>

          <div
            style={{ flex: 1, cursor: "pointer" }}
            onClick={() => {
              if (details) {
                navigate("/resturants");
              } else {
                toast.warn("Please login or register", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                setTimeout(() => {
                  navigate("/login");
                }, 1000);
              }
            }}
          >
            <ExploreCard
              image={newcater02}
              title="Resturants"
              paraone="Restaurants For"
              paratwo="Bulk Order Min 10 Persons"
              btntext="Discover Our Tools"
            />
          </div>
          <div
            style={{ flex: 1, cursor: "pointer" }}
            onClick={() => {
              if (details) {
                navigate("/corporate");
              } else {
                toast.warn("Please login or register", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                setTimeout(() => {
                  navigate("/login");
                }, 1000);
              }
            }}
          >
            <ExploreCard
              image={newcater03}
              title="
              Corporate"
              paraone="Restaurants For"
              paratwo="Bulk Order Min 10 Persons"
              btntext="Discover Our Tools"
            />
          </div>
        </div>
      </div>

      {/* <div
        style={{
          paddingInline: "5%",
          paddingBottom: "3%",
          borderBottom: "1px groove #efefef",
          marginTop: "2%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <div
            style={{ flex: 1 }}
            onClick={() => {
              if (details) {
                navigate("/geztemart");
              } else {
                toast.warn("Please login or register", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                setTimeout(() => {
                  navigate("/login");
                }, 1000);
              }
            }}
          >
            <ExploreCard
              image={flower}
              title="Flowers"
              paraone="Choose Best"
              paratwo="Flower Decorators"
              btntext="Get Inspired Here By Exploring"
            />
          </div>

          <div
            style={{ flex: 1, cursor: "pointer" }}
            onClick={() => {
              if (details) {
                navigate("/geztemart");
              } else {
                toast.warn("Please login or register", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                setTimeout(() => {
                  navigate("/login");
                }, 1000);
              }
            }}
          >
            <ExploreCard
              image={Lightings}
              title="Lightings"
              paraone="Order Lights For"
              paratwo="All Type Of Events"
              btntext="Personalize Your Free Website"
            />
          </div>

          <div
            style={{ flex: 1, cursor: "pointer" }}
            onClick={() => {
              if (details) {
                navigate("/geztemart");
              } else {
                toast.warn("Please login or register", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                setTimeout(() => {
                  navigate("/login");
                }, 1000);
              }
            }}
          >
            <ExploreCard
              image={Marquee}
              title="Marquee"
              paraone="Best Shamiyana"
              paratwo="Service Providers in the city"
              btntext="Start Your Search"
            />
          </div>
        </div>
      </div> */}

      <div style={{ paddingInline: "4%", paddingBlock: "2%" }}>
        <p
          style={{
            margin: 0,
            fontSize: 35,

            fontFamily: "dexaSemi",
          }}
        >
          Collections
        </p>

        <p style={{ margin: 0, fontSize: 18, fontFamily: "DexaLight" }}>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Bengaluru, based on trends
        </p>
      </div>
      <div style={{ backgroundColor: "#272e3a" }}>
        <div
          style={{
            paddingInline: "5%",
            paddingBlock: "1%",
            borderBottom: "1px groove #efefef",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              paddingBlock: 20,
              justifyContent: "space-between",
            }}
          >
            <div style={{ borderRadius: 10, position: "relative" }}>
              <img
                src={App_1}
                style={{
                  borderRadius: 10,
                  display: "block",
                  height: "100%",
                  width: "100%",
                }}
              />
              <div
                style={{
                  ...overlayStyle,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                  color: "#fff", // Text color
                  textAlign: "center",
                }}
              >
                <p style={{}}></p>
              </div>
            </div>
            <div style={{ borderRadius: 10, position: "relative" }}>
              <img
                src={App_2}
                style={{
                  borderRadius: 10,
                  display: "block",
                  height: "100%",
                  width: "100%",
                }}
              />
              <div
                style={{
                  ...overlayStyle,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                  color: "#fff", // Text color
                  textAlign: "center",
                }}
              >
                <p style={{}}></p>
              </div>
            </div>

            <div style={{ borderRadius: 10, position: "relative" }}>
              <img
                src={App_3}
                style={{
                  borderRadius: 10,
                  display: "block",
                  height: "100%",
                  width: "100%",
                }}
              />
              <div
                style={{
                  ...overlayStyle,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                  color: "#fff", // Text color
                  textAlign: "center",
                }}
              >
                <p style={{}}></p>
              </div>
            </div>

            <div style={{ borderRadius: 10, position: "relative" }}>
              <img
                src={App_4}
                style={{
                  borderRadius: 10,
                  display: "block",
                  height: "100%",
                  width: "100%",
                }}
              />
              <div
                style={{
                  ...overlayStyle,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                  color: "#fff", // Text color
                  textAlign: "center",
                }}
              >
                <p style={{}}></p>
              </div>
            </div>
            <div style={{ borderRadius: 10, position: "relative" }}>
              <img
                src={App_5}
                style={{
                  borderRadius: 10,
                  display: "block",
                  height: "100%",
                  width: "100%",
                }}
              />
              <div
                style={{
                  ...overlayStyle,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                  color: "#fff", // Text color
                  textAlign: "center",
                }}
              >
                <p style={{}}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingInline: "5%",
          paddingBlock: "3%",
          borderBottom: "1px groove #efefef",
          backgroundColor: "#fff0f3",
        }}
      >
        <TopBrands />
      </div>

      <div>
        <Feedback />
      </div>

      <div>
        <GetTheApp />
      </div>

      <div style={{}}>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
