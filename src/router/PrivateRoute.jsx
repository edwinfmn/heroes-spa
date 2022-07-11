import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../auth";

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);

    const { pathname, search } = useLocation();

    // cambiar con un useMemo o un useEffect para solo guardar cuando cambie el path
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

    return (logged)
        ? children
        : <Navigate to="/login" />
}
