import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { useCookies } from "react-cookie";

const baseURL = "http://127.0.0.1:8000/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const setupAxiosInterceptors = (cookies, setCookie, removeCookie) => {
  axiosInstance.interceptors.request.use(
    async (req) => {
      console.log("Request intercepted:", req); // Log the intercepted request
      const token = cookies.access_token ? cookies.access_token.replace(/"/g, "") : null;
      const refreshToken = cookies.refresh_token ? cookies.refresh_token.replace(/"/g, "") : null;

      console.log("Access token:", token);
      console.log("Refresh token:", refreshToken);

      if (token) {
        const decodedToken = jwtDecode(token);
        const isExpired = dayjs.unix(decodedToken.exp).diff(dayjs()) < 1;

        console.log("Token is expired:", isExpired);

        if (!isExpired) {
          req.headers.Authorization = `Bearer ${token}`;
          return req;
        }

        if (refreshToken) {
          console.log("Refreshing token...");
          try {
            const response = await axios.post(`${baseURL}base/token/refresh/`, {
              refresh: refreshToken,
            });

            if (response.status === 200) {
              console.log("Token refreshed successfully:", response.data);
              const newAccessToken = response.data.access;
              setCookie("access_token", JSON.stringify(newAccessToken), {
                path: "/",
                secure: true,
                sameSite: "Strict",
              });

              req.headers.Authorization = `Bearer ${newAccessToken}`;
              return req;
            }
          } catch (error) {
            console.error("Error refreshing token:", error);
            logoutUser(removeCookie);
          }
        } else {
          console.log("No refresh token available, logging out...");
          logoutUser(removeCookie);
        }
      }
      return req;
    },
    (error) => {
      console.error("Error in request interceptor:", error);
      return Promise.reject(error);
    }
  );
};

const logoutUser = (removeCookie) => {
  console.log("Logging out user...");
  removeCookie("user");
  removeCookie("access_token");
  removeCookie("refresh_token");
  removeCookie("user_id");
  removeCookie("is_verified");
  window.location.href = "/login"; // Redirect to login page
};

export { axiosInstance, setupAxiosInterceptors };
