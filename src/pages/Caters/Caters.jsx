







// import { useState, useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";
// import {filterOption} from '../../common/constant';
// import DemoDualSlider from './DemoDualSlider';
// import NavigationBar2 from "../../components/Navbars/NavigationBar2/NavigationBar2";
// import FilterBox from "../../utils/OrderingUtils/FilterBox/FilterBox";
// import CircleCard1 from "../../utils/Cards/CircleCards/CircleCard1/CircleCard1";
// import CircleCard2 from "../../utils/Cards/CircleCards/CircleCard2/CircleCard2";
// import ShowcaseCard from "../../utils/Cards/ShowcaseCard/ShowcaseCard";
// import ExploreOptionsNearMe from "../../components/HomeComponents/ExploreOptionsNearMe/ExploreOptionsNearMe";
// import Footer from "../../components/Footer/Footer";
// import CarouselUtil from "../../utils/CarouselUtil/CarouselUtil";
// import delivery1 from "/icons/delivery1.png";
// import delivery2 from "/icons/delivery2.png";
// import filtersIcon from "/icons/filter.png";
// import deliveryTimeIcon from "/icons/delivery-time.png";
// import downArrowIcon from "/icons/down-arrow.png";
// import banner from "./../../../public/banners/banner.jpeg";
// import Filter from "../../utils/OrderingUtils/FilterBox/filter";
// import styled from 'styled-components';
// import Modal1 from './Modal';
// import SideMenu from "./SideMenu";
// import './caters.module.css';
// import { FiFilter } from 'react-icons/fi'
// import thalassery from "../../asets/images/thalassery.png";
// import mcdelivery from "../../asets/images/mcdelivery.png";
// import a2b from "../../asets/images/a2b.png";
// import kfcImg from "/icons/Brands/kfc.png";
// import pizzahutImg from "/icons/Brands/pizzahut.png";
// import scoopsImg from "/icons/Brands/scoops.png";
// import redribbon from "../../asets/images/ribbonred.jpg";
// import {
//   orderOnlinePage,
//   diningOutPage,
//   nightLifePage,
// } from "../../helpers/constants";
// import css from "../ShowCase/ShowCase.module.css";
// import Modal from "../../components/Modal/Modal";
// import Cross from "../../asets/svg/Cross";
// import Search from "../../asets/svg/Search";
// import Cancel from "../../asets/svg/Cancel";
// import { useNavigate } from "react-router-dom";
// import CorporateCaters from "../../asets/images/corporateCatersimg.png";
// import CorporateCaters2 from "../../asets/images/corporateCatersimg2.png";
// import FamilyMeetup from "../../asets/images/familymeetupimg.png";
// import HouseParty from "../../asets/images/housePartyimg.png";
// import Marriage from "../../asets/images/marriageImg.png";
// import FriendsParty from "../../asets/images/friendsmeetup.png";
// import GetTheApp from "../../components/HomeComponents/GetTheApp/GetTheApp";
// import ResturantCard from "../../components/ResturantCard/ResturantCard";
// import { FaUsers,FaCalendarAlt,  } from "react-icons/fa";
// import dayjs from "dayjs";
// import { IoIosArrowDown } from "react-icons/io";

// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
// import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
// import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
// import { MdRestaurant } from 'react-icons/md';
// import { RxCross2 } from "react-icons/rx";
// import axios from "axios";
// import Slider from "react-slick";
// import cater01 from "../../asets/images/cater01.jpg";
// import cater02 from "../../asets/images/cater02.jpg";
// import cater03 from "../../asets/images/cater03.jpg";
// import cater04 from "../../asets/images/cater04.jpg";
// import cater05 from "../../asets/images/cater05.jpg";
// import cater06 from "../../asets/images/cater06.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import DualSlider from "./DualSlider";

// const Wrapper = styled.div`
//       .menu-bootom{
//         cursor:pointer;
//       }
//       .active-menu-buttom{
       
//         transform: scale(1.1);
//       }
//       .active-image{
//         padding-left:7px;
//       }
//       @keyframes zoom-in-zoom-out {
//         0% {
//           transform: scale(1, 1);
//         }
//         50% {
//           transform: scale(1.5, 1.5);
//         }
//         100% {
//           transform: scale(1, 1);
//         }
//       }
// `;

//  // animation: zoom-in 2s ease-out 0.1;

// let Caters = () => {

//   const [selectedOption1, setSelectedOption1] = useState(''); // State to manage the selected option
//   const [selectedCategory, setSelectedCategory] = useState(''); // State to manage the selected category

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };
//   const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

//   const handleFilterClick = () => {
//     setIsFilterModalOpen(true);
//   };

//   const [amountOfMembers, setAmountOfMembers] = useState(false);

//   const onChangeHandle = (event) => {
//     setAmountOfMembers(parseInt(event.target.value));
//   };




//   const navigate = useNavigate();
//   const location = useLocation();
//   const currentPath = location.pathname;
//   const [toggleswitch, setToggleswitch] = useState(true);
//   const containerRef = useRef(null);
//   const [value, onChange] = useState(new Date());
//   const [members, setMembers] = useState(6);

//   let [toogleMenu, setToggleMenu] = useState(true);
//   const [modalId, setModalId] = useState(0);
//   const [val, setVal] = useState("Sort by");
//   const [restaurantImages, setRestaurantImages] = useState({});
//   const [items, setItems] = useState([]);
//   console.log('items:-',items);
//   // const [ival, setIval] = useState(0);

//   const urlParams = new URLSearchParams(location.search);
//   const page = urlParams.get("page");
//   const [isFilterPageOpen, setIsFilterPageOpen] = useState(false);
//   const [createModal, setCreateModal] = useState(false);
//   const [createModalone, setCreateModalone] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("Popularity");
//   const [isChecked, setIsChecked] = useState(false);
//   const [selectedCities, setSelectedCities] = useState([]);
//   const [range, setRange] = useState("Any");
//   const slider1Ref = useRef(null);
//   const slider2Ref = useRef(null);
//   const [leftSliderImages, setLeftSliderImages] = useState([]);
//   console.log('leftSliderImages:-',leftSliderImages);
//   const [productData, setProductData] = useState([]);
//   const [productData2, setProductData2] = useState([]);
//   const [formData, setFormData] = useState({
//     amountOfMembers: 6,
//     // data: '',
//     // time:'',
//     dataAndTime:'',
//     packageName: ''
//   });

//   console.log('formData:-',formData);

//   const onClickHandle = (e) =>{
//     console.log('e:-',e.target.value);
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     // localStorage.setItem('formData', JSON.stringify(formData));
//     // setCreateModalone(false)
//   }

//   const saveFormData = () => {
//     localStorage.setItem('formData', JSON.stringify(formData));
//     setCreateModalone(false)
//   }

//   useEffect(() => {
//     fetch("https://gezte.com/api/fetch_short_package_name.php")
//       .then((response) => response.json())
//       .then((result) => {
//         const first12Items = result.data.slice(0, 11);
//         const second12Items = result.data.slice(12, 23);

//         const leftSliderContent = first12Items.map((item) => ({
//           imageUrl: `https://gezte.com/api/${item.image}`,
//           packageShortName: item.package_short_name,
//         }));

//         const rightSliderContent = second12Items.map((item) => ({
//           imageUrl: `https://gezte.com/api/${item.image}`,
//           packageFullName: item.package_full_name,
//         }));

//         setLeftSliderImages(leftSliderContent);
//         setRightSliderImages(rightSliderContent);
//       })
//       .catch((err) => console.error('Error fetching data:', err));
//   }, []);

//   useEffect(() => {
//     fetch("https://gezte.com/api/fetch_full_name_package.php")
//       .then((response) => response.json())
//       .then((result) => {
//         const first12Items = result.data.slice(0, 11);
//         const second12Items = result.data.slice(12, 23);

//         const productData = first12Items.map((item) => ({
//           imageUrl: `https://gezte.com/api/${item.image}`,
//           packageFullName: item.package_full_name,
//         }));

//         const rightSliderContent = second12Items.map((item) => ({
//           imageUrl: `https://gezte.com/api/${item.image}`,
//           packageFullName: item.package_full_name,
//         }));

//         setProductData(productData);
//         setProductData2(rightSliderContent);
//       })
//       .catch((err) => console.error('Error fetching data:', err));
//   }, []);



//   // const settings = {
//   //   dots: true,
//   //   infinite: true,
//   //   speed: 500,
//   //   slidesToShow: 4,
//   //   slidesToScroll: 1
//   // };
//   const handleNext = () => {
//     slider1Ref.current.slickNext();
//     slider2Ref.current.slickNext();
//   };

//   const handlePrev = () => {
//     slider1Ref.current.slickPrev();
//     slider2Ref.current.slickPrev();
//   };

  

//   // const Setting2= {
//   //   dots: false,
//   //   infinite: true,
//   //   speed: 500,
//   //   slidesToShow: 1,
//   //   slidesToScroll: 1
//   // };
 
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 6,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

 
//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleCheckboxToggle = () => {
//     setIsChecked(!isChecked);
//   };

//   const overlayStyle = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     borderRadius: 10,
//     // background: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
//   };

//   const overlayStyle1 = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     borderRadius: 10,
//     // background: "rgba(0, 0, 0, 0.3)", // Adjust the opacity as needed
//   };

  
//   // const images = [{image:cater01, meal:'chicken meal'}, {image:cater02, meal:'full meal'}, {image:cater03, meal:'North Indian'}, {image:cater04, meal:'South Indian'}, {image:cater05, meal:'South Indian'}, {image:cater04, meal:'South Indian'}, {image:cater05, meal:'South Indian'} ]

//   // const handleCheckboxChange = (city) => {
//   //   const updatedCities = selectedCities.includes(city)
//   //     ? selectedCities.filter((selectedCity) => selectedCity !== city)
//   //     : [...selectedCities, city];

//   //   setSelectedCities(updatedCities);
//   // };

//   // const handleFilterBoxClick = () => {
//   //   setIsFilterPageOpen(!isFilterPageOpen);
//   // };

//   // <Navbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} />

//   // let [isActive, setIsActive] = useState({
//   //   delivery: page === orderOnlinePage,
//   //   dinning: page === diningOutPage,
//   //   nightlife: page === nightLifePage,
//   // });
  
//   let filterBoxes;


//   let filters = {
//     delivery: [
//       { text: "Filter" },
//       { text: "Sort By" },
//       { text: "Fast Delivery" },
//       { text: "Veg" },
//       { text: "Rs 100-Rs 250" },
//       { text: "Rs 250-350" },
//       { text: "Rs 350+" },
//       { text: "NonVeg" },
//       { text: "Rated 4+" },
     
//     ],
//   };


// filterBoxes = filters.delivery.map((filter, index) => (
//   <div key={index} style={{borderRadius:'18px', backgroundColor:'rgb(255, 255, 255)', padding:'9px ',paddingLeft:'12px', paddingRight:'12px', width:'auto',border: '1px solid rgb(226, 226, 231)', margin: '5px', padding: '5px', display: 'inline-block', boxShadow:'rgba(2, 6, 12, 0.04) 0px 2px 12px'}}
// onClick={filter.text==='Filter'? handleFilterClick:null}
//   >
//     {filter.text === "Filter" ? (
//       <>
//         {filter.text}
//         <FiFilter style={{ marginLeft: '5px' }} /> {/* Use the Filter icon */}
//       </>
//     ) : filter.text === "Sort By" ? (
//       <>
//         {filter.text}
//         <IoIosArrowDown  style={{ marginLeft: '5px' }} /> {/* Use the Truck icon */}

//       </>
//     )
//      : (
//       filter.text
//     )}
//   </div>
// ));

  


//   // if (page !== orderOnlinePage || page === orderOnlinePage) {
//   //   filterBoxes = filters?.delivery?.map((val, id) => {
//   //     return (
//   //       <div key={id}>
//   //         <FilterBox
//   //           leftIcon={val?.leftIcon ?? null}
//   //           rightIcon={val?.rightIcon ?? null}
//   //           text={val.text}
//   //           onClick={() => {
//   //             setModalId(id);
//   //             setCreateModal(true);
//   //             setVal(
//   //               id === 0
//   //                 ? "Sort by"
//   //                 : id === 1
//   //                 ? "Cuisines"
//   //                 : id === 2
//   //                 ? "Rating"
//   //                 : id === 3
//   //                 ? "More filters"
//   //                 : "Sort by"
//   //             );
//   //           }}
//   //         />
//   //       </div>
//   //     );
//   //   });
//   // } else if (page === diningOutPage) {
//   //   filterBoxes = filters?.dinning?.map((val, id) => {
//   //     return (
//   //       <div key={id}>
//   //         <FilterBox
//   //           leftIcon={val?.leftIcon ?? null}
//   //           rightIcon={val?.rightIcon ?? null}
//   //           text={val.text}
//   //         />
//   //       </div>
//   //     );
//   //   });
//   // } else if (page === nightLifePage) {
//   //   filterBoxes = filters?.nightLife?.map((val, id) => {
//   //     return (
//   //       <div key={id}>
//   //         <FilterBox
//   //           leftIcon={val?.leftIcon ?? null}
//   //           rightIcon={val?.rightIcon ?? null}
//   //           text={val.text}
//   //         />
//   //       </div>
//   //     );
//   //   });
//   // }



//   const brandsCardScroll = [
//     {
//       name: "Thalassery",
//       imgSrc: thalassery,
//       time: "45",
//     },
//     {
//       name: "Mc Delivery",
//       imgSrc: mcdelivery,
//       time: "35",
//     },
//     {
//       name: "A2B",
//       imgSrc: a2b,
//       time: "49",
//     },
//     {
//       name: "KFC",
//       imgSrc: kfcImg,
//       time: "19",
//     },
//     {
//       name: "Pizza Hut",
//       imgSrc: pizzahutImg,
//       time: "22",
//     },
//     {
//       name: "Scoops",
//       imgSrc: scoopsImg,
//       time: "33",
//     },
//   ];

//   useEffect(() => {
//     if (currentPath === "/caters") {
//       setCreateModalone(true);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://gezte.com/api/businesswise_service_provider_details.php?business_topics=%27catering%27"
//         );

//         console.log("Response Data", response.data.data);
//         setItems(response.data.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     // <div className={css.outerDiv}>
    
//     <Wrapper>
//       <NavigationBar2 />
//       <div className={css.innerDiv}>
//         {/* <div
//           className={css.breadcrumb}
          
//           style={{ color: "var(--secondary-color)",paddingLeft:"10%" }}
//         >
//           Home / India / Bengaluru / Bangalore City / Indira Nagar
//         </div> */}
//       </div>
//       <div
//         ref={containerRef}
//         tabIndex={0}
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//           marginBottom: "3%",
//           outline: "none",
//         }}
//       >
//         <img
//           src={banner}
//           style={{ marginTop: 20, height: "20%", width: "70%" }}
//         />
//       </div>
//       <div style={{}}>
//         <div className={css.innerDiv4Title} style={{ marginLeft: "15%" }}>
//           Filters
//         </div>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             gap: 20,
//             // marginBlock: 20,
//             // marginInline: "15%",
//             backgroundColor: "#272e3a",
//             justifyContent: "center",
//             paddingBlock: "3%",
//             marginBottom:20
//           }}
//         >
//           <div style={{ borderRadius: 10, position: "relative" }}>
//             <img
//               src={CorporateCaters}
//               style={{
//                 borderRadius: 10,
//                 display: "block",
//                 height: "100%",
//                 width: "100%",
//               }}
//             />
//             <div
//               style={{
//                 ...overlayStyle1,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "end",
//                 color: "#fff", // Text color
//                 textAlign: "center",
//               }}
//             >
//               <p
//                 style={{ color: "white", fontFamily: "dexaSemi", fontSize: 22 }}
//               >
//                 Corporate Caterers
//               </p>
//             </div>
//           </div>

//           <div style={{ borderRadius: 10, position: "relative" }}>
//             <img
//               src={FamilyMeetup}
//               style={{
//                 borderRadius: 10,
//                 display: "block",
//                 height: "100%",
//                 width: "100%",
//               }}
//             />
//             <div
//               style={{
//                 ...overlayStyle,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "end",
//                 color: "#fff", // Text color
//                 textAlign: "center",
//               }}
//             >
//               <p
//                 style={{ color: "white", fontFamily: "dexaSemi", fontSize: 22 }}
//               >
//                 Family Meetup
//               </p>
//             </div>
//           </div>

//           <div style={{ borderRadius: 10, position: "relative" }}>
//             <img
//               src={HouseParty}
//               style={{
//                 borderRadius: 10,
//                 display: "block",
//                 height: "100%",
//                 width: "100%",
//               }}
//             />
//             <div
//               style={{
//                 ...overlayStyle,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "end",
//                 color: "#fff", // Text color
//                 textAlign: "center",
//               }}
//             >
//               <p
//                 style={{ color: "white", fontFamily: "dexaSemi", fontSize: 22 }}
//               >
//                 Friends Party
//               </p>
//             </div>
//           </div>

//           <div style={{ borderRadius: 10, position: "relative" }}>
//             <img
//               src={Marriage}
//               style={{
//                 borderRadius: 10,
//                 display: "block",
//                 height: "100%",
//                 width: "100%",
//               }}
//             />
//             <div
//               style={{
//                 ...overlayStyle,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "end",
//                 color: "#fff", // Text color
//                 textAlign: "center",
//               }}
//             >
//               <p
//                 style={{ color: "white", fontFamily: "dexaSemi", fontSize: 22 }}
//               >
//                 Marriage
//               </p>
//             </div>
//           </div>
//           <div style={{ borderRadius: 10, position: "relative" }}>
//             <img
//               src={FriendsParty}
//               style={{
//                 borderRadius: 10,
//                 display: "block",
//                 height: "100%",
//                 width: "100%",
//               }}
//             />
//             <div
//               style={{
//                 ...overlayStyle,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "end",
//                 color: "#fff", // Text color
//                 textAlign: "center",
//               }}
//             >
//               <p
//                 style={{ color: "white", fontFamily: "dexaSemi", fontSize: 22 }}
//               >
//                 House Party
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",

//           marginBottom: 20,
//         }}
//       >
//         <div
//           style={{
//             borderBottom: currentPath === "/caters" ? "4px solid black" : "",
//             paddingBottom: currentPath === "/caters" ? 10 : "",
//           }}
//         >
//           <button
//             onClick={() => navigate("/caters")}
//             style={{
//               backgroundColor:
//                 currentPath === "/caters"
//                   ? "var(--background-color)"
//                   : "#696969", // Set different colors based on the current path
//               color: "var(--text-color)",
//               outline: "none",
//               border: "none",
//               width: "100%",
//               borderRadius: 30,
//               paddingBlock: 15,
//               fontWeight: 600,
//               fontSize: 18,
//               // paddingInline: 50,
//               width: 250,
//             }}
//           >
//             Caterers
//           </button>
//         </div>

//         <div
//           style={{
//             borderBottom:
//               currentPath === "/resturants" ? "4px solid black" : "",
//             paddingBottom: currentPath === "/resturants" ? 10 : "",
//           }}
//         >
//           <button
//             onClick={() => navigate("/resturants")}
//             style={{
//               backgroundColor:
//                 currentPath === "/resturants"
//                   ? "var(--background-color)"
//                   : "#696969", // Set different colors based on the current path
//               color: "white",
//               outline: "none",
//               border: "none",
//               width: "100%",
//               borderRadius: 30,
//               paddingBlock: 15,
//               fontWeight: 600,
//               fontSize: 18,
//               // paddingInline: 50,
//               width: 250,
//             }}
//           >
//             Resturants
//           </button>
//         </div>

//         <div
//           style={{
//             borderBottom: currentPath === "/corporate" ? "4px solid black" : "",
//             paddingBottom: currentPath === "/corporate" ? 10 : "",
//           }}
//         >
//           <button
//             onClick={() => navigate("/corporate")}
//             style={{
//               backgroundColor:
//                 currentPath === "/corporate"
//                   ? "var(--background-color)"
//                   : "#696969", // Set different colors based on the current path
//               color: "white",
//               outline: "none",
//               border: "none",
//               width: "100%",
//               borderRadius: 30,
//               paddingBlock: 15,
//               fontWeight: 600,
//               fontSize: 18,
//               // paddingInline: 50,
//               width: 250,
//             }}
//           >
//             Corporate
//           </button>
//         </div>

//         <div
//           style={{
//             borderBottom: currentPath === "/geztemart" ? "4px solid black" : "",
//             paddingBottom: currentPath === "/geztemart" ? 10 : "",
//           }}
//         >
//           <button
//             onClick={() => navigate("/geztemart")}
//             style={{
//               backgroundColor:
//                 currentPath === "/geztemart"
//                   ? "var(--background-color)"
//                   : "#696969", // Set different colors based on the current path
//               color: "white",
//               outline: "none",
//               border: "none",
//               width: "100%",
//               borderRadius: 30,
//               paddingBlock: 15,
//               fontWeight: 600,
//               fontSize: 18,
//               // paddingInline: 50,
//               width: 250,
//             }}
//           >
//             Gezte Mart
//           </button>
//         </div>
//       </div>
// <div
//         className={""}
//         style={{ backgroundColor: "rgb(39, 46, 58)", paddingBlock: "5%" , paddingLeft:'68px'}}
//       >
//         <div className={css.w7} style={{ width:'95%' }}> 
//           <div className={css.rollerCarosuel} style={{flexDirection:'column'}}>
//             <CarouselUtil>
//               {productData?.map((val, id) => {
//                 return (
//                   <div className={css.cardW} key={id}>
//                     <CircleCard2
//                       imgSrc={val.imageUrl}
//                       name={val.packageFullName}
//                       // time={val.time}
//                       productData
//                     />
//                   </div>
//                 );
//               })}
              
//             </CarouselUtil>

//             <CarouselUtil>
//               {productData2?.map((val, id) => {
//                 return (
//                   <div className={css.cardW} key={id}>
//                     <CircleCard2
//                       imgSrc={val.imageUrl}
//                       name={val.packageFullName}
//                       // time={val.time}
//                       productData
//                     />
//                   </div>
//                 );
//               })}
              
//             </CarouselUtil>
            
//           </div>
//         </div>
//       </div>

//   {/* Brand Slider */}
//       <div
//         className={""}
//         style={{ backgroundColor: "#fff0f3", paddingBlock: "5%" }}
//       >
//         <div className={css.w7} style={{width:'89%'}}>
//           <div className={css.innerDiv5Title}>Top brands for you</div>
//           <div className={css.rollerCarosuel} style={{marginLeft:'31px'}}>
//             <CarouselUtil>
//               {brandsCardScroll?.map((val, id) => {
//                 return (
//                   <div className={css.cardW} key={id}>
//                     <CircleCard2
//                       imgSrc={val.imgSrc}
//                       name={val.name}
//                       time={val.time}
//                     />
//                   </div>
//                 );
//               })}
//             </CarouselUtil>
//           </div>
//         </div>
//       </div>

//       <div
//         className={""}
//         style={{ backgroundColor: "rgb(248, 248, 248)", paddingBlock: "5%" }}
//       >
//         <div className={css.w7} style={{width:'89%'}}>
//         <div className={css.innerDiv5Title}>Inspiration for your first order</div>
        
//           <div className={css.rollerCarosuel} style={{marginLeft:'31px'}}>
//             <CarouselUtil>
//               {leftSliderImages?.map((val, id) => {
//                 return (
//                   <div className={css.cardW} key={id}>
//                     <CircleCard2
//                       imgSrc={val.imageUrl}
//                       name={val.packageShortName}
//                       // time={val.time}
//                     />
//                   </div>
//                 );
//               })}
//             </CarouselUtil>
//           </div>
//         </div>
//       </div>
//       <div className={""} style={{ paddingInline: 30, paddingBlock: 30 }}>
//         <div className={"css.w7"}>
//           <div
//             className={css.innerDiv6Title}
//             style={{
//               fontFamily: "DexaSemi",
//               color: "var(--primary-color)",
//               paddingInline: "10%",
//             }}
//           >
//             Nightlife Restaurants in Bangalore
//           </div>

//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//               marginInline: "10%",
//               marginTop: "1%",
//               gap: "2%",
//             }}
//           >
//             <div
//               onClick={() => setToggleswitch(!toggleswitch)}
//               style={{
//                 width: 55,
//                 height: 30,
//                 backgroundColor: toggleswitch ? "red" : "green",
//                 borderRadius: 20,
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: toggleswitch ? "flex-start" : "flex-end",
//                 paddingInline: 5,
//               }}
//             >
//               <div
//                 style={{
//                   width: 20,
//                   height: 20,
//                   backgroundColor: "white",
//                   borderRadius: "50%",
//                 }}
//               ></div>
//             </div>
//             <div>
//               <p
//                 style={{
//                   fontFamily: "dexaSemi",
//                   color: toggleswitch ? "red" : "green",
//                 }}
//               >
//                 {toggleswitch ? "NON VEG" : "VEG"}
//               </p>
//             </div>
//           </div>

//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               gap: 20,
//               marginInline: "10%",
//             }}
//           >
//             {filterBoxes}
//           </div>

          
//           <div
//             className={"css.innerDiv6Body"}
//             style={{ display: "flex", flexDirection: "row", gap: 20 }}
//           >
//             <SideMenu/>

//             <div className={css.innerDiv6Body} style={{ flex: 9.5 }}>
//                 {items.map((restaurant, id) => (
               
//                <ResturantCard
//                key={id}
//                {...restaurant.restaurant_details}
//                aboutUs={restaurant.restaurant_details.about_us} // Pass about_us as a prop
//              />

            
//                 ))}
//             </div>
//           </div> 
//         </div>
//       </div>

//       <ExploreOptionsNearMe />
//       <div>
//         <GetTheApp />
//       </div>

//       <Footer />

//       {/* <Modal isOpen={createModal} onClose={() => setCreateModal(false)}>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
           
//             width: 700,
//             height: 600,
//             overflowY: "auto",
//             marginTop: 10,
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "space-between",
//               paddingInline: 10,
//               margin: 0,

//               borderBottom: "1px solid grey",
//             }}
//           >
//             <h2>Filters</h2>
//             <div onClick={() => setCreateModal(false)}>
//               <Cross />
//             </div>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               borderBottom: "1px solid grey",
//             }}
//           >
//             <div style={{ flex: 1 }}>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",

//                   fontWeight: "600",
//                   fontSize: 18,
//                   backgroundColor: "#f8f8f8",
//                   height: 420,
//                 }}
//               >
//                 <div
//                   onClick={() => setVal("Sort by")}
//                   style={{
//                     paddingLeft: val === "Sort by" ? 15 : 20,
//                     backgroundColor: val === "Sort by" ? "white" : "",
//                     borderLeft: val === "Sort by" ? "5px solid #ef4f5f " : "",
//                     height: "6rem",
//                     display: "flex",
//                     justifyContent: "center",
//                     flexDirection: "column",
//                   }}
//                 >
//                   <p style={{ margin: 0, cursor: "pointer" }}>Sort by</p>
//                   <p style={{ margin: 0, fontSize: 15, color: "#ef4f5f" }}>
//                     {selectedOption}
//                   </p>
//                 </div>
//                 <div
//                   onClick={() => setVal("Cuisines")}
//                   style={{
//                     paddingLeft: val === "Cuisines" ? 15 : 20,
//                     backgroundColor: val === "Cuisines" ? "white" : "",
//                     borderLeft: val === "Cuisines" ? "5px solid #ef4f5f " : "",
//                     height: "6rem",
//                     display: "flex",
//                     justifyContent: "center",
//                     flexDirection: "column",
//                   }}
//                 >
//                   <p style={{ margin: 0, cursor: "pointer" }}>Cuisines</p>
//                   {selectedCities.length >= 1 && (
//                     <p style={{ margin: 0, fontSize: 15, color: "#ef4f5f" }}>
//                       {selectedCities.length} Selected
//                     </p>
//                   )}

              
//                 </div>
//                 <div
//                   onClick={() => setVal("Rating")}
//                   style={{
//                     paddingLeft: val === "Rating" ? 15 : 20,
//                     backgroundColor: val === "Rating" ? "white" : "",
//                     borderLeft: val === "Rating" ? "5px solid #ef4f5f " : "",
//                     height: "6rem",
//                     display: "flex",
//                     justifyContent: "center",
//                     flexDirection: "column",
//                   }}
//                 >
//                   <p style={{ margin: 0, cursor: "pointer" }}>Rating</p>
//                 </div>
//                 <div
//                   onClick={() => setVal("More filters")}
//                   style={{
//                     paddingLeft: val === "More filters" ? 15 : 20,
//                     backgroundColor: val === "More filters" ? "white" : "",
//                     borderLeft:
//                       val === "More filters" ? "5px solid #ef4f5f " : "",
//                     height: "6rem",
//                     display: "flex",
//                     justifyContent: "center",
//                     flexDirection: "column",
//                   }}
//                 >
//                   <p style={{ margin: 0, cursor: "pointer" }}>More filters</p>
//                 </div>
//               </div>
//             </div>

//             {val == "Sort by" && (
//               <div style={{ flex: 2, paddingInline: 20 }}>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                   }}
//                 >
//                   <input
//                     type="radio"
//                     value="Popularity"
//                     checked={selectedOption === "Popularity"}
//                     onChange={handleOptionChange}
//                   />
//                   <p>Popularity</p>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                   }}
//                 >
//                   <input
//                     type="radio"
//                     value="Rating: High to Low"
//                     checked={selectedOption === "Rating: High to Low"}
//                     onChange={handleOptionChange}
//                   />
//                   <p>Rating: High to Low</p>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                   }}
//                 >
//                   <input
//                     type="radio"
//                     value="Delivery Time"
//                     checked={selectedOption === "Delivery Time"}
//                     onChange={handleOptionChange}
//                   />
//                   <p>Delivery Time</p>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                   }}
//                 >
//                   <input
//                     type="radio"
//                     value="Cost: Low to High"
//                     checked={selectedOption === "Cost: Low to High"}
//                     onChange={handleOptionChange}
//                   />
//                   <p>Cost: Low to High</p>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                   }}
//                 >
//                   <input
//                     type="radio"
//                     value="Cost: High to Low"
//                     checked={selectedOption === "Cost: High to Low"}
//                     onChange={handleOptionChange}
//                   />
//                   <p>Cost: High to Low</p>
//                 </div>
//               </div>
//             )}
//             {val == "Cuisines" && (
//               <div style={{ flex: 2, paddingInline: 20 }}>
//                 <div style={{ paddingBlock: 20, position: "relative" }}>
//                   <div style={{ position: "absolute", top: "40%", left: 6 }}>
//                     <Search />
//                   </div>

//                   <input
//                     type="text"
//                     placeholder="Search here"
//                     style={{
//                       border: "1px groove #CFCFCF",
//                       width: "100%",
//                       outline: "none",
//                       borderRadius: 6,
//                       paddingInline: 30,
//                       paddingBlock: 10,
//                       fontSize: 20,
//                     }}
//                   />
//                   <div style={{ position: "absolute", top: "40%", right: 6 }}>
//                     <Cancel />
//                   </div>
//                 </div>

//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     gap: 80,
//                     height: 300,
//                     overflowY: "auto",
//                   }}
//                 >
//                   <div style={{ height: 400, overflowY: "auto" }}>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         onChange={() => handleCheckboxChange("New York")}
//                       />
//                       <p>Abruzzese</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         onChange={() => handleCheckboxChange("Aegean")}
//                       />
//                       <p>Aegean</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         onChange={() => handleCheckboxChange("Abruzzese")}
//                       />
//                       <p>Abruzzese</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         onChange={() => handleCheckboxChange("Aegean")}
//                       />
//                       <p>Aegean</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         onChange={() => handleCheckboxChange("England")}
//                       />
//                       <p>England</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Abruzzese</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Aegean</p>
//                     </div>
//                   </div>
//                   <div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Abruzzese</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Aegean</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Abruzzese</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Aegean</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Aegean</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Abruzzese</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Aegean</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {val == "Rating" && (
//               <div style={{ flex: 2, paddingInline: 20 }}>
//                 <small style={{ color: "#696969", fontSize: 12 }}>Rating</small>
//                 <div style={{ display: "flex", flexDirection: "row" }}>
//                   <p
//                     style={{
//                       margin: 0,
//                       color: "#1c1c1c",
//                       fontWeight: "600",
//                       fontSize: 20,
//                     }}
//                   >
//                     {range}
//                   </p>
//                   <p
//                     style={{
//                       margin: 0,
//                       color: "#1c1c1c",
//                       fontWeight: "600",
//                       fontSize: 20,
//                     }}
//                   >
//                     {range === "3.5" || range === "4.0" || range === "4.5"
//                       ? " +"
//                       : ""}
//                   </p>
//                 </div>
//                 <div
//                   className=""
//                   style={{
//                     marginTop: "40%",
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                     gap: 2,
//                   }}
//                 >
//                   <div onClick={() => setRange("Any")}>
//                     <div
//                       style={{
//                         height: range === "Any" ? 20 : 15,
//                         width: range === "Any" ? 20 : 15,
//                         backgroundColor:
//                           range === "3.5" ||
//                           range === "4.0" ||
//                           range === "4.5" ||
//                           range === "5.0"
//                             ? "#e8e8e8"
//                             : "#ef4f5f",
//                         borderRadius: "50%",
//                       }}
//                     ></div>
//                   </div>

//                   <div
//                     style={{
//                       width: "100%",
//                       height: 4,
//                       backgroundColor:
//                         range === "3.5" ||
//                         range === "4.0" ||
//                         range === "4.5" ||
//                         range === "5.0"
//                           ? "#e8e8e8"
//                           : "#ef4f5f",
//                     }}
//                   ></div>
//                   <div onClick={() => setRange("3.5")}>
//                     <div
//                       style={{
//                         height: range === "3.5" ? 20 : 15,
//                         width: range === "3.5" ? 20 : 15,
//                         backgroundColor:
//                           range === "4.0" || range === "4.5" || range === "5.0"
//                             ? "#e8e8e8"
//                             : "#ef4f5f",
//                         borderRadius: "50%",
//                       }}
//                     ></div>
//                   </div>
//                   <div
//                     style={{
//                       width: "100%",
//                       height: 4,
//                       backgroundColor:
//                         range === "4.0" || range === "4.5" || range === "5.0"
//                           ? "#e8e8e8"
//                           : "#ef4f5f",
//                     }}
//                   ></div>
//                   <div onClick={() => setRange("4.0")}>
//                     <div
//                       style={{
//                         height: range === "4.0" ? 20 : 15,
//                         width: range === "4.0" ? 20 : 15,
//                         backgroundColor:
//                           range === "4.5" || range === "5.0"
//                             ? "#e8e8e8"
//                             : "#ef4f5f",
//                         borderRadius: "50%",
//                       }}
//                     ></div>
//                   </div>
//                   <div
//                     style={{
//                       width: "100%",
//                       height: 4,
//                       backgroundColor:
//                         range === "4.5" || range === "5.0"
//                           ? "#e8e8e8"
//                           : "#ef4f5f",
//                     }}
//                   ></div>
//                   <div onClick={() => setRange("4.5")}>
//                     <div
//                       style={{
//                         height: range === "4.5" ? 20 : 15,
//                         width: range === "4.5" ? 20 : 15,
//                         backgroundColor:
//                           range === "5.0" ? "#e8e8e8" : "#ef4f5f",
//                         borderRadius: "50%",
//                       }}
//                     ></div>
//                   </div>
//                   <div
//                     style={{
//                       width: "100%",
//                       height: 4,
//                       backgroundColor: range === "5.0" ? "#e8e8e8" : "#ef4f5f",
//                     }}
//                   ></div>
//                   <div onClick={() => setRange("5.0")}>
//                     <div
//                       style={{
//                         height: range === "5.0" ? 20 : 15,
//                         width: range === "5.0" ? 20 : 15,
//                         backgroundColor: "#ef4f5f",
//                         borderRadius: "50%",
//                       }}
//                     ></div>
//                   </div>
//                 </div>

//                 <div
//                   className=""
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <small style={{ fontWeight: "500", color: "#000000de" }}>
//                     Any
//                   </small>
//                   <small style={{ fontWeight: "500", color: "#000000de" }}>
//                     3.5
//                   </small>
//                   <small style={{ fontWeight: "500", color: "#000000de" }}>
//                     4.0
//                   </small>
//                   <small style={{ fontWeight: "500", color: "#000000de" }}>
//                     4.5
//                   </small>
//                   <small style={{ fontWeight: "500", color: "#000000de" }}>
//                     5.0
//                   </small>
//                 </div>
//               </div>
//             )}
//             {val == "More filters" && (
//               <div style={{ flex: 2, paddingInline: 20 }}>
//                 <div style={{ paddingBlock: 20, position: "relative" }}>
//                   <div style={{ position: "absolute", top: "40%", left: 6 }}>
//                     <Search />
//                   </div>

//                   <input
//                     type="text"
//                     placeholder="Search here"
//                     style={{
//                       border: "1px groove #CFCFCF",
//                       width: "100%",
//                       outline: "none",
//                       borderRadius: 6,
//                       paddingInline: 30,
//                       paddingBlock: 10,
//                       fontSize: 20,
//                     }}
//                   />
//                   <div style={{ position: "absolute", top: "40%", right: 6 }}>
//                     <Cancel />
//                   </div>
//                 </div>

//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     gap: 80,
//                     height: 300,
//                     overflowY: "auto",
//                   }}
//                 >
//                   <div style={{ height: 400, overflowY: "auto" }}>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         onChange={() => handleCheckboxChange("New York")}
//                       />
//                       <p>Abruzzese</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         onChange={() => handleCheckboxChange("Aegean")}
//                       />
//                       <p>Aegean</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         onChange={() => handleCheckboxChange("Abruzzese")}
//                       />
//                       <p>Abruzzese</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         onChange={() => handleCheckboxChange("Aegean")}
//                       />
//                       <p>Aegean</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         onChange={() => handleCheckboxChange("England")}
//                       />
//                       <p>England</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Abruzzese</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Aegean</p>
//                     </div>
//                   </div>
//                   <div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Abruzzese</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Aegean</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Abruzzese</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Aegean</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Aegean</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Abruzzese</p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                       }}
//                     >
//                       <input type="checkbox" />
//                       <p>Aegean</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "end",
//               marginTop: 20,
//               paddingInline: 20,
//               alignItems: "center",
//               gap: 30,
//             }}
//           >
//             <p style={{ color: "#1C1C1C" }}>Clear All</p>
//             <button
//               style={{
//                 backgroundColor: "#ef4f5f",
//                 outline: "none",
//                 border: "none",
//                 color: "white",
//                 paddingInline: 40,
//                 borderRadius: 10,
//                 paddingBlock: 15,
//               }}
//             >
//               Apply
//             </button>
//           </div>
//         </div>
//       </Modal> */}

//       <Modal style={{  borderRadius: '3rem', }} isOpen={createModalone} onClose={() => setCreateModalone(false)}>
//         <div
//            style={{
//             backgroundColor: "white",
//             width: 600,
//             paddingInline: 10,
//             borderRadius: '2rem',
//             paddingBlock: 10,
//             display: 'flex',
            
//             flexDirection: 'column',
//             alignItems: 'center', 
//             justifyContent: 'center', 
//           }}
//         >
//           <div
//             style={{
//               paddingBlock: "5%",
//               fontWeight: "600",
//               color: "#041a68",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               borderRadius: 35,

//             }}
//           >
//              <div style={{display:'flex',justifyContent:'space-between', marginRight:'2rem'}}>     
//      <div style={{marginBottom:'0rem', flex: 1,marginLeft:'1rem',marginTop:'4px'}}>
//      <div style={{ display: 'flex', alignItems: 'center' ,marginLeft:'3rem'}}>
//      <p style={{ marginBottom:'2px'}}>
//     <FaUsers style={{ marginRight: '0.3rem', marginBottom:'-2',}} /> Max Guest:
//   </p> </div>
//       <form action="">
//       <input
//         type="number"
//         // min="1"
//         //  max="5"
//         name="amountOfMembers"
//         value={amountOfMembers}
//         onChange={onChangeHandle}
       
      
//        style={{
//                 width: "90%",
//                 height: '3.1rem',
//                 paddingBlock: "5%",
//                 outline: "none",
//                 borderRadius: 10,
//                 border: "1px groove #041a68",
//                 marginRight:'4rem',
//                 textAlign: "center",
//               }}
//               />
//                </form>
//            {/* <form >
//   <div style={{
//       width: "70%",
//       paddingBlock: "5%",
//       outline: "none",
//       borderRadius: 25,
//       border: "1px groove #041a68",
//       marginRight:'4rem',
//       marginLeft:'3rem',
//       textAlign: "center",
//       // alignItems:'center',
//       display: 'flex',
//       justifyContent: 'center'
//     }}>


      
//  <button style={{ border: 'none' ,backgroundColor:'white'}}>{`<`}</button>
//     <input
//       type="number"
//       id="qun"
//       name="qun"
//       value={qun}
     
//        style={{alignItems:'center'}}
//     />
//     <button style={{ border: 'none' ,backgroundColor:'white'}} type="button" onClick={increment} >{`>`}</button>
//   </div>
// </form> */}

      
//     </div>
//             {/* <div>
//               <RxCross2 size={25} onClick={() => setCreateModalone(true)} />
//             </div> */}
//           </div>

          
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' , flex: 1}}>
//   <div style={{ height: "50%", width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'1.2rem' }}>
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={["StaticDateTimePicker", "MobileDateTimePicker"]}>
//         <DemoItem onChange={onClickHandle} style={{ marginLeft: '2rem',border:'2px solid blue' }}>
//           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <label style={{ marginBottom: '1rem', fontWeight: "600", color: "#041a68",marginBottom:'3px' }}> <FaCalendarAlt style={{marginRight: '0.3rem',fontSize:'1rem',marginBottom:-2}}/> Date Of Food Delivery & Time:</label>
           
//             <MobileDateTimePicker
//   name='dataAndTime'
//   value={dayjs(formData.dataAndTime)}
//   onChange={onClickHandle}
//   defaultValue={dayjs("2022-04-17T15:30")}
//   sx={{
//     '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
//       borderColor: "#041a68 !important", // Set border color for default state
//       borderRadius: '10px',
//           padding:'0px 14px !important',
//       // paddingTop: '0',
//       alignItems:'center !important',
//       height: '3.4rem',
//       paddingBlock:'1px !important',
//       // padding-block: 1px;
//       // padding-inline: 2px;
//       //  paddingBlock: "5% !important",
  
//     },
//     '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
//       border: "1px groove #041a68",
//       borderRadius: '10px',
//       paddingTop: '0',
//       paddingBottom: '0',
//       // height: '2.9rem',
//     },
//     '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
//       border: "1px groove #041a68",
//       borderRadius: '10px',
//       paddingTop: '0',
//       paddingBottom: -1,
//       // height: '2.9rem',      
//     },
//   }}
  
 

// />

//           </div>
//         </DemoItem>
//       </DemoContainer>
//     </LocalizationProvider>
//   </div>
// </div></div> 

//           <div style={{ width: "100%", marginBlock: "7%" ,marginTop:'0rem'}}>
//             <p
//               style={{
//                 margin: 0,
//                 fontWeight: "600",
//                 color: "#041a68",
//                 marginBottom: 5,
                
//                 marginLeft:'15rem',
//               }}
//             >
//           <MdRestaurant style={{marginRight:'0.5rem'}}/>
//           Select Package:
//             </p>
//             <select
//               style={{
//                 width: "50%",
//                 paddingBlock: "3%",
//                 outline: "none",
//                 borderRadius: '10px',
//                 border: "1px groove #041a68",
//                 marginLeft:'10rem',
//                 textAlign:"center",
//                 cursor:'pointer'
             
                
               
//               }}
//               name='packageName'
//               value={formData.packageName}
//               onChange={onClickHandle}
//             >
//               <option  hidden disabled selected value="">
//                 Select
//               </option>
              
//               <option value="Mutton Package">Mutton Package</option>
//               <option value="Chicken Package">Chicken Package</option>
//               <option value="Fish Package">Fish Package</option>
           
//             </select>
//           </div>
         
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "center",
//             }}
//           >
//             <button
//             // onClick={() => setCreateModalone(false)}
//             // onClick={onClickHandle}
//             onClick={saveFormData}
//               style={{
//                    width:'8rem',
//                 fontSize:'1rem',
//                 border: "none",
//                 color: "#baf200",
//                 outline: "none",
//                 paddingInline: "8%",
//                 paddingBlock: "10%",
//                 borderRadius: 22,
//                 paddingLeft:'30px',
//                 paddingRight:'30px',
//                 backgroundColor: "#041a68",
//                 cursor:'pointer'
//               }}
//             >
//               Done
//             </button>
//           </div>
//         </div>
//       </Modal>
//    <Modal1 isOpen={isFilterModalOpen} onClose={() => setIsFilterModalOpen(false)}>
//   {/* Add content for the filter modal here */}
//   <div style={{ display: 'flex', paddingBlock: '10%' }}>
//     <div style={{ flex: '1', paddingRight: '1rem' }}>
//       <h2 style={{ color: 'rgba(2, 6, 12, 0.75)', fontSize: '24px', fontWeight: '800' }}>Filter</h2>
//       <hr />
//       <div style={{ color: 'rgba(2, 6, 12, 0.75)', marginLeft: '-2rem', rowGap: '20px' }}>
//         <ul>
//           <li style={{ color: 'rgba(2, 6, 12, 0.75)', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>Sort</li>
//           <li style={{ color: 'rgba(2, 6, 12, 0.75)', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>Delivery Time</li>
//           {/* Additional list items */}
//           <li style={{ color: 'rgba(2, 6, 12, 0.75)', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>Veg/NonVeg</li>
//         </ul>
//       </div>
//       <hr />
//     </div>
//     <div style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.1)', marginLeft: '1rem', padding: '0 1rem' }}>
//       {/* Content for the middle part of the modal */}
//     </div>
//   </div>
// </Modal1>


//     </Wrapper>
//   );
// };

// export default Caters;






































import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {filterOption} from '../../common/constant';
import DemoDualSlider from './DemoDualSlider';
import NavigationBar2 from "../../components/Navbars/NavigationBar2/NavigationBar2";
import FilterBox from "../../utils/OrderingUtils/FilterBox/FilterBox";
import CircleCard1 from "../../utils/Cards/CircleCards/CircleCard1/CircleCard1";
import CircleCard2 from "../../utils/Cards/CircleCards/CircleCard2/CircleCard2";
import ShowcaseCard from "../../utils/Cards/ShowcaseCard/ShowcaseCard";
import ExploreOptionsNearMe from "../../components/HomeComponents/ExploreOptionsNearMe/ExploreOptionsNearMe";
import Footer from "../../components/Footer/Footer";
import CarouselUtil from "../../utils/CarouselUtil/CarouselUtil";
import delivery1 from "/icons/delivery1.png";
import delivery2 from "/icons/delivery2.png";
import filtersIcon from "/icons/filter.png";
import deliveryTimeIcon from "/icons/delivery-time.png";
import downArrowIcon from "/icons/down-arrow.png";
import banner from "./../../../public/banners/banner.jpeg";
import Filter from "../../utils/OrderingUtils/FilterBox/filter";
import styled from 'styled-components';
import Modal1 from './Modal';

import SideMenu from "./SideMenu";
import './caters.module.css';
import { FiFilter } from 'react-icons/fi'
import thalassery from "../../asets/images/thalassery.png";
import mcdelivery from "../../asets/images/mcdelivery.png";
import a2b from "../../asets/images/a2b.png";
import kfcImg from "/icons/Brands/kfc.png";
import pizzahutImg from "/icons/Brands/pizzahut.png";
import scoopsImg from "/icons/Brands/scoops.png";
import redribbon from "../../asets/images/ribbonred.jpg";
import {
  orderOnlinePage,
  diningOutPage,
  nightLifePage,
} from "../../helpers/constants";
import css from "../ShowCase/ShowCase.module.css";
import Modal from "../../components/Modal/Modal";
import Cross from "../../asets/svg/Cross";
import Search from "../../asets/svg/Search";
import Cancel from "../../asets/svg/Cancel";
import { useNavigate } from "react-router-dom";
import CorporateCaters from "../../asets/images/corporateCatersimg.png";
import CorporateCaters2 from "../../asets/images/corporateCatersimg2.png";
import FamilyMeetup from "../../asets/images/familymeetupimg.png";
import HouseParty from "../../asets/images/housePartyimg.png";
import Marriage from "../../asets/images/marriageImg.png";
import FriendsParty from "../../asets/images/friendsmeetup.png";
import GetTheApp from "../../components/HomeComponents/GetTheApp/GetTheApp";
import ResturantCard from "../../components/ResturantCard/ResturantCard";
import { FaUsers,FaCalendarAlt,  } from "react-icons/fa";
import dayjs from "dayjs";
import { IoIosArrowDown } from "react-icons/io";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { MdRestaurant } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import Slider from "react-slick";
import cater01 from "../../asets/images/cater01.jpg";
import cater02 from "../../asets/images/cater02.jpg";
import cater03 from "../../asets/images/cater03.jpg";
import cater04 from "../../asets/images/cater04.jpg";
import cater05 from "../../asets/images/cater05.jpg";
import cater06 from "../../asets/images/cater06.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DualSlider from "./DualSlider";

const Wrapper = styled.div`
      .menu-bootom{
        cursor:pointer;
      }
      .active-menu-buttom{
       
        transform: scale(1.1);
      }
      .active-image{
        padding-left:7px;
      }
      @keyframes zoom-in-zoom-out {
        0% {
          transform: scale(1, 1);
        }
        50% {
          transform: scale(1.5, 1.5);
        }
        100% {
          transform: scale(1, 1);
        }
      }
`;

 // animation: zoom-in 2s ease-out 0.1;

let Caters = () => {

  const [cuisineOption, setCuisineOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState(''); // State to manage the selected option
  const [selectedCategory, setSelectedCategory] = useState(''); // State to manage the selected category

  const [foodType, setFoodType] = useState("");
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleFilterClick = () => {
    setIsFilterModalOpen(true);
  };

  const [amountOfMembers, setAmountOfMembers] = useState(false);

  const onChangeHandle = (event) => {
    setAmountOfMembers(parseInt(event.target.value));
  };




  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [toggleswitch, setToggleswitch] = useState(true);
  const containerRef = useRef(null);
  const [value, onChange] = useState(new Date());
  const [members, setMembers] = useState(6);

  let [toogleMenu, setToggleMenu] = useState(true);
  const [modalId, setModalId] = useState(0);
  const [val, setVal] = useState("Sort by");
  const [restaurantImages, setRestaurantImages] = useState({});
  const [items, setItems] = useState([]);
  console.log('items:-',items);
  // const [ival, setIval] = useState(0);

  const urlParams = new URLSearchParams(location.search);
  const page = urlParams.get("page");
  const [isFilterPageOpen, setIsFilterPageOpen] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [createModalone, setCreateModalone] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Popularity");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);
  const [range, setRange] = useState("Any");
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const [leftSliderImages, setLeftSliderImages] = useState([]);
  console.log('leftSliderImages:-',leftSliderImages);
  const [productData, setProductData] = useState([]);
  const [productData2, setProductData2] = useState([]);
  const [formData, setFormData] = useState({
    amountOfMembers: 6,
    // data: '',
    // time:'',
    dataAndTime:'',
    packageName: ''
  });

  console.log('formData:-',formData);

  const onClickHandle = (e) =>{
    console.log('e:-',e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // localStorage.setItem('formData', JSON.stringify(formData));
    // setCreateModalone(false)
  }

  const saveFormData = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    setCreateModalone(false)
  }

  useEffect(() => {
    fetch("https://gezte.com/api/fetch_short_package_name.php")
      .then((response) => response.json())
      .then((result) => {
        const first12Items = result.data.slice(0, 11);
        const second12Items = result.data.slice(12, 23);

        const leftSliderContent = first12Items.map((item) => ({
          imageUrl: `https://gezte.com/api/${item.image}`,
          packageShortName: item.package_short_name,
        }));

        const rightSliderContent = second12Items.map((item) => ({
          imageUrl: `https://gezte.com/api/${item.image}`,
          packageFullName: item.package_full_name,
        }));

        setLeftSliderImages(leftSliderContent);
        setRightSliderImages(rightSliderContent);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  useEffect(() => {
    fetch("https://gezte.com/api/fetch_full_name_package.php")
      .then((response) => response.json())
      .then((result) => {
        const first12Items = result.data.slice(0, 11);
        const second12Items = result.data.slice(12, 23);

        const productData = first12Items.map((item) => ({
          imageUrl: `https://gezte.com/api/${item.image}`,
          packageFullName: item.package_full_name,
        }));

        const rightSliderContent = second12Items.map((item) => ({
          imageUrl: `https://gezte.com/api/${item.image}`,
          packageFullName: item.package_full_name,
        }));

        setProductData(productData);
        setProductData2(rightSliderContent);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);



  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1
  // };
  const handleNext = () => {
    slider1Ref.current.slickNext();
    slider2Ref.current.slickNext();
  };

  const handlePrev = () => {
    slider1Ref.current.slickPrev();
    slider2Ref.current.slickPrev();
  };

  

  // const Setting2= {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 6,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleCuisineOptionChange = (event) => { // Changed function name
    setCuisineOption(event.target.value);
  };

  const handleFoodTypeChange = (event) => { // Function to handle changes in food type
    setFoodType(event.target.value);
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 10,
    // background: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
  };

  const overlayStyle1 = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 10,
    // background: "rgba(0, 0, 0, 0.3)", // Adjust the opacity as needed
  };

  
  const images = [{image:cater01, meal:'chicken meal'}, {image:cater02, meal:'full meal'}, {image:cater03, meal:'North Indian'}, {image:cater04, meal:'South Indian'}, {image:cater05, meal:'South Indian'}, {image:cater04, meal:'South Indian'}, {image:cater05, meal:'South Indian'} ]

  const handleCheckboxChange = (city) => {
    const updatedCities = selectedCities.includes(city)
      ? selectedCities.filter((selectedCity) => selectedCity !== city)
      : [...selectedCities, city];

    setSelectedCities(updatedCities);
  };

  const handleFilterBoxClick = () => {
    setIsFilterPageOpen(!isFilterPageOpen);
  };

  // <Navbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} />

  let [isActive, setIsActive] = useState({
    delivery: page === orderOnlinePage,
    dinning: page === diningOutPage,
    nightlife: page === nightLifePage,
  });
  
  let filterBoxes2;


  let filters2 = {
    delivery: [
     
      { text: "Sort By" },
      { text: "Fast Delivery" },
      { text: "Veg" },
      { text: "Rs 100-Rs 250" },
      { text: "Rs 250+" },
      { text: "NonVeg" },
      { text: "Rated 4+" },
     
    ],
  };


filterBoxes2 = filters2.delivery.map((filter, index) => (
  <div key={index} style={{borderRadius:'18px', backgroundColor:'rgb(255, 255, 255)', padding:'9px ',paddingLeft:'12px', paddingRight:'12px', width:'auto',border: '1px solid rgb(226, 226, 231)', margin: '5px', padding: '5px', display: 'inline-block', boxShadow:'rgba(2, 6, 12, 0.04) 0px 2px 12px'}}

  >
    {filter.text === "Filter" ? (
      <>
        {filter.text}
        <FiFilter style={{ marginLeft: '5px' }} /> {/* Use the Filter icon */}
      </>
    ) : filter.text === "Sort By" ? (
      <>
        {filter.text}
        <IoIosArrowDown  style={{ marginLeft: '5px' }} /> {/* Use the Truck icon */}

      </>
    )
     : (
      filter.text
    )}
  </div>
));









  
  let filterBoxes;

  let filters = {
    delivery: [
      { text: "Filter" },
     
    ],
  };


filterBoxes = filters.delivery.map((filter, index) => (
  <div key={index} style={{borderRadius:'18px', backgroundColor:'rgb(255, 255, 255)', padding:'9px ',paddingLeft:'12px', paddingRight:'12px', width:'auto',border: '1px solid rgb(226, 226, 231)', margin: '9px', padding: '5px', display: 'inline-block', boxShadow:'rgba(2, 6, 12, 0.04) 0px 2px 12px'}}
onClick={filter.text==='Filter'? handleFilterClick:null}
  >
    {filter.text === "Filter" ? (
      <>
        {filter.text}
        <FiFilter style={{ marginLeft: '5px' }} /> {/* Use the Filter icon */}
      </>
    ) : filter.text === "Sort By" ? (
      <>
        {filter.text}
        <IoIosArrowDown  style={{ marginLeft: '5px' }} /> {/* Use the Truck icon */}

      </>
    )
     : (
      filter.text
    )}
  </div>
));

  


  if (page !== orderOnlinePage || page === orderOnlinePage) {
    filterBoxes = filters?.delivery?.map((val, id) => {
      return (
        <div key={id}>
          <FilterBox
            leftIcon={val?.leftIcon ?? null}
            rightIcon={val?.rightIcon ?? null}
            text={val.text}
            onClick={() => {
              setModalId(id);
              setCreateModal(true);
              setVal(
                id === 0
                  ? "Sort by"
                  : id === 1
                  ? "Cuisines"
                  : id === 2
                  ? "Rating"
                  : id === 3
                  ? "More filters"
                  : "Sort by"
              );
            }}
          />
        </div>
      );
    });
  } else if (page === diningOutPage) {
    filterBoxes = filters?.dinning?.map((val, id) => {
      return (
        <div key={id}>
          <FilterBox
            leftIcon={val?.leftIcon ?? null}
            rightIcon={val?.rightIcon ?? null}
            text={val.text}
          />
        </div>
      );
    });
  } else if (page === nightLifePage) {
    filterBoxes = filters?.nightLife?.map((val, id) => {
      return (
        <div key={id}>
          <FilterBox
            leftIcon={val?.leftIcon ?? null}
            rightIcon={val?.rightIcon ?? null}
            text={val.text}
          />
        </div>
      );
    });
  }



  const brandsCardScroll = [
    {
      name: "Thalassery",
      imgSrc: thalassery,
      time: "45",
    },
    {
      name: "Mc Delivery",
      imgSrc: mcdelivery,
      time: "35",
    },
    {
      name: "A2B",
      imgSrc: a2b,
      time: "49",
    },
    {
      name: "KFC",
      imgSrc: kfcImg,
      time: "19",
    },
    {
      name: "Pizza Hut",
      imgSrc: pizzahutImg,
      time: "22",
    },
    {
      name: "Scoops",
      imgSrc: scoopsImg,
      time: "33",
    },
  ];

  useEffect(() => {
    if (currentPath === "/caters") {
      setCreateModalone(true);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gezte.com/api/businesswise_service_provider_details.php?business_topics=%27catering%27"
        );

        console.log("Response Data", response.data.data);
        setItems(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    // <div className={css.outerDiv}>
    
    <Wrapper>
      <NavigationBar2 />
      <div className={css.innerDiv}>
        {/* <div
          className={css.breadcrumb}
          
          style={{ color: "var(--secondary-color)",paddingLeft:"10%" }}
        >
          Home / India / Bengaluru / Bangalore City / Indira Nagar
        </div> */}
      </div>
      <div
        ref={containerRef}
        tabIndex={0}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "3%",
          outline: "none",
        }}
      >
        <img
          src={banner}
          style={{ marginTop: 20, height: "20%", width: "70%" }}
        />
      </div>
      <div style={{}}>
        <div className={css.innerDiv4Title} style={{ marginLeft: "15%" }}>
          Filters
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            // marginBlock: 20,
            // marginInline: "15%",
            backgroundColor: "#272e3a",
            justifyContent: "center",
            paddingBlock: "3%",
            marginBottom:20
          }}
        >
          <div style={{ borderRadius: 10, position: "relative" }}>
            <img
              src={CorporateCaters}
              style={{
                borderRadius: 10,
                display: "block",
                height: "100%",
                width: "100%",
              }}
            />
            <div
              style={{
                ...overlayStyle1,
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                color: "#fff", // Text color
                textAlign: "center",
              }}
            >
              <p
                style={{ color: "white", fontFamily: "dexaSemi", fontSize: 22 }}
              >
                Corporate Caterers
              </p>
            </div>
          </div>

          <div style={{ borderRadius: 10, position: "relative" }}>
            <img
              src={FamilyMeetup}
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
              <p
                style={{ color: "white", fontFamily: "dexaSemi", fontSize: 22 }}
              >
                Family Meetup
              </p>
            </div>
          </div>

          <div style={{ borderRadius: 10, position: "relative" }}>
            <img
              src={HouseParty}
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
              <p
                style={{ color: "white", fontFamily: "dexaSemi", fontSize: 22 }}
              >
                Friends Party
              </p>
            </div>
          </div>

          <div style={{ borderRadius: 10, position: "relative" }}>
            <img
              src={Marriage}
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
              <p
                style={{ color: "white", fontFamily: "dexaSemi", fontSize: 22 }}
              >
                Marriage
              </p>
            </div>
          </div>
          <div style={{ borderRadius: 10, position: "relative" }}>
            <img
              src={FriendsParty}
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
              <p
                style={{ color: "white", fontFamily: "dexaSemi", fontSize: 22 }}
              >
                House Party
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",

          marginBottom: 20,
        }}
      >
        <div
          style={{
            borderBottom: currentPath === "/caters" ? "4px solid #e42b88" : "",
            paddingBottom: currentPath === "/caters" ? 10 : "",
          }}
        >
          <button
            onClick={() => navigate("/caters")}
            style={{
              backgroundColor:
                currentPath === "/caters"
                  ? "var(--background-color)"
                  : "#696969", // Set different colors based on the current path
              color: "var(--text-color)",
              outline: "none",
              border: "none",
              width: "100%",
              borderRadius: 30,
              paddingBlock: 15,
              fontWeight: 600,
              fontSize: 18,
              // paddingInline: 50,
              width: 250,
            }}
          >
            Caterers
          </button>
        </div>

        <div
          style={{
            borderBottom:
              currentPath === "/resturants" ? "4px solid black" : "",
            paddingBottom: currentPath === "/resturants" ? 10 : "",
          }}
        >
          <button
            onClick={() => navigate("/resturants")}
            style={{
              backgroundColor:
                currentPath === "/resturants"
                  ? "var(--background-color)"
                  : "#696969", // Set different colors based on the current path
              color: "white",
              outline: "none",
              border: "none",
              width: "100%",
              borderRadius: 30,
              paddingBlock: 15,
              fontWeight: 600,
              fontSize: 18,
              // paddingInline: 50,
              width: 250,
            }}
          >
            Resturants
          </button>
        </div>

        <div
          style={{
            borderBottom: currentPath === "/corporate" ? "4px solid #e42b88" : "",
            paddingBottom: currentPath === "/corporate" ? 10 : "",
          }}
        >
          <button
            onClick={() => navigate("/corporate")}
            style={{
              backgroundColor:
                currentPath === "/corporate"
                  ? "var(--background-color)"
                  : "#696969", // Set different colors based on the current path
              color: "white",
              outline: "none",
              border: "none",
              width: "100%",
              borderRadius: 30,
              paddingBlock: 15,
              fontWeight: 600,
              fontSize: 18,
              // paddingInline: 50,
              width: 250,
            }}
          >
            Corporate
          </button>
        </div>

        <div
          style={{
            borderBottom: currentPath === "/geztemart" ? "4px solid black" : "",
            paddingBottom: currentPath === "/geztemart" ? 10 : "",
          }}
        >
          <button
            onClick={() => navigate("/geztemart")}
            style={{
              backgroundColor:
                currentPath === "/geztemart"
                  ? "var(--background-color)"
                  : "#696969", // Set different colors based on the current path
              color: "white",
              outline: "none",
              border: "none",
              width: "100%",
              borderRadius: 30,
              paddingBlock: 15,
              fontWeight: 600,
              fontSize: 18,
              // paddingInline: 50,
              width: 250,
            }}
          >
            Gezte Mart
          </button>
        </div>
      </div>
<div
        className={""}
        style={{ backgroundColor: "rgb(39, 46, 58)", paddingBlock: "5%" , paddingLeft:'68px'}}
      >
        <div className={css.w7} style={{ width:'95%' }}> 
          <div className={css.rollerCarosuel} style={{flexDirection:'column'}}>
            <CarouselUtil>
              {productData?.map((val, id) => {
                return (
                  <div className={css.cardW} key={id}>
                    <CircleCard2
                      imgSrc={val.imageUrl}
                      name={val.packageFullName}
                      // time={val.time}
                      productData
                    />
                  </div>
                );
              })}
              
            </CarouselUtil>

            <CarouselUtil>
              {productData2?.map((val, id) => {
                return (
                  <div className={css.cardW} key={id}>
                    <CircleCard2
                      imgSrc={val.imageUrl}
                      name={val.packageFullName}
                      // time={val.time}
                      productData
                    />
                  </div>
                );
              })}
              
            </CarouselUtil>
            
          </div>
        </div>
      </div>

  {/* Brand Slider */}
      <div
        className={""}
        style={{ backgroundColor: "#ddd", paddingBlock: "5%" }}
      >
        <div className={css.w7} style={{width:'89%'}}>
          <div className={css.innerDiv5Title}>Top brands for you</div>
          <div className={css.rollerCarosuel} style={{marginLeft:'31px'}}>
            <CarouselUtil>
              {brandsCardScroll?.map((val, id) => {
                return (
                  <div className={css.cardW} key={id}>
                    <CircleCard2
                      imgSrc={val.imgSrc}
                      name={val.name}
                      time={val.time}
                    />
                  </div>
                );
              })}
            </CarouselUtil>
          </div>
        </div>
      </div>

      <div
        className={""}
        style={{ backgroundColor: "rgb(248, 248, 248)", paddingBlock: "5%" }}
      >
        <div className={css.w7} style={{width:'89%'}}>
        <div className={css.innerDiv5Title}>Inspiration for your first order</div>
        
          <div className={css.rollerCarosuel} style={{marginLeft:'31px'}}>
            <CarouselUtil>
              {leftSliderImages?.map((val, id) => {
                return (
                  <div className={css.cardW} key={id}>
                    <CircleCard2
                      imgSrc={val.imageUrl}
                      name={val.packageShortName}
                      // time={val.time}
                    />
                  </div>
                );
              })}
            </CarouselUtil>
          </div>
        </div>
      </div>
      <div className={""} style={{ paddingInline: 30, paddingBlock: 30 }}>
        <div className={"css.w7"}>
          <div
            className={css.innerDiv6Title}
            style={{
              fontFamily: "DexaSemi",
              color: "var(--primary-color)",
              paddingInline: "10%",
            }}
          >
            Nightlife Restaurants in Bangalore
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginInline: "10%",
              marginTop: "1%",
              gap: "2%",
            }}
          >
            <div
              onClick={() => setToggleswitch(!toggleswitch)}
              style={{
                width: 55,
                height: 30,
                backgroundColor: toggleswitch ? "red" : "green",
                borderRadius: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: toggleswitch ? "flex-start" : "flex-end",
                paddingInline: 5,
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: "white",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "dexaSemi",
                  color: toggleswitch ? "red" : "green",
                }}
              >
                {toggleswitch ? "NON VEG" : "VEG"}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              marginInline: "10%",
            }}
          >
            {filterBoxes}
            {filterBoxes2}
          </div>

          
          <div
            className={"css.innerDiv6Body"}
            style={{ display: "flex", flexDirection: "row", gap: 20 }}
          >
            <SideMenu/>

            <div className={css.innerDiv6Body} style={{ flex: 9.5 }}>
                {items.map((restaurant, id) => (
               
               <ResturantCard

               key={id}
               name ={restaurantImages}
               {...restaurant.restaurant_details}
               aboutUs={restaurant.restaurant_details.about_us} // Pass about_us as a prop
             />
             ))}
             {/* <h1>hgvgvghgvhg</h1> */}
            </div>
          </div> 
        </div>
      </div>

      <ExploreOptionsNearMe />
      <div>
        <GetTheApp />
      </div>

      <Footer />

      <Modal isOpen={createModal} onClose={() => setCreateModal(false)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // gridTemplateColumns: "repeat(2, 1fr)",
            // gridGap: "4%",
            // overflow: "hidden",
            width: 700,
            height: 600,
            overflowY: "auto",
            marginTop: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingInline: 10,
              margin: 0,

              borderBottom: "1px solid grey",
            }}
          >
            <h2>Filters</h2>
            <div onClick={() => setCreateModal(false)}>
              <Cross />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottom: "1px solid grey",
            }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",

                  fontWeight: "600",
                  fontSize: 18,
                  backgroundColor: "#f8f8f8",
                  height: 420,
                }}
              >
                <div
                  onClick={() => setVal("Sort by")}
                  style={{
                    paddingLeft: val === "Sort by" ? 15 : 20,
                    backgroundColor: val === "Sort by" ? "white" : "",
                    borderLeft: val === "Sort by" ? "5px solid #ef4f5f " : "",
                    height: "6rem",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ margin: 0, cursor: "pointer" }}>Sort by</p>
                  <p style={{ margin: 0, fontSize: 15, color: "#ef4f5f" }}>
                    {selectedOption}
                  </p>
                </div>
                <div
                  onClick={() => setVal("DeliveryTime")}
                  style={{
                    paddingLeft: val === "DeliveryTime" ? 15 : 20,
                    backgroundColor: val === "DeliveryTime" ? "white" : "",
                    borderLeft: val === "DeliveryTime" ? "5px solid #ef4f5f " : "",
                    height: "6rem",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ margin: 0, cursor: "pointer" }}>Delivery Time</p>
                  {selectedCities.length >= 1 && (
                    <p style={{ margin: 0, fontSize: 15, color: "#ef4f5f" }}>
                      {selectedCities.length} Selected
                    </p>
                  )}

                  {/* <p style={{ margin: 0, fontSize: 15, color: "#ef4f5f" }}>
                    Selected cities: {selectedCities.join(", ")}
                  </p> */}
                </div>
                {/* <div
                  onClick={() => setVal("Rating")}
                  style={{
                    paddingLeft: val === "Rating" ? 15 : 20,
                    backgroundColor: val === "Rating" ? "white" : "",
                    borderLeft: val === "Rating" ? "5px solid #ef4f5f " : "",
                    height: "6rem",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ margin: 0, cursor: "pointer" }}>Rating</p>
                </div> */}
                <div
                  onClick={() => setVal("vegNonveg")}
                  style={{
                    paddingLeft: val === "vegNonveg" ? 15 : 20,
                    backgroundColor: val === "vegNonveg" ? "white" : "",
                    borderLeft:
                      val === "vegNonveg" ? "5px solid #ef4f5f " : "",
                    height: "6rem",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ margin: 0, cursor: "pointer" }}>Veg/Non-Veg</p>
                </div>
              </div>
            </div>

            {val == "Sort by" && (
              <div style={{ flex: 2, paddingInline: 20 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="radio"
                    value="Popularity"
                    checked={selectedOption === "Popularity"}
                    onChange={handleOptionChange}
                  />
                  <p>Popularity</p>
                </div>
                
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="radio"
                    value="DeliveryTime"
                    checked={selectedOption === "Delivery Time"}
                    onChange={handleOptionChange}
                  />
                  <p>Delivery Time</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="radio"
                    value="Cost: Low to High"
                    checked={selectedOption === "Cost: Low to High"}
                    onChange={handleOptionChange}
                  />
                  <p>Cost: Low to High</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="radio"
                    value="Cost: High to Low"
                    checked={selectedOption === "Cost: High to Low"}
                    onChange={handleOptionChange}
                  />
                  <p>Cost: High to Low</p>
                </div>
              </div>
            )}
     {val === "DeliveryTime" && (
        <div style={{ flex: 2, paddingInline: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <input
              type="radio"
              value="YourCuisineOption"
              checked={cuisineOption === "YourCuisineOption"}
              onChange={handleCuisineOptionChange}
            />
            <p>Fast Delivery</p>
          </div>
        </div>
      )}

            {val == "Rating" && (
              <div style={{ flex: 2, paddingInline: 20 }}>
                <small style={{ color: "#696969", fontSize: 12 }}>Rating</small>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p
                    style={{
                      margin: 0,
                      color: "#1c1c1c",
                      fontWeight: "600",
                      fontSize: 20,
                    }}
                  >
                    {range}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      color: "#1c1c1c",
                      fontWeight: "600",
                      fontSize: 20,
                    }}
                  >
                    {range === "3.5" || range === "4.0" || range === "4.5"
                      ? " +"
                      : ""}
                  </p>
                </div>
                <div
                  className=""
                  style={{
                    marginTop: "40%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <div onClick={() => setRange("Any")}>
                    <div
                      style={{
                        height: range === "Any" ? 20 : 15,
                        width: range === "Any" ? 20 : 15,
                        backgroundColor:
                          range === "3.5" ||
                          range === "4.0" ||
                          range === "4.5" ||
                          range === "5.0"
                            ? "#e8e8e8"
                            : "#ef4f5f",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      height: 4,
                      backgroundColor:
                        range === "3.5" ||
                        range === "4.0" ||
                        range === "4.5" ||
                        range === "5.0"
                          ? "#e8e8e8"
                          : "#ef4f5f",
                    }}
                  ></div>
                  <div onClick={() => setRange("3.5")}>
                    <div
                      style={{
                        height: range === "3.5" ? 20 : 15,
                        width: range === "3.5" ? 20 : 15,
                        backgroundColor:
                          range === "4.0" || range === "4.5" || range === "5.0"
                            ? "#e8e8e8"
                            : "#ef4f5f",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: 4,
                      backgroundColor:
                        range === "4.0" || range === "4.5" || range === "5.0"
                          ? "#e8e8e8"
                          : "#ef4f5f",
                    }}
                  ></div>
                  <div onClick={() => setRange("4.0")}>
                    <div
                      style={{
                        height: range === "4.0" ? 20 : 15,
                        width: range === "4.0" ? 20 : 15,
                        backgroundColor:
                          range === "4.5" || range === "5.0"
                            ? "#e8e8e8"
                            : "#ef4f5f",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: 4,
                      backgroundColor:
                        range === "4.5" || range === "5.0"
                          ? "#e8e8e8"
                          : "#ef4f5f",
                    }}
                  ></div>
                  <div onClick={() => setRange("4.5")}>
                    <div
                      style={{
                        height: range === "4.5" ? 20 : 15,
                        width: range === "4.5" ? 20 : 15,
                        backgroundColor:
                          range === "5.0" ? "#e8e8e8" : "#ef4f5f",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: 4,
                      backgroundColor: range === "5.0" ? "#e8e8e8" : "#ef4f5f",
                    }}
                  ></div>
                  <div onClick={() => setRange("5.0")}>
                    <div
                      style={{
                        height: range === "5.0" ? 20 : 15,
                        width: range === "5.0" ? 20 : 15,
                        backgroundColor: "#ef4f5f",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  className=""
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <small style={{ fontWeight: "500", color: "#000000de" }}>
                    Any
                  </small>
                  <small style={{ fontWeight: "500", color: "#000000de" }}>
                    3.5
                  </small>
                  <small style={{ fontWeight: "500", color: "#000000de" }}>
                    4.0
                  </small>
                  <small style={{ fontWeight: "500", color: "#000000de" }}>
                    4.5
                  </small>
                  <small style={{ fontWeight: "500", color: "#000000de" }}>
                    5.0
                  </small>
                </div>
              </div>
            )}
            {val == "vegNonveg" && (
              <div style={{ flex: 2, paddingInline: 20 }}>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <input
              type="radio"
              value="Veg"
              checked={foodType === "Veg"}
              onChange={handleFoodTypeChange}
            />
            <p>Veg</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <input
              type="radio"
              value="Non-Veg"
              checked={foodType === "Non-Veg"}
              onChange={handleFoodTypeChange}
            />
            <p>Non-Veg</p>
        
        </div>

              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: 20,
              paddingInline: 20,
              alignItems: "center",
              gap: 30,
            }}
          >
            <p style={{ color: "#1C1C1C" }}>Clear All</p>
            <button
              style={{
                backgroundColor: "#ef4f5f",
                outline: "none",
                border: "none",
                color: "white",
                paddingInline: 40,
                borderRadius: 10,
                paddingBlock: 15,
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </Modal>

      <Modal style={{  borderRadius: '3rem', }} isOpen={createModalone} onClose={() => setCreateModalone(false)}>
        <div
           style={{
            backgroundColor: "white",
            width: 600,
            paddingInline: 10,
            borderRadius: '2rem',
            paddingBlock: 10,
            display: 'flex',
            
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
          }}
        >
          <div
            style={{
              paddingBlock: "5%",
              fontWeight: "600",
              color: "#041a68",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 35,

            }}
          >
             <div style={{display:'flex',justifyContent:'space-between', marginRight:'2rem'}}>     
     <div style={{marginBottom:'0rem', flex: 1,marginLeft:'1rem',marginTop:'4px'}}>
     <div style={{ display: 'flex', alignItems: 'center' ,marginLeft:'3rem'}}>
     <p style={{color:'#4f026e', marginBottom:'2px'}}>
    <FaUsers style={{ marginRight: '0.3rem', marginBottom:'-2',}} /> Max Guest:
  </p> </div>
      <form action="">
      <input
        type="number"
        // min="1"
        //  max="5"
        name="amountOfMembers"
        value={amountOfMembers}
        onChange={onChangeHandle}
       
      
       style={{
                width: "90%",
                height: '3.1rem',
                paddingBlock: "5%",
                outline: "none",
                borderRadius: 10,
                border: "1px groove #d01bae",
                marginRight:'4rem',
                textAlign: "center",
              }}
              />
               </form>
           {/* <form >
  <div style={{
      width: "70%",
      paddingBlock: "5%",
      outline: "none",
      borderRadius: 25,
      border: "1px groove #041a68",
      marginRight:'4rem',
      marginLeft:'3rem',
      textAlign: "center",
      // alignItems:'center',
      display: 'flex',
      justifyContent: 'center'
    }}>


      
 <button style={{ border: 'none' ,backgroundColor:'white'}}>{`<`}</button>
    <input
      type="number"
      id="qun"
      name="qun"
      value={qun}
     
       style={{alignItems:'center'}}
    />
    <button style={{ border: 'none' ,backgroundColor:'white'}} type="button" onClick={increment} >{`>`}</button>
  </div>
</form> */}

      
    </div>
            {/* <div>
              <RxCross2 size={25} onClick={() => setCreateModalone(true)} />
            </div> */}
          </div>

          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' , flex: 1}}>
  <div style={{ height: "50%", width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'1.2rem' }}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["StaticDateTimePicker", "MobileDateTimePicker"]}>
        <DemoItem onChange={onClickHandle} style={{ marginLeft: '2rem',border:'2px solid blue' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label style={{ marginBottom: '1rem', fontWeight: "600", color: "#4f026e",marginBottom:'3px' }}> <FaCalendarAlt style={{marginRight: '0.3rem',fontSize:'1rem',marginBottom:-2}}/> Date Of Food Delivery & Time:</label>
           
            <MobileDateTimePicker
  name='dataAndTime'
  value={dayjs(formData.dataAndTime)}
  onChange={onClickHandle}
  defaultValue={dayjs("2022-04-17T15:30")}
  sx={{
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: "#d01bae !important", // Set border color for default state
      borderRadius: '10px',
          padding:'0px 14px !important',
      // paddingTop: '0',
      alignItems:'center !important',
      height: '3.4rem',
      paddingBlock:'1px !important',
      // padding-block: 1px;
      // padding-inline: 2px;
      //  paddingBlock: "5% !important",
  
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      border: "1px groove #041a68",
      borderRadius: '10px',
      paddingTop: '0',
      paddingBottom: '0',
      // height: '2.9rem',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: "1px groove #041a68",
      borderRadius: '10px',
      paddingTop: '0',
      paddingBottom: -1,
      // height: '2.9rem',      
    },
  }}
  
 

/>

          </div>
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  </div>
</div></div> 

          <div style={{ width: "100%", marginBlock: "7%" ,marginTop:'0rem'}}>
            <p
              style={{
                margin: 0,
                fontWeight: "600",
                color: "#4f026e",
                marginBottom: 5,
                
                marginLeft:'15rem',
              }}
            >
          <MdRestaurant style={{marginRight:'0.5rem', color:'4f026e'}}/>
          Select Package:
            </p>
            <select
              style={{
                width: "50%",
                paddingBlock: "3%",
                outline: "none",
                borderRadius: '10px',
                border: "1px groove #d01bae",
                marginLeft:'10rem',
                textAlign:"center",
                cursor:'pointer'
             
                
               
              }}
              name='packageName'
              value={formData.packageName}
              onChange={onClickHandle}
            >
              <option  hidden disabled selected value="">
                Select
              </option>
              
              <option value="Mutton Package">Mutton Package</option>
              <option value="Chicken Package">Chicken Package</option>
              <option value="Fish Package">Fish Package</option>
           
            </select>
          </div>
         
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <button
            // onClick={() => setCreateModalone(false)}
            // onClick={onClickHandle}
            onClick={saveFormData}
              style={{
                   width:'8rem',
                fontSize:'1rem',
                border: "none",
                color: "white",
                outline: "none",
                paddingInline: "8%",
                paddingBlock: "10%",
                borderRadius: 22,
                paddingLeft:'30px',
                paddingRight:'30px',
                backgroundColor: "#4f026e",
                cursor:'pointer'
              }}
            >
              Done
            </button>
          </div>
        </div>
      </Modal>
   <Modal1 isOpen={isFilterModalOpen} onClose={() => setIsFilterModalOpen(false)}>
  {/* Add content for the filter modal here */}
  <div style={{ display: 'flex', paddingBlock: '10%' }}>
    <div style={{ flex: '1', paddingRight: '1rem' }}>
      <h2 style={{ color: 'rgba(2, 6, 12, 0.75)', fontSize: '24px', fontWeight: '800' }}>Filter</h2>
      <hr />
      <div style={{ color: 'rgba(2, 6, 12, 0.75)', marginLeft: '-2rem', rowGap: '20px' }}>
        <ul>
          <li style={{ color: 'rgba(2, 6, 12, 0.75)', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>Sort</li>
          <li style={{ color: 'rgba(2, 6, 12, 0.75)', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>Delivery Time</li>
          {/* Additional list items */}
          <li style={{ color: 'rgba(2, 6, 12, 0.75)', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>Veg/NonVeg</li>
        </ul>
      </div>
      <hr />
    </div>
    <div style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.1)', marginLeft: '1rem', padding: '0 1rem' }}>
      {/* Content for the middle part of the modal */}
    </div>
  </div>
</Modal1>


    </Wrapper>
  );
};

export default Caters;


