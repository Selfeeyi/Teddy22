import css from "./FilterBox.module.css";
import { FaFilter } from "react-icons/fa6";

let FilterBox = ({ leftIcon, rightIcon, text, onClick }) => {
  return (
    <div className={css.outerDiv} onClick={onClick} style={{width:"100%"}}>
      {leftIcon ? (
        <div className={css.leftIconBox}>
          <img className={css.leftIcon} src={leftIcon} alt="icon" />
        </div>
      ) : null}
      <div className={css.text} style={{display:"flex",alignItems:"center",gap:5}}><FaFilter size={12}/>{text}</div>
      {rightIcon ? (
        <div className={css.rightIconBox}>
          <img className={css.rightIcon} src={rightIcon} alt="icon" />
        </div>
      ) : null}
    </div>
  );
};

export default FilterBox;
