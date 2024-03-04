import React, { useState} from "react";
import {filterOption} from '../../common/constant';



import css from "../ShowCase/ShowCase.module.css";
import './caters.module.css';


const SideMenu = () =>{
    const [ival, setIval] = useState(0);
   return(
//    <div
//     className={"css.innerDiv6Body"}
//     style={{ display: "flex", flexDirection: "row", gap: 20 }}
//   >
    <div
      className={"css.innerDiv3"}
      style={{
        paddingTop: 20,
        flex: 2.5,
        borderRight: "1px groove #dee2e6",
      }}
    >
      <p
        style={{
          fontWeight: "700",
          fontSize: 30,
          fontFamily: "dexaSemi",
        }}
      >
        Menu
      </p>

      <div>
        {filterOption.map((item, i) => (
          <div
            key={i}
            value
            onClick={() => setIval(i)}
            className={ival === i ? 'active-border':''}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color:'white',
              gap: "5%",
             borderLeft: ival === i ? "4px solid white" : "",
              borderTop: ival === i ? "1px groove #dee2e6" : "",
              borderBottom: ival === i ? "1px groove #dee2e6" : "",
              paddingBlock: "1%",
              paddingLeft: "2%",
              // background:'rgb(195, 234, 239)'
              background:ival === i ? "#4f026e" : ""
            }}
          >
            <div
             className={ival === i ? 'active-menu-buttom':'menu-bootom'}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <img src={item.imgsrc} style={{ height: 40 }} className={ival === i ? 'active-image':''}/>
              <div style={{}}>
                <p
                  style={{
                    fontWeight: ival === i ? "700" : "",
                    color: ival === i ? "white" : "rgb(16 16 16)",
                  }}
                >
                  {item.label}
                </p>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <p   
                className={ival === i ? 'active-menu-buttom':'menu-bootom'}
                style={{
                  textAlign: "end",
                  fontWeight: ival === i ? "600" : "",
                  color: ival === i ? "white" : "rgb(16 16 16)",
                  paddingRight: 10,
                }}
              >
                {item.quantity}
              </p>
            </div>
           </div>
        ))}
      </div> 
    </div>
  
   );
}

export default SideMenu;