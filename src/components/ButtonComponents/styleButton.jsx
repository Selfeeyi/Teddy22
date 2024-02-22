import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
      
  border: none;
  border-radius: 15px;
  color:#baf200;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: ${({ backgroundcolor }) => backgroundcolor || "rgb(4, 26, 104)"} !important;
  cursor:pointer;
`;

const StyledButton = ({ btnName, backgroundcolor, color, height }) => {
  return (
    <Wrapper backgroundcolor={backgroundcolor} color={color} height={height}>
      {btnName}
    </Wrapper>
  );
}

export default StyledButton;


// display:flex;
// align-items:center;
// justify-content:center;
// border: "none";
// color: rgb(186, 242, 0);
// outline: "none";
// padding-top:5px;
// padding-bottom: 5px;
// width:210px;
// margin-right:5px;
// border-radius: 15px;

