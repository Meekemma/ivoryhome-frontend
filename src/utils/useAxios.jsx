import React, { createContext, useContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const BASE_URL = window.env.VITE_BASE_URL;


const useAxios = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token", "refresh_token"]);
  const navigate = useNavigate();

  // Create an axios instance with base settings
  const axiosInstance = axios.create({
    BASE_URL,
    headers: {
      "Content-Type": "application/json",
      ...(cookies.access_token && {
        Authorization: `Bearer ${cookies.access_token.replace(/"/g, "")}`,
      }),
    },
    
  });
  

  // Function to handle user logout
  const logoutUser = () => {
    
    removeCookie("user", { path: "/" });
    removeCookie("access_token", { path: "/" });
    removeCookie("refresh_token", { path: "/" });
    removeCookie("user_id", { path: "/" });
    removeCookie("is_verified", { path: "/" });
    navigate("/login");
  };

  // Interceptor to refresh token if access token is expired
  axiosInstance.interceptors.request.use(
    async (req) => {
      
      const access_token = cookies.access_token ? cookies.access_token.replace(/"/g, "") : null;
      const refresh_token = cookies.refresh_token ? cookies.refresh_token.replace(/"/g, "") : null;

      if (access_token) {
        
        const user = jwtDecode(access_token);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        if (!isExpired) {
          console.log("Access token is valid.");
          return req; // Token is valid, proceed with the request
        } else {
          console.log("Access token is expired.");
        }
      }

      if (refresh_token) {
        
        try {
          const response = await axios.post(`${BASE_URL}base/token/refresh/`, {
            refresh: refresh_token,
          });

          if (response.status === 200) {
            
            const newAccessToken = response.data.access;

            // Update the cookies with the new access token
            setCookie("access_token", JSON.stringify(newAccessToken), {
              path: "/",
              secure: true,
              sameSite: "Strict",
            });

            // Attach the new access token to the request headers
            req.headers.Authorization = `Bearer ${newAccessToken}`;
          }
        } catch (error) {
          console.error("Error refreshing token:", error);
          logoutUser();
        }
      } else {
        
        logoutUser();
      }

      return req;
    },
    (error) => {
      console.error("Error in request interceptor:", error);
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxios;
