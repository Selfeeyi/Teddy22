import React, { useState , useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavigationBar2 from "../../components/Navbars/NavigationBar2/NavigationBar2";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import axios from "axios";
import { IoLocationOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import cartimg from "../../asets/images/story-04.jpg";
import veg from "../../asets/images/veg.png";
import { TiMinus } from "react-icons/ti";
import { LuPlus, LuMinus } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import SideDrawer from "../../components/SideDrawer/Sidedrawer";
import { RxCross2 } from "react-icons/rx";
// import { loadScript } from './path/to/loadScriptFile';


const Cart = (route) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location:-',location)
  // const { packageName, /*productImage,*/ packagePrice } = location.state || {};
  // console.log('packagePrice:-',packagePrice)
  const [delivery, setDelivery] = useState(false);
  const [opendrawer, setOpendrawer] = useState(false);
  const [togglephone, SetTogglePhone] = useState(false);
  const [toggleEmail, SetToggleEmail] = useState(false);
  const [coupounToggle, setCoupounToggle] = useState(false);
  const [formData, setFormData ] = useState();
  // console.log('formData:-',formData.amountOfMembers);
  const[packagePrice, setPackagePrice] = useState();

  
  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}
  
  async function displayRazorpay(amount) {
    const res = await loadScript(
         "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    const options = {
        key:'rzp_test_N0BbJUL6KL74v4',
        amount: amount.toString(),
        currency: 'INR',
        amount:amount * 100,
        name: "Pranay",
        description: "Test Transaction",
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            // Mocking the success response
            const mockResult = {
                data: {
                    msg: "Payment successful",
                },
            };

            // Using the mocked response instead of calling the server API
            alert(mockResult.data.msg);
        },
        prefill: {
            name: "Soumya Dey",
            email: "SoumyaDey@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Soumya Dey Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}

useEffect(() => {
  let storedFormData = localStorage.getItem('formData');
  let priceOfPackage = localStorage.getItem('packagePrice');

  if (storedFormData) {
    setFormData(JSON.parse(storedFormData));
  }

  if (priceOfPackage) {
    setPackagePrice(JSON.parse(priceOfPackage));
  }
}, []);
  
  return (
    <div>
      <NavigationBar2 />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingInline: "8%",
          paddingBlock: "2%",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 3.5,
            gap: 20,
          }}
        >
          <div
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              padding: "5%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <p
                style={{
                  fontWeight: "600",
                  fontSize: 18,
                  margin: 0,
                  fontFamily: "dexaSemi",
                }}
              >
                Logged in
              </p>
              <div style={{ position: "relative" }}>
                <FaCheckCircle color={"#60b246"} size={21} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <p
                style={{
                  fontWeight: "600",
                  fontSize: 18,
                  margin: 0,
                  fontFamily: "dexaSemi",
                  position: "relative",
                  top: 3,
                }}
              >
                Selfeey
              </p>
              <div>|</div>{" "}
              <p
                style={{
                  fontWeight: "600",
                  fontSize: 18,
                  margin: 0,
                  position: "relative",
                  top: 3,
                }}
              >
                9874563254
              </p>
            </div>
          </div>

          <div
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              padding: "5%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <p
                style={{
                  fontWeight: "600",
                  fontSize: 18,
                  margin: 0,
                  fontFamily: "dexaSemi",
                }}
              >
                Choose a delivery address
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <p
                style={{
                  fontWeight: "600",
                  fontSize: 14,
                  margin: 0,
                  fontFamily: "dexaSemi",
                  color: "#7e808c",
                }}
              >
                Multiple addresses in this location
              </p>
            </div>
            {delivery === false && (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 45,
                    marginTop: "5%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                      padding: 25,
                    }}
                  >
                    <div style={{}}>
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
                        No. 10/1, V.K. Plaza, Ramamurthi Nagar Main Rd, Annaiah
                        Reddy Layout, Dodda Banaswadi, Bengaluru, Karnataka
                        560043
                      </p>

                      <div
                        style={{
                          paddingBlock: 15,
                        }}
                      >
                        <button
                          onClick={() => setDelivery(!delivery)}
                          style={{
                            backgroundColor: "#fc2260",
                            outline: "none",
                            border: "none",
                            color: "white",
                            paddingBlock: "3%",
                            fontWeight: "600",
                            borderRadius: 4,
                          }}
                        >
                          DELIVERE HERE
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                      padding: 25,
                    }}
                  >
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
                        No. 10/1, V.K. Plaza, Ramamurthi Nagar Main Rd, Annaiah
                        Reddy Layout, Dodda Banaswadi, Bengaluru, Karnataka
                        560043
                      </p>

                      <div
                        style={{
                          paddingBlock: 15,
                        }}
                      >
                        <button
                          onClick={() => setDelivery(!delivery)}
                          style={{
                            backgroundColor: "#fc2260",
                            outline: "none",
                            border: "none",
                            color: "white",
                            paddingBlock: "3%",
                            fontWeight: "600",
                            borderRadius: 4,
                          }}
                        >
                          DELIVERE HERE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginBlock: "4%" }}>
                  <button
                    onClick={() => setOpendrawer(!opendrawer)}
                    style={{
                      backgroundColor: "#fc2260",
                      outline: "none",
                      border: "none",
                      color: "white",
                      paddingBlock: "2%",
                      fontWeight: "600",
                      paddingInline: "2%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      borderRadius: 8,
                    }}
                  >
                    <FaPlus /> ADD NEW ADDRESS
                  </button>
                </div>
              </>
            )}

            {delivery === true && (
              <div
                style={{
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                  padding: "5%",
                  marginBlock: "5%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "600",
                        fontSize: 18,
                        margin: 0,
                        fontFamily: "dexaSemi",
                      }}
                    >
                      Delivery Address
                    </p>
                    <div style={{ position: "relative" }}>
                      <FaCheckCircle color={"#60b246"} size={21} />
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => setDelivery(!delivery)}
                      style={{
                        background: "transparent",
                        outline: "none",
                        border: "none",
                        fontWeight: "600",
                        fontFamily: "dexaSemi",
                        color: "#fc2260",
                      }}
                    >
                      CHANGE
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "70%",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: 18,
                      margin: 0,
                      fontFamily: "dexaSemi",
                    }}
                  >
                    Home
                  </p>

                  <p style={{ margin: 0, color: "#7e808c", fontSize: 14 }}>
                    No. 10/1, V.K. Plaza, Ramamurthi Nagar Main Rd, Annaiah
                    Reddy Layout, Dodda Banaswadi, Bengaluru, Karnataka 560043
                  </p>
                </div>
              </div>
            )}
          </div>

          <div
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              paddingInline: "5%",
              paddingBlock: "2%",
            }}
          >
            <div style={{}}>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: 18,
                  margin: 0,
                  fontFamily: "dexaSemi",
                }}
              >
                Choose payment method
              </p>
            </div>
            <div style={{ width: "100%", marginBlock: "3%" }}>
              <button
                style={{
                  backgroundColor: "#fc2260",
                  outline: "none",
                  border: "none",
                  color: "white",
                  paddingBlock: "2%",
                  fontWeight: "600",
                  paddingInline: "2%",
                  textAlign: "center",

                  borderRadius: 8,
                  width: "100%",
                }}
                onClick={()=>displayRazorpay(Number(packagePrice * Number(formData?.amountOfMembers)) + Number(packagePrice * Number(formData?.amountOfMembers) * 0.05)+
                  (formData?.amountOfMembers >= 10 ? 16 : formData?.amountOfMembers >= 18 ?  18: 43) +  (Number(packagePrice) * Number(formData?.amountOfMembers) * 0.1))}

              >
                PROCEED TO PAY
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1.5,
            gap: 20,
          }}
        >
          <div
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              padding: "5%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <div style={{ width: '50%', height: '50%' }}>
                {/* <img src={`https://gezte.com/api/${location.state.productImage}`} style={{ width: "100%", height: "100%" }} /> */}
              </div>
              <div>
                <p style={{ fontFamily: "dexaSemi", margin: 0 }}>
                  {/* {packageName} */}
                </p>
                {/* <p style={{ fontFamily: "dexaLight", margin: 0 , fontSize:'14px'}}>
                  {location.state.productDescription}
                </p> */}
              </div>
            </div>
            <div
              onClick={() => setCoupounToggle(!coupounToggle)}
              style={{
                border: "1px dashed #dee2e6",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                cursor:"pointer"
              }}
            >
              <BiSolidOffer color="#fc2260" size={25} />
              <p style={{ fontFamily: "dexaSemi", color: "#fc2260" }}>
                Apply Coupon
              </p>
            </div>

            {coupounToggle && (
              <div
                style={{ marginBlock: "3%", width: "100%", display: "flex" }}
              >
                <input
                  type="text"
                  placeholder="Enter Coupoun Code"
                  style={{
                    border: "1px groove #dee2e6",
                    borderRight: "none",
                    outline: "none",
                    width: "100%",
                    flex: 9,
                    paddingBlock: "5%",
                    paddingInline: "1%",
                  }}
                />
                <button
                  style={{
                    border: "1px groove #dee2e6",
                    outline: "none",
                    width: "100%",
                    flex: 3,
                    color: "white",
                    backgroundColor: "#fc2260",
                    fontFamily: "dexaSemi",
                  }}
                >
                  Apply
                </button>
              </div>
            )}

            <div style={{ marginBlock: "4%" }}>
              <p style={{ fontFamily: "dexaSemi", fontSize: 14 }}>
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
                      fontFamily: "dexaLight",
                      fontSize: 14,
                      color: "grey",
                      margin: 0,
                    }}
                  >
                    Package Price 
                  </p>
                  <p
                    style={{
                      fontFamily: "dexaLight",
                      fontSize: 14,
                      color: "grey",
                      margin: 0,
                    }}
                  >
                    <span>₹</span> {packagePrice}
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
                    Sub Total
                  </p>
                  <p
                    style={{
                      fontFamily: "dexaLight",
                      fontSize: 14,
                      color: "grey",
                      margin: 0,
                    }}
                  >
                   
                    <span>₹</span> {packagePrice * Number(formData?.amountOfMembers)}
                  
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
                    {/* <span>₹</span>{packagePrice * Number(formData?.amountOfMembers)*0.05} */}
                    <span>₹{packagePrice * Number(formData?.amountOfMembers) * 0.05}</span>
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
                    Delivery Fee 2.5 kms
                  </p>
                  <p
                    style={{
                      fontFamily: "dexaLight",
                      fontSize: 14,
                      color: "grey",
                      margin: 0,
                    }}
                  >
                   {formData?.amountOfMembers >= 10 ? <span>₹ 16</span> : formData?.amountOfMembers >= 18 ? <span>₹ 18</span>: <span>₹ 43</span>  } 
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
                   <span>₹</span> <span>{Math.round(Number(packagePrice) * Number(formData?.amountOfMembers) * 0.1)} </span> 
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
                  fontFamily: "dexaSemi",
                  fontSize: 14,
                  color: "grey",
                  margin: 0,
                }}
              >
                TO PAY
              </p>
              <p
                style={{
                  fontFamily: "dexaSemi",
                  fontSize: 14,
                  color: "grey",
                  margin: 0,
                }}
              >
                
                <span>₹ {Number(packagePrice * Number(formData?.amountOfMembers)) + Number(packagePrice * Number(formData?.amountOfMembers) * 0.05)+
                 (formData?.amountOfMembers >= 10 ? 16 : formData?.amountOfMembers >= 18 ?  18: 43) +  (Number(packagePrice) * Number(formData?.amountOfMembers) * 0.1)
                }</span>
              </p>
            </div>
          </div>

          <div
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              padding: "5%",
            }}
          >
            <div style={{ border: "1px groove #ced4da", padding: "2%" }}>
              <p
                style={{ margin: 0, fontFamily: "dexaSemi", color: "#495057" }}
              >
                Review your order and address details to avoid cancellations
              </p>

              <p style={{ fontSize: 14 }}>
                <span style={{ color: "#fc2260" }}>Note:</span> If you cancel
                within 60 seconds of placing your order, a 100% refund will be
                issued. No refund for cancellations made after 60 seconds.
              </p>
              <p
                style={{
                  fontSize: 13,
                  fontFamily: "dexaLight",
                  color: "#808080",
                }}
              >
                Avoid cancellation as it leads to food wastage.
              </p>

              <p
                style={{
                  borderBottom: "1px dashed #fc2260",
                  width: "fit-content",
                  color: "#FC2260",
                  fontFamily: "dexaLight",
                  fontSize: 14,
                }}
              >
                Read cancellation policy
              </p>
            </div>
          </div>
        </div>
      </div>

      {opendrawer && (
        <SideDrawer
          placement="left"
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
          <div style={{ fontFamily: "dexaSemi", fontSize: 20 }}>
            Add New Address
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
              <p style={{ marginBlock: 8, fontWeight: "600", fontSize: 18 }}>
                Address
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
              <p style={{ marginBlock: 8, fontWeight: "600", fontSize: 18 }}>
                Landmark
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
      )}
    </div>
  );
};

export default Cart;
