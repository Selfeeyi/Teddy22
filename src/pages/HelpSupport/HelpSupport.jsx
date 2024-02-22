import React, { useState } from "react";
import "./help.module.css";
import HelpWithOrder from "../../components/HelpAndSupport/HelpWithOrder";
import GeneralIssues from "../../components/HelpAndSupport/GeneralIssues";
import Regarding from "../../components/HelpAndSupport/Regarding";
import Faq from "../../components/HelpAndSupport/Faq";
import NavigationBar2 from '../../components/Navbars/NavigationBar2/NavigationBar2'

const Help = () => {
  const [selectedItem, setSelectedItem] = useState("HelpWithorders");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{backgroundColor: "#37718e"}}>
       <NavigationBar2 />
      <div style={{ backgroundColor: "#37718e", paddingLeft: 30, height: 650 }}>
        <div style={{paddingTop:"4%",paddingBottom:"2%"}}>
        <p style={{ color: "white",margin:0,fontFamily:"DexaSemi",fontSize:25}}>Help And Support</p>
        <p style={{ color: "white", textAlign: "left",margin:0}}>
          Let's take a step ahead and help you better
        </p>
        </div>
     
        <div  style={{backgroundColor:"white",height:500,display:"flex",flexDirection:"row"}}>
          <div  style={{backgroundColor:"#e9ecef",flex:3}}>
            <ul style={{ display: "flex", flexDirection: "column",}}>
              <li onClick={() => handleItemClick("HelpWithorders")} style={{paddingBlock:"10%",backgroundColor:selectedItem === "HelpWithorders" ?"white":"",paddingLeft:'5%',fontFamily:"dexaSemi"}}>
                Help With Orders
              </li>
              <li onClick={() => handleItemClick("GeneralIssues")} style={{paddingBlock:"10%",backgroundColor:selectedItem === "GeneralIssues" ?"white":"",paddingLeft:'5%',fontFamily:"dexaSemi"}}>
                {" "}
                General Issues
              </li>
              <li
                onClick={() => handleItemClick("RegardingTermsAndConditions")}
                style={{paddingBlock:"10%",backgroundColor:selectedItem === "RegardingTermsAndConditions" ?"white":"",paddingLeft:'5%',fontFamily:"dexaSemi"}}
              >
                {" "}
                 Terms And Conditions
              </li>
              <li onClick={() => handleItemClick("Faq")}
              style={{paddingBlock:"10%",backgroundColor:selectedItem === "Faq" ?"white":"",paddingLeft:'5%',fontFamily:"dexaSemi"}} 
              > FAQ</li>
            
            </ul>
          </div>
          <div className="" style={{width:"100%",flex:9,}}  >
            {/* Render content based on selected item */}
            {selectedItem && (
                <div style={{ width: "100%", height: 500, overflowY: "auto" , paddingInline: "3%"}}>
                <SelectedContent item={selectedItem} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};
const SelectedContent = ({ item }) => {
  // Render content based on the selected item
  return (
    <div>
      {item === "HelpWithorders" && (
        <p>
          {" "}
          <HelpWithOrder />
        </p>
      )}
      {item === "GeneralIssues" && (
        <p>
          <GeneralIssues />
        </p>
      )}
      {item === "RegardingTermsAndConditions" && (
        <p>
          <Regarding />
        </p>
      )}
      {item === "Faq" && (
        <p>
          <Faq />
        </p>
      )}
      {/* {item === "settings" && <p>Settings content goes here.</p>} */}
    </div>
  );
};

export default Help;
