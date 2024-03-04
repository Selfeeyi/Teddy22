import React from "react";
import "./FeedbackStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img01 from "../../asets/images/Img01.jpg";
import Img02 from "../../asets/images/Img02.jpg";
import Img03 from "../../asets/images/Img03.jpg";
import Img04 from "../../asets/images/Img04.jpg";
import Img1 from "../../asets/images/500X500_5.png";
import Img2 from "../../asets/images/500X500_6.png";
import Img3 from "../../asets/images/500X500_3.png";
import Img4 from "../../asets/images/500X500_4.png";
import Img5 from "../../asets/images/couple.png";
import Img6 from "../../asets/images/500X500_1.png.jpg.png";

const Feedback = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 8,
  };

  return (
    <>
    <div style={{ backgroundColor: 'white', margin: 0, paddingBlock: "3%" }}>
      <div>
        <p
          style={{
            textAlign: "center",
            color: "black",
            fontWeight: "700",
            fontSize: 40,
            margin: 0,
          }}
        >
          Over <span style={{ color: "#e8202d" }}>20L+ happy customers</span>
          <br />
          and counting...
        </p>
      </div>



<Slider {...settings} style={{ marginBottom: 80, marginTop: 20, width: '100%', height: "150px", position:'relative',right:0,left:25}}>
  {/* <div style={{ borderRadius: 10, marginRight: 5, width: "20%",  }}>
    <img src={Img01} alt="Image 1" style={{ height: '250px', width: '90%', maxWidth: '100%', borderRadius: 10 }} />
  </div> */}
  <div style={{ borderRadius: 10, width: "20%", margin: "0 2px" }}>
    <img src={Img02} alt="Image 2" style={{  maxWidth: '100%', borderRadius: 10 }} />
  </div>
  <div style={{ borderRadius: 10, width: "20%", margin: "0 2px" }}>
    <img src={Img03} alt="Image 3" style={{  maxWidth: '99%', borderRadius: 10 }} />
  </div>
  <div style={{ borderRadius: 10, width: "20%", margin: "0 2px" }}>
    <img src={Img04} alt="Image 4" style={{ maxWidth: '99%', borderRadius: 10 }} />
  </div>
  <div style={{ borderRadius: 10, width: "20%",margin: "0 2px" }}>
  <img src={Img01} alt="Image 1" style={{  maxWidth: '98%', borderRadius: 10 }} />
  </div>
</Slider>

<h2   style={{ fontSize: 50, paddingLeft:'40px'}}>When in doubt,<span style={{ color: "#e8202d" }}> Order Desi!</span></h2>

<div className="container">
<div className="content">
    <div className="para1"
    style={{ fontSize: 20}}>
      <p>Too lazy to cook or bored of ghar ka khana?</p>
      <p>Tired of scrolling through restaurants or</p> 
      <p>stuck on a concall? Whatever the reason,</p> 
      <p>When In Doubt, Order Desi! </p> 
    </div>
    <div style={{ fontSize: 20}}><p>From Dal Makhni to Amritsari Chole Chawal <p>to Butter Chicken to Gulab Jamun, we have </p>  </p> <p> all of your delicious Desi Meals.</p></div>
  </div>
  <div className="column"
  style={{marginLeft:"20px"}}>
    <div class="image-container">
      <img src={Img1} alt="Image 2" className="feedback-imagestyle" />
    </div>
    <div class="image-container">
      <img src={Img2} alt="Image 2" style={{width: '20rem', height: 'auto', borderRadius: 10 ,marginTop:"3px"}} />
    </div>
    <div class="image-container">
      <img src={Img3} alt="Image 2" style={{width: '20rem', height: 'auto', borderRadius: 10,marginTop:"3px" }} />
    </div>
  </div>
  <div className="column">
    
    <div class="image-container">
      <img src={Img4} alt="Image 2" style={{width: '20rem', height: 'auto', borderRadius: 10 ,marginTop:"5px", marginLeft:"0.2px"}} />
    </div>
    <div class="image-container">
      <img src={Img5} alt="Image 2"  style={{width: '20rem', height: 'auto', borderRadius: 10,marginTop:"3px" }}/>
    </div>
    <div class="image-container">
      <img src={Img6} alt="Image 2"  style={{width: '20rem', height: 'auto', borderRadius: 10,marginTop:"3px" }}/>
    </div>
  </div>
 
</div>



  
   
    {/* <div className="container">
      <div className="column">
        
    <img src={Img5} alt="Image 2" style={{width: '20rem', height: 'auto' , borderRadius: 50 }} />

      <img src={Img6} alt="Image 2" style={{width: '20rem', height: 'auto', borderRadius: 50 }} />
      <img src={Img3} alt="Image 2" style={{width: '20rem', height: 'auto', borderRadius: 50 }} />
      
      </div>
      <div className="column">
      <img src={Img4} alt="Image 2" style={{width: '20rem', height: 'auto', borderRadius: 10 }} />
      <img src={Img2} alt="Image 2"  style={{width: '20rem', height: 'auto', borderRadius: 10 }}/>
      <img src={Img1} alt="Image 2"  style={{width: '20rem', height: 'auto', borderRadius: 10 }}/>
      </div>
      <div className="content">
        <h2>When in doubt,
     
          <br />
          <span style={{ color: "#e8202d" }}>Order Desi!</span>
        </h2>
       <div className="para1">
        <p>Too lazy to cook or bored of ghar ka khana?</p>

<p>Tired of scrolling through restaurants or</p> 
<p>stuck on a concall? Whatever the reason,</p> 
<p>When In Doubt, Order Desi! </p> 
</div>

<p>From Dal Makhni to Amritsari Chole Chawal to Butter Chicken to Gulab Jamun, we have all of your delicious Desi Meals.</p>
      </div>
    </div> */}

    </div>
    
</>
   
  );
};

export default Feedback;




