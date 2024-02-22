import React from "react";
import NavigationBar2 from "../../components/Navbars/NavigationBar2/NavigationBar2";
const DeleteAccount = () => {
  return (
    <div>
      <NavigationBar2 />

      <div
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "row",
          marginInline:"12%",
          marginTop:"5%",
          paddingBlock:"5%",
          gap:20
        }}
      >
        <div style={{ flex: 1 ,display:"flex",flexDirection:"row",justifyContent:"center",borderRight:"1px groove #ced4da"}}>
          <div style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",width:"fit-content",height:"fit-content",padding:"2%",fontWeight:"700",color:"var(--text-color)",backgroundColor:"var(--background-color)",borderRadius:10}}>
          Account Delete Request
          </div>
        </div>
        <div style={{ flex: 1,display:"flex",flexDirection:"column",gap:25 }}>
            <div style={{display:"flex",flexDirection:"column",borderBottom:"1px groove #ced4da",paddingBottom:"1%",gap:10,width:"60%"}}>
                <label style={{fontWeight:"600"}}>Enter Email</label>
            <input type="text" placeholder="Enter.." style={{border:"none",outline:"none"}}/>
            </div>

            <div style={{display:"flex",flexDirection:"column",borderBottom:"1px groove #ced4da",paddingBottom:"1%",gap:10,width:"60%"}}>
                <label style={{fontWeight:"600"}}>Enter Password</label>
            <input type="password" placeholder="Enter.." style={{border:"none",outline:"none"}}/>
            </div>

            <div style={{display:"flex",flexDirection:"column",paddingBottom:"1%",gap:10,width:"60%"}}>
                <label style={{fontWeight:"600"}}>Reason For Deletion </label>
            <textarea  rows={5} placeholder="Enter.." style={{border:"1px groove #ced4da",outline:"none",borderRadius:8,padding:5}}/>
            </div>

            <div>
                <button style={{backgroundColor:"var(--background-color)",color:"var(--text-color)",paddingInline:"2%",paddingBlock:8,borderRadius:15,border:"none",outline:"none",fontWeight:"600",letterSpacing:1}}>Confirm</button>
            </div>
           


        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
