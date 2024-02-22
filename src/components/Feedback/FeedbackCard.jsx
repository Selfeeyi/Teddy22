import React from "react";
import CorporateCaters from "../../asets/images/corporateCatersimg.png";

const FeedbackCard = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row",gap:5, boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)",marginInline:"5%",backgroundColor:"white",borderRadius:15,height:150,width:320}}
    >
      <div style={{flex:1}}>
        <img src={CorporateCaters} style={{borderRadius:15,width:"100%",height:"100%"}} />
      </div>  
      {/* <div style={{flex:2,}}>
        <p style={{margin:0,fontWeight:"600",textAlign:"left"}}> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint 
        </p>
        <p style={{fontWeight:"600",textAlign:"left"}}>Nikitha -Verma</p>
      </div> */}
    </div>
  );
};

export default FeedbackCard;
