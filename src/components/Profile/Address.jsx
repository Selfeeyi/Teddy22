

import React, { useState } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import SideDrawer from "../SideDrawer/Sidedrawer";

const Address = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const handleEditClick = () => {
    setIsSideDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsSideDrawerOpen(false);
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
        Manage Addresses
      </p>
      <div style={{ padding: "4%" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: 45 }}>
          <div style={{ display: "flex", gap: 10, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", padding: 25 }}>
            <div>
              <AiOutlineHome size={26} />
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
              <div style={{ display: "flex", flexDirection: "row", gap: 10, paddingBlock: 15 }}>
                <p
                  onClick={handleEditClick}
                  style={{
                    margin: 0,
                    color: "#7e808c",
                    fontSize: 12,
                    fontFamily: "dexaSemi",
                    color: "#fc2260",
                    cursor: "pointer", // Add cursor pointer
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
          <div style={{ display: "flex", gap: 10, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", padding: 25 }}>
            <div>
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
              <div style={{ display: "flex", flexDirection: "row", gap: 10, paddingBlock: 15 }}>
                <p   onClick={handleEditClick}
                  style={{
                    
                    margin: 0,
                    color: "#7e808c",
                    fontSize: 12,
                    fontFamily: "dexaSemi",
                    color: "#fc2260",
                    cursor: "pointer", // Add cursor pointer
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
      <SideDrawer
        // title="Your Drawer Title"
        onClose={handleCloseDrawer}
        visible={isSideDrawerOpen}
        width={"25%"}
        placement="left" // Position the drawer on the left side
      >
        {/* Content inside the drawer */}
        {/* Hello, I'll open */}

        <div style={{ border: '1px solid #ced4da', padding: '6px' }}>
            <p style={{ marginBlock: '8px', fontWeight: '600', fontSize: '18px' }}>Map</p> 
            <div placeholder="Enter here..."  style={{
    width: '100%',
    padding: '10px', // Increase vertical padding
    height: '11rem', // Increase overall height
    border: 'none',
    outline: 'none'
  }}/>
          </div>

        <div style={{ fontFamily: "dexaSemi", fontSize: 20 ,marginTop:'2rem'}}>
           Edit Address
          </div>

          <div
            style={{
              marginBlock: "5%",
              display: "flex",
              flexDirection: "column",
              gap: 25,
            }}
          >
              <div style={{ border: "1px groove #ced4da", padding: 6 }}>
  <p style={{ marginBlock: 4, fontWeight: "600", fontSize: 14 }}> {/* Decrease margin and font size */}
    Address
  </p>
  <input
    placeholder="Enter here..."
    style={{
      width: "100%",
      padding: "3px 5px", // Decrease padding
      border: "none",
      outline: "none",
      fontSize: 12 // Decrease font size
    }}
  />
</div>


            <div style={{ border: "1px groove #ced4da", padding: 6 }}>
              <p style={{ marginBlock: 8, fontWeight: "600", fontSize: 18 }}>
                Door /Flat No
              </p>
              <input
                placeholder="Enter here..."
                style={{
                  width: "100%",
                  paddingBlock: 5,
                  border: "none",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ border: "1px groove #ced4da", padding: 6 }}>
  <p style={{ marginBlock: 4, fontWeight: "600", fontSize: 14 }}> {/* Decrease margin and font size */}
   Landmark
  </p>
  <input
    placeholder="Enter here..."
    style={{
      width: "100%",
      padding: "3px 5px", // Decrease padding
      border: "none",
      outline: "none",
      fontSize: 12 // Decrease font size
    }}
  />
</div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 25,
              }}
            >
              <button
                style={{
                  background: "#adb5bd",
                  color: "white",
                  outline: "none",
                  border: "none",
                  paddingInline: "5%",
                  paddingBlock: "3%",
                  borderRadius: 8,
                  cursor:'pointer'
                }}
              >
                Home
              </button>

              <button
                style={{
                  background: "#adb5bd",
                  color: "white",
                  outline: "none",
                  border: "none",
                  paddingInline: "5%",
                  paddingBlock: "3%",
                  borderRadius: 8,
                  cursor:'pointer'
                }}
              >
                Work
              </button>

              <button
                style={{
                  background: "#adb5bd",
                  color: "white",
                  outline: "none",
                  border: "none",
                  paddingInline: "5%",
                  paddingBlock: "3%",
                  borderRadius: 8,
                  cursor:'pointer'
                }}
              >
                Other
              </button>
            </div>
            <div>
              <button
                style={{
                  background: "#FC2260",
                  color: "white",
                  outline: "none",
                  border: "none",
                  paddingInline: "5%",
                  paddingBlock: "3%",
                  borderRadius: 8,
                  width: "100%",
                  fontFamily:"dexaSemi"
                }}
              >
                SAVE ADRESS AND PROCEED
              </button>
            </div>
          </div>
      </SideDrawer>
      <div></div>
    </div>
  );
};

export default Address;
