import React, { useState } from "react";
import OrderOnline from "./OrderOnline";
import OverviewFieldComponent from "../OrderBodyComponent/Components/OverviewFieldComponent/OverviewFieldComponent";
import ReviewsComponent from "../OrderBodyComponent/Components/ReviewsComponent/ReviewsComponent";
import PhotosComponent from "../OrderBodyComponent/Components/PhotosComponent/PhotosComponent";



const OrderBody = () => {
  const [val, setVal] = useState(1);
  const tab = ["Overview", "Order Online", "Reviews", "Photos"];

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottom: "2px groove #efefef",
          }}
        >
          {tab.map((item, i) => (
            <div style={{ borderBottom: val === i ? "2px solid #fc2260" : "" }}>
              <p style={{ fontSize: 18, fontWeight: 700, color: val === i ? "#fc2260" : "#041a68" }} onClick={() => setVal(i)}>{item}</p>
            </div>
          ))}
        </div>

        <div>
          {val === 0 && (
            <div style={{}}>
              <OverviewFieldComponent />
            </div>
          )}

          {val === 1 && (
            <div style={{width:'100%'}}>
              <OrderOnline />
            </div>
          )}

          {val === 2 && (
            <div style={{}}>
              <ReviewsComponent />
            </div>
          )}

          {val === 3 && (
            <div style={{}}>
              <PhotosComponent />
            </div>
          )}
        </div>


      </div>
    
    </div>
  );
};

export default OrderBody;
