import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  requireEmailVerification?: boolean;
}

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  requireEmailVerification?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAdmin = false,
  requireEmailVerification = false 
}) => {
  const { currentUser, userData, loading } = useAuth();

  if (loading || (requireAdmin && userData === null)) {
    return <div className="p-4 text-center">Loading...</div>; // Show loading spinner if needed
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (requireEmailVerification && !currentUser.emailVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  if (requireAdmin && !userData?.isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};


export default ProtectedRoute;


export default ProtectedRoute;
