import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
      
  border: none;
  border-radius: 15px;
  color:${({ color }) => color || "#baf200"} !important;
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

const StyledButton = ({ btnName, backgroundcolor, color, height , onClick}) => {
  return (
    <Wrapper backgroundcolor={backgroundcolor} color={color} height={height} onClick={onClick}>
        {btnName}
    </Wrapper>
  );
}

export default StyledButton;



