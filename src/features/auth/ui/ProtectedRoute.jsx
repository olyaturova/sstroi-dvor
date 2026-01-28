import { Navigate } from 'react-router-dom';
import { useAuth } from '../model/AuthContext';
import { Loader } from '@/shared/ui/loader';

export const ProtectedRoute = ({ children }) => {
    const { isAdmin, isLoading } = useAuth();
    
    if (isLoading) {
      <Loader />
    }
    
    if (!isAdmin) {
        return <Navigate to="/admin/login" replace />;
    }
    
    return children;
};