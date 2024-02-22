import React from "react";
import bannerimg from '../../asets/images/bannr_img.jpg'
import './blogcard.css'


const BlogCard = () => {
  return (
    <>
      <div style={{width:'100%',position:'relative'}}>
        <div style={{ borderRadius: 10,position:'relative',top:4 }}>
          <img src={bannerimg} className="imgBlog" />
        </div>
        <div
          style={{
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Adjust the shadow properties
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            padding: "20px",
          }}
        >
          <p
            style={{
              textAlign: "left",
              margin: 0,
              backgroundClip: "text",
              color: "transparent",
              backgroundImage: "linear-gradient(310deg, #2152FF, #21D4FD)",
              fontWeight: "700",
              fontSize:12
            }}
          >
            BUSSINESS
          </p>
          <p style={{ color: "black", fontWeight: "600", margin: 0,textAlign:'left',fontSize:22,}}>
            Business Setup and scale-up advisor
          </p>

          <div
            style={{
              width: "300px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
              color: "#484848",
              fontWeight: "500",
              marginTop:'4%'
            }}
          >
            Business set-up or scale-up advisors are persons who do give advises
            of how to set-up businesses. They help people to handle various
            business works andBusiness set-up or scale-up advisors are persons
            who do give advises of how to set-up businesses. They help people to
            handle various business works and
          </div>

          <div style={{ width: "20%", borderRadius: 10,marginTop:"6%" }}>
            <img src={bannerimg} className="imgBlog" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
