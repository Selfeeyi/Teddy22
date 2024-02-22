import React, { useState } from "react";

import css from "./OrderTitleComponent.module.css";

import RatingUtil from "../../../utils/RestaurantUtils/RatingUtil/RatingUtil";

import infoIcon from "/icons/info.png";
import { FaPhone } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";
import Calendar from "react-calendar";
import Modal from "../../Modal/Modal";

const OrderTitleComponent = ({restutentName}) => {
  const [value, onChange] = useState(new Date());
  const [createModal, setCreateModal] = useState(false);

  return (
    <div className={"css.outerDiv"} style={{width:"100%"}}>
      <div
        className={"css.innerDiv"}
        style={{ display: "flex", flexDirection: "row", alignItems: "center",justifyContent:"space-between" }}
      >
        <div className={"css.left"} >
          <div className={css.title}>{restutentName}</div>
          <div className={css.specials}>
            South Indian, Chinese, North Indian, Sichuan, Pizza
          </div>
          <div className={css.address}>Abids, Hyderabad</div>
          {/* <div className={css.timings}>
            <span className={css.opORclo}>Open now -</span>
            <span className={css.time}>10am - 11pm (Today)</span>
            <span className={css.infoIconBox}>
              <img className={css.infoIcon} src={infoIcon} />
              <div className={css.infoTooltip}>
                <div className={css.ttil}>Opening Hours</div>
                <div className={css.ttim}>
                  Mon-Sun:<span className={css.ctim}>11:30am-10:30pm</span>
                </div>
              </div>
            </span>
          </div> */}
        </div>
        <div className={"css.right"} >
          {/* <RatingUtil rating="4.1" count="601" txt="Dining Reviews" /> */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBlock: 15,
            
              }}
            >
              <RatingUtil rating="3.6" count="37.3k" txt="Delivery Reviews" />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
              }}
            >
 
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 15,
                  width: "100%",
                }}
              >
                <button
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "#fc2260",
                    fontFamily: "dexaSemi",
                    fontSize: 14,
                    color: "white",
                    paddingBlock: 8,
                    paddingInline: "5%",
                    borderRadius: 10,
                  }}
                >
                  Message
                </button>

                {/* <button
                onClick={()=>setCreateModal(true)}
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "#fc2260",
                    fontFamily: "dexaSemi",
                    fontSize: 14,
                    color: "white",
                    paddingBlock: 8,
                    paddingInline: "5%",
                    borderRadius: 10,
                    display:"flex",
                    alignItems:"center",
                    gap:10
                  }}
                >
                  <FaRegCalendarCheck/> Book Now
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={createModal} onClose={() => setCreateModal(false)}>
        <div
          style={{
            backgroundColor: "white",
            width:"fit-content",
            paddingInline: 30,
            borderRadius: 8,
            paddingBlock: 20,
      
          }}
        >
          <Calendar onChange={onChange} value={value} />
        </div>
      </Modal>
    </div>
  );
};

export default OrderTitleComponent;
