import React, { useState } from "react";
import "./profile.css";
import NavigationBar2 from "../../components/Navbars/NavigationBar2/NavigationBar2";
import Orders from "../../components/Profile/Orders";
import Payments from "../../components/Profile/Payments";
import Favourites from "../../components/Profile/Favourites";
import Address from "../../components/Profile/Address";
import Settings from "../../components/Profile/Settings";
import { MdOutlineCircle } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import SideDrawer from "../../components/SideDrawer/Sidedrawer";
import { RxCross2 } from "react-icons/rx";

const Help = () => {
  const [selectedItem, setSelectedItem] = useState("Orders");
  const [open, setOpen] = useState("Orders");
  const [opendrawer, setOpendrawer] = useState(false);
  const [togglephone, SetTogglePhone] = useState(false);
  const [toggleEmail, SetToggleEmail] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ backgroundColor: "#37718e" }}>
      <NavigationBar2 />
      <div style={{ backgroundColor: "#37718e", paddingLeft: 30, height: 650 }}>
        <div style={{ paddingTop: "4%", paddingBottom: "2%" }}>
          <p
            style={{
              color: "white",
              margin: 0,
              fontFamily: "DexaSemi",
              fontSize: 25,
            }}
          >
            Mohith
          </p>
          <p
            style={{
              color: "white",
              textAlign: "left",
              margin: 0,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span>9876543210</span> <span>.</span> <span>admin@gmail.com</span>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setOpendrawer(true)}
            >
              <BiEdit />
            </span>
          </p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            height: 500,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ backgroundColor: "#e9ecef", flex: 3 }}>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li
                onClick={() => handleItemClick("Orders")}
                style={{
                  paddingBlock: "10%",
                  backgroundColor: selectedItem === "Orders" ? "white" : "",
                  paddingLeft: "5%",
                  fontFamily: "dexaSemi",
                }}
              >
                Orders
              </li>
              <li
                onClick={() => handleItemClick("Favourites")}
                style={{
                  paddingBlock: "10%",
                  backgroundColor: selectedItem === "Favourites" ? "white" : "",
                  paddingLeft: "5%",
                  fontFamily: "dexaSemi",
                }}
              >
                Favourites
              </li>
              <li
                onClick={() => handleItemClick("Payments")}
                style={{
                  paddingBlock: "10%",
                  backgroundColor: selectedItem === "Payments" ? "white" : "",
                  paddingLeft: "5%",
                  fontFamily: "dexaSemi",
                }}
              >
                Payments
              </li>
              <li
                onClick={() => handleItemClick("Address")}
                style={{
                  paddingBlock: "10%",
                  backgroundColor: selectedItem === "Address" ? "white" : "",
                  paddingLeft: "5%",
                  fontFamily: "dexaSemi",
                }}
              >
                Address{" "}
              </li>

              <li
                onClick={() => handleItemClick("Settings")}
                style={{
                  paddingBlock: "10%",
                  backgroundColor: selectedItem === "Settings" ? "white" : "",
                  paddingLeft: "5%",
                  fontFamily: "dexaSemi",
                }}
              >
                Settings{" "}
              </li>
            </ul>
          </div>
          <div className="" style={{ width: "100%", flex: 9 }}>
            {/* Render content based on selected item */}
            {selectedItem && (
              <div
                style={{
                  width: "100%",
                  height: 500,
                  overflowY: "auto",
                  paddingInline: "3%",
                }}
              >
                <SelectedContent item={selectedItem} />
              </div>
            )}
          </div>
        </div>
      </div>

      {opendrawer && (
        <SideDrawer
          placement="right"
          width={"25%"}
          headerStyle={{ padding: "0px" }}
          closeIcon={<RxCross2 color="black" size={24} />}
          onClose={() => {
            setOpendrawer(false);
            SetTogglePhone(false);
            SetToggleEmail(false);
          }}
          closable={true}
          visible={opendrawer}
          bodyStyle={{
            backgroundColor: "",
            padding: "25px",
            paddingRight: "10px",
          }}
        >
          <div style={{ fontFamily: "dexaSemi", fontSize: 20 }}>Edit</div>
          <div style={{ marginTop: "10%", borderBottom: togglephone ? "":"1px solid black"}}>
            <p style={{ fontFamily: "dexaSemi", fontSize: 20 }}>Phone number</p>

            {togglephone ? (
              <div>
                <div
                  style={{
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    paddingInline: "5%",
                    paddingBlock: "5%",
                  }}
                >
                  <p style={{ fontFamily: "dexaSemi", marginBlock: 4 }}>
                    New Phone Number
                  </p>
                  <input
                    placeholder="Enter here..."
                    style={{
                      width: "100%",
                      paddingBlock: 5,
                      border: "none",
                      outline: "none",
                      borderBottom: "1px groove #efefef",
                      
                    }}
                  />

                  <div style={{ marginBlock: "5%" }}>
                    <button
                      style={{
                        backgroundColor: "#fc2260",
                        color: "white",
                        outline: "none",
                        border: "none",
                        borderRadius: 6,
                        paddingBlock: "4%",
                        fontWeight: "500",
                        fontSize: 14,
                        width: "100%",
                      }}
                    >
                      VERIFY
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingRight: "2%",
                }}
              >
                <p style={{ fontSize: 16, fontWeight: "600" }}>9876543210</p>
                <p
                  style={{ fontSize: 16, fontWeight: "700", color: "#fc2260" }}
                  onClick={() => {
                    SetTogglePhone(!togglephone);
                  }}
                >
                  CHANGE
                </p>
              </div>
            )}
          </div>

          <div style={{ marginTop: "10%", borderBottom: toggleEmail ? "":"1px solid black"}}>
            <p style={{ fontFamily: "dexaSemi", fontSize: 20 }}>
              Email Address
            </p>

            {toggleEmail ? (
           
                <div
                  style={{
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    paddingInline: "5%",
                    paddingBlock: "5%",
                  }}
                >
                  <p style={{ fontFamily: "dexaSemi", marginBlock: 4 }}>
                    New Email Id
                  </p>
                  <input
                    placeholder="Enter here..."
                    style={{
                      width: "100%",
                      paddingBlock: 5,
                      border: "none",
                      outline: "none",
                      borderBottom: "1px groove #efefef",
                      
                    }}
                  />

                  <div style={{ marginBlock: "5%" }}>
                    <button
                      style={{
                        backgroundColor: "#fc2260",
                        color: "white",
                        outline: "none",
                        border: "none",
                        borderRadius: 6,
                        paddingBlock: "4%",
                        fontWeight: "500",
                        fontSize: 14,
                        width: "100%",
                      }}
                    >
                      VERIFY
                    </button>
                  </div>
                </div>
            
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingRight: "2%",
                }}
              >
                <p style={{ fontSize: 16, fontWeight: "600" }}>
                  gezte@gmail.com
                </p>
                <p
                  style={{ fontSize: 16, fontWeight: "700", color: "#fc2260" }}
                  onClick={() => SetToggleEmail(!toggleEmail)}
                >
                  CHANGE
                </p>
              </div>
            )}
          </div>
        </SideDrawer>
      )}
    </div>
  );
};
const SelectedContent = ({ item }) => {
  // Render content based on the selected item
  return (
    <div>
      {item === "Orders" && (
        <p>
          {" "}
          <Orders />
        </p>
      )}
      {item === "Favourites" && (
        <p>
          <Favourites />
        </p>
      )}
      {item === "Payments" && (
        <p>
          <Payments />
        </p>
      )}
      {item === "Address" && (
        <p>
          <Address />
        </p>
      )}
      {item === "Settings" && (
        <p>
          <Settings />
        </p>
      )}
    </div>
  );
};

export default Help;
