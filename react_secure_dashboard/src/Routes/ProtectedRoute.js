import React from 'react';
import { UserContext } from '../Contexts/UserContext';
import { useContext } from 'react';
import  { Link, Navigate }  from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user} = useContext(UserContext);

    if (!user){
        return <Navigate to="/" ></Navigate>
    }
    return children
}

export default ProtectedRoute;


