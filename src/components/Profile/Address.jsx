import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const Address = () => {
  return (
    <div>
      {" "}
      <p
        style={{
          fontFamily: "dexaSemi",
          fontSize: 25,
          color: "#282c3f",
        }}
      >
        Manage Addresses
      </p>
      <div style={{  padding: "4%" }}>

        <div style={{display:"flex",flexDirection:"row",gap:45}}>
        <div style={{ display: "flex", gap: 10, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",padding:25 }}>
          <div style={{}}>
         <AiOutlineHome size={26}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
          
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 18,
                fontWeight: "600",
                fontFamily: "dexaSemi",
              }}
            >
              Home
            </p>

            <p style={{ margin: 0, color: "#7e808c", fontSize: 14 }}>
            No. 10/1, V.K. Plaza, Ramamurthi Nagar Main Rd, Annaiah Reddy Layout, Dodda Banaswadi, Bengaluru, Karnataka 560043
            </p>
      

            <div style={{display:"flex",flexDirection:"row",gap:10,paddingBlock:15}}>
            <p
              style={{
                margin: 0,
                color: "#7e808c",
                fontSize: 12,
                fontFamily: "dexaSemi",
                color: "#fc2260",
              }}
            >
              EDIT
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
              DELETE
            </p>
            </div>
        
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",padding:25 }}>
          <div style={{}}>
          <IoLocationOutline size={26} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
          
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 18,
                fontWeight: "600",
                fontFamily: "dexaSemi",
              }}
            >
              Other
            </p>

            <p style={{ margin: 0, color: "#7e808c", fontSize: 14 }}>
            No. 10/1, V.K. Plaza, Ramamurthi Nagar Main Rd, Annaiah Reddy Layout, Dodda Banaswadi, Bengaluru, Karnataka 560043
            </p>
      

           <div style={{display:"flex",flexDirection:"row",gap:10,paddingBlock:15}}>
            <p
              style={{
                margin: 0,
                color: "#7e808c",
                fontSize: 12,
                fontFamily: "dexaSemi",
                color: "#fc2260",
              }}
            >
              EDIT
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
              DELETE
            </p>
            </div>
        
          </div>
        </div>

        </div>
      

      

       
  
      </div>
    </div>
  );
};

export default Address;
