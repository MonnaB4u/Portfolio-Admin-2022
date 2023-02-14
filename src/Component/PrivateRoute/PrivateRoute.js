import React from 'react';
import { useContext } from "react";
import { Navigate, Outlet, Route, useLocation } from "react-router-dom";
import { UserContext } from '../../App';



const PrivateRoute = () => {
    const [loggedInuser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation()
    return loggedInuser.email ? <Outlet /> : <Navigate to='/login' replace state={{from: location}}/>

};

export default PrivateRoute;
