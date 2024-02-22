import { useState } from "react";

import css from "./FoodItemProduct.module.css";

import starGIcon from "/icons/starGIcon.png";
import starGrIcon from "/icons/starGrIcon.png";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const FoodItemProduct = (props) => {
  let { imgSrc, ttl, votes, price, desc, vegNonveg, mustTry } = props.data;
  let dataset = props?.dataset;
  const [readMore, setReadMore] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <div className={css.outerDiv} data-id={dataset} id={props.id}>
      <div className={css.innerDiv}>
        {imgSrc ? (
          <div className={css.imgBox}>
            <img src={imgSrc} className={css.img} alt="food item" />
            <img src={vegNonveg} className={css.typeImg} alt="veg or nonveg" />
          </div>
        ) : (
          <img src={vegNonveg} className={css.typeImg2} alt="veg or nonveg" />
        )}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={css.box}>
            <div className={css.ttl}>{ttl}</div>
            {mustTry ? <div className={css.tag}>MUST TRY</div> : ""}
            <div className={css.ratings}>
              <div className={css.stars}>
                <img src={starGIcon} className={css.starIcon} />
                <img src={starGIcon} className={css.starIcon} />
                <img src={starGIcon} className={css.starIcon} />
                <img src={starGrIcon} className={css.starIcon} />
                <img src={starGrIcon} className={css.starIcon} />
              </div>
              <div className={css.votesTxt}>{votes} votes</div>
            </div>
            <div className={css.price}>₹{price}</div>
            <div className={css.desc}>
              {readMore ? desc : desc.substring(0, 100)}
              ...
              {!readMore ? (
                <span
                  className={css.readMore}
                  onClick={() => setReadMore(true)}
                >
                  read more
                </span>
              ) : (
                ""
              )}
            </div>
          </div>

          <div>
            <button style={{backgroundColor:"#fc2260",border:"none",outline:"none",paddingBlock:5,color:"white",fontFamily:"dexaSemi",paddingInline:15,borderRadius:8,display:"flex",justifyContent:"center",alignItems:"center",gap:6}} >{toggle ?<FaMinus onClick={()=>setToggle(!toggle)}/>:<FaPlus onClick={()=>setToggle(!toggle)}/>}ADD{toggle ?<FaPlus/>:""}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemProduct;
