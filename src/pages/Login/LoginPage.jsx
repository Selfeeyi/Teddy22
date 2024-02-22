import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginPage.css";
import NavigationBar2 from "../../components/Navbars/NavigationBar2/NavigationBar2";
import Modal from "../../components/Modal/Modal";
import Signup from "../../components/Auth/Signup/Signup";
import axios from "axios";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const LoginPage = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [otp, setOtp] = useState("");

  const showErrors = (field, valueLen, min) => {
    if (valueLen === 0) {
      return `${field} is required field`;
    } else if (valueLen > 0 && valueLen < min) {
      return `${field} must be at least ${min} characters`;
    } else {
      return "";
    }
  };

  const schema = yup
    .object()
    .shape({
      number: yup
        .string()
        .min(10, (obj) => showErrors("Number", obj.value.length, obj.min))
        .max(10, "Number should be 10 digits only")
        .required('Number is a required field'),
    })
    .required();
  
    
   
  const defaultvalues = {
    number: "",
  };

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultvalues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  let [auth, setAuth] = useState({
    closed: true,
    login: false,
    signup: false,
  });

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

  const LoginUser = async (data) => {
    try {
      const obj = {
        action: "register",
        number: data.number,
      };

      localStorage.setItem("number", data.number);

      const result = await axios.post(
        "https://gezte.com/api/user_login.php",
        obj
      );
      console.log(result.data);

      if(result.data.message === "Please register first"){
        toast.warn("Number not registered", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(()=>{
          setAuth({ closed: false, login: false, signup: true })
        },2000)
      }else {
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

        setToggle(true);
      }


    } catch (error) {
      console.log(error);
    }
  };

  const VerifyOtp = async () => {
    try {
      const mob_num = localStorage.getItem("number");
      const obj = {
        action: "verify_otp",
        mobile_number: mob_num,
        otp: otp,
      };

      console.log("otp", obj);

      if(!otp || otp.length < 6){
        return toast.warn("Please Enter 6 digit Otp", {
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

      const result = await axios.post(
        "https://gezte.com/api/user_login.php",
        obj
      );
      console.log(result.data);

      if (result.data.message === "OTP verification successful") {
        toast.success("Otp Verified Successfully", {
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
          name:result.data.name,
          number:result.data.number
        }));

        setTimeout(() => {
          navigate("/home");
        }, 2000);
      }else{
        toast.error("Something Went Wrong", {
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
      console.log(error);
    }
  };

  return (
    <div>
      <NavigationBar2  />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 20,
          paddingTop: 5,
          height: 550,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "80%",
            marginTop: "2%",
          }}
        >
          <div style={{ flex: 3, height: 550 }} className="mainDiv"></div>

          <div
            style={{
              flex: 2,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              paddingBlock: "4%",
              height: 550,
            }}
          >
            {toggle === false ? (
              <form
                onSubmit={handleSubmit(LoginUser)}
                style={{ marginBlock: "15%" }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    textAlign: "center",
                    fontSize: 24,
                    margin: 12,
                  }}
                >
                  Log in to your account
                </p>
                <p
                  style={{
                    fontWeight: "600",
                    textAlign: "center",
                    color: "#8c8c8c",
                    margin: 0,
                  }}
                >
                  Don't have an account?{" "}
                  <span
                    style={{ color: "#fb1b26", cursor: "pointer" }}
                    onClick={() =>
                      setAuth({ closed: false, login: false, signup: true })
                    }
                  >
                    Sign up
                  </span>
                </p>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",

                    paddingInline: "10%",
                    overflow: "hidden",
                    marginTop: 40,
                  }}
                >
                  <div
                    style={{
                      borderBottom: "1px groove grey",
                      paddingBottom: 5,
                      margin: 0,
                    }}
                  >
                    <Controller
                      name="number"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <input
                          type="number"
                          className="inputbrdr"
                          placeholder="Mobile No...."
                          // onBlur={onBlur}
                          onChange={onChange}
                          value={value}
                        />
                      )}
                    />

                    {/* <input
                      className="inputbrdr"
                      placeholder="Mobile No...."
                      onChange={(e) => setNumber(e.target.value)}
                      value={number}
                      {...register("number", {
                        required: "Phone Number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Invalid phone number. Must be 10 digits.",
                        },
                      })}
                    /> */}
                  </div>

                  <div style={{ margin: 0 }}>
                    {errors.number && (
                      <small style={{ color: "red" }}>
                        {errors.number.message}
                      </small>
                    )}
                  </div>

                  <p
                    className="forgot"
                    style={{
                      textAlign: "end",
                      margin: 0,
                      paddingBlock: 6,

                      cursor: "pointer",
                    }}
                  >
                    Forgot your username/password?
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      marginBlock: "10%",
                    }}
                  >
                    <button
                      type="submit"
                      // onClick={() => LoginUser()}
                      style={{
                        backgroundColor:'var(--background-color)',
                        color: "white",
                        outline: "none",
                        border: "none",
                        width: "100%",
                        borderRadius: 10,
                        paddingBlock: 10,
                        fontWeight: "600",
                        fontSize: 18,
                      }}
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <form
                onSubmit={handleSubmit(VerifyOtp)}
                style={{ marginBlock: "20%" }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    textAlign: "center",
                    fontSize: 24,
                    margin: 12,
                  }}
                >
                  Enter Otp Here
                </p>
                <p
                  style={{
                    fontWeight: "600",
                    textAlign: "center",
                    color: "#8c8c8c",
                    margin: 0,
                  }}
                >
                  Please Enter Otp And Verify Your Account
                </p>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    paddingInline: "10%",
                    overflow: "hidden",
                    marginTop: 40,
                  }}
                >
                  <div
                    style={{
                      paddingBottom: 5,
                      margin: 0,
                    }}
                  >
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

                  <p
                    className="forgot"
                    style={{
                      textAlign: "end",
                      margin: 0,
                      padding: 0,
                      cursor: "pointer",
                      marginBlock: "3%",
                    }}
                  >
                    Resend OTP
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      marginBlock: "4%",
                    }}
                  >
                    <button
                      //onClick={() => VerifyOtp()}
                      type="submit"
                      style={{
                        backgroundColor: 'var(--background-color)',
                        color: "white",
                        outline: "none",
                        border: "none",
                        width: "100%",
                        borderRadius: 10,
                        paddingBlock: 10,
                        fontWeight: "600",
                        fontSize: 18,
                      }}
                    >
                      Verify
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <div>{auth?.signup ? <Signup setAuth={setAuth} /> : ""}</div>
    </div>
  );
};

export default LoginPage;

{
  /* <input
                      type="number"
                      className="inputbrdr"
                      placeholder="Enter 6 digit Otp here"
                      onChange={(e)=>setOtp(e.target.value)}
                      {...register('otp', {
                        required: 'OTP is required',
                        pattern: {
                          value: /^[0-9]{6}$/,
                          message: 'Invalid OTP. Must be 6 digits.',
                        },
                      })}
                    /> */
}

{
  /* <div style={{ margin: 0 }}>
                    {errors.otp && (
                      <small style={{ color: "red" }}>
                        {errors.otp.message}
                      </small>
                    )}
                  </div> */
}
