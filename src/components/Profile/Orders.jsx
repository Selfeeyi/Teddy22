import React from "react";
import imge from "../../asets/images/cateringimg.png";
import imge1 from "../../asets/images/flowerimg.png";
import Modal from './Modal'

import  { useState } from 'react';

const Orders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            }}
            onClick={handleButtonClick} // Add onClick handler
          >
            REORDER
          </button>
         
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
  {/* Content of your modal */}
  <div style={{ textAlign: 'center' }}>
    <p style={{ fontSize: '1.5rem' }}>Do You want to cancel</p>
    <button  onClick={handleCloseModal} style={{ fontSize: '1rem', border: '2px solid #041a68', backgroundColor: '#041a68', color: 'white', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer' }}>
      Ok
    </button>
  </div>
</Modal>









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
           }}
         >
           GET HELP
         </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Orders;
