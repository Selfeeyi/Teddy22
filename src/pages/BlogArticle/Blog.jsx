import React from "react";
import NavigationBar2 from "../../components/Navbars/NavigationBar2/NavigationBar2";
import BlogCard from "../../components/BlogCard/BlogCard";
import './blogcard.css'

const Blog = () => {
  return (
    <div>
      <NavigationBar2 />

      <div style={{ marginBlock: 20 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "groove 1px #c3c3ff",
            paddingBlock: "1%",
            paddingInline: "3%",
            marginInline: "20%",
            borderRadius: 50,
            alignItems:"center"
          }}
        >
          <div
            style={{
              borderRight: "1px solid #bcaeae",
              paddingRight: 5,
              position: "relative",
              width: "100%",
            }}
          >
            <input
              type="search"
              placeholder="Search..."
             
              style={{
                fontSize: 14,
                outline: "none",
                border: "none",
                paddingLeft: "15%",
                width: "100%",
                zIndex: 2,
              }}
            />
            <i
              className="bi bi-search search-icon"
              style={{
                position: "absolute",
                left: 8,
                fontSize: 16,
                zIndex: 1,
                width: "fit-content",
              }}
            ></i>
          </div>
          <div
            style={{
              borderRight: "1px solid #bcaeae",
              paddingInline: 5,
              width: "100%",
            }}
          >
            <input
              type="search"
              placeholder="Search..."
              style={{
                fontSize: 14,
                outline: "none",
                border: "none",
                width: "100%",
                paddingLeft: "10%",
              }}
            />
          </div>
          <div style={{ paddingLeft: 5, width: "100%" }}>
            <input
              type="search"
              placeholder="Search..."
              style={{
                fontSize: 14,
                outline: "none",
                border: "none",
                width: "100%",
                paddingLeft: "10%",
              }}
            />
          </div>
          <div
            style={{
              paddingLeft: 5,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                borderRadius: 20,
                color: "white",
                paddingInline: "7%",
                backgroundColor: "#fc2260",
                paddingBlock: "5%",
                border: "none",
                paddingInline:25
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div
        className=""
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingBlock: "2%",
          backgroundColor:"#fc2260",
          fontFamily:"dexaSemi"
        }}
      >
        <h1
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: "3rem",
          }}
        >
          Blogs
        </h1>
      </div>


      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "4%",
          marginInline: "6%",
          gap: "2%",
          marginBottom: "8%",
        }}
      >
        <div
          style={{
            flex: 8,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: "4%",
          }}
        >
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

        <div
          style={{
            flex: 3,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Adjust the shadow properties
            borderRadius: 15,
            padding: "20px",
          }}
        >
          <div style={{ width: "100%" }}>
            <p
              style={{
                margin: 0,
                textAlign: "left",
                fontWeight: "600",
                fontSize: 20,
                fontFamily:"dexaSemi"
              }}
            >
              Industries
            </p>
            <div style={{ paddingLeft: 20 }}>
              <p
                style={{
                  textAlign: "left",
                  margin: 0,
                  color: "black",
                }}
              >
                Business
              </p>
              <p
                style={{
                  textAlign: "left",
                  margin: 0,
                  color: "black",
                }}
              >
                Jobs & Human Resources
              </p>
              <p
                style={{
                  textAlign: "left",
                  margin: 0,
                  color: "black",
                }}
              >
                Health - Physical & Mental Fitness
              </p>
              <p
                style={{
                  textAlign: "left",
                  margin: 0,
                  color: "black",
                }}
              >
                Money
              </p>
              <p
                style={{
         
                  textAlign: "left",
                  margin: 0,
                  color: "black",
                }}
              >
                Education
              </p>
              <p
                style={{
                 
                  textAlign: "left",
                  margin: 0,
                  color: "black",
                }}
              >
                Freelance Work From Home
              </p>
            </div>
            <div style={{ marginTop: "15%" }}>
              <p
                style={{
                  margin: 0,
                  textAlign: "left",
                  fontWeight: "600",
                  fontSize: 20,
            fontFamily:"dexaSemi"
                }}
              >
                Subscribe to our Newsletter
              </p>
              <p
                style={{
                  margin: 0,
       
                  color: "black",
                  marginTop: 3,
                }}
              >
                Our e-mail updates will keep you informed on our company, new
                products, stories from the millions of people we help live
                healthier longer lives.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 15,
                marginTop: "5%",
              }}
            >
              <input
                placeholder="Type..."
                style={{
                  border: "groove 1px #d2d6da",
                  fontSize: 14,
                  outline: "none",
                  paddingBlock:15,
                  width:"100%",
                  borderRadius:8,
                  paddingInline:10
           
                }}
              />
              <button
                style={{
                  borderRadius: 20,
                  width: "fit-content",
                  color: "white",
                  paddingInline: "7%",
                backgroundColor:"#fc2260",
                border:"none",
                paddingBlock:10
                }}
              >
                Subscribe
              </button>

              <div style={{ marginTop: "15%",fontSize:35,color:"#fc2260",fontFamily: "DexaBold", }}>
              GEZTE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
