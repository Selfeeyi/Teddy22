// import React from "react";
// import imge from "../../asets/images/cateringimg.png";
// import imge1 from "../../asets/images/flowerimg.png";
// import Modal from './Modal'

// import  { useState } from 'react';

// const Orders = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleButtonClick = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };


//   return (
//     <div>
//       <p
//         style={{
        
//           fontFamily: "dexaSemi",
//           fontSize: 25,
//           color: "#282c3f",
//         }}
//       >
//         Past Orders
//       </p>
//       <div style={{display:"flex",flexDirection:"column",gap:20}}>  
//       <div style={{ border: "1px groove #efefef", padding: "4%" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           <div style={{flex:1}}>
//             <img src={imge} />
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", gap: 5,flex:5 }}>
//             <div style={{display:"flex",justifyContent:"space-between"}}>
//             <p
//               style={{
//                 margin: 0,
//                 fontSize: 18,
//                 fontWeight: "600",
//                 fontFamily: "dexaSemi",
//               }}
//             >
//               Catering
//             </p>
//             <p
//               style={{ margin: 0, color: "#7e808c", fontSize: 14 }}
//             >
//             Delivered on Sun, Dec 10, 2023, 01:48 AM
//             </p>
//             </div>
        
//             <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//               Koramangala
//             </p>
//             <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//               ORDER #161120827917242 | Sun, Dec 10, 2023, 01:17 AM
//             </p>
//             <p
//               style={{
//                 margin: 0,
//                 color: "#7e808c",
//                 fontSize: 12,
//                 fontFamily: "dexaSemi",
//                 color: "#fc2260",
//               }}
//             >
//               VIEW DETAILS
//             </p>
//           </div>
//         </div>

//         <div style={{ border: "1px dashed  grey" }}></div>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             paddingBlock: "2%",
//           }}
//         >
//           <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//             Corn And Cheese Pizza x 2
//           </p>

//           <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//             Total Paid: ₹218
//           </p>
//         </div>
//         <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:10}}>
//           <button
           
//             style={{
//               backgroundColor: "#fc2260",
//               color: "white",
//               outline: "none",
//               border: "none",
//               width: "10%",
//               borderRadius: 6,
//               paddingBlock: 10,
//               fontWeight: "500",
//               fontSize: 14,
//             }}
//             onClick={handleButtonClick} // Add onClick handler
//           >
//             REORDER
//           </button>
         
//           <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//   {/* Content of your modal */}
//   <div style={{ textAlign: 'center' }}>
//     <p style={{ fontSize: '1.5rem' }}>Do You want to cancel</p>
//     <button  onClick={handleCloseModal} style={{ fontSize: '1rem', border: '2px solid #041a68', backgroundColor: '#041a68', color: 'white', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer' }}>
//       Ok
//     </button>
//   </div>
// </Modal>









//           <button
           
//            style={{
//              backgroundColor: "#fc2260",
//              color: "white",
//              outline: "none",
//              border: "none",
//              width: "10%",
//              borderRadius: 6,
//              paddingBlock: 10,
//              fontWeight: "500",
//              fontSize: 14,
//            }}
//          >
//            GET HELP
//          </button>
//         </div>
//       </div>

//       <div style={{ border: "1px groove #efefef", padding: "4%" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           <div style={{flex:1}}>
//             <img src={imge1} />
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", gap: 5,flex:5 }}>
//             <div style={{display:"flex",justifyContent:"space-between"}}>
//             <p
//               style={{
//                 margin: 0,
//                 fontSize: 18,
//                 fontWeight: "600",
//                 fontFamily: "dexaSemi",
//               }}
//             >
//               Flowers
//             </p>
//             <p
//               style={{ margin: 0, color: "#7e808c", fontSize: 14 }}
//             >
//             Delivered on Sun, Dec 10, 2023, 01:48 AM
//             </p>
//             </div>
        
//             <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//               Koramangala
//             </p>
//             <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//               ORDER #161120827917242 | Sun, Dec 10, 2023, 01:17 AM
//             </p>
//             <p
//               style={{
//                 margin: 0,
//                 color: "#7e808c",
//                 fontSize: 12,
//                 fontFamily: "dexaSemi",
//                 color: "#fc2260",
//               }}
//             >
//               VIEW DETAILS
//             </p>
//           </div>
//         </div>

//         <div style={{ border: "1px dashed  grey" }}></div>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             paddingBlock: "2%",
//           }}
//         >
//           <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//             Corn And Cheese Pizza x 2
//           </p>

//           <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//             Total Paid: ₹218
//           </p>
//         </div>
//         <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:10}}>
//           <button
           
//             style={{
//               backgroundColor: "#fc2260",
//               color: "white",
//               outline: "none",
//               border: "none",
//               width: "10%",
//               borderRadius: 6,
//               paddingBlock: 10,
//               fontWeight: "500",
//               fontSize: 14,
//             }}
//           >
//             REORDER
//           </button>

//           <button
           
//            style={{
//              backgroundColor: "#fc2260",
//              color: "white",
//              outline: "none",
//              border: "none",
//              width: "10%",
//              borderRadius: 6,
//              paddingBlock: 10,
//              fontWeight: "500",
//              fontSize: 14,
//            }}
//          >
//            GET HELP
//          </button>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;









// import React, { useEffect, useState } from "react";
// import imge from "../../asets/images/cateringimg.png";
// import imge1 from "../../asets/images/flowerimg.png";
// import Modal from 'react-modal';
// import './order.css';
// import uploadImage from "./image/upload-image.png";
// import { FaReact } from 'react-icons/fa';
// import { AiOutlineStar } from 'react-icons/ai';
// import ViewUploadedCard from "./ViewUploadedCard";
// import { useDropzone } from 'react-dropzone';



// const Orders = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const onDrop = (acceptedFiles) => {
//     // Do something with the accepted files (e.g., set state)
//     setSelectedImage(acceptedFiles[0]);
//   };

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });
//   const [createModal, setCreateModal] = useState(false);
//   useEffect(() => {
//     Modal.setAppElement('#root'); // Set the root element as the App element
//   }, []);
//   const handleImageClick = () => {
//     setCreateModal(true);
//   };
//   const [ratingText, setRatingText] = useState('Excellent');
//   const [backgroundColor, setBackgroundColor] = useState('white');
//   const [stars, setStars] = useState([
//     { id: 1, text: 'Terrible', color: 'grey' },
//     { id: 2, text: 'Poor', color: 'grey' },
//     { id: 3, text: 'Average', color: 'grey' },
//     { id: 4, text: 'Good', color: 'grey' },
//     { id: 5, text: 'Excellent', color: 'grey' }
//   ]);

//   // Function to handle click event on a star
//   const handleStarClick = (starId, newRatingText, newBackgroundColor) => {
//     const updatedStars = stars.map(star => ({
//       ...star,
//       color: star.id <= starId ? 'gold' : 'grey'
//     }));
//     setStars(updatedStars);
//     setRatingText(newRatingText);
//     setBackgroundColor(newBackgroundColor);
//   };
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedImage(file);
//   };
  
//   return (

//     <div>

      
//       <p
//         style={{
        
//           fontFamily: "dexaSemi",
//           fontSize: 25,
//           color: "#282c3f",
//         }}
//       >
//         Past Orders
//       </p>
//       <div style={{display:"flex",flexDirection:"column",gap:20}}>  
//       <div style={{ border: "1px groove #efefef", padding: "4%" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           <div style={{flex:1}}>
//             <img src={imge} />
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", gap: 5,flex:5 }}>
//             <div style={{display:"flex",justifyContent:"space-between"}}>
//             <p
//               style={{
//                 margin: 0,
//                 fontSize: 18,
//                 fontWeight: "600",
//                 fontFamily: "dexaSemi",
//               }}
//             >
//               Catering
//             </p>
//             <p
//               style={{ margin: 0, color: "#7e808c", fontSize: 14 }}
//             >
//             Delivered on Sun, Dec 10, 2023, 01:48 AM
//             </p>
//             </div>
        
//             <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//               Koramangala
//             </p>
//             <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//               ORDER #161120827917242 | Sun, Dec 10, 2023, 01:17 AM
//             </p>
//             <p
//               style={{
//                 margin: 0,
//                 color: "#7e808c",
//                 fontSize: 12,
//                 fontFamily: "dexaSemi",
//                 color: "#fc2260",
//               }}
//             >
//               VIEW DETAILS
//             </p>
//           </div>
//         </div>

//         <div style={{ border: "1px dashed  grey" }}></div>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             paddingBlock: "2%",
//           }}
//         >
//           <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//             Corn And Cheese Pizza x 2
//           </p>

//           <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//             Total Paid: ₹218
//           </p>
//         </div>
//         <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:10}}>
//         <button
//            onClick={handleImageClick}
//            style={{
//              backgroundColor: "#fc2260",
//              color: "white",
//              outline: "none",
//              border: "none",
//              width: "10%",
//              borderRadius: 6,
//              paddingBlock: 10,
//              fontWeight: "500",
//              fontSize: 14,
//              cursor:'pointer'

//            }}
//          >
//       RATINGS & REVIEWS
//          </button>
//           <button
           
//             style={{
//               backgroundColor: "#fc2260",
//               color: "white",
//               outline: "none",
//               border: "none",
//               width: "10%",
//               borderRadius: 6,
//               paddingBlock: 10,
//               fontWeight: "500",
//               fontSize: 14,
//               cursor:'pointer'
//             }}
//           >
//             REORDER
//           </button>

//           <button
           
//            style={{
//              backgroundColor: "#fc2260",
//              color: "white",
//              outline: "none",
//              border: "none",
//              width: "10%",
//              borderRadius: 6,
//              paddingBlock: 10,
//              fontWeight: "500",
//              fontSize: 14,
//              cursor:'pointer'
//            }}
//          >
//            GET HELP
//          </button>
//         </div>
//       </div>

//       <div style={{ border: "1px groove #efefef", padding: "4%" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           <div style={{flex:1}}>
//             <img src={imge1} />
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", gap: 5,flex:5 }}>
//             <div style={{display:"flex",justifyContent:"space-between"}}>
//             <p
//               style={{
//                 margin: 0,
//                 fontSize: 18,
//                 fontWeight: "600",
//                 fontFamily: "dexaSemi",
                
//               }}
//             >
//               Flowers
//             </p>
//             <p
//               style={{ margin: 0, color: "#7e808c", fontSize: 14 }}
//             >
//             Delivered on Sun, Dec 10, 2023, 01:48 AM
//             </p>
//             </div>
        
//             <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//               Koramangala
//             </p>
//             <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//               ORDER #161120827917242 | Sun, Dec 10, 2023, 01:17 AM
//             </p>
//             <p
//               style={{
//                 margin: 0,
//                 color: "#7e808c",
//                 fontSize: 12,
//                 fontFamily: "dexaSemi",
//                 color: "#fc2260",
//               }}
//             >
//               VIEW DETAILS
//             </p>
//           </div>
//         </div>

//         <div style={{ border: "1px dashed  grey" }}></div>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             paddingBlock: "2%",
//           }}
//         >
//           <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//             Corn And Cheese Pizza x 2
//           </p>

//           <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
//             Total Paid: ₹218
//           </p>
//         </div>
//         <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:10}}>
//         <button
//                onClick={handleImageClick}
//            style={{
//              backgroundColor: "#fc2260",
//              color: "white",
//              outline: "none",
//              border: "none",
//              width: "10%",
//              borderRadius: 6,
//              paddingBlock: 10,
//              fontWeight: "500",
//              fontSize: 14,
//              cursor:'pointer'
             
//            }}
//          >
//            RATINGS & REVIEWS
//          </button>
//           <button
           
//             style={{
//               backgroundColor: "#fc2260",
//               color: "white",
//               outline: "none",
//               border: "none",
//               width: "10%",
//               borderRadius: 6,
//               paddingBlock: 10,
//               fontWeight: "500",
//               fontSize: 14,
//               cursor:'pointer'
//             }}
//           >
//             REORDER
//           </button>

//           <button
           
//            style={{
//              backgroundColor: "#fc2260",
//              color: "white",
//              outline: "none",
//              border: "none",
//              width: "10%",
//              borderRadius: 6,
//              paddingBlock: 10,
//              fontWeight: "500",
//              fontSize: 14,
//              cursor:'pointer'
//            }}
//          >
//            GET HELP
//          </button>
//         </div>
//       </div>
//       </div>
//       <Modal
//         isOpen={createModal}
//         onRequestClose={() => setCreateModal(false)}
//         appElement={document.getElementById('root')}
//         style={{
//           content: {
//             width: '700px',
//             height: '600px',
//             margin: 'auto',

//           },
//         }}
//       >
//         <div style={{fontSize:'25px', marginLeft:'7px'}}>Add Review</div>
// <div style={{fontSize:'17px'}}><p>Rate your experience for</p></div>

//  <div className="container">
//       {stars.map(star => (
//         <div
//           key={star.id}
//           className="star"
//           onClick={() => handleStarClick(star.id, star.text, backgroundColor)}
//           style={{ backgroundColor: backgroundColor }}
//         >
//           <AiOutlineStar style={{ fill: star.color, stroke: star.color, strokeWidth: '2px' }} />
//         </div>
//       ))}
//       <div style={{ fontSize: '20px', backgroundColor: backgroundColor }}>{ratingText}</div>
//     </div>
//     <div className="outerDiv">
//       <div className='innerDiv'>
//         <div className="imgBox1">
//           <div className="txt">Drag & Drop to upload or
//             <div {...getRootProps()} className="imgContainer">
//               <input {...getInputProps()} />
//               <label htmlFor="browse" className="browseTxt">
//                 Browse
//               </label>
//             </div>
//           </div>
//           <div className="bdyBox">
//             <div className="viewCards">
//               {/* Display selected image */}
              
//             </div>
//             <label  className="imgBox" htmlFor="browse2">
//               <input
//                 type="file"
//                 id="browse2"
//                 name="browse2"
//                 className="browseInpt"
//                 onChange={handleFileChange}
//               />
//               {/* Display dynamic image */}
//               {selectedImage ? (
//                 <img style={{ width:"150px",height:'150px'}}  src={URL.createObjectURL(selectedImage)} className="img" alt="upload image" />
//               ) : (
//                 <img style={{ width:"150px",height:'150px'}} src="default-image-url.jpg" className="img" alt="upload image" />
//               )}
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
// {/* <div style={{font-size: "25px", border: 2px solid black; border-radius: 50%; width: fit-content; padding: 10px;}}> */}

// <div className="nmreview">

// <div class="comment">
//     <input  className="input-wrapper" style={{border:'none', outline:"none" ,paddingRight:"26rem"}} type="text" placeholder="Write something..."/>
// </div>
// </div>

// <div className="addr"><button>Add Review</button></div>
//       </Modal>
//     </div>
//   );
// };

// export default Orders;






import React, { useEffect, useState } from "react";
import imge from "../../asets/images/cateringimg.png";
import imge1 from "../../asets/images/flowerimg.png";
import Modal from 'react-modal';
import './order.css';
import uploadImage from "./image/upload-image.png";
import { FaReact } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import ViewUploadedCard from "./ViewUploadedCard";
import { useDropzone } from 'react-dropzone';



const Orders = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    // Do something with the accepted files (e.g., set state)
    setSelectedImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const [createModal, setCreateModal] = useState(false);
  useEffect(() => {
    Modal.setAppElement('#root'); // Set the root element as the App element
  }, []);
  const handleImageClick = () => {
    setCreateModal(true);
  };
  const [ratingNumber, setRatingNumber] = useState(5);

  const [ratingText, setRatingText] = useState('Excellent');
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [stars, setStars] = useState([
    { id: 1, text: 'Terrible', color: 'grey' },
    { id: 2, text: 'Poor', color: 'grey' },
    { id: 3, text: 'Average', color: 'grey' },
    { id: 4, text: 'Good', color: 'grey' },
    { id: 5, text: 'Excellent', color: 'grey' }
  ]);

  // Function to handle click event on a star
  const handleStarClick = (starId, newRatingText, newBackgroundColor) => {
    const updatedStars = stars.map(star => ({
      ...star,
      color: star.id <= starId ? 'gold' : 'grey'
    }));
    setStars(updatedStars);
    setRatingText(newRatingText);
    setBackgroundColor(newBackgroundColor);
    setRatingNumber(starId);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
  const handleAddReview = async () => {
    // Get the image URL if selected, otherwise set it to an empty string
    const imageUrl = selectedImage ? URL.createObjectURL(selectedImage) : "";

    // Get the review text from the input field
    const reviewText = document.getElementById("reviewInput").value;

    // Check if review text is empty
    if (!reviewText) {
        console.error('Error: Review text is missing.');
        return; // Stop execution if review text is missing
    }

    // Retrieve phone number from local storage
    const phoneNumber = localStorage.getItem('number');

    // Prepare the data object to be sent to the API
    const data = {
        review: reviewText,
        rating: ratingNumber,
        number: phoneNumber, // Include the phone number from local storage
        image: imageUrl
    };

    console.log('Data to be sent to API:', data);

    try {
        const response = await fetch('https://gezte.com/api/add_reviews.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log('API response:', responseData);
        // Handle response as needed
    }  catch (error) {
      console.error('Error:', error);
      // Handle error more gracefully
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
          // Handle network connectivity issues
          console.error('Network error. Please check your internet connection.');
      } else {
          // Handle other errors (e.g., server-side errors)
          console.error('There was a problem submitting your review. Please try again later.');
      }
  }
};




  return (

    <div>

      
      <p
        style={{
        
          fontFamily: "dexaSemi",
          fontSize: 25,
          color: "#282c3f",
        }}
      >
        Past Orders
      </p>
      <div style={{display:"flex",flexDirection:"column",gap:20}}>  
      <div style={{ border: "1px groove #efefef", padding: "4%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{flex:1}}>
            <img src={imge} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5,flex:5 }}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <p
              style={{
                margin: 0,
                fontSize: 18,
                fontWeight: "600",
                fontFamily: "dexaSemi",
              }}
            >
              Catering
            </p>
            <p
              style={{ margin: 0, color: "#7e808c", fontSize: 14 }}
            >
            Delivered on Sun, Dec 10, 2023, 01:48 AM
            </p>
            </div>
        
            <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
              Koramangala
            </p>
            <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
              ORDER #161120827917242 | Sun, Dec 10, 2023, 01:17 AM
            </p>
            <p
              style={{
                margin: 0,
                color: "#7e808c",
                fontSize: 12,
                fontFamily: "dexaSemi",
                color: "#fc2260",
              }}
            >
              VIEW DETAILS
            </p>
          </div>
        </div>

        <div style={{ border: "1px dashed  grey" }}></div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBlock: "2%",
          }}
        >
          <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
            Corn And Cheese Pizza x 2
          </p>

          <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
            Total Paid: ₹218
          </p>
        </div>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:10}}>
        <button
           onClick={handleImageClick}
           style={{
             backgroundColor: "#fc2260",
             color: "white",
             outline: "none",
             border: "none",
             width: "10%",
             borderRadius: 6,
             paddingBlock: 10,
             fontWeight: "500",
             fontSize: 14,
             cursor:'pointer'

           }}
         >
      RATINGS & REVIEWS
         </button>
          <button
           
            style={{
              backgroundColor: "#fc2260",
              color: "white",
              outline: "none",
              border: "none",
              width: "10%",
              borderRadius: 6,
              paddingBlock: 10,
              fontWeight: "500",
              fontSize: 14,
              cursor:'pointer'
            }}
          >
            REORDER
          </button>

          <button
           
           style={{
             backgroundColor: "#fc2260",
             color: "white",
             outline: "none",
             border: "none",
             width: "10%",
             borderRadius: 6,
             paddingBlock: 10,
             fontWeight: "500",
             fontSize: 14,
             cursor:'pointer'
           }}
         >
           GET HELP
         </button>
        </div>
      </div>

      <div style={{ border: "1px groove #efefef", padding: "4%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{flex:1}}>
            <img src={imge1} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5,flex:5 }}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <p
              style={{
                margin: 0,
                fontSize: 18,
                fontWeight: "600",
                fontFamily: "dexaSemi",
                
              }}
            >
              Flowers
            </p>
            <p
              style={{ margin: 0, color: "#7e808c", fontSize: 14 }}
            >
            Delivered on Sun, Dec 10, 2023, 01:48 AM
            </p>
            </div>
        
            <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
              Koramangala
            </p>
            <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
              ORDER #161120827917242 | Sun, Dec 10, 2023, 01:17 AM
            </p>
            <p
              style={{
                margin: 0,
                color: "#7e808c",
                fontSize: 12,
                fontFamily: "dexaSemi",
                color: "#fc2260",
              }}
            >
              VIEW DETAILS
            </p>
          </div>
        </div>

        <div style={{ border: "1px dashed  grey" }}></div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBlock: "2%",
          }}
        >
          <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
            Corn And Cheese Pizza x 2
          </p>

          <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
            Total Paid: ₹218
          </p>
        </div>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:10}}>
        <button
               onClick={handleImageClick}
           style={{
             backgroundColor: "#fc2260",
             color: "white",
             outline: "none",
             border: "none",
             width: "10%",
             borderRadius: 6,
             paddingBlock: 10,
             fontWeight: "500",
             fontSize: 14,
             cursor:'pointer'
             
           }}
         >
           RATINGS & REVIEWS
         </button>
          <button
           
            style={{
              backgroundColor: "#fc2260",
              color: "white",
              outline: "none",
              border: "none",
              width: "10%",
              borderRadius: 6,
              paddingBlock: 10,
              fontWeight: "500",
              fontSize: 14,
              cursor:'pointer'
            }}
          >
            REORDER
          </button>

          <button
           
           style={{
             backgroundColor: "#fc2260",
             color: "white",
             outline: "none",
             border: "none",
             width: "10%",
             borderRadius: 6,
             paddingBlock: 10,
             fontWeight: "500",
             fontSize: 14,
             cursor:'pointer'
           }}
         >
           GET HELP
         </button>
        </div>
      </div>
      </div>
      <Modal
        isOpen={createModal}
        onRequestClose={() => setCreateModal(false)}
        appElement={document.getElementById('root')}
        style={{
          content: {
            width: '700px',
            height: '600px',
            margin: 'auto',

          },
        }}
      >
        <div style={{fontSize:'25px', marginLeft:'7px'}}>Add Review</div>
<div style={{fontSize:'17px'}}><p>Rate your experience for</p></div>

 <div className="container">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          onClick={() => handleStarClick(star.id, star.text, backgroundColor)}
          style={{ backgroundColor: backgroundColor }}
        >
          <AiOutlineStar style={{ fill: star.color, stroke: star.color, strokeWidth: '2px' }} />
        </div>
      ))}
      <div style={{ fontSize: '20px', backgroundColor: backgroundColor }}>{ratingText}</div>
    </div>
    <div className="outerDiv">
      <div className='innerDiv'>
        <div className="imgBox1">
          <div className="txt">Drag & Drop to upload or
            <div {...getRootProps()} className="imgContainer">
              <input {...getInputProps()} />
              <label htmlFor="browse" className="browseTxt">
                Browse
              </label>
            </div>
          </div>
          <div className="bdyBox">
            <div className="viewCards">
              {/* Display selected image */}
              
            </div>
            <label  className="imgBox" htmlFor="browse2">
              <input
                type="file"
                id="browse2"
                name="browse2"
                className="browseInpt"
                onChange={handleFileChange}
              />
              {/* Display dynamic image */}
              {selectedImage ? (
                <img style={{ width:"150px",height:'150px'}}  src={URL.createObjectURL(selectedImage)} className="img" alt="upload image" />
              ) : (
                <img style={{ width:"150px",height:'150px'}} src="default-image-url.jpg" className="img" alt="upload image" />
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
{/* <div style={{font-size: "25px", border: 2px solid black; border-radius: 50%; width: fit-content; padding: 10px;}}> */}

<div className="nmreview">

<div class="comment">
    <input id="reviewInput"  className="input-wrapper" style={{border:'none', outline:"none" ,paddingRight:"26rem"}} type="text" placeholder="Write something..."/>
</div>
</div>

<div  onClick={handleAddReview}className="addr"><button>Add Review</button></div>
      </Modal>
    </div>
  );
};

export default Orders;




