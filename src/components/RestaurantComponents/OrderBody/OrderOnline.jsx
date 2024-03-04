// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AiTwotoneDelete } from "react-icons/ai";
// import StyledButton from '../../../components/ButtonComponents/styleButton';
// import PackageCard from "../../PackageCard/PackageCard";
// import imgres from "../../../asets/images/resturantimg.png";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useLocation } from "react-router-dom";
// import Ratings from "../../../asets/svg/Ratings";
// import './OrderOnlineStyle.css';

// const OrderOnline = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   console.log('location:-', location.state.id);
//   const currentPath = location.pathname;
//   const containerRef = useRef(null);
//   const [packval, setPackVal] = useState();
//   console.log('packval:-', packval);
//   const [filterval, setFilterVal] = useState(null);
//   const [details, setDetails] = useState([]);
//   console.log('details:-', details);
//   const [packageId, setPackageId] = useState();
//   const [productDivision, setProductDivision] = useState();
//   const [subpackDetails, setSubpackDetails] = useState([]);
//   console.log('subpackDetails:-', subpackDetails);
//   const [subpacitemkDetails, setSubpackitemDetails] = useState([]);
//   // const [addFoodItems, setAddFoodItems] = useState({'main course':[]});
//   const [addFoodItems, setAddFoodItems] = useState({});
//   console.log('addFoodItems:-',addFoodItems);
//   const [foodItemsId, setFoodItemsId] = useState();
//   const [superId, setSuperId] = useState();
//   const [stylePage, setStylePage] = useState(false);
//   const [foodItemsDetails, setFoodItemsDetails] = useState();

//   const addToCartHandle = () => {
//     localStorage.setItem('packagePrice', foodItemsDetails.total_price);
//     navigate("/cart")
//   }

 
//   const onClickFoodItem = (image, item, id, superId, sub_package_name) => {
//     setStylePage(true);
//     setFoodItemsId(id);
//     setSuperId(superId);

//     if (!addFoodItems[sub_package_name]?.find(foodItem => foodItem.id === id)) {
//       const newItem = { item: item, image: image, id: id, action: true };
//       setAddFoodItems(prevState => ({
//         ...prevState,
//         [sub_package_name]: [...(prevState[sub_package_name] || []), newItem]
//       }));
//     }
//   };

//   // const onClickRemoveFoodItem = (id) => {
//   //   const updatedFoodItems = addFoodItems.filter(item => item.id !== id);
//   //   setAddFoodItems(updatedFoodItems);
//   // }

//   const { id } = useParams();

//   console.log('id:-', id);

//   const subpackage = [
//     "Main Course",
//     "Desert",
//     "Staters",
//     "Bewrages",
//     "Welcome Drinks",
//   ];

//   const getDetailsByid = async () => {
//     try {
//       const result = await axios.get(
//         `https://gezte.com/api/get_restaurant_all_package_user.php?restaurant_id=${location.state.id}`
//       );
//       setDetails(result.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getProductDataByDivision = async () => {
//     try {
//       const result = await axios.get(
//         `https://gezte.com/api/fetch_sub_package.php`
//       );
//       setProductDivision(result.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getDetailsByid();
//     getProductDataByDivision();
//   }, []);

//   const getMainPackageDetail = async () => {
//     try {
//       const result = await axios.get(
//         `https://gezte.com/api/fetch_restaurant_package_user.php?package_id=${packageId}&restaurant_id=${location.state.id}`
//       );
//       console.log('result:-', result);
//       setFoodItemsDetails(result.data);
//       setSubpackDetails(result.data.sub_package_names);

//       const subItems = result.data.sub_package_names.map((item, i) => item);
//       console.log('subItems:-', subItems);
//       setSubpackitemDetails(subItems);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getDetailsByid();
//   }, []);

//   useEffect(() => {
//     getMainPackageDetail();
//   }, [packageId]);

//   useEffect(() => {
//     // Check if the current route matches the desired route
//     const isDesiredRoute = location.pathname === `/resturant/${id}`;

//     // Focus on the container if it's the desired route
//     if (isDesiredRoute && containerRef.current) {
//       containerRef.current.focus();
//     }
//   }, [location.pathname]);

//   return (
//     <div style={{ display: "flex", flexDirection: "row" }}>
//       <div style={{ flex: 2, borderRight: "1px groove #efefef", width: '30%' }}>
//         {details.map((item, i) => (
//           <div
//             onClick={() => {
//               { addFoodItems.length > 0 ? '' : setPackVal(i) };
//               { addFoodItems.length > 0 ? '' : setPackageId(item.package_id) };
//             }}
//             key={i}
//             style={{
//               borderBottom:
//                 packval === i ? "2px solid #fc2260" : "1px solid grey",
//               borderRight:
//                 packval === i ? "2px solid #fc2260" : "1px solid grey",
//             }}
//           >
//             <p
//               style={{
//                 color: packval == i ? "#fc2260" : "#041a68",
//                 fontWeight: 700,
//               }}
//             >
//               {item.package_name}
//             </p>
//           </div>
//         ))}
//       </div>

//       <div className='productPage'>
//         <div
//           style={{
//             backgroundColor: "rgb(195, 234, 239)",
//             paddingTop: '10px',
//             paddingBottom: '10px',
//             overflow: 'scroll'
//           }}
//         >
//           <div
//             style={{
//               width: '4297px'
//             }}
//           >
//             {productDivision !== undefined && productDivision.map((item, i) => {
//               return <StyledButton btnName={item.sub_package_name} />
//             })}
//           </div>
//         </div>

//         <div
//           style={{
//             flex: 8,
//             paddingInline: "2%",
//             backgroundColor: "rgb(195, 234, 239)",
//             display: "flex",
//             flexDirection: "column",
//             gap: 10,
//           }}
//         >


//           {subpackDetails.map((item, i) => (
//             <div
//               key={i}
//               style={{
//                 marginBlock: "2%",
//                 boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
//                 backgroundColor: "white",
//                 paddingInline: "3%",
//                 paddingBlock: "3%",
//                 borderRadius: 10,
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                   marginBottom: "3%",
//                   gap: 10,
//                 }}
//               >
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                   <p
//                     style={{
//                       fontSize: 18,
//                       margin: 0,
//                       fontWeight: 700,
//                       color: "#fc2260",
//                     }}
//                   >
//                     {item.sub_package_name}
//                   </p>
//                   <p style={{ fontSize: 16, marginLeft: '10px' }}>
//                     Select {item.count} items out of {item.item_details.length}
//                   </p>
//                 </div>
//               </div>

//               <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
//                 {item.item_details.map((val, i) => (

//                   <div
//                     style={{
//                       paddingInline: "2%",
//                       paddingBlock: "3%",
//                       boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
//                       borderRadius: 10,
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         width: "100%",
//                         gap: 10,
//                       }}
//                     >
//                       <div style={{ width: 180, height: 120 }}>
//                         <img
//                           src={`https://gezte.com/api/${val.image}`}
//                           style={{
//                             width: "100%",
//                             height: "100%",
//                             borderRadius: 10,
//                           }}
//                         />
//                       </div>

//                       <div style={{ width: "100%" }}>
//                         <div
//                           style={{
//                             display: "flex",
//                             flexDirection: "row",
//                             width: "100%"
//                           }}
//                         >
//                           <div style={{ flex: 2 }}>
//                             <p style={{ margin: 0 }}>{val.item_name}</p>
//                             <div
//                               style={{ display: "flex", flexDirection: "row" }}
//                             >
//                               <Ratings />
//                               <Ratings />
//                               <Ratings />
//                               <Ratings />
//                             </div>
//                           </div>
//                           <div style={{ flex: 1, display: "flex", justifyContent: "end" }}>
//                             <div>

//                               <button
//                                 onClick={() => onClickFoodItem(val.image, val.item_name, val.item_id, item.sub_package_id, item.sub_package_name)}
//                                 style={{
//                                   marginRight: '2px',
//                                   fontSize: '14px',
//                                   border: "none",
//                                   color: "#baf200",
//                                   outline: "none",
//                                   paddingInline: '10px',
//                                   paddingBlock: 8,
//                                   borderRadius: '17%',
//                                   backgroundColor: "#041a68",
//                                 }}
//                               >
//                                 {/* {addFoodItems.some(foodItem => foodItem.id === item.sub_package_id) ? "ADDED" : "ADD"} */}
//                                {addFoodItems['Main Course'] && addFoodItems['Main Course'].some(foodItem => foodItem.id === item.sub_package_id) ? "ADDED" : "ADD"}
//                                {/* if (!addFoodItems[sub_package_name]?.find(foodItem => foodItem.id === id)) { */}
//                               </button>
//                               {/* {foodItemsId == val.item_id ? <span onClick={() => onClickRemoveFoodItem(val.item_id)}><AiTwotoneDelete /></span> : ''} */}
//                             </div>

//                           </div>
//                         </div>

//                         <p>
//                           {val.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//                 }
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div
//         style={{
//           width: '20%',
//           boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
//           padding: "2%",
//           // marginLeft: '10px',
//           // marginTop: '62px'
//         }}
//       >
//         {details.map((selectedPackage, key) => {
//           return selectedPackage.package_id == packageId ? (
//             <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
//               <div style={{ width: 50, height: 50 }}>
//                 <img src={`https://gezte.com/api/${selectedPackage.package_image}`} style={{ width: "100%", height: "100%" }} />
//               </div>
//               <div>
//                 <p style={{ fontFamily: "dexaSemi", margin: 0 }}>
//                   {selectedPackage.package_name}
//                 </p>
//               </div>
//             </div>
//           ) : null;
//         })}


//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             marginBlock: "5%",
//             alignItems: "center",
//             justifyContent: "space-between",
//             gap: 15,
//           }}
//         >
//           {/* <img src={veg} style={{ height: 15 }} /> */}
//           <div>
//             <p style={{ fontFamily: "dexaLight" }}>
//               Peppermint Mocha Frappe
//             </p>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               gap: 10,
//               alignItems: "center",
//               border: "1px groove #adb5bd",
//               paddingInline: 4,
//               paddingBlock: 4,
//             }}
//           >
//             {/* <LuMinus color="#adb5bd" />{" "}
//                 <span style={{ color: "#fc2260" }}>{1}</span>
//                 <LuPlus color="#fc2260" /> */}
//           </div>
//           <div>₹350</div>
//         </div>

//         <div
//           onClick={() => setCoupounToggle(!coupounToggle)}
//           style={{
//             border: "1px dashed #dee2e6",
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: 10,
//             cursor: "pointer"
//           }}
//         >
//           {/* <BiSolidOffer color="#fc2260" size={25} /> */}
//           <p style={{ fontFamily: "dexaSemi", color: "#fc2260" }}>
//             Apply Coupon
//           </p>
//         </div>


//         <div style={{ marginBlock: "4%" }}>
//           <p style={{ fontFamily: "dexaSemi", fontSize: 14 }}>
//             Bill Details
//           </p>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 10,
//               borderBottom: "1px groove #adb5bd",
//               paddingBottom: "2%",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <p
//                 style={{
//                   fontFamily: "dexaLight",
//                   fontSize: 14,
//                   color: "grey",
//                   margin: 0,
//                 }}
//               >
//                 Item Total
//               </p>
//               <p
//                 style={{
//                   fontFamily: "dexaLight",
//                   fontSize: 14,
//                   color: "grey",
//                   margin: 0,
//                 }}
//               >
//                 <span>₹</span>350
//               </p>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <p
//                 style={{
//                   fontFamily: "dexaLight",
//                   fontSize: 14,
//                   color: "grey",
//                   margin: 0,
//                 }}
//               >
//                 Delivery Fee 2.5 kms
//               </p>
//               <p
//                 style={{
//                   fontFamily: "dexaLight",
//                   fontSize: 14,
//                   color: "grey",
//                   margin: 0,
//                 }}
//               >
//                 <span>₹</span>350
//               </p>
//             </div>
//           </div>

//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 10,
//               borderBottom: "2px groove #adb5bd",
//               paddingBlock: "2%",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <p
//                 style={{
//                   fontFamily: "dexaLight",
//                   fontSize: 14,
//                   color: "grey",
//                   margin: 0,
//                 }}
//               >
//                 Delivery Tip
//               </p>
//               <p
//                 style={{
//                   fontFamily: "dexaLight",
//                   fontSize: 14,
//                   color: "#fc2260",
//                   margin: 0,
//                 }}
//               >
//                 Add Tip
//               </p>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <p
//                 style={{
//                   fontFamily: "dexaLight",
//                   fontSize: 14,
//                   color: "grey",
//                   margin: 0,
//                 }}
//               >
//                 Platform fee
//               </p>
//               <p
//                 style={{
//                   fontFamily: "dexaLight",
//                   fontSize: 14,
//                   color: "grey",
//                   margin: 0,
//                 }}
//               >
//                 <span>₹</span>5
//               </p>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <p
//                 style={{
//                   fontFamily: "dexaLight",
//                   fontSize: 14,
//                   color: "grey",
//                   margin: 0,
//                 }}
//               >
//                 GST and Restaurant Charges
//               </p>
//               <p
//                 style={{
//                   fontFamily: "dexaLight",
//                   fontSize: 14,
//                   color: "grey",
//                   margin: 0,
//                 }}
//               >
//                 <span>₹</span>38.35
//               </p>
//             </div>
//           </div>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <p
//             style={{
//               fontFamily: "dexaSemi",
//               fontSize: 14,
//               color: "grey",
//               margin: 0,
//             }}
//           >
//             TO PAY
//           </p>
//           <p
//             style={{
//               fontFamily: "dexaSemi",
//               fontSize: 14,
//               color: "grey",
//               margin: 0,
//             }}
//           >
//             <span>₹</span>398
//           </p>
//         </div>
//       </div>

//       {/* {addFoodItems.length > 0 ? <div
//         style={{
//           width: '30%',
//           boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
//           padding: "2%",
//         }}
//       >
//         <p style={{
//           fontSize: 18,
//           margin: 0,
//           fontWeight: 700,
//           color: "#fc2260",
//         }}>Selected Item</p>
//         {packageId === '1' ? <div className="productDesc">Andhra Meals Package</div> : <div className="productDesc">Punjabi Veg Package</div>}

//         {addFoodItems.map((item, index) => (
//           <div className="order-mainContainer" key={index}>
//             {item.item}
//           </div>
//         ))}
       
//         <button
//           onClick={addToCartHandle}
//           style={{
//             border: "none",
//             color: "#baf200",
//             outline: "none",
//             paddingInline: 20,
//             paddingBlock: 5,

//             borderRadius: 15,
//             backgroundColor: "#041a68",
//           }}
//         >
//           Add To Cart
//         </button>
//       </div> : ''} */}
//     </div>
//   );
// };

// export default OrderOnline;





import React, { useEffect, useRef, useState } from "react";
import Modal from "../../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import StyledButton from '../../../components/ButtonComponents/styleButton';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Ratings from "../../../asets/svg/Ratings";
import { getLocationCoordinates } from '../../../common/commonFunction';
import './OrderOnlineStyle.css';

const OrderOnline = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const containerRef = useRef(null);
  const [createModal, setCreateModal] = useState(false);
  const [packval, setPackVal] = useState();
  const [filterval, setFilterVal] = useState(null);
  const [details, setDetails] = useState([]);
  const [packageId, setPackageId] = useState();
  const [productDivision, setProductDivision] = useState();
  const [subpackDetails, setSubpackDetails] = useState([]);
  console.log('subpackDetails:-', subpackDetails);
  const [subpacitemkDetails, setSubpackitemDetails] = useState([]);
  const [addFoodItems, setAddFoodItems] = useState({});
  console.log('addFoodItems:-', addFoodItems);
  const [foodItemsId, setFoodItemsId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [superId, setSuperId] = useState();
  const [stylePage, setStylePage] = useState(false);
  const [foodItemsDetails, setFoodItemsDetails] = useState();
  const [individualPackagePrice, setIndividualPackagePrice] = useState();
  const [guistDetails, setGuistDetails] = useState();
  const [distance, setDistance] = useState(null);
  const [coupenDiscount, setCoupenDiscount] = useState();
  const [coupenDiscountAmount, setCoupenDiscountAmount] = useState();
  const [itemId, setItemId] = useState([]);
  console.log('itemId:-', itemId);
  const [lat1, setLat1] = useState();
  const [lon1, setLon1] = useState();
  const [lat2, setLat2] = useState();
  const [lon2, setLon2] = useState();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  

  const addToCartHandle = () => {
    localStorage.setItem('packagePrice', foodItemsDetails.total_price);
    navigate("/cart")
  }

  const foodId = [];
   console.log('foodId:-',foodId)

  const onClickFoodItem = (image, item, id, superId, sub_package_name) => {
    console.log('food id:-', id);
    setStylePage(true);
    setFoodItemsId(id);
    setSuperId(superId);
    foodId.push(id);
    console.log('foodId:-', foodId)
    setItemId(prevItems => {
      if (!Array.isArray(prevItems)) {
        prevItems = [];
      }
      return [...prevItems, id];
    });
    {addFoodItems && (
      !addFoodItems[sub_package_name]?.find(foodItem => foodItem.id === id) && (
        (() => {
          const newItem = { item: item, image: image, id: id, action: true };
          setAddFoodItems(prevState => ({
            ...prevState,
            [sub_package_name]: [...(prevState[sub_package_name] || []), newItem]
          }));
        })()
      )
    )}

  };

  const onClickClear = () =>{
    setAddFoodItems({});
    setIsOpen(false)
    setItemId([]);
  }

  const onClickRemoveFoodItem = (id) => {
    // Create a new object by filtering out the entry with the specified id
    const updatedFoodItems = Object.fromEntries(
      addFoodItems && Object.entries(addFoodItems).map(([key, value]) => {
        // Filter out the item with the provided id from the array value
        if (Array.isArray(value)) {
          value = value.filter(item => item.id !== id);
        }
        return [key, value];
      })

    );
    // Update the state with the new object
    setAddFoodItems(updatedFoodItems);

    const updatedItemIds = itemId.filter(itemId => itemId !== id);
    setItemId(updatedItemIds);
  }

  const { id } = useParams();
  const subpackage = [
    "Main Course",
    "Desert",
    "Staters",
    "Bewrages",
    "Welcome Drinks",
  ];

  const getDetailsByid = async () => {
    try {
      const result = await axios.get(
        `https://gezte.com/api/get_restaurant_all_package_user.php?restaurant_id=${location.state.id}`
      );
      setDetails(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickApplyCoupen = async () => {
    try {
      const result = await axios.get(`https://gezte.com/api/promocode_getapi.php`);
      setCoupenDiscount(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (coupenDiscount) {
      // Assuming you want to apply the first discount in the array
      if (coupenDiscount.length > 0) {
        setCoupenDiscountAmount(coupenDiscount[0].Discount);
      }
    }
  }, [coupenDiscount]);

  const getProductDataByDivision = async () => {
    try {
      const result = await axios.get(
        `https://gezte.com/api/fetch_sub_package.php`
      );
      setProductDivision(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  function calculateDistance(lat1, lat2, lon1, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    console.log('c:-', c);
    const d = R * c; // Distance in kilometers
    console.log('d:-', d);

    setDistance(d.toFixed(2)); // Set the distance and round to 2 decimal places
  }

  useEffect(() => {
    let currentLocation = localStorage.getItem('currentLocation');
    getDetailsByid();
    getProductDataByDivision();

    const apiKey = 'AIzaSyCKrfTpQUe5jTENrJLx51TZ0n8DF6wxGzw';

    getLocationCoordinates(' Ramamurthy Nagar, Bangalore', apiKey)
      .then(({ latitude, longitude }) => {
        setLat1(latitude);
        setLon1(longitude);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });

    getLocationCoordinates(`Near Nagenahalli Main Road, Hebbal, North Bangalore, Bangalore`, apiKey)
      .then(({ latitude, longitude }) => {
        setLat2(latitude);
        setLon2(longitude);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }, []);



  const getMainPackageDetail = async () => {
    try {
      const result = await axios.get(
        `https://gezte.com/api/fetch_restaurant_package_user.php?package_id=${packageId}&restaurant_id=${location.state.id}`
      );
      setFoodItemsDetails(result.data);
      setSubpackDetails(result.data.sub_package_names);
      setIndividualPackagePrice(result.data.total_price)
      const subItems = result.data.sub_package_names.map((item, i) => item);
      setSubpackitemDetails(subItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailsByid();
  }, []);

  useEffect(() => {
    getMainPackageDetail();
  }, [packageId]);

  useEffect(() => {
    const isDesiredRoute = location.pathname === `/resturant/${id}`;

    if (isDesiredRoute && containerRef.current) {
      containerRef.current.focus();
    }
    let storedFormData = localStorage.getItem('formData');

    if (storedFormData) {
      setGuistDetails(JSON.parse(storedFormData));
    }

  }, [location.pathname]);

  const calculatePrice = (distance) => {
    if (guistDetails && guistDetails.amountOfMembers <= 10) {
      return 16 * distance;
    } else if (guistDetails && guistDetails.amountOfMembers >= 18) {
      return 18 * distance;
    } else if (guistDetails && guistDetails.amountOfMembers >= 30) {
      return 43 * distance;
    }
  };


  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 2, borderRight: "1px groove #efefef", width: '30%' }}>
        {details.map((item, i) => (
          <div
            onClick={() => {
              { addFoodItems.length > 0 ? '' : setPackVal(i) };
              { addFoodItems.length > 0 ? '' : setPackageId(item.package_id) };
              calculateDistance(lat1, lat2, lon1, lon2);
              {itemId.length >= 1 && addFoodItems ? openModal(): ''}
            }}
            key={i}
            style={{
              borderBottom:
                packval === i ? "2px solid #fc2260" : "1px solid grey",
              borderRight:
                packval === i ? "2px solid #fc2260" : "1px solid grey",
            }}
          >
            <p
              style={{
                color: packval == i ? "#fc2260" : "#041a68",
                fontWeight: 700,
              }}
            >
              {item.package_name}
            </p>
          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div  style={{
            display: "flex",
            flexDirection: "column",
            width: 500,
            height: 400,
            overflowY: "auto",
            marginTop: 10,
            paddingTop: '100px'
            
          }}>
             <div
            style={{
              display:'flex',
              justifyContent:'center',
              alignItems: "center",
              paddingLeft:'80px',
              paddingRight:'80px'
              
            }}
          >
            <div>
            <h1 style={{color: "rgb(252, 34, 96)",}}>Are you sure you want to delete this Order?</h1>
            <div style={{  display: "flex", alignItems: "center", justifyContent:'center'}}>
              <StyledButton btnName = 'Cancel' onClick={closeModal}/>
              <StyledButton btnName = 'Clear Order' backgroundcolor= "rgb(226 12 73)" color='black' onClick = {onClickClear}/>
            </div>
            </div>
        </div>
        </div>
        
      </Modal>

      <div className='productPage'>
        <div
          style={{
            backgroundColor: "rgb(195, 234, 239)",
            paddingTop: '10px',
            paddingBottom: '10px',
            overflow: 'scroll'
          }}
        >
          <div
            style={{
              width: '4297px'
            }}
          >
            {productDivision !== undefined && productDivision.map((item, i) => {
              return <StyledButton btnName={item.sub_package_name} />
            })}
          </div>
        </div>

        <div
          style={{
            flex: 8,
            paddingInline: "2%",
            backgroundColor: "rgb(195, 234, 239)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {subpackDetails && subpackDetails.map((item, i) => (
            <div
              key={i}
              style={{
                marginBlock: "2%",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                backgroundColor: "white",
                paddingInline: "3%",
                paddingBlock: "3%",
                borderRadius: 10,
              }}
            >
              {console.log('item,:-',item)}
              <div
                style={{
                  display: "flex",
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: "3%",
                  gap: 10,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p
                    style={{
                      fontSize: 18,
                      margin: 0,
                      fontWeight: 700,
                      color: "#fc2260",
                    }}
                  >
                    {item.sub_package_name}
                  </p>
                  <p style={{ fontSize: 16, marginLeft: '10px' }}>
                    Select {item.count} items out of {item.item_details.length}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                {item.item_details.map((val, i) => (
                  <div
                    style={{
                      paddingInline: "2%",
                      paddingBlock: "3%",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                      borderRadius: 10,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        gap: 10,
                      }}
                    >
                      <div style={{ width: 180, height: 120 }}>
                        <img
                          src={`https://gezte.com/api/${val.image}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 10,
                          }}
                        />
                      </div>

                      <div style={{ width: "100%" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%"
                          }}
                        >
                          <div style={{ flex: 2 }}>
                            <p style={{ margin: 0 }}>{val.item_name}</p>
                            <div
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              <Ratings />
                              <Ratings />
                              <Ratings />
                              <Ratings />
                            </div>
                          </div>
                          <div style={{ flex: 1, display: "flex", justifyContent: "end" }}>
                            <div>
                              

                              {addFoodItems && Object.entries(addFoodItems).map(([key, value]) => {
                                const newData = JSON.parse(`${JSON.stringify(value)}`).length
                                if(newData > item.count){
                                    console.log('pranaya')
                                }else{
                                  console.log('udaya')
                                }
                                 
                              })}
                                  
                              <button
                                  onClick={() => onClickFoodItem(val.image, val.item_name, val.item_id, item.sub_package_id, item.sub_package_name)}
                                  style={{
                                  marginRight: '2px',
                                  fontSize: '14px',
                                  border: "none",
                                  color: "#baf200",
                                  outline: "none",
                                  paddingInline: '10px',
                                  paddingBlock: 8,
                                  borderRadius: '17%',
                                  backgroundColor: "#041a68",
                                }}
                              >
                                {itemId  && itemId.includes(val.item_id) ? "ADDED" : "ADD"}
                              </button>
                              {itemId && itemId.includes(val.item_id) ? <span onClick={() => onClickRemoveFoodItem(val.item_id)}><AiTwotoneDelete /></span> : ''}
                            </div>

                          </div>
                        </div>

                        <p>
                          {val.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          width: '20%',
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          padding: "2%",
        }}
      >
        {details.map((selectedPackage, key) => {
          return selectedPackage.package_id == packageId ? (
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <div style={{ width: 50, height: 50 }}>
                <img src={`https://gezte.com/api/${selectedPackage.package_image}`} style={{ width: "100%", height: "100%" }} />
              </div>
              <div>
                <p style={{ fontFamily: "dexaSemi", margin: 0 }}>
                  {selectedPackage.package_name}
                </p>
              </div>
            </div>
          ) : null;
        })}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBlock: "5%",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 15,
          }}
        >
          <div>
            {addFoodItems && Object.entries(addFoodItems).map(([category, dishes]) => (
              <div key={category}>
                <h4>{category}</h4>
                <ul>
                  {dishes.map(dish => (
                    <li key={dish.id}>{dish.item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          onClick={onClickApplyCoupen}
          style={{
            border: "1px dashed #dee2e6",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            cursor: "pointer"
          }}
        >
          <p style={{ color: "#fc2260" }}>
            {coupenDiscountAmount ? 'Coupen Applied' : 'Apply Coupon'}
          </p>
        </div>
        <div style={{display:'flex'}}>
             <input type='text' name='coupenValue' value=''/>
             <button>Apply</button>
             {/* <StyledButton btnName='apply'/> */}
        </div>
       
        <div style={{ marginBlock: "4%" }}>
          <p style={{ /*fontFamily: "dexaSemi",*/ fontSize: 14 }}>
            Bill Details
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              borderBottom: "1px groove #adb5bd",
              paddingBottom: "2%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  // fontFamily: "dexaLight",
                  fontSize: 14,
                  color: "grey",
                  margin: 0,
                }}
              >
                Package Price
              </p>
              <p
                style={{
                  // fontFamily: "dexaLight",
                  fontSize: 14,
                  color: "grey",
                  margin: 0,
                }}
              >

                <span>₹{individualPackagePrice}</span>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  color: "grey",
                  margin: 0,
                }}
              >
                Item Total
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "grey",
                  margin: 0,
                }}
              >
                <span>₹</span>{guistDetails && guistDetails.amountOfMembers * individualPackagePrice}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  // fontFamily: "dexaLight",
                  fontSize: 14,
                  color: "grey",
                  margin: 0,
                }}
              >
                Delivery Fee {distance} kms
                {/* Delivery Fee 2.5 kms */}
              </p>
              <p
                style={{
                  // fontFamily: "dexaLight",
                  fontSize: 14,
                  color: "grey",
                  margin: 0,
                }}
              >
                ₹ {calculatePrice(distance)}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              borderBottom: "2px groove #adb5bd",
              paddingBlock: "2%",
            }}
          >

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontFamily: "dexaLight",
                  fontSize: 14,
                  color: "grey",
                  margin: 0,
                }}
              >
                Platform fee
              </p>
              <p
                style={{
                  fontFamily: "dexaLight",
                  fontSize: 14,
                  color: "grey",
                  margin: 0,
                }}
              >
                <span>₹</span> <span>{guistDetails && guistDetails.amountOfMembers * individualPackagePrice * 0.1} </span>
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontFamily: "dexaLight",
                  fontSize: 14,
                  color: "grey",
                  margin: 0,
                }}
              >
                GST and Restaurant Charges
              </p>
              <p
                style={{
                  fontFamily: "dexaLight",
                  fontSize: 14,
                  color: "grey",
                  margin: 0,
                }}
              >
                <span>₹</span>{guistDetails && guistDetails.amountOfMembers * individualPackagePrice * 0.05}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontFamily: "dexaLight",
                  fontSize: 14,
                  color: "grey",
                  margin: 0,
                }}
              >
                Coupen Discount
              </p>
              <p
                style={{
                  // fontFamily: "dexaLight",
                  fontSize: 14,
                  color: "grey",
                  margin: 0,
                }}
              >
                {coupenDiscountAmount ? <span>₹ {coupenDiscountAmount}</span> : <span>₹ 0</span>}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              // fontFamily: "dexaSemi",
              fontSize: 14,
              color: "grey",
              margin: 0,
            }}
          >
            TO PAY
          </p>
          <p
            style={{
              // fontFamily: "dexaSemi",
              fontSize: 14,
              color: "grey",
              margin: 0,
            }}
          >
            <span>
              ₹{guistDetails && coupenDiscountAmount ?
                guistDetails.amountOfMembers * individualPackagePrice +
                calculatePrice(distance) +
                guistDetails.amountOfMembers * individualPackagePrice * 0.05 +
                guistDetails.amountOfMembers * individualPackagePrice * 0.1
                - coupenDiscountAmount
                : guistDetails ?
                  guistDetails.amountOfMembers * individualPackagePrice +
                  calculatePrice(distance) +
                  guistDetails.amountOfMembers * individualPackagePrice * 0.05 +
                  guistDetails.amountOfMembers * individualPackagePrice * 0.1
                  :
                  0}
            </span>
          </p>
        </div>
        <button
          onClick={addToCartHandle}
          style={{
            marginTop: '20px',
            border: "none",
            color: "#baf200",
            outline: "none",
            cursor: 'pointer',
            padding: '10px',
            width: '100%',
            borderRadius: 15,
            backgroundColor: "#041a68",
          }}
        >
          Check Out
        </button>
      </div>     
    </div>
  );
};

export default OrderOnline;
