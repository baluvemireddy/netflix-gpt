import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [isSigninForm, setIsSigninForm] = useState(true);

    const toggleSignUp = () => {
        setIsSigninForm(!isSigninForm); 
    };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="object-cover h-full w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e4b7575-5e77-4cbc-b380-6b57b4cb2652/web/IN-en-20261012-TRIFECTA-perspective_df4c506a-8fba-4611-95c0-3190bfc683ca_large.jpg"
         />
      </div>
      
        <form className="  w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="text-3xl font-bold  py-4 text-white">{isSigninForm ? "Sign In" : "Sign Up"}</h1>
            
            {!isSigninForm && (
                <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-800"
            />)
            }
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 my-4 w-full bg-gray-800"
            />
            
            <input
              type="password"
              placeholder="Password"
              className="p-4 my-4 w-full bg-gray-800"
            />
            <button
              type="submit"
              className=" p-4 my-4 bg-red-700 w-full rounded-lg"
            >
              {isSigninForm ? "Sign In" : "Sign Up"}
            </button>


              <p className="py-4 hover:underline cursor-pointer" 
              onClick={toggleSignUp}>{isSigninForm ? "New to Netflix? Sign up now." : "Already have an account? Sign in now."}</p>

        </form>
     
      
    
    </div>
  );
};

export default Login;
