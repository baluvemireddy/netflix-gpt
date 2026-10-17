import { signOut} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const navigate= useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () =>{
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
      }).catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }
    
  return (
    
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-20 " src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVIENVPMEM3Kn4hVzJseX4N8xPjtBDIpwuFDucWksdxQZ8Ss6Xf8U_vt7ThYYfRmzq0x1CS3nOwTGyVrgADvwfB_tPiK_liS2RjvI40RJSzbKRk-o8b3nCxHfCCnBsyB2XBB9_vRoSmN.svg" 
        alt="Netflix Logo" />
    
    {user && <div className="flex p-4">
      <img className=" w-8 h-8" alt="user Icon" src={user?.photoURL}/>
      <button className="font-bold text-white" onClick={handleSignOut}>(sign out )</button>
    </div>
    }
    </div>
  
  );
};

export default Header;
