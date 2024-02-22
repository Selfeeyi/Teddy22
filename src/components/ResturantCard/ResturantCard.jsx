import React from "react";
import resimg from "../../asets/images/restcardimg.jpg";
import veg from "../../asets/images/veg.png";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.button`
      
display: grid;
grid-template-columns: auto auto auto;
background-color: #2196F3;
padding: 10px;
`;

const ResturantCard = ({id,image,restaurant_id,restaurant_name,about_us}) => {
  console.log('***ID****:-',id);
  const navigate = useNavigate()
  return (
    <div
    // onClick={()=>navigate(`/resturant/${id}`, state= { restaurantName: restaurant_name })}
    onClick={() => navigate(`/restaurant/${id}`, { state: { restaurantName: restaurant_name , id:id} })}
      style={{ width: 350, height:380, borderTopLeftRadius: 10, borderTopRightRadius: 10,   boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",margin:"1%",cursor:"pointer" }}
    >
      <img
        src={`https://gezte.com/api/${image}`}
        style={{
          width: "100%",
          height:'100%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <div style={{paddingInline:"3%",paddingBlock:"2%"}}>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:10}}>
          <img src={veg} style={{height:15}} />
          <p style={{ fontSize: 18, fontWeight: "700" }}>{restaurant_name}</p>
        </div>
        <div style={{
          fontSize:12,   
      
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              color: "#484848",
              fontWeight: "600",
            }} >
       {about_us}
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
