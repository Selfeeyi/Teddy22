import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Regarding = () => {
  const [issue, setIssue] = useState(false);
  const [issue1, setIssue1] = useState(false);
  return (
    <div>
      <p
        style={{
          fontFamily: "dexaSemi",
          fontSize: 25,
          color: "#282c3f",
        }}
      >
        Legal, Terms And Conditions
      </p>

      <div style={{ borderBottom: "2px groove #efefef" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => setIssue(!issue)}
        >
          <p style={{ fontSize: 20, color: "#3d4152" }}>Terms Of Use</p>
          <p>
            {issue ? (
              <MdOutlineKeyboardArrowUp size={24} />
            ) : (
              <RiArrowDownSLine size={23} />
            )}
          </p>
        </div>

        {issue && (
          <p style={{ fontSize: 14, color: "#3d4152" }}>
            These terms of use (the "Terms of Use") govern your use of our
            website www.swiggy.in (the "Website") and our "Swiggy" application
            for mobile and handheld devices (the "App"). The Website and the App
            are jointly referred to as the "Services"). Please read these Terms
            of Use carefully before you download, install or use the Services.
            If you do not agree to these Terms of Use, you may not install,
            download or use the Services. By installing, downloading or using
            the Services, you signify your acceptance to the Terms of Use and
            Privacy Policy (being hereby incorporated by reference herein) which
            takes effect on the date on which you download, install or use the
            Services, and create a legally binding arrangement to abide by the
            same.
          </p>
        )}
      </div>

      <div style={{ borderBottom: "2px groove #efefef" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => setIssue1(!issue1)}
        >
          <p style={{ fontSize: 20, color: "#3d4152" }}>
            Privacy Policy
          </p>
          <p>
            {issue1 ? (
              <MdOutlineKeyboardArrowUp size={24} />
            ) : (
              <RiArrowDownSLine size={23} />
            )}
          </p>
        </div>

        {issue1 && (
          <p style={{ fontSize: 14, color: "#3d4152" }}>
            We ( Bundl Technologies Private Limited, alias "Swiggy" ) are fully
            committed to respecting your privacy and shall ensure that your
            personal information is safe with us. This privacy policy sets out
            the information practices of www.swiggy.com ("Website") including
            the type of information is collected, how the information is
            collected, how the information is used and with whom it is shared.
            Reference to "you" in this Privacy Policy refers to the users of
            this Website whether or not you access the services available on the
            Website or consummate a transaction on the Website. By using or
            accessing this Website, you agree to the terms and conditions of
            this Privacy Policy. You also expressly consent to our use and
            disclosure of your Personal Information (as defined below) in any
            manner as described in this Privacy Policy and further signify your
            agreement to this Privacy Policy and the Terms of Use (being
            incorporated by reference herein). If you do not agree with the
            terms and conditions of this Privacy Policy, please do not proceed
            further or use or access this Website.
          </p>
        )}
      </div>

      <div style={{ borderBottom: "2px groove #efefef" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => setIssue(!issue)}
        >
          <p style={{ fontSize: 20, color: "#3d4152" }}>Terms Of Use</p>
          <p>
            {issue ? (
              <MdOutlineKeyboardArrowUp size={24} />
            ) : (
              <RiArrowDownSLine size={23} />
            )}
          </p>
        </div>

        {issue && (
          <p style={{ fontSize: 14, color: "#3d4152" }}>
            These terms of use (the "Terms of Use") govern your use of our
            website www.swiggy.in (the "Website") and our "Swiggy" application
            for mobile and handheld devices (the "App"). The Website and the App
            are jointly referred to as the "Services"). Please read these Terms
            of Use carefully before you download, install or use the Services.
            If you do not agree to these Terms of Use, you may not install,
            download or use the Services. By installing, downloading or using
            the Services, you signify your acceptance to the Terms of Use and
            Privacy Policy (being hereby incorporated by reference herein) which
            takes effect on the date on which you download, install or use the
            Services, and create a legally binding arrangement to abide by the
            same.
          </p>
        )}
      </div>

      <div style={{ borderBottom: "2px groove #efefef" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => setIssue1(!issue1)}
        >
          <p style={{ fontSize: 20, color: "#3d4152" }}>
            Privacy Policy
          </p>
          <p>
            {issue1 ? (
              <MdOutlineKeyboardArrowUp size={24} />
            ) : (
              <RiArrowDownSLine size={23} />
            )}
          </p>
        </div>

        {issue1 && (
          <p style={{ fontSize: 14, color: "#3d4152" }}>
            We ( Bundl Technologies Private Limited, alias "Swiggy" ) are fully
            committed to respecting your privacy and shall ensure that your
            personal information is safe with us. This privacy policy sets out
            the information practices of www.swiggy.com ("Website") including
            the type of information is collected, how the information is
            collected, how the information is used and with whom it is shared.
            Reference to "you" in this Privacy Policy refers to the users of
            this Website whether or not you access the services available on the
            Website or consummate a transaction on the Website. By using or
            accessing this Website, you agree to the terms and conditions of
            this Privacy Policy. You also expressly consent to our use and
            disclosure of your Personal Information (as defined below) in any
            manner as described in this Privacy Policy and further signify your
            agreement to this Privacy Policy and the Terms of Use (being
            incorporated by reference herein). If you do not agree with the
            terms and conditions of this Privacy Policy, please do not proceed
            further or use or access this Website.
          </p>
        )}
      </div>
    </div>
  );
};

export default Regarding;
