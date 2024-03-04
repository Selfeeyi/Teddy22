import React, { useEffect, useState } from "react";
import CarouselUtil from "../../utils/CarouselUtil/CarouselUtil";
import css from "../../pages/ShowCase/ShowCase.module.css";

import biryaniCImg from "../../asets/images/biryani.png";
import burgerImg from "../../asets/images/burger.png";
import chickenImg from "../../asets/images/chicken.png";
import friesImg from "../../asets/images/fries.png";
import homestyleImg from "../../asets/images/homeStyle.png";
import noodelsImg from "../../asets/images/noodels.png";
import pannerImg from "../../asets/images/panner.png";
import pizzaImg from "../../asets/images/pizza.png";
import sandwichImg from "../../asets/images/sandwich.png";
import shawarmaImg from "../../asets/images/shawarma.png";
import CircleCard1 from "../../utils/Cards/CircleCards/CircleCard1/CircleCard1";
import CircleCard2 from "../../utils/Cards/CircleCards/CircleCard2/CircleCard2";

import thalassery from "../../asets/images/thalassery.png";
import mcdelivery from "../../asets/images/mcdelivery.png";
import a2b from "../../asets/images/a2b.png";
import kfcImg from "/icons/Brands/kfc.png";
import pizzahutImg from "/icons/Brands/pizzahut.png";
import scoopsImg from "/icons/Brands/scoops.png";
import ShowcaseCard from "../../utils/Cards/ShowcaseCard/ShowcaseCard";
import FilterBox from "../../utils/OrderingUtils/FilterBox/FilterBox";
import Modal from "../Modal/Modal";
import Cross from "../../asets/svg/Cross";
import Search from "../../asets/svg/Search";
import Cancel from "../../asets/svg/Cancel";

import allinone from "../../asets/images/filterImg.png";
import desibox from "../../asets/images/desibox.png";
import dumberiyani from "../../asets/images/dumberiyani.png";
import familypack from "../../asets/images/familypack.png";
import paratha from "../../asets/images/paratha.png";
import drinks from "../../asets/images/drinks.png";
import icecream from "../../asets/images/icecream.png";
import ResturantCard from "../ResturantCard/ResturantCard";

const Lights = () => {
  const [items, setItems] = useState([]);
  const [restaurantImages, setRestaurantImages] = useState({});
  const [createModal, setCreateModal] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Popularity");
  const [range, setRange] = useState("Any");
  const [val, setVal] = useState("Sort by");
  const [ival, setIval] = useState(0);


  const handleCheckboxChange = (city) => {
    const updatedCities = selectedCities.includes(city)
      ? selectedCities.filter((selectedCity) => selectedCity !== city)
      : [...selectedCities, city];

    setSelectedCities(updatedCities);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const filterOption = [
    {
      id: 1,
      label: "All In One Meal",
      imgsrc: allinone,
      quantity: 20,
    },

    {
      id: 2,
      label: "Mini Meals",
      imgsrc: allinone,
      quantity: 20,
    },
    {
      id: 3,
      label: "Desi Box",
      imgsrc: desibox,
      quantity: 20,
    },
    {
      id: 4,
      label: "Dum Beriyani",
      imgsrc: dumberiyani,
      quantity: 20,
    },
    {
      id: 5,
      label: "Family Pack",
      imgsrc: familypack,
      quantity: 20,
    },

    {
      id: 6,
      label: "Paratha Rolls",
      imgsrc: paratha,
      quantity: 20,
    },
    {
      id: 7,
      label: "Ice Creams",
      imgsrc: icecream,
      quantity: 20,
    },
    {
      id: 8,
      label: "Drinks",
      imgsrc: drinks,
      quantity: 20,
    },
  ];

  let filters = {
    delivery: [
      { text: "Filter" },
      { text: "Cuisines" },
      { text: "Ratings" },
      { text: "Pure Veg" },
    ],
  };

  let filterBoxes;

  if (true) {
    filterBoxes = filters?.delivery?.map((val, id) => {
      return (
        <div key={id}>
          <FilterBox
            leftIcon={val?.leftIcon ?? null}
            rightIcon={val?.rightIcon ?? null}
            text={val.text}
            onClick={() => {
              // setModalId(id);
              setCreateModal(true);
              setVal(
                id === 0
                  ? "Sort by"
                  : id === 1
                  ? "Cuisines"
                  : id === 2
                  ? "Rating"
                  : id === 3
                  ? "More filters"
                  : "Sort by"
              );
            }}
          />
        </div>
      );
    });
  }
  const fetchRestaurantImages = async (restaurants) => {
    const imagePromises = restaurants.map(async (restaurant) => {
      try {
        const response = await fetch(
          `https://userpanel.selfeey.com/api.selfeey.com/newapi.php?restaurant_id=${restaurant.restaurant_id}`
        );
        const images = await response.json();

        return {
          restaurantId: restaurant.restaurant_id,
          imageUrl:
            images.length > 0
              ? `http://api.selfeey.com/restaurantsapi/${images[0].file_path}`
              : null,
        };
      } catch (error) {
        console.error("Error fetching images for restaurant:", error);
        return {
          restaurantId: restaurant.restaurant_id,
          imageUrl: null,
        };
      }
    });

    try {
      const imageData = await Promise.all(imagePromises);

      const imagesObj = {};
      imageData.forEach(({ restaurantId, imageUrl }) => {
        imagesObj[restaurantId] = imageUrl;
      });
      setRestaurantImages(imagesObj);
      console.log(imagesObj); // Log imagesObj here to see the retrieved image URLs
    } catch (error) {
      console.error("Error processing image data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://userpanel.selfeey.com/api.selfeey.com/restaurantsapi/getrestaurantlist.php"
        );
        const data = await response.json();
        setItems(data);
        fetchRestaurantImages(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const foodCardScroll = [
    {
      name: "Biryani",
      imgSrc: biryaniCImg,
    },
    {
      name: "Burger",
      imgSrc: burgerImg,
    },
    {
      name: "Chicken",
      imgSrc: chickenImg,
    },
    {
      name: "Fries",
      imgSrc: friesImg,
    },
    {
      name: "Home Style",
      imgSrc: homestyleImg,
    },
    {
      name: "Noodles",
      imgSrc: noodelsImg,
    },
    {
      name: "Panner",
      imgSrc: pannerImg,
    },
    {
      name: "Pizza",
      imgSrc: pizzaImg,
    },
    {
      name: "Sandwich",
      imgSrc: sandwichImg,
    },
    {
      name: "Shawarma",
      imgSrc: shawarmaImg,
    },
  ];

  const brandsCardScroll = [
    {
      name: "Thalassery",
      imgSrc: thalassery,
      time: "45",
    },
    {
      name: "Mc Delivery",
      imgSrc: mcdelivery,
      time: "35",
    },
    {
      name: "A2B",
      imgSrc: a2b,
      time: "49",
    },
    {
      name: "KFC",
      imgSrc: kfcImg,
      time: "19",
    },
    {
      name: "Pizza Hut",
      imgSrc: pizzahutImg,
      time: "22",
    },
    {
      name: "A2B",
      imgSrc: a2b,
      time: "49",
    },

  ];

  return (
    <div style={{ marginBlock: "2%", }}>
      <div className={"css.w7"} style={{paddingInline:"13%",backgroundColor: "white",paddingBlock:"3%"}}>
        <div className={css.innerDiv4Title}>
          Inspiration for your first Lightnings order
        </div>
        <div className={css.rollerCarosuel} style={{ paddingTop:"2%",}}>
          <CarouselUtil>
            {foodCardScroll?.map((val, id) => {
              return (
                <div className={css.cardW} key={id}>
                  <CircleCard1 imgSrc={val.imgSrc} name={val.name} />
                </div>
              );
            })}
          </CarouselUtil>
        </div>
      </div>

      <div className={"css.w7"} style={{marginBottom:"3%",paddingInline:"13%",backgroundColor: "#ddd7dd",paddingBlock:"3%"}}>
        <div className={css.innerDiv5Title}>Top brands for you</div>
        <div className={css.rollerCarosuel}>
          <CarouselUtil>
            {brandsCardScroll?.map((val, id) => {
              return (
                <div className={css.cardW} key={id}>
                  <CircleCard2
                    imgSrc={val.imgSrc}
                    name={val.name}
                    time={val.time}
                  />
                </div>
              );
            })}
          </CarouselUtil>
        </div>
      </div>



      <div className={""} style={{ paddingInline: 30, paddingBlock: 30 }}>
        <div className={"css.w7"}>
          <div
            className={css.innerDiv6Title}
            style={{
              fontFamily: "DexaSemi",
              color: "var(--primary-color)",
              paddingInline: "10%",
            }}
          >
             Gezte Mart Lights in Bangalore
          </div>


          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              marginInline: "10%",
            }}
          >
            {filterBoxes}
          </div>

          <div
            className={"css.innerDiv6Body"}
            style={{ display: "flex", flexDirection: "row", gap: 20 }}
          >
            <div
              className={"css.innerDiv3"}
              style={{
                paddingTop: 20,
                flex: 2.5,
                borderRight: "1px groove #dee2e6",
              }}
            >
              <p
                style={{
                  fontWeight: "700",
                  fontSize: 30,
                  fontFamily: "dexaSemi",
                }}
              >
                Menu
              </p>

              <div>
                {filterOption.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setIval(i)}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "5%",
                      borderLeft: ival === i ? "4px solid #fc2260" : "",
                      borderTop: ival === i ? "1px groove #dee2e6" : "",
                      borderBottom: ival === i ? "1px groove #dee2e6" : "",
                      paddingBlock: "5%",
                      paddingLeft: "2%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap:4
                      }}
                    >
                      <img src={item.imgsrc} style={{ height: 40 }} />

                      <div style={{}}>
                        <p
                          style={{
                            fontWeight:ival === i ? "600":"",
                            color: ival === i ? "#fc2260" : "#6c757d",
                          }}
                        >
                          {item.label}
                        </p>
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          textAlign: "end",
                          fontWeight:ival === i ? "600":"",
                          color: ival === i ? "#fc2260" : "#6c757d",
                          paddingRight:10
                        }}
                      >
                        {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={css.innerDiv6Body} style={{ flex: 9.5 }}>
              {items.map((restaurant, id) => (
                <ResturantCard />
              ))}
            </div>
          </div>
        </div>
      </div>
     


      <Modal isOpen={createModal} onClose={() => setCreateModal(false)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // gridTemplateColumns: "repeat(2, 1fr)",
            // gridGap: "4%",
            // overflow: "hidden",
            width: 700,
            height: 600,
            overflowY: "auto",
            marginTop: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingInline: 10,
              margin: 0,

              borderBottom: "1px solid grey",
            }}
          >
            <h2>Filters</h2>
            <div onClick={() => setCreateModal(false)}>
              <Cross />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottom: "1px solid grey",
            }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",

                  fontWeight: "600",
                  fontSize: 18,
                  backgroundColor: "#f8f8f8",
                  height: 420,
                }}
              >
                <div
                  onClick={() => setVal("Sort by")}
                  style={{
                    paddingLeft: val === "Sort by" ? 15 : 20,
                    backgroundColor: val === "Sort by" ? "white" : "",
                    borderLeft: val === "Sort by" ? "5px solid #ef4f5f " : "",
                    height: "6rem",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ margin: 0, cursor: "pointer" }}>Sort by</p>
                  <p style={{ margin: 0, fontSize: 15, color: "#ef4f5f" }}>
                    {selectedOption}
                  </p>
                </div>
                <div
                  onClick={() => setVal("Cuisines")}
                  style={{
                    paddingLeft: val === "Cuisines" ? 15 : 20,
                    backgroundColor: val === "Cuisines" ? "white" : "",
                    borderLeft: val === "Cuisines" ? "5px solid #ef4f5f " : "",
                    height: "6rem",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ margin: 0, cursor: "pointer" }}>Cuisines</p>
                  {selectedCities.length >= 1 && (
                    <p style={{ margin: 0, fontSize: 15, color: "#ef4f5f" }}>
                      {selectedCities.length} Selected
                    </p>
                  )}

                  {/* <p style={{ margin: 0, fontSize: 15, color: "#ef4f5f" }}>
                    Selected cities: {selectedCities.join(", ")}
                  </p> */}
                </div>
                <div
                  onClick={() => setVal("Rating")}
                  style={{
                    paddingLeft: val === "Rating" ? 15 : 20,
                    backgroundColor: val === "Rating" ? "white" : "",
                    borderLeft: val === "Rating" ? "5px solid #ef4f5f " : "",
                    height: "6rem",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ margin: 0, cursor: "pointer" }}>Rating</p>
                </div>
                <div
                  onClick={() => setVal("More filters")}
                  style={{
                    paddingLeft: val === "More filters" ? 15 : 20,
                    backgroundColor: val === "More filters" ? "white" : "",
                    borderLeft:
                      val === "More filters" ? "5px solid #ef4f5f " : "",
                    height: "6rem",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ margin: 0, cursor: "pointer" }}>More filters</p>
                </div>
              </div>
            </div>

            {val == "Sort by" && (
              <div style={{ flex: 2, paddingInline: 20 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="radio"
                    value="Popularity"
                    checked={selectedOption === "Popularity"}
                    onChange={handleOptionChange}
                  />
                  <p>Popularity</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="radio"
                    value="Rating: High to Low"
                    checked={selectedOption === "Rating: High to Low"}
                    onChange={handleOptionChange}
                  />
                  <p>Rating: High to Low</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="radio"
                    value="Delivery Time"
                    checked={selectedOption === "Delivery Time"}
                    onChange={handleOptionChange}
                  />
                  <p>Delivery Time</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="radio"
                    value="Cost: Low to High"
                    checked={selectedOption === "Cost: Low to High"}
                    onChange={handleOptionChange}
                  />
                  <p>Cost: Low to High</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="radio"
                    value="Cost: High to Low"
                    checked={selectedOption === "Cost: High to Low"}
                    onChange={handleOptionChange}
                  />
                  <p>Cost: High to Low</p>
                </div>
              </div>
            )}
            {val == "Cuisines" && (
              <div style={{ flex: 2, paddingInline: 20 }}>
                <div style={{ paddingBlock: 20, position: "relative" }}>
                  <div style={{ position: "absolute", top: "40%", left: 6 }}>
                    <Search />
                  </div>

                  <input
                    type="text"
                    placeholder="Search here"
                    style={{
                      border: "1px groove #CFCFCF",
                      width: "100%",
                      outline: "none",
                      borderRadius: 6,
                      paddingInline: 30,
                      paddingBlock: 10,
                      fontSize: 20,
                    }}
                  />
                  <div style={{ position: "absolute", top: "40%", right: 6 }}>
                    <Cancel />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 80,
                    height: 300,
                    overflowY: "auto",
                  }}
                >
                  <div style={{ height: 400, overflowY: "auto" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("New York")}
                      />
                      <p>Abruzzese</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("Aegean")}
                      />
                      <p>Aegean</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("Abruzzese")}
                      />
                      <p>Abruzzese</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("Aegean")}
                      />
                      <p>Aegean</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("England")}
                      />
                      <p>England</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Abruzzese</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Aegean</p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Abruzzese</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Aegean</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Abruzzese</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Aegean</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Aegean</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Abruzzese</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Aegean</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {val == "Rating" && (
              <div style={{ flex: 2, paddingInline: 20 }}>
                <small style={{ color: "#696969", fontSize: 12 }}>Rating</small>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p
                    style={{
                      margin: 0,
                      color: "#1c1c1c",
                      fontWeight: "600",
                      fontSize: 20,
                    }}
                  >
                    {range}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      color: "#1c1c1c",
                      fontWeight: "600",
                      fontSize: 20,
                    }}
                  >
                    {range === "3.5" || range === "4.0" || range === "4.5"
                      ? " +"
                      : ""}
                  </p>
                </div>
                <div
                  className=""
                  style={{
                    marginTop: "40%",
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
                        range === "4.5" || range === "5.0"
                          ? "#e8e8e8"
                          : "#ef4f5f",
                    }}
                  ></div>
                  <div onClick={() => setRange("4.5")}>
                    <div
                      style={{
                        height: range === "4.5" ? 20 : 15,
                        width: range === "4.5" ? 20 : 15,
                        backgroundColor:
                          range === "5.0" ? "#e8e8e8" : "#ef4f5f",
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
                    Any
                  </small>
                  <small style={{ fontWeight: "500", color: "#000000de" }}>
                    3.5
                  </small>
                  <small style={{ fontWeight: "500", color: "#000000de" }}>
                    4.0
                  </small>
                  <small style={{ fontWeight: "500", color: "#000000de" }}>
                    4.5
                  </small>
                  <small style={{ fontWeight: "500", color: "#000000de" }}>
                    5.0
                  </small>
                </div>
              </div>
            )}
            {val == "More filters" && (
              <div style={{ flex: 2, paddingInline: 20 }}>
                <div style={{ paddingBlock: 20, position: "relative" }}>
                  <div style={{ position: "absolute", top: "40%", left: 6 }}>
                    <Search />
                  </div>

                  <input
                    type="text"
                    placeholder="Search here"
                    style={{
                      border: "1px groove #CFCFCF",
                      width: "100%",
                      outline: "none",
                      borderRadius: 6,
                      paddingInline: 30,
                      paddingBlock: 10,
                      fontSize: 20,
                    }}
                  />
                  <div style={{ position: "absolute", top: "40%", right: 6 }}>
                    <Cancel />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 80,
                    height: 300,
                    overflowY: "auto",
                  }}
                >
                  <div style={{ height: 400, overflowY: "auto" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("New York")}
                      />
                      <p>Abruzzese</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("Aegean")}
                      />
                      <p>Aegean</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("Abruzzese")}
                      />
                      <p>Abruzzese</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("Aegean")}
                      />
                      <p>Aegean</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("England")}
                      />
                      <p>England</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Abruzzese</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Aegean</p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Abruzzese</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Aegean</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Abruzzese</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Aegean</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Aegean</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Abruzzese</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" />
                      <p>Aegean</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: 20,
              paddingInline: 20,
              alignItems: "center",
              gap: 30,
            }}
          >
            <p style={{ color: "#1C1C1C" }}>Clear All</p>
            <button
              style={{
                backgroundColor: "#ef4f5f",
                outline: "none",
                border: "none",
                color: "white",
                paddingInline: 40,
                borderRadius: 10,
                paddingBlock: 15,
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Lights;
