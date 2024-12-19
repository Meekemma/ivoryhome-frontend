import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import axios from "axios";
import useGoogleResponse from '../utils/useGoogleResponse'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });


  useGoogleResponse();

  // Update form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Log in user
  const loginUser = async (e, redirectPath = "/") => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Email and password are required");
      return false; 
    }

    setIsLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:8000/base/login/", formData);
      const response = res.data;

      const user = {
        email: response.email,
        names: response.full_name || "No Name", 
      };

      if (res.status === 200) {
        const accessToken = response.access;
        const refreshToken = response.refresh;

        // Set cookies for user and tokens
        setCookie("user", JSON.stringify(user), { path: "/" });
        setCookie("access_token", JSON.stringify(accessToken), { path: "/" });
        setCookie("refresh_token", JSON.stringify(refreshToken), { path: "/" });
        setCookie("user_id", JSON.stringify(response.user_id), { path: "/" });
        setCookie("is_verified", JSON.stringify(response.is_verified), { path: "/" });
        setCookie("profile_complete", JSON.stringify(response.profile_complete), { path: "/" });
        

        setUser(user);
          navigate(redirectPath);
        
        return true;
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data;
        if (typeof errors === "object") {
          for (const key in errors) {
            if (Array.isArray(errors[key])) {
              toast.error(errors[key][0]);
              break;
            }
          }
        } else {
          toast.error(errors || "Login Failed. Please try again.");
        }
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
      setFormData({ email: "", password: "" });
    }

    return false; 
  };









  const loginWithGoogle = () => {
    const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
    const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
    const GOOGLE_OAUTH_CLIENT_ID = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;
    
    // Correctly concatenate BASE_API_URL with the endpoint
    const REDIRECT_URI = `${BASE_API_URL}/base/google-login/`;

    const scope = [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile'
    ].join(' ');

    const params = {
        response_type: 'code',
        client_id: GOOGLE_OAUTH_CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        prompt: 'select_account',
        access_type: 'offline',
        scope
    };

    const urlParams = new URLSearchParams(params).toString();
    window.location = `${GOOGLE_AUTH_URL}?${urlParams}`;
    

    
}











  // Log out user
  const logOutUser = () => {
    // Remove cookies
    removeCookie("user", { path: "/" });
    removeCookie("access_token", { path: "/" });
    removeCookie("refresh_token", { path: "/" });
    removeCookie("user_id", { path: "/" });
    removeCookie("is_verified", { path: "/" });
    removeCookie("profile_complete", { path: "/" });

    setUser(null);
    setFormData({ email: "", password: "" });

    toast.info("You have been logged out.");
    navigate("/login"); 
  };




  const contextData = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    formData,
    handleChange,
    loginUser,
    loginWithGoogle,
    logOutUser,
  };

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};

export default AuthContext;
