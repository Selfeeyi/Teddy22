

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.button`  
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
`;

const ResturantCard = ({ id, image, restaurant_id, restaurant_name, aboutUs }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/restaurant/${id}`, { state: { restaurantName: restaurant_name, id: id } })}
      style={{ width: 350, position: 'relative', borderRadius: '15px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: 400, borderTopLeftRadius: 10, backgroundColor: '#fff', borderTopRightRadius: 10, boxShadow: "0 0 18px #8d979e33", margin: "1%", cursor: "pointer" }}
    >
      <div>
        <img
          src={`https://gezte.com/api/${image}`}
          alt="restaurant"
          style={{
            width: "70rem", // Adjust the width as needed
            minHeight: "150px", // Set a maximum height to limit the size
            objectFit: 'cover',
            height: '256px',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
      </div>

      <div style={{ paddingTop: '16px', flexGrow: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'Column', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            <div style={{ width: '13px', height: '13px', backgroundSize: '100% auto', backgroundPosition: 'center' }}></div>
            <h3 style={{ marginLeft: '19px', fontSize: '16px', textAlign: 'left', fontWeight: 'bold' }}>{restaurant_name}</h3>
          </div>
        </div>
        <div style={{ marginTop: '-5px', whiteSpace: 'normal', color: '#555f72', fontSize: '12px', lineHeight: 1.6, marginLeft: '15px' }}>{aboutUs}</div>
      </div>

      <div style={{ marginTop: 'auto', padding: '0 8px 16px', justifyContent: 'flex-end', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div style={{ margin: '0 8px', display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ color: "#323c47", lineHeight: '25px', marginRight: '10px', fontWeight: '600', fontSize: '16px', fontFamily: 'opensans' }}>₹ 500</div>
          </div>
          <div style={{ float: 'right' }}>
            <div style={{ color: '#e8202d !important', borderRadius: '4px !important' }}>
              <div style={{ display: 'block' }}>
                <button style={{ padding: '2px 15px', marginBottom: '6px', outline: 'none', border: 'none', borderRadius: '7px', color: 'white', backgroundColor: '#041a68' }}>add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
