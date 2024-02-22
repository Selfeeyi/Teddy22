import React, { useState } from "react";
import CircleCard2 from "../../../utils/Cards/CircleCards/CircleCard2/CircleCard2";
import thalassery from "../../../asets/images/thalassery.png";
import mcdelivery from "../../../asets/images/mcdelivery.png";
import a2b from "../../../asets/images/a2b.png";
import kfcImg from "/icons/Brands/kfc.png";
import pizzahutImg from "/icons/Brands/pizzahut.png";

const TopBrands = () => {
  const [visibleItems, setVisibleItems] = useState(12);

  const handleReadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  const brandsCardScroll = [
    {
      name: "Thalassery",
      imgSrc: thalassery,
    },
    {
      name: "Mc Delivery",
      imgSrc: mcdelivery,
    },
    {
      name: "A2B",
      imgSrc: a2b,
    },
    {
      name: "KFC",
      imgSrc: kfcImg,
    },
    {
      name: "Pizza Hut",
      imgSrc: pizzahutImg,
    },

    {
      name: "Thalassery",
      imgSrc: thalassery,
    },
    {
      name: "Mc Delivery",
      imgSrc: mcdelivery,
    },
    {
      name: "A2B",
      imgSrc: a2b,
    },

    {
      name: "Thalassery",
      imgSrc: thalassery,
    },
    {
      name: "Mc Delivery",
      imgSrc: mcdelivery,
    },
    {
      name: "A2B",
      imgSrc: a2b,
    },
    {
      name: "KFC",
      imgSrc: kfcImg,
    },
    {
      name: "Pizza Hut",
      imgSrc: pizzahutImg,
    },

    {
      name: "Thalassery",
      imgSrc: thalassery,
    },
    {
      name: "Mc Delivery",
      imgSrc: mcdelivery,
    },
    {
      name: "A2B",
      imgSrc: a2b,
    },

    {
      name: "Mc Delivery",
      imgSrc: mcdelivery,
    },
    {
      name: "A2B",
      imgSrc: a2b,
    },

    {
      name: "Thalassery",
      imgSrc: thalassery,
    },
    {
      name: "Mc Delivery",
      imgSrc: mcdelivery,
    },
    {
      name: "A2B",
      imgSrc: a2b,
    },
    {
      name: "KFC",
      imgSrc: kfcImg,
    },
    {
      name: "Pizza Hut",
      imgSrc: pizzahutImg,
    },

    {
      name: "Thalassery",
      imgSrc: thalassery,
    },
    {
      name: "Mc Delivery",
      imgSrc: mcdelivery,
    },
    {
      name: "A2B",
      imgSrc: a2b,
    },

    {
      name: "Thalassery",
      imgSrc: thalassery,
    },
    {
      name: "Mc Delivery",
      imgSrc: mcdelivery,
    },
    {
      name: "A2B",
      imgSrc: a2b,
    },
    {
      name: "KFC",
      imgSrc: kfcImg,
    },
    {
      name: "Pizza Hut",
      imgSrc: pizzahutImg,
    },

    {
      name: "Thalassery",
      imgSrc: thalassery,
    },
    {
      name: "Mc Delivery",
      imgSrc: mcdelivery,
    },
    {
      name: "A2B",
      imgSrc: a2b,
    },

    {
      name: "Mc Delivery",
      imgSrc: mcdelivery,
    },
  ];
  return (
    <div>
      <p
        style={{
          margin: 0,
          fontSize: 35,
          fontFamily: "dexaSemi",
        }}
      >
        Top brands for you
      </p>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {brandsCardScroll?.slice(0, visibleItems).map((val, id) => (
          <div key={id} style={{ flexBasis: "16.5%", marginBottom: "50px" }}>
            <CircleCard2 imgSrc={val.imgSrc} name={val.name} time={val.time} />
          </div>
        ))}
      </div>

      {brandsCardScroll.length > visibleItems && (
            <div style={{display:"flex",flexDirection:'row',justifyContent:"end",}}>
            <button style={{
                      backgroundColor: 'var(--background-color)',
                      color:'var(--text-color)',
                      outline: "none",
                      border: "none",
                    
                      borderRadius: 8,
                      paddingBlock: 10,
                      fontWeight: "500",
                      fontSize: 14,
                    }} onClick={handleReadMore}>Read More</button>
            </div>
          )}
    </div>
  );
};

export default TopBrands;
