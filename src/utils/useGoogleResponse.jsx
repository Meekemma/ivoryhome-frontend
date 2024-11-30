import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

const useGoogleResponse = () => {
    const [cookies, setCookie] = useCookies();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const accessToken = queryParams.get('access_token');
        const refreshToken = queryParams.get('refresh_token');
        const email = queryParams.get('email');
        const firstName = queryParams.get('first_name');
        const lastName = queryParams.get('last_name');
        const isVerified = queryParams.get('is_verified');
        const userId = queryParams.get('id');

        // Execute logic only if access and refresh tokens are in the URL
        if (accessToken && refreshToken) {
            // Save tokens and user data in cookies
            if (userId) setCookie('user_id', userId, { path: '/', secure: true, sameSite: 'Strict' });
            if (isVerified !== null) setCookie('is_verified', JSON.stringify(isVerified), { path: '/', secure: true, sameSite: 'Strict' });
            if (email && firstName && lastName) {
                setCookie('user', JSON.stringify({ email, firstName, lastName }), { path: '/', secure: true, sameSite: 'Strict' });
            }

            setCookie('access_token', accessToken, { path: '/', secure: true, sameSite: 'Strict' });
            setCookie('refresh_token', refreshToken, { path: '/', secure: true, sameSite: 'Strict' });

            // Notify user and redirect
            toast.success('Login successful');
            navigate('/');
        } 
        // else if (location.search) {
        //     // Only show this message if location.search has parameters but the required tokens are missing
        //     console.error('Missing tokens from Google OAuth response');
        //     toast.info('Authentication failed. Missing tokens.');
        // }
    }, [location.search, navigate, setCookie]);
};

export default useGoogleResponse;
