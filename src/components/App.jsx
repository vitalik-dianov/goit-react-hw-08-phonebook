import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Contacts } from 'pages/Contacts/Contacts';
import { Home } from 'pages/Home/Home';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { authRefresh } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsRefresh } from 'redux/auth/selectors';
import { PrivateRoute } from 'utils/PrivateRoute';
import { RestrictedRoute } from 'utils/RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);
  useEffect(() => {
    dispatch(authRefresh());
  }, [dispatch]);

  // useEffect(()=>{},[isRefresh])
  return isRefresh ? (
    <div>Loading</div>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
};
