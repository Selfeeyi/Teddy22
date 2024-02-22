import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";


const Faq = () => {
  const [issue,setIssue] = useState(false)
  const [issue1,setIssue1] = useState(false)
  return (
    <div>
      <p
        style={{
       
          fontFamily: "dexaSemi",
          fontSize: 25,
          color: "#282c3f",
        }}
      >
        General issues
      </p>

      <div style={{borderBottom: "2px groove #efefef"}}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} onClick={()=>setIssue(!issue)}>
        <p style={{fontSize:20,color:"#3d4152"}}>What is Gezte Customer Care Number ?</p>
        <p>{issue ?<MdOutlineKeyboardArrowUp size={24} />: <RiArrowDownSLine  size={23}/>}</p>
        </div>
       

       {
        issue &&
        
        <p style={{fontSize:14,color:"#3d4152",fontFamily:"dexaLight"}}>
        We value our customer’s time and hence moved away from a single
        customer care number to a comprehensive chat-based support system for
        quick and easy resolution. You no longer have to go through the maze
        of an IVRS call support. Just search for your issue in the help
        section on this page and initiate a chat with us. A customer care
        executive will be assigned to you shortly.
      </p>
       }

     
      </div>



      <div style={{borderBottom: "2px groove #efefef"}}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} onClick={()=>setIssue1(!issue1)}>
        <p style={{fontSize:20,color:"#3d4152"}}>I am unable to find the Gezte</p>
        <p>{issue1 ?<MdOutlineKeyboardArrowUp size={24} />: <RiArrowDownSLine  size={23}/>}</p>
        </div>
       

       {
        issue1 &&
        
        <p style={{fontSize:14,color:"#3d4152",fontFamily:"dexaLight"}}>
        We value our customer’s time and hence moved away from a single
        customer care number to a comprehensive chat-based support system for
        quick and easy resolution. You no longer have to go through the maze
        of an IVRS call support. Just search for your issue in the help
        section on this page and initiate a chat with us. A customer care
        executive will be assigned to you shortly.
      </p>
       }

     
      </div>

      <div style={{borderBottom: "2px groove #efefef"}}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} onClick={()=>setIssue(!issue)}>
        <p style={{fontSize:20,color:"#3d4152"}}>What is Gezte Customer Care Number ?</p>
        <p>{issue ?<MdOutlineKeyboardArrowUp size={24} />: <RiArrowDownSLine  size={23}/>}</p>
        </div>
       

       {
        issue &&
        
        <p style={{fontSize:14,color:"#3d4152",fontFamily:"dexaLight"}}>
        We value our customer’s time and hence moved away from a single
        customer care number to a comprehensive chat-based support system for
        quick and easy resolution. You no longer have to go through the maze
        of an IVRS call support. Just search for your issue in the help
        section on this page and initiate a chat with us. A customer care
        executive will be assigned to you shortly.
      </p>
       }

     
      </div>



      <div style={{borderBottom: "2px groove #efefef"}}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} onClick={()=>setIssue1(!issue1)}>
        <p style={{fontSize:20,color:"#3d4152"}}>I am unable to find the Gezte</p>
        <p>{issue1 ?<MdOutlineKeyboardArrowUp size={24} />: <RiArrowDownSLine  size={23}/>}</p>
        </div>
       

       {
        issue1 &&
        
        <p style={{fontSize:14,color:"#3d4152",fontFamily:"dexaLight"}}>
        We value our customer’s time and hence moved away from a single
        customer care number to a comprehensive chat-based support system for
        quick and easy resolution. You no longer have to go through the maze
        of an IVRS call support. Just search for your issue in the help
        section on this page and initiate a chat with us. A customer care
        executive will be assigned to you shortly.
      </p>
       }

     
      </div>
    </div>
  );
};

export default Faq;
