import React, { useState } from "react";
import imge from "../../asets/images/cateringimg.png";
import imge1 from "../../asets/images/flowerimg.png";
import { FaRegCircle } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";

const HelpWithOrder = () => {
  const [range, setRange] = useState("Any");
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "dexaSemi",
              fontSize: 25,
              color: "#282c3f",
            }}
          >
            Past Orders
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <button
            style={{
              border: "1px groove #fc2260",
              outline: "none",
              background: "white",
              paddingBlock: 5,
              borderRadius: 8,
              color: "#fc2260",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <FaFilter />
            Cancelled
          </button>
          <button
            style={{
              border: "1px groove #fc2260",
              outline: "none",
              background: "white",
              paddingBlock: 5,
              borderRadius: 8,
              color: "#fc2260",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <FaFilter />
            Delivered
          </button>
          <button
            style={{
              border: "1px groove #fc2260",
              outline: "none",
              background: "white",
              paddingBlock: 5,
              borderRadius: 8,
              color: "#fc2260",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <FaFilter />
            Pending
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ border: "1px groove #efefef", padding: "4%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ flex: 1 }}>
              <img src={imge} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                flex: 5,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: 18,
                    fontWeight: "600",
                    fontFamily: "dexaSemi",
                  }}
                >
                  Catering
                </p>
                <p style={{ margin: 0, color: "#7e808c", fontSize: 14 }}>
                  Delivered on Sun, Dec 10, 2023, 01:48 AM
                </p>
              </div>

              <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
                Koramangala
              </p>
              <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
                ORDER #161120827917242 | Sun, Dec 10, 2023, 01:17 AM
              </p>
              <p
                style={{
                  margin: 0,
                  color: "#7e808c",
                  fontSize: 12,
                  fontFamily: "dexaSemi",
                  color: "#fc2260",
                }}
              >
                VIEW DETAILS
              </p>
            </div>
          </div>

          <div style={{ border: "1px dashed  grey" }}></div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBlock: "2%",
            }}
          >
            <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
              Corn And Cheese Pizza x 2
            </p>

            <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
              Total Paid: ₹218
            </p>
          </div>

          <div style={{ marginBlock: "2%", marginRight: "15%" }}>
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
              <div onClick={() => setRange("Any")}>
                <div
                  style={{
                    height: range === "Any" ? 20 : 15,
                    width: range === "Any" ? 20 : 15,
                    backgroundColor:
                      range === "3.5" ||
                      range === "4.0" ||
                      range === "4.5" ||
                      range === "5.0"
                        ? "#e8e8e8"
                        : "#ef4f5f",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>

              <div
                style={{
                  width: "100%",
                  height: 4,
                  backgroundColor:
                    range === "3.5" ||
                    range === "4.0" ||
                    range === "4.5" ||
                    range === "5.0"
                      ? "#e8e8e8"
                      : "#ef4f5f",
                }}
              ></div>
              <div onClick={() => setRange("3.5")}>
                <div
                  style={{
                    height: range === "3.5" ? 20 : 15,
                    width: range === "3.5" ? 20 : 15,
                    backgroundColor:
                      range === "4.0" || range === "4.5" || range === "5.0"
                        ? "#e8e8e8"
                        : "#ef4f5f",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 4,
                  backgroundColor:
                    range === "4.0" || range === "4.5" || range === "5.0"
                      ? "#e8e8e8"
                      : "#ef4f5f",
                }}
              ></div>
              <div onClick={() => setRange("4.0")}>
                <div
                  style={{
                    height: range === "4.0" ? 20 : 15,
                    width: range === "4.0" ? 20 : 15,
                    backgroundColor:
                      range === "4.5" || range === "5.0"
                        ? "#e8e8e8"
                        : "#ef4f5f",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 4,
                  backgroundColor:
                    range === "4.5" || range === "5.0" ? "#e8e8e8" : "#ef4f5f",
                }}
              ></div>
              <div onClick={() => setRange("4.5")}>
                <div
                  style={{
                    height: range === "4.5" ? 20 : 15,
                    width: range === "4.5" ? 20 : 15,
                    backgroundColor: range === "5.0" ? "#e8e8e8" : "#ef4f5f",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 4,
                  backgroundColor: range === "5.0" ? "#e8e8e8" : "#ef4f5f",
                }}
              ></div>
              <div onClick={() => setRange("5.0")}>
                <div
                  style={{
                    height: range === "5.0" ? 20 : 15,
                    width: range === "5.0" ? 20 : 15,
                    backgroundColor: "#ef4f5f",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
            </div>

            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <small style={{ fontWeight: "500", color: "#000000de" }}>
                Ordered
              </small>
              <small style={{ fontWeight: "500", color: "#000000de" }}>
                Dispatch
              </small>
              <small style={{ fontWeight: "500", color: "#000000de" }}>
                Shipped
              </small>
              <small style={{ fontWeight: "500", color: "#000000de" }}>
                Near By
              </small>
              <small style={{ fontWeight: "500", color: "#000000de" }}>
                Delivered
              </small>
            </div>
          </div>

          <div>
            <button
              style={{
                backgroundColor: "#fc2260",
                color: "white",
                outline: "none",
                border: "none",
                width: "10%",
                borderRadius: 6,
                paddingBlock: 10,
                fontWeight: "500",
                fontSize: 14,
              }}
            >
              GET HELP
            </button>
          </div>
        </div>

        <div style={{ border: "1px groove #efefef", padding: "4%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ flex: 1 }}>
              <img src={imge1} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                flex: 5,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: 18,
                    fontWeight: "600",
                    fontFamily: "dexaSemi",
                  }}
                >
                  Flowers
                </p>
                <p style={{ margin: 0, color: "#7e808c", fontSize: 14 }}>
                  Delivered on Sun, Dec 10, 2023, 01:48 AM
                </p>
              </div>

              <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
                Koramangala
              </p>
              <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
                ORDER #161120827917242 | Sun, Dec 10, 2023, 01:17 AM
              </p>
              <p
                style={{
                  margin: 0,
                  color: "#7e808c",
                  fontSize: 12,
                  fontFamily: "dexaSemi",
                  color: "#fc2260",
                }}
              >
                VIEW DETAILS
              </p>
            </div>
          </div>

          <div style={{ border: "1px dashed  grey" }}></div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBlock: "2%",
            }}
          >
            <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
              Corn And Cheese Pizza x 2
            </p>

            <p style={{ margin: 0, color: "#7e808c", fontSize: 12 }}>
              Total Paid: ₹218
            </p>
          </div>
          <div style={{ marginBlock: "2%", marginRight: "15%" }}>
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
              <div onClick={() => setRange("Any")}>
                <div
                  style={{
                    height: range === "Any" ? 20 : 15,
                    width: range === "Any" ? 20 : 15,
                    backgroundColor:
                      range === "3.5" ||
                      range === "4.0" ||
                      range === "4.5" ||
                      range === "5.0"
                        ? "#e8e8e8"
                        : "#ef4f5f",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>

              <div
                style={{
                  width: "100%",
                  height: 4,
                  backgroundColor:
                    range === "3.5" ||
                    range === "4.0" ||
                    range === "4.5" ||
                    range === "5.0"
                      ? "#e8e8e8"
                      : "#ef4f5f",
                }}
              ></div>
              <div onClick={() => setRange("3.5")}>
                <div
                  style={{
                    height: range === "3.5" ? 20 : 15,
                    width: range === "3.5" ? 20 : 15,
                    backgroundColor:
                      range === "4.0" || range === "4.5" || range === "5.0"
                        ? "#e8e8e8"
                        : "#ef4f5f",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 4,
                  backgroundColor:
                    range === "4.0" || range === "4.5" || range === "5.0"
                      ? "#e8e8e8"
                      : "#ef4f5f",
                }}
              ></div>
              <div onClick={() => setRange("4.0")}>
                <div
                  style={{
                    height: range === "4.0" ? 20 : 15,
                    width: range === "4.0" ? 20 : 15,
                    backgroundColor:
                      range === "4.5" || range === "5.0"
                        ? "#e8e8e8"
                        : "#ef4f5f",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 4,
                  backgroundColor:
                    range === "4.5" || range === "5.0" ? "#e8e8e8" : "#ef4f5f",
                }}
              ></div>
              <div onClick={() => setRange("4.5")}>
                <div
                  style={{
                    height: range === "4.5" ? 20 : 15,
                    width: range === "4.5" ? 20 : 15,
                    backgroundColor: range === "5.0" ? "#e8e8e8" : "#ef4f5f",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 4,
                  backgroundColor: range === "5.0" ? "#e8e8e8" : "#ef4f5f",
                }}
              ></div>
              <div onClick={() => setRange("5.0")}>
                <div
                  style={{
                    height: range === "5.0" ? 20 : 15,
                    width: range === "5.0" ? 20 : 15,
                    backgroundColor: "#ef4f5f",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
            </div>

            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <small style={{ fontWeight: "500", color: "#000000de" }}>
                Ordered
              </small>
              <small style={{ fontWeight: "500", color: "#000000de" }}>
                Dispatch
              </small>
              <small style={{ fontWeight: "500", color: "#000000de" }}>
                Shipped
              </small>
              <small style={{ fontWeight: "500", color: "#000000de" }}>
                Near By
              </small>
              <small style={{ fontWeight: "500", color: "#000000de" }}>
                Delivered
              </small>
            </div>
          </div>

          <div>
            <button
              style={{
                backgroundColor: "#fc2260",
                color: "white",
                outline: "none",
                border: "none",
                width: "10%",
                borderRadius: 6,
                paddingBlock: 10,
                fontWeight: "500",
                fontSize: 14,
              }}
            >
              GET HELP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpWithOrder;
