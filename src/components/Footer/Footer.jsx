import footerCss from "./Footer.module.css";

import Appstore from "/icons/appstore.png";
import Gstore from "/icons/playstore.png";
import indianFlag from "/images/indiaflag.png";

import Facebook from "/images/facebook.png";
import Instagram from "/images/instagram.png";
import Linkedin from "/images/linkedin.png";
import Twitter from "/images/twitter.png";
import Youtube from "/images/youtube.png";

let Footer = () => {
    // const countries = [
    //     { name: 'India', code: 'IN' },
    //     { name: 'USA', code: 'US' },
    //     { name: 'Canada', code: 'CA' },
    // ];

    // const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);

  return (
    <div className={footerCss.footer}>
      <div className={footerCss.innerFooter}>
        <div className={footerCss.sec1}>
          <div className={footerCss.logoBox} style={{fontFamily:'DexaBold',color:'var(--text-color)', marginLeft:10,width:'50%'}}>Gezte</div>
          <div className={footerCss.filters}>
            <div className={footerCss.filterBox}>
              {" "}
              <span>
                <img
                  className={footerCss.icon}
                  src={indianFlag}
                  alt="india flag"
                />
              </span>
              <span style={{color:'var(--text-color)'}}>India</span>
              <span className={footerCss.arrow} style={{color:'var(--text-color)'}}>&#709;</span>
            </div>
            <div className={footerCss.filterBox}>
              <span style={{color:'var(--text-color)'}}>
                🌐<span></span> English
              </span>{" "}
              <span className={footerCss.arrow} style={{color:'var(--text-color)'}}>&#709;</span>
            </div>
          </div>
        </div>
        <div className={footerCss.sec2}>
          <div className={[footerCss.box1, footerCss.box].join(" ")}>
            <div className={footerCss.boxTtl} style={{fontFamily:'DexaLight',color:'var(--text-color)'}}>ABOUT Gezte</div>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
              Who We Are
            </a>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
              Blog
            </a>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
              Work With Us
            </a>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
              Investor Relations
            </a>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
              Report Fraud
            </a>
          </div>
          <div className={[footerCss.box2, footerCss.box].join(" ")}>
            <div className={footerCss.boxTtl} style={{fontFamily:'DexaLight',color:'var(--text-color)'}}>ZOMAVERSE</div>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
             Gezte
            </a>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
              Feeding India
            </a>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
              Hyperpure
            </a>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
              Zomaland
            </a>
          </div>
          <div className={[footerCss.box3, footerCss.box].join(" ")}>
            <div className={footerCss.boxTtl} style={{fontFamily:'DexaLight',color:'var(--text-color)'}} >FOR RESTAURANTS</div>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
              Partner With Us
            </a>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
              Apps For You
            </a>

            <div className={footerCss.boxTtl} style={{fontFamily:'DexaLight',color:'var(--text-color)'}}>FOR ENTERPRISES</div>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
              Zomato For Work
            </a>
          </div>
          <div className={[footerCss.box4, footerCss.box].join(" ")}>
            <div className={footerCss.boxTtl} style={{fontFamily:'DexaLight',color:'var(--text-color)'}}>LEARN MORE</div>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
              Privacy
            </a>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
              Security
            </a>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
              Terms
            </a>
            <a href="" style={{fontFamily:'DexaLight',color:'var(--text-color)'}} className={footerCss.boxOpt}>
              Sitemap
            </a>
          </div>
          <div className={[footerCss.box5, footerCss.box].join(" ")}>
            <div className={footerCss.boxTtl} style={{fontFamily:'DexaLight',color:'var(--text-color)'}} >SOCIAL LINKS</div>
            <div className={footerCss.socialImgs}>
              <a
                href="https://www.facebook.com"
                className={footerCss.socialImgAnchore}
              >
                <img
                  className={footerCss.socialImg}
                  src={Facebook}
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.linkedin.com"
               className={footerCss.socialImgAnchore}
              >
                <img
                  className={footerCss.socialImg}
                  src={Linkedin}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://www.instagram.com"
                className={footerCss.socialImgAnchore}
              >
                <img
                  className={footerCss.socialImg}
                  src={Instagram}
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.twitter.com"
                className={footerCss.socialImgAnchore}
              >
                <img
                  className={footerCss.socialImg}
                  src={Twitter}
                  alt="Twitter"
                />
              </a>
              <a
                href="https://www.youtube.com"
                className={footerCss.socialImgAnchore}
              >
                <img
                  className={footerCss.socialImg}
                  src={Youtube}
                  alt="Youtube"
                />
              </a>
            </div>
            <a href="https://play.google.com/store" className={footerCss.app}>
              <img
                className={footerCss.appImg}
                src={Gstore}
                alt="Google Play Store"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              className={footerCss.app}
            >
              <img
                className={footerCss.appImg}
                src={Appstore}
                alt="Apple App Store"
              />
            </a>
          </div>
        </div>
        <hr className={footerCss.breakLine} />
        <div className={footerCss.sec3} style={{color:'var(--text-color)'}}>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2024 © Zomato™ Ltd. All
          rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
