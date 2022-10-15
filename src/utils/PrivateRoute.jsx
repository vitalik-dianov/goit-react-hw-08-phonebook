
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefresh } from "redux/auth/selectors";

export const PrivateRoute = ({component : Component, redirectTo= '/'}) => {
const isLoggedIn = useSelector(selectIsLoggedIn)
const isRefresh = useSelector(selectIsRefresh)

// console.log('log ' +isLoggedIn);
// console.log("ref " +isRefresh);
const shouldRedirect = !isLoggedIn && !isRefresh;

return shouldRedirect ? <Navigate to={redirectTo}/> : Component
}