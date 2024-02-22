import React from "react";
import abtbg from "../../asets/images/abtbg.png";
import NavigationBar2 from "../../components/Navbars/NavigationBar2/NavigationBar2";
import hand from "../../asets/images/hand.jpg";
const Aboutus = () => {
  return (
    <div>
      <NavigationBar2 />
      <div style={{ width: "100%" }}>
        <img src={abtbg} style={{ width: "100%" }} />
      </div>
      <div
        style={{ marginInline: "10%", display: "flex", flexDirection: "row",marginBottom:"10%",alignItems:"center"}}
      >
        <div style={{ flex: 1 }}>
          <p
            style={{
              margin: 0,
              fontSize: 35,
              fontWeight: "600",
              color: "#545454",
              fontFamily: "dexaSemi",
            }}
          >
            About Selfeey
          </p>
          <div>
            <p>
              Selfeey, most effective Social Networking & precisely to Select
              your Personal Consultant for Lifetime. Avail support via video
              chat from verified Experts, Mentors & Professional Consultants,
            </p>
            <p>
              A complete all-in-one revolutionizing services that enables you to
              select Personal Consultant & book reliable & cost effective
              Personal Video Consultation and avail services directly across
              various Categories, 100+ specialized areas in Business,
              Healthcare, HR, Wealth, Education & Travel.
            </p>
            <p>
              Get free direct Access to Robust connections of 20000+ India’s top
              Experts, add as a friend in your personal network, avail any
              service on your need instantly 24/7.
            </p>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ width: "90%",boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",borderTopRightRadius: 85,borderBottomLeftRadius: 85,}}>
            <img
              src={hand}
              style={{ width: "100%", borderTopRightRadius: 85, }}
            />
            <div style={{paddingInline:"5%",paddingBottom:"6%",borderBottomLeftRadius: 85,}}>
              <p style={{ fontSize: 22 }}>Our Mission</p>
              <p>
                "It is our mission to scale and bring Selfeey to enable billion
                people to find best Personal Qualified Expert Support to resolve
                every concern & problem."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
