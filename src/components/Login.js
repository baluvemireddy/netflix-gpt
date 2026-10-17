import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSigninForm, setIsSigninForm] = useState(true);
    const [errorMessage,setErrorMessage] =useState(null);
     const navigate = useNavigate();
     const dispatch = useDispatch();

     const name=useRef(null);
    const email=useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Handle sign in or sign up logic here
        const message=checkValidData(email.current.value, password.current.value);
        console.log(message);
        setErrorMessage(message);
        if(message) return;
        if(!isSigninForm){
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                updateProfile(user, {
                  displayName: name.current.value, photoURL: "https://tse2.mm.bing.net/th/id/OIP.ntf4CyHHstfWkonT-RHFxwHaGg?r=0&pid=Api&h=220&P=0"
                }).then(() => {
                  // Profile updated!
                  const {uid,email,displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL: photoURL}));
                  navigate("/browse");
                  // ...
                }).catch((error) => {
                  // An error occurred
                  // ...
                  setErrorMessage(error.message);
                });
                console.log(user);
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +"-" + errorMessage);
                // ..
            });
        }
        else{
            //sign in logic 
            signInWithEmailAndPassword(auth,email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +"-" + errorMessage);
            });
        }
    };

    const toggleSignUp = () => {
        setIsSigninForm(!isSigninForm); 
    };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="object-cover h-full w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e4b7575-5e77-4cbc-b380-6b57b4cb2652/web/IN-en-20261012-TRIFECTA-perspective_df4c506a-8fba-4611-95c0-3190bfc683ca_large.jpg"
        alt="Netflix Backround" />
      </div>
      
        <form onSubmit={ (e) => e.preventDefault()} className="  w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="text-3xl font-bold  py-4 text-white">{isSigninForm ? "Sign In" : "Sign Up"}</h1>
            
            {!isSigninForm && (
                <input
                ref ={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-800"
            />)
            }
            <input
            ref={email}
              type="text"
              placeholder="Email Address"
              className="p-4 my-4 w-full bg-gray-800"
            />
            
            <input
            ref={password}
              type="password"
              placeholder="Password"
              className="p-4 my-4 w-full bg-gray-800"
            />
            <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
            <button
              type="submit"
              className=" p-4 my-4 bg-red-700 w-full rounded-lg"
                onClick={handleButtonClick}
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
