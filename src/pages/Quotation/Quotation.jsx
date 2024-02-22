import React from "react";
import NavigationBar2 from "../../components/Navbars/NavigationBar2/NavigationBar2";

const Quotation = () => {
  return (
    <div>
      <NavigationBar2 />

      <div style={{ paddingInline: "15%", paddingBlock: "5%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
    
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10}}>
            <p style={{ fontSize: 25, fontFamily: "dexaSemi", margin: 0 }}>
              Selfeey Infotech Private Limited
            </p>
            <p style={{ margin: 0, width: "50%" }}>
              {" "}
              No. 10/1, V.K. Plaza, Ramamurthi Nagar Main Rd, Annaiah Reddy
              Layout, Dodda Banaswadi, Bengaluru, Karnataka 560043
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
              }}
            >
              <a
                href="https://selfeey.com"
                target="_blank"
                style={{ textDecorationLine: "none" }}
              >
                Selfeey.com
              </a>
              <p style={{ margin: 0 }}>Email Address</p>
            </div>

            <p style={{ margin: 0 }}>9876543210</p>
          </div>

          {/* <div style={{flex:1,display:"flex",flexDirection:"row",justifyContent:"center"}}> */}
          <div>  
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: "grey",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "dexaSemi",
                color: "white",
              }}
            >
              LOGO
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBlock:"3%"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p
              style={{
                fontFamily: "dexaSemi",
                borderBottom: "2px solid black",
                textAlign: "center",
              }}
            >
              BILL TO
            </p>

            <p style={{ margin: 0 }}>Contact Name</p>

            <p style={{ margin: 0 }}>Client Company Name</p>

            <p style={{ margin: 0 }}>Address</p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
              }}
            >
              <p style={{ margin: 0 }}>Phone</p>
              <p style={{ margin: 0 }}>Email Address</p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p
              style={{
                fontFamily: "dexaSemi",
                borderBottom: "2px solid black",
                textAlign: "center",
              }}
            >
              SHIP TO
            </p>

            <p style={{ margin: 0 }}>Name / Dept</p>

            <p style={{ margin: 0 }}>Client Company Name</p>

            <p style={{ margin: 0 }}>Address</p>

            <p style={{ margin: 0 }}>Phone</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
              }}
            >
              <p style={{ margin: 0, fontWeight: "700" }}>Quote Date :</p>
              <p style={{ margin: 0 }}>20/01/2024</p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
              }}
            >
              <p style={{ margin: 0, fontWeight: "700" }}>Valid For :</p>
              <p style={{ margin: 0 }}>20 days</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2%" }}>
          <table style={{ width: "100%", border: "1px solid grey" }}>
            <thead style={{ backgroundColor: "#fc2260", color: "white" }}>
              <tr>
                <th style={{ paddingBlock: 6, fontFamily: "dexaSemi" }}>
                  DESCRIPTION
                </th>
                <th style={{ paddingBlock: 6, fontFamily: "dexaSemi" }}>QTY</th>
                <th style={{ paddingBlock: 6, fontFamily: "dexaSemi" }}>
                  UNIT PRIZE
                </th>
                <th style={{ paddingBlock: 6, fontFamily: "dexaSemi" }}>
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center", border: "1px solid black" }}>
              {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
                <tr key={i}>
                  <td
                    style={{ border: "1px groove grey", paddingBlock: 2 }}
                  ></td>
                  <td
                    style={{ border: "1px groove grey", paddingBlock: 2 }}
                  ></td>
                  <td
                    style={{ border: "1px groove grey", paddingBlock: 2 }}
                  ></td>
                  <td style={{ border: "1px groove grey", paddingBlock: 2 }}>
                    0.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBlock: 5,
          }}
        >
          <div style={{ fontFamily: "dexaSemi", flex: 7 }}>
            Thank you for your bussiness!
          </div>
          <div style={{ flex: 5 }}>
            <div
              style={{ borderBottom: "1px solid black", paddingBlock: "2%" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <p style={{ margin: 0, fontWeight: "500", width: "100%" }}>
                  Sub Total
                </p>
                <p
                  style={{
                    margin: 0,
                    borderBottom: "1px solid black",
                    width: "100%",
                    textAlign: "end",
                  }}
                >
                  0.00
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <p style={{ margin: 0, fontWeight: "500", width: "100%" }}>
                  Discount
                </p>
                <p
                  style={{
                    margin: 0,
                    borderBottom: "1px solid black",
                    width: "100%",
                    textAlign: "end",
                  }}
                >
                  0.00
                </p>
              </div>
              {/* <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <p style={{ margin: 0, fontWeight: "500", width: "100%" }}>
                  Sub Total Less Discount
                </p>
                <p
                  style={{
                    margin: 0,
                    borderBottom: "1px solid black",
                    width: "100%",
                    textAlign: "end",
                  }}
                >
                  0.00
                </p>
              </div> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <p style={{ margin: 0, fontWeight: "500", width: "100%" }}>
                  Tax Rate
                </p>
                <p
                  style={{
                    margin: 0,
                    borderBottom: "1px solid black",
                    width: "100%",
                    textAlign: "end",
                  }}
                >
                  0.00%
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <p style={{ margin: 0, fontWeight: "500", width: "100%" }}>
                  Total Tax
                </p>
                <p
                  style={{
                    margin: 0,
                    
                    width: "100%",
                    textAlign: "end",
                  }}
                >
                  0.00
                </p>
              </div>

              {/* <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <p style={{ margin: 0, fontWeight: "500", width: "100%" }}>
                  Shipping
                </p>
                <p style={{ margin: 0, width: "100%", textAlign: "end" }}>
                  0.00
                </p>
              </div> */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontWeight: "600",
                  width: "100%",
                  color: "#fc2260",
                }}
              >
                Quote Total
              </p>
              <p
                style={{
                  margin: 0,
                  borderBottom: "1px solid black",
                  width: "100%",
                  textAlign: "end",
                }}
              >
                0.00
              </p>
            </div>
          </div>
        </div>


        <div>
          <p style={{borderBottom:"1px solid black",margin:0,fontWeight:"600"}} >Terms and Instructions</p>
          <p style={{margin:0}}>Add payment requirements here, for example deposit amount and payment method</p>
          <p style={{margin:0}}>Add terms here, e.g: warranty, returns policy...</p>
          <p style={{margin:0}}>
          Include project timeline
          </p>
        </div>


        <div className="" style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",gap:"3%"}}>
          <div style={{cursor:"pointer"}} >  
          <button 
            style={{
              backgroundColor: "green",
              color: "white",
              outline: "none",
              border: "none",
              borderRadius: 6,
              paddingBlock: 8,
              fontWeight: "500",
              fontSize: 14,
            }}
          >
            Accept 
          </button>
          </div>
          <div style={{cursor:"pointer"}}>       
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              outline: "none",
              border: "none",
              borderRadius: 6,
              paddingBlock: 8,
              fontWeight: "500",
              fontSize: 14,
            }}
          >
            Reject
          </button>
          </div>
        </div>

      </div>

      
    </div>
  );
};

export default Quotation;
