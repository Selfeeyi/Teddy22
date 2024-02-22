import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import gLogo from "/images/google.png";
import mailLogo from "/images/emailIcon.jpg";
import closeBtn from "/images/closeBtn.jpg";
import EnterOTP from "../EnterOTP/EnterOTP";
import signupCss from "./Signup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, getUser } from "../../../pages/Login/redux/login.action";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import axios from "axios";
import { toast } from "react-toastify";

let Signup = ({ setAuth, setLoggedIn }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [ischecked, setIschecked] = useState(false);

  const otpInputStyle = {
    width: "40px", // Set your desired width
    height: "40px", // Set your desired height
    border: "1px solid #ccc", // Set your desired border style
    borderRadius: "4px", // Set your desired border radius
    color: "#333", // Set your desired text color
    fontSize: "16px", // Set your desired font size
    margin: "4px",
    // outline:"none" ,
    textAlign: "center",

    // Set your desired margin
    // Add any other styles as needed
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  0.0;

  const [regdata, setRegdata] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  let [otpModal, setOTPModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // function handleRegister(data) {
  //   console.log("regdata", data);
  //   dispatch(registerUser(data));
  // }

  async function handleRegister(data) {
    try {
      const obj = {
        action: "register",
        number: data.number,
        name: data.name,
        email: data.email,
      };
      localStorage.setItem("mobile", data.number);

      const response = await axios.post(
        "https://gezte.com/api/gezte_user_otp.php",
        obj
      );
      const result = await response.data;
      console.log("result", result);
      if (result.message === "Number already exists") {
        toast.warn("Number Already Exist", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });


        setTimeout(() => {
          setAuth({ closed: false, login: false, signup: false });
          navigate("/login");
        }, 2000);
      } else {
        toast.success("Otp Sent Successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      if (result.otp) {
        setStep(2);
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  async function verifyOTP(data) {
    try {
      const mobnum = localStorage.getItem("mobile");
      const obj = {
        action: "verify_otp",
        mobile_number: mobnum,
        otp: otp,
      };

      console.log("verify", obj);

      const response = await axios.post(
        "https://gezte.com/api/gezte_user_otp.php",
        obj
      );
      const result = await response.data;
      console.log("result", result.name,result.number);

      if (result.message === "OTP verification successful") {
        toast.success("OTP Verified Successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        localStorage.setItem("userData", JSON.stringify({
          name:result.name,
          number:result.number
        }));

        setTimeout(() => {
          navigate("/home");
        }, 1000);

        setAuth({ closed: true, login: false, signup: false });
      } else {
        toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  let loginDiv = (
    <div className={signupCss.outerDiv}>
      <div className={signupCss.modal}>
        <div className={signupCss.header}>
          <span className={signupCss.ttl}>Signup</span>
          <span
            className={signupCss.closeBtn}
            onClick={() =>
              setAuth({ closed: true, login: false, signup: false })
            }
          >
            <img
              className={signupCss.closeBtnImg}
              src={closeBtn}
              alt="close button"
            />
          </span>
        </div>
        {step === 1 ? (
          <div>
            <form
              onSubmit={handleSubmit(handleRegister)}
              className={signupCss.lgBox}
            >
              <input
                className={signupCss.inpBox}
                type="text"
                placeholder="Full Name ..."
                // value={regdata.name}
                onChange={(e) =>
                  setRegdata({ ...regdata, name: e.target.value })
                }
                {...register("name", { required: "Full Name is required" })}
              />
              {errors.name && (
                <small style={{ color: "red" }}>{errors.name.message}</small>
              )}
              <input
                className={signupCss.inpBox}
                type="text"
                placeholder="Email.."
                // value={regdata.email}
                onChange={(e) =>
                  setRegdata({ ...regdata, email: e.target.value })
                }
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <small style={{ color: "red" }}>{errors.email.message} </small>
              )}
              <input
                className={signupCss.inpBox}
                type="number"
                placeholder="PhoneNumber ..."
                // value={regdata.mobile}
                onChange={(e) =>
                  setRegdata({ ...regdata, number: e.target.value })
                }
                {...register("number", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number. Must be 10 digits.",
                  },
                })}
              />

              {errors.number && (
                <small style={{ color: "red" }}>{errors.number.message}</small>
              )}

              <span className={signupCss.termsTxt}>
                <input
                  type="checkbox"
                  name="accpect"
                  id="accpect"
                  className={signupCss.checkBox}
                  checked={ischecked}
                  onChange={() => setIschecked(!ischecked)}
                />
                <span>
                  I agree to Gezte's{" "}
                  <a href="" className={signupCss.termaAnchor}>
                    Terms of Service, Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="" className={signupCss.termaAnchor}>
                    Content Policies
                  </a>
                </span>
              </span>
              <button
                type="submit"
                style={{
                  backgroundColor: !ischecked ? "grey" : "var(--background-color)",
                  color: "white",
                  border: "none",
                  margin: "none",
                  paddingBlock: "4%",
                  borderRadius: 8,
                  cursor: !ischecked ? "not-allowed" : "pointer",
                  fontWeight: "600",
                  fontSize: 16,
                }}
                disabled={!ischecked}
              >
                Create Account
              </button>
            </form>

            <hr className={signupCss.break} />
            <div className={signupCss.newToZomato}>
              Already have an account?{" "}
              <div
                className={signupCss.createAcc}
                onClick={() => {
                  navigate("/login");
                  setAuth({ closed: false, login: false, signup: false });
                }}
              >
                Log in
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <div className="flex justify-center">
              <p
                className=""
                style={{
                  textAlign: "center",
                  fontSize: 22,
                  fontWeight: "600",
                  color: "#6c757d",
                }}
              >
                ENTER OTP
              </p>
            </div>

            <div className=" flex justify-center">
              <p className="" style={{ textAlign: "center", color: "#6c757d" }}>
                Please enter otp to verify your account
              </p>
            </div>

            <div className="mb-10 mt-5">
              <label className="" style={{ color: "#6c757d" }}>
                Enter 6 digit otp
              </label>
              <div style={{ marginBlock: "5%" }}>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
                  renderInput={(props) => (
                    <input {...props} style={otpInputStyle} />
                  )}
                />
              </div>
            </div>

            <div className="">
              <button
                style={{
                  width: "100%",
                  backgroundColor: "var(--background-color)",
                  outline: "none",
                  border: "none",
                  color: "white",
                  paddingBlock: "3%",
                  borderRadius: 8,
                }}
                onClick={() => verifyOTP()}
              >
                Next
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <p className="text-[#6c757d] ">
                Didn't recieved otp ?{" "}
                <span
                  // onClick={() => setCreateModalOne(true)}
                  className="text-[#fc2260] cursor-pointer"
                >
                  Resend
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  return createPortal(loginDiv, document.getElementById("modal"));
};

export default Signup;

// {otpModal? (
//   <EnterOTP
//     setModal={setOTPModal}
//     setLoggedIn={setLoggedIn}
//     setAuth={setAuth}
//     phoneNumber={phoneNumber}
//     name={name}
//   />
// ) : (
//   <div>

//       <form onSubmit={handleSubmit(handleLogin)} className={signupCss.lgBox}>
//         <input
//           className={signupCss.inpBox}
//           type="text"
//           placeholder="Full Name ..."
//           // value={regdata.name}
//           onChange={(e) =>
//             setRegdata({ ...regdata, name: e.target.value })
//           }
//           {...register("name", { required: "Full Name is required" })}
//         />
//         {errors.name && <small style={{color:"red"}}>{errors.name.message}</small>}
//         <input
//           className={signupCss.inpBox}
//           type="text"
//           placeholder="Email.."
//           // value={regdata.email}
//           onChange={(e) =>
//             setRegdata({ ...regdata, email: e.target.value })
//           }
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /\S+@\S+\.\S+/,
//               message: "Invalid email address",
//             },
//           })}
//         />
//         {errors.email && <small style={{color:"red"}}>{errors.email.message} </small>}
//         <input
//           className={signupCss.inpBox}
//           type="number"
//           placeholder="PhoneNumber ..."
//           // value={regdata.mobile}
//           onChange={(e) =>
//             setRegdata({ ...regdata, mobile: e.target.value })
//           }
//           {...register('mobile', {
//             required: 'Phone Number is required',
//             pattern: {
//               value: /^[0-9]{10}$/,
//               message: 'Invalid phone number. Must be 10 digits.',
//             },
//           })}
//         />

//         {errors.mobile && <small style={{color:"red"}}>{errors.mobile.message}</small>}

//         <span className={signupCss.termsTxt}>
//           <input
//             type="checkbox"
//             name="accpect"
//             id="accpect"
//             className={signupCss.checkBox}
//           />
//           <span>
//             I agree to Gezte's{" "}
//             <a href="" className={signupCss.termaAnchor}>
//               Terms of Service, Privacy Policy
//             </a>{" "}
//             and{" "}
//             <a href="" className={signupCss.termaAnchor}>
//               Content Policies
//             </a>
//           </span>
//         </span>
//         <button className={`${signupCss.btn}`} type="submit">
//           {isLoading ? (
//             <>
//               <span
//                 className="spinner-border spinner-border-sm"
//                 role="status"
//                 aria-hidden="true"
//               ></span>
//               <span>Sending OTP...</span>
//             </>
//           ) : (
//             "Create Account"
//           )}
//         </button>
//       </form>

//     {/* <div className={signupCss.orBreak}>
//   <span className={signupCss.orBreakText}>or</span>
// </div>
// <div className={signupCss.socialSignupBox}>
//   <img className={signupCss.icon} src={gLogo} alt="google login" />
//   Continue with Google
// </div> */}

//     <hr className={signupCss.break} />
//     <div className={signupCss.newToZomato}>
//       Already have an account?{" "}
//       <div
//         className={signupCss.createAcc}
//         onClick={() =>{navigate('/login')
//            setAuth({ closed: false, login: false, signup: false })
//         }}
//       >
//         Log in
//       </div>
//     </div>
//   </div>
// )}
