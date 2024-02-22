import React, { useState, useEffect } from "react";
import Wrapper from "./DualSliderStyle";
import CarouselUtil from "../../utils/CarouselUtil/CarouselUtil";
import CircleCard2 from "../../utils/Cards/CircleCards/CircleCard2/CircleCard2";
const DemoDualSlider = () => {
  const [position, setPosition] = useState(0);
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);
  const [leftSliderImages, setLeftSliderImages] = useState([]);
  const [rightSliderImages, setRightSliderImages] = useState([]);

  useEffect(() => {
    fetch("https://gezte.com/api/fetch_full_name_package.php")
      .then((response) => response.json())
      .then((result) => {
        const first12Items = result.data.slice(0, 11);
        const second12Items = result.data.slice(12, 23);

        const leftSliderContent = first12Items.map((item) => ({
          imageUrl: `https://gezte.com/api/${item.image}`,
          packageFullName: item.package_full_name,
        }));

        const rightSliderContent = second12Items.map((item) => ({
          imageUrl: `https://gezte.com/api/${item.image}`,
          packageFullName: item.package_full_name,
        }));

        setLeftSliderImages(leftSliderContent);
        setRightSliderImages(rightSliderContent);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  const handleSliderNavigation = (direction) => {
    console.log(direction);
    if (
      (direction === -1 && showLeft && position >= 0) ||
      (direction === 1 && showRight && position < 7)
    ) {
      setPosition((prevPosition) => prevPosition + direction);
      setShowLeft(false);
      setShowRight(false);
    }
  };

  const handleLeftTransitionEnd = () => {
    setShowLeft(true);
  };

  const handleRightTransitionEnd = () => {
    setShowRight(true);
  };

  return (
    <Wrapper>
      <div /*className={css.rollerCarosuel}*/>
        <CarouselUtil>
          {leftSliderImages?.map((val, id) => {
            return (
              <div key={id}>
                <CircleCard2
                      imgSrc={val.imageUrl}
                      name={val.packageFullName}
                      time={val.time}
                    /> 
              </div>
            );
          })}
        </CarouselUtil>
      </div>
    </Wrapper>
  );
};

export default DemoDualSlider;




