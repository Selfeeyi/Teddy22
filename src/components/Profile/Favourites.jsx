import React from "react";
import Star from "../../asets/svg/Star";
import offerImage1 from "../../asets/images/collection1.png";

const Favourites = () => {
  const resturants = [
    {
      photo: offerImage1,
      heading: "Burger king",
      rating: "4.1",
      time: "27min",
      type: "Italian",
      location: "Koramangala",
    },

    {
      photo: offerImage1,
      heading: "Burger king",
      rating: "4",
      time: "27 mins",
      type: "Indian",
      location: "Indiranagar",
    },
    {
      photo: offerImage1,
      heading: "Burger king",
      rating: "5",
      time: "27 mins",
      type: "Indian",
      location: "Indiranagar",
    },
    {
      photo: offerImage1,
      heading: "Burger king",
      rating: "3.8",
      time: "27 mins",
      type: "Indian",
      location: "Indiranagar",
    },

    {
      photo: offerImage1,
      heading: "Burger king",
      rating: "3.8",
      time: "27 mins",
      type: "Indian",
      location: "Indiranagar",
    },
  ];
  return (
    <div>
      <p
        style={{
          fontFamily: "dexaSemi",
          fontSize: 25,
          color: "#282c3f",
        }}
      >
        Favorite Restaurants
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 25,
        }}
      >
        {resturants.map((resturantinfo, index) => (
          <div key={index} style={{borderRadius: 10,}}>
            <img
              src={resturantinfo.photo}
              alt={`Offer ${index + 1}`}
              style={{ borderRadius: 10, width: "100%" }}
            />
            <div style={{padding:15, }} >
              <p
                style={{
                  color: "#02060cbf",
                  fontSize: "large",
                  margin: 0,
                  textAlign: "left",
                  fontWeight: "600",
                }}
              >
                Resturants
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <div>
                  <Star />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <span style={{ fontSize: "medium", fontWeight: "600" }}>
                    4.4
                  </span>
                  <span style={{ fontSize: "medium", fontWeight: "700" }}>
                    .
                  </span>
                  <span style={{ fontSize: "medium", fontWeight: "600" }}>
                    21 mins
                  </span>
                </div>
              </div>
              <div style={{ margin: 0 }}>
                <p
                  style={{
                    textAlign: "left",
                    whiteSpace: "pre-line",
                    margin: 0,
                    color: "#02060c99",
                  }}
                >
                  Andhra,Biriyani,South Indian,
                </p>
                <p
                  style={{
                    textAlign: "left",
                    whiteSpace: "pre-line",
                    margin: 0,
                    color: "#02060c99",
                  }}
                >
                  Banaswadi
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
