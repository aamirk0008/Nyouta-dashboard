import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isLogin, children }) => {
  return isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
