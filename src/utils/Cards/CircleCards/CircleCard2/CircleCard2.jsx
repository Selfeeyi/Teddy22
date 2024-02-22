import css from './CircleCard2.module.css'

import biryaniC from '/icons/biryaniC.png'

let CircleCard2 = ({ imgSrc, name, time, productData }) => {
    return <div className={css.outerDiv2}>
        <div className={css.innerDiv}>
            <div className={css.imgDiv}>
                {productData? <img className={css.img}  style={{padding:'10px', width:'100%', borderRadius:'30px'/*, marginLeft:'38px'*/}} src={imgSrc} alt="food image" />
                  :<img className={css.img}  style={{padding:'10px', width:'70%', borderRadius:'50%', marginLeft:'20px'}} src={imgSrc} alt="food image" />
                 }
            </div>
            <div className={css.txtBox}>
            {productData?<div className={css.title} style={{fontFamily:"DexaLight", width:'183px', color:'white', marginLeft:'33px'}}>{name}</div> :<div className={css.title} style={{fontFamily:"DexaLight", width:'188px' ,marginLeft:'20px'}}>{name}</div>}
                <div className={css.duration} style={{ marginRight:'33px'}}>{time} {time? "min":""} </div>
            </div>
        </div>
    </div>
}

export default CircleCard2;