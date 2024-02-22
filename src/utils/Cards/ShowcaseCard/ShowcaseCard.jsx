import { Link } from "react-router-dom";

import css from "./ShowcaseCard.module.css";

import biryani from "/images/profilebanner.jpg";
import upArrowIcon from "/icons/up-arrow-icon.png";
import maxSAfety from "/icons/maxsafty.png";
import safeDelivery from "/icons/safe-delivery.png";
import star from "/icons/star.png";
import { FcCalendar } from "react-icons/fc";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

let ShowcaseCard = (props) => {

    const navigate = useNavigate()


  // const defaultImageUrl = 'https://api.selfeey.com/restaurantsapi/restaurant_documents/659e9175dab26_10_Burger-King.png';
  const {
    link2,
    promoted,
    time,
    offB,
    proExtraB,
    off,
    proExtra,
    name,
    rating,
    imgSrc,
  } = props;
  let link = "/" + "hyderabad/paraside/order";
  return (
    <div className={css.outerDiv} >
      <div className={css.innerDiv}>
        <div className={css.imgBox} onClick={()=>navigate(link)}>
          {promoted && <div className={css.promoted}>Promoted</div>}
          <img className={css.img} src={imgSrc} alt="food image" />
          {offB && <div className={css.off}>{off}% OFF</div>}
          {proExtraB && (
            <div className={css.offPro}>Pro extra {proExtra}% OFF</div>
          )}
          <div className={css.duration}>{time} min</div>
        </div>
        <div className={"css.txtBox"} style={{}}>
          <div className={css.titleBox} style={{ margin: 4 }}>
            <div
              className={css.title}
              style={{
                fontFamily: "DexaSemi",
                color: "var(--secondary-color)",
              }}
            >
              {name}
            </div>
            <div className={css.ratingBox}>
              {" "}
              {rating ? rating : "4"}{" "}
              <img className={css.star} src={star} alt="gorwing arrow" />
            </div>
          </div>
          <div className={css.tagBox} style={{ margin: 2 }}>
            <div
              className={css.tagTitle}
              style={{ fontFamily: "DexaLight", color: "black" }}
            >
              South Indian
            </div>
            <div className={css.tagTxt}>
              ₹<span className={css.type}>350</span> for{" "}
              <span className={css.num}>One</span>
            </div>
          </div>
        </div>
        {/* <div
          style={{
            margin: 0,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "flex-end",
            paddingBottom: "1%",
          }}
        >
          <BiSolidPhoneCall color="#fc2260" />
          <FcCalendar />
          <AiFillMessage color="#fc2260" />
        </div> */}

        <div className={css.footer}>
          <div className={css.scroll1}>
            <div className={css.lg1}>
              <img
                className={css.upArrow}
                src={upArrowIcon}
                alt="gorwing arrow"
              />
            </div>
            <div className={css.ordersPlaces}>
              9000+ orders placed from here recently
            </div>
            <div className={css.lg2}>
              <img className={css.maxSafety} src={maxSAfety} alt="max safety" />
            </div>
          </div>
          <div className={css.scroll2}>
            <div className={css.lg1}>
              <img className={css.upArrow} src={upArrowIcon} alt="max safety" />
            </div>
            <div className={css.ordersPlaces}>
              Follows all max safety mesaures to ensure your food is safe
            </div>
            <div className={css.lg2}>
              <img
                className={css.safeDelivery}
                src={safeDelivery}
                alt="safety delivery"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
