import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Spiner from '../Spiner';

const ProtectedRoute = () => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    if(loading) return <Spiner/>
    const customUser = JSON.parse(localStorage.getItem('user'))
    return (
        <div>
             {
            user || customUser ?<Outlet />
             : <Navigate to="/login" state={{ from: location }} replace />
        }
        </div>
    );
};

export default ProtectedRoute;