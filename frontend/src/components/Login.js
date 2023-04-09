import React from "react";
import CustomInput from "../components/CustomInput";
// import { Link } from "react-router-dom";
// import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

const Login = (props) => {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Login </h3>
        <p className="text-center">Login to your account to continue </p>
        <form action="">
        
          <CustomInput type="text" label="Email Address" id="email" />
          <CustomInput type="password" label="Password" id="password" />
          {/* <div className="mb-3 text-end">
            <Link to="/forgot-password" className="float-right">
              Forgot Password
            </Link>
          </div>
          <Link
            to="/admin"
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </Link> */}
        </form>
        <button class="text-white bg-blue-500 btn hover:bg-blue-600 font-poppins"
          onClick={()=>
          props.setRec()
        
          
          }
          ></button>
      </div>
    </div>
  );
};

export default Login;