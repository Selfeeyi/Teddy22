import React, { useState } from "react";

const Settings = () => {
  const [toggleswitch, settoggleswitch] = useState(true);

  return (
    <div>
      {" "}
      <p
        style={{
          fontFamily: "dexaSemi",
          fontSize: 25,
          color: "#282c3f",
        }}
      >
        SMS Preferences
      </p>
      <div
        style={{
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          paddingInline: 22,
          paddingBlock: 25,
          marginBlock: 25,
        }}
      >
        Order related SMS cannot be disabled as they are critical to provide
        service
      </div>
      <div
        style={{
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          paddingInline: 22,
          paddingBlock: 25,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <span>Recommendations & Reminders</span>
          <div
            onClick={() => settoggleswitch(!toggleswitch)}
            style={{
              width: 45,
              height: 20,
              backgroundColor: toggleswitch ? "#dee2e6" : "#fc2260",
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: toggleswitch ? "flex-start" : "flex-end",
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#00b4d8",
                borderRadius: "50%",
              }}
            ></div>
          </div>
        </div>
        <div style={{ borderRight: "1px groove #d4d5d9", height: 25 }}></div>
        <div style={{}}>
          Keep this on to receive offer recommendations & timely reminders based
          on your interests
        </div>
      </div>
    </div>
  );
};

export default Settings;
