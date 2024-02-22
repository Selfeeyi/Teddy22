// import React from "react";
// import "./FeedbackStyle.css";
// import CarouselUtil from "../../utils/CarouselUtil/CarouselUtil";
// import CircleCard2 from "../../utils/Cards/CircleCards/CircleCard2/CircleCard2";
// import css from "../../pages/ShowCase/ShowCase.module.css";
// import FeedbackCard from "./FeedbackCard";
// import PrevArrow from "../../utils/CarouselUtil/Arrows/PrevArrow";
// import NextArrow from "../../utils/CarouselUtil/Arrows/NextArrow";
// import story1 from "../../asets/images/story-01.jpg";
// import story2 from "../../asets/images/story-02.jpg";
// import story3 from "../../asets/images/story-03.jpg";
// import story4 from "../../asets/images/story-04.jpg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Img01 from "../../asets/images/Img01.jpg";
// import Img02 from "../../asets/images/Img02.jpg";
// import Img03 from "../../asets/images/Img03.jpg";
// import Img04 from "../../asets/images/Img04.jpg";

// const Feedback = () => {

//   const settings = {
//     // dots: false,
//     // infinite: true,
//     // speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 8,
//   };

//   return (
//     <div style={{ backgroundColor: "#fff1ec", margin: 0, paddingBlock: "3%" }}>
//       <div>
//         <p
//           style={{
//             textAlign: "center",
//             color: "black",
//             fontWeight: "700",
//             fontSize: 40,
//             margin: 0,
//           }}
//         >
//           Over <span style={{ color: "#e8202d" }}>20L+ happy customers</span>
//           <br />
//           and counti
//         </p>
//       </div>

//       <Slider {...settings} style={{marginBottom:80, marginTop:20,width:'100%', height:"150px"}}>
//         <div style={{borderRadius:10}}>
//           <img src={Img01} alt="Image 1" style={{height:'100%'}} />
//         </div>
//         <div style={{borderRadius:10}}>
//           <img src={Img02} alt="Image 2" style={{height:'100%'}} />
//         </div>
//         <div style={{borderRadius:10}}>
//           <img src={Img03} alt="Image 3" style={{height:'100%'}} />
//         </div>
//         <div style={{borderRadius:10}}>
//           <img src={Img04} alt="Image 4" style={{height:'100%'}} />
//         </div>
//         <div style={{borderRadius:10}}>
//           <img src={Img04} alt="Image 4" style={{height:'100%'}} />
//         </div>
//         <div style={{borderRadius:10}}>
//           <img src={Img04} alt="Image 4" style={{height:'100%'}} />
//         </div>
//       </Slider>

//       <div
//         style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
//       >
//         <div style={{ flex: 1 }}>
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <p style={{ fontWeight: "bolder", fontSize: 45, margin: 0 }}>
//               When in doubt,
//               <br />
//               <span style={{ color: "#e8202d" }}>Order Desi!</span>
//             </p>
//           </div>

//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               marginBlock: "4%",
//               lineHeight: 2,
//               gap: 30,
//             }}
//           >
//             <p
//               style={{
//                 textAlign: "left",
//                 width: 350,
//                 margin: 0,
//                 color: "#343a40",
//                 fontWeight: "400",
//                 fontSize: 18,
//               }}
//             >
//               Too lazy to cook or bored of ghar ka khana? Tired of scrolling
//               through restaurants or stuck on a concall? Whatever the reason,
//               When In Doubt, Order Desi!
//             </p>
//             <p
//               style={{
//                 textAlign: "left",
//                 width: 350,
//                 margin: 0,
//                 color: "#343a40",
//                 fontWeight: "400",
//                 fontSize: 18,
//               }}
//             >
//               From Dal Makhni to Amritsari Chole Chawal to Butter Chicken to
//               Gulab Jamun, we have all of your delicious Desi Meals.
//             </p>
//           </div>
//         </div>

//         <div
//           style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}
//         >
//           <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "end",
//               }}
//             >
//               <img
//                 src={story1}
//                 style={{ width: 200, height: 257, borderRadius: 10 }}
//               />
//             </div>
//             <div>
//               <img
//                 src={story2}
//                 style={{ width: 270, height: 300, borderRadius: 10 }}
//               />
//             </div>
//           </div>

//           <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "end",
//               }}
//             >
//               <img
//                 src={story3}
//                 style={{ width: 200, height: 200, borderRadius: 10 }}
//               />
//             </div>
//             <div>
//               <img
//                 src={story4}
//                 style={{ width: 270, height: 300, borderRadius: 10 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feedback;
