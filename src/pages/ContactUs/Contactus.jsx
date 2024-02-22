import React, { useState } from "react";
import concimg from "../../asets/images/contact.jpg";
import NavigationBar2 from "../../components/Navbars/NavigationBar2/NavigationBar2";
import { FaUserPlus, FaUserCog } from "react-icons/fa";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import Comments from "../../asets/svg/Comments";
import Footer from "../../components/Footer/Footer";
const Contactus = () => {
  const [formtoggle,setFormtoggle] = useState(false)
  return (
    <div>
      <NavigationBar2 />
      <div style={{ width: "100%", marginTop: "3%" }}>
        <img src={concimg} style={{ width: "100%" }} />
      </div>



      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginInline: "10%",
          marginTop:25
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FaUserPlus color="#fc2260" size={135} />
          <div
            style={{
              fontWeight: "600",
              fontSize: 25,
              fontFamily: "dexaSemi",
              paddingTop: "1%",
            }}
          >
            New User
          </div>
          <div style={{ paddingBottom: "6%" }}>Profile Update/Information</div>
          <div>For any query reach us on:</div>
          <div>
            <p style={{ textAlign: "center", margin: 0, fontWeight: "600" }}>
              usersupport@selfeey.com
            </p>
            <p style={{ textAlign: "center", margin: 0, fontWeight: "600" }}>
              +91-8904241444 / 080-35010774
            </p>
          </div>
          <div style={{ paddingBlock: "10%" }}>
            <button
              style={{
                outline: "none",
                background: "transparent",
                borderRadius: 20,
                paddingBlock: "10%",
                border: "1px groove #fc2260",
                color: "#fc2260",
                paddingInline: 20,
              }}
            >
              Click Here
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FaUserCog color="#fc2260" size={135} />
          <div
            style={{
              fontWeight: "600",
              fontSize: 25,
              fontFamily: "dexaSemi",
              paddingTop: "1%",
            }}
          >
            Technical
          </div>
          <div style={{ paddingBottom: "6%" }}>
            Find Consultant/Book Appointment
          </div>
          <div>For any query reach us on:</div>
          <div>
            <p style={{ textAlign: "center", margin: 0, fontWeight: "600" }}>
              techsupport@selfeey.com
            </p>
            <p style={{ textAlign: "center", margin: 0, fontWeight: "600" }}>
              +91-8904241444 / 080-35010774
            </p>
          </div>
          <div style={{ paddingBlock: "10%" }}>
            <button
              style={{
                outline: "none",
                background: "transparent",
                borderRadius: 20,
                paddingBlock: "10%",
                border: "1px groove #fc2260",
                color: "#fc2260",
                paddingInline: 20,
              }}
            >
              Click Here
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <BsFillCreditCard2BackFill color="#fc2260" size={135} />
          <div
            style={{
              fontWeight: "600",
              fontSize: 25,
              fontFamily: "dexaSemi",
              paddingTop: "1%",
            }}
          >
            Payment
          </div>
          <div style={{ paddingBottom: "6%" }}>Payments/Data Related</div>
          <div>For any query reach us on:</div>
          <div>
            <p style={{ textAlign: "center", margin: 0, fontWeight: "600" }}>
              usersupport@selfeey.com
            </p>
            <p style={{ textAlign: "center", margin: 0, fontWeight: "600" }}>
              +91-8904241444 / 080-35010774
            </p>
          </div>
          <div style={{ paddingBlock: "10%" }}>
            <button
              style={{
                outline: "none",
                background: "transparent",
                borderRadius: 20,
                paddingBlock: "10%",
                border: "1px groove #fc2260",
                color: "#fc2260",
                paddingInline: 20,
              }}
            >
              Click Here
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBlock: "5%",
        }}
      >
        <div
          style={{
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: 15,
            width: 800,
            paddingBlock: "2%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: 800,
            }}
          >
            <Comments />
            <p
              style={{
                fontWeight: "600",
                fontSize: 25,
                margin: 0,
                marginBottom: 25,
              }}
            >
              For Suggestion & Feedback
            </p>
            <div style={{ margin: 0 }}>
              <button
              onClick={()=>setFormtoggle(!formtoggle)}
                style={{
                  outline: "none",
                  background: "transparent",
                  borderRadius: 20,
                  border: "1px groove #fc2260",
                  color: "#fc2260",
                  paddingInline: 20,
                  paddingBlock: 10,
                }}
              >
                Click Here
              </button>
            </div>
          </div>

          {
            formtoggle &&
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginInline:"4%",
              gap:15
            }}
          >
            <div style={{display:"flex",flexDirection:"column",gap:10,width:"100%"}}>
            <label style={{color:"#6c757d"}}>Name</label>
            <input placeholder="Enter..." style={{outline:"none",width:"100%",paddingBlock:10,border:"1px groove #adb5bd",borderRadius:4,paddingInline:5}}/>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:10,width:"100%"}}>
            <label style={{color:"#6c757d"}}>Mobile</label>
            <input placeholder="Enter..." style={{outline:"none",width:"100%",paddingBlock:10,border:"1px groove #adb5bd",borderRadius:4,paddingInline:5}}/>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:10,width:"100%"}}>
            <label style={{color:"#6c757d"}}>Email</label>
            <input placeholder="Enter..." style={{outline:"none",width:"100%",paddingBlock:10,border:"1px groove #adb5bd",borderRadius:4,paddingInline:5}}/>
            </div>

            <div style={{display:"flex",flexDirection:"row",width:"100%",gap:10}}>
            <div style={{display:"flex",flexDirection:"column",gap:10,width:"100%"}}>
            <label style={{color:"#6c757d"}}>Country</label>
            <select style={{outline:"none", color:"#6c757d",width:"100%",paddingBlock:10,border:"1px groove #adb5bd",borderRadius:4,paddingInline:5,fontSize:15}}>
              <option>India</option>
            </select>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:10,width:"100%"}}>
            <label style={{color:"#6c757d"}}>City</label>
            <input placeholder="Enter..." style={{outline:"none",width:"100%",paddingBlock:10,border:"1px groove #adb5bd",borderRadius:4,paddingInline:5}}/>
            </div>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:10,width:"100%"}}>
            <label style={{color:"#6c757d"}}>Suggestion/Feedback</label>
            <textarea placeholder="Drop your suggestion/feedback !" style={{outline:"none",width:"100%",paddingBlock:10,border:"1px groove #adb5bd",borderRadius:4,paddingInline:5}}/>
            </div>
       
            <div style={{ marginTop:"3%" }}>
            <button
              style={{
                outline: "none",
                background: "transparent",
                borderRadius: 20,
                paddingBlock: "10%",
                border: "1px groove #fc2260",
                color: "#fc2260",
                paddingInline: 20,
              }}
            >
              Submit Here
            </button>
          </div>
          </div>
          }

          
        </div>
      </div>

      <div style={{}}>
        <Footer />
      </div>
    </div>
  );
};

export default Contactus;
