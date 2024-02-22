import React from "react";
import imgres from "../../asets/images/restcardimg.jpg";
import Star from "../../asets/svg/Star";
import Ratings from "../../asets/svg/Ratings";

const PackageCard = ({img}) => {

  console.log("item",img)


  return (
    <div
      style={{
        paddingInline: "2%",
        paddingBlock: "3%",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: 10,
        }}
      >
        <div style={{ width: 180, height: 120 }}>
          <img
            src={imgres}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        </div>

        <div style={{}}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p style={{ margin: 0 }}>Akki Roti</p>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Ratings />
                <Ratings />
                <Ratings />
                <Ratings />
              </div>
            </div>
            <div>
              <button
                style={{
                  border: "none",
                  color: "#baf200",
                  outline: "none",
           paddingInline:20,
           paddingBlock:5,
                 
                  borderRadius: 15,
                  backgroundColor: "#041a68",
                }}
              >
                Add
              </button>
            </div>
          </div>

          <p>
            Delicious flat bread made from rice flour served with our speciality
            chutney pudi and topped with butter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
