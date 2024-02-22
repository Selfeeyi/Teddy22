import React from "react";

const ExploreCard = ({ title, paraone, paratwo, btntext, image }) => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: 10,
        padding: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 10,

        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              fontSize: 25,
              fontWeight: "700",
            }}
          >
            {title}
          </p>
          <div>
            <p style={{ margin: 0, fontSize: 18, fontFamily: "DexaLight" }}>
              {paraone}
            </p>

            <p style={{ margin: 0, fontSize: 18, fontFamily: "DexaLight" }}>
              {paratwo}
            </p>
          </div>

          <span
            style={{
              color: "#fb1b26",
              cursor: "pointer",
              fontFamily: "DexaSemi",
              color: "#fc2260",
            }}
          >
            {btntext}
          </span>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <img src={image} style={{  }} />
      </div>
    </div>
  );
};

export default ExploreCard;
