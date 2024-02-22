import { useState, useRef, useEffect } from "react";

import css from "./RestaurantPage.module.css";

import NavigationBar from "../../components/Navbars/NavigationBar2/NavigationBar2";
import DownloadAppUtil from "../../utils/RestaurantUtils/DownloadAppUtil/DownloadAppUtil";
import HeroComponent from "../../components/RestaurantComponents/HeroComponent/HeroComponent";
import OrderTitleComponent from "../../components/RestaurantComponents/OrderTitleComponent/OrderTitleComponent";
import OrderBodyComponent from "../../components/RestaurantComponents/OrderBodyComponent/OrderBodyComponent";
import Footer from "../../components/Footer/Footer";
import OrderBody from "../../components/RestaurantComponents/OrderBody/OrderBody";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";  

const RestaurantPage = () => {
  const { id, restaurantName } = useParams();
  const location = useLocation();
  return (
    <div>
      <NavigationBar />
      <div className={css.outerDiv} style={{ marginTop: "3%" }}   >
        <HeroComponent />
        <div className={css.innerDiv2}>
          <OrderTitleComponent  restutentName={location.state.restaurantName}/>
          <OrderBody />
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;


