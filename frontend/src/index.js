import React,{useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Login from './routes/Login';
import Home from './routes/Home';
import About from './routes/About'
import Error from './routes/Error';
import Loading from './components/Loading';
import { hassignned } from './api/UserAuth'
import ActiveRoute from '../src/components/ActiveRoute'
import { useUser } from './context/UserContext';
import { UserProvider } from './context/UserContext';
import { BrowserRouter,Routes,Route,Outlet,Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context/>
  );
  
function Context() {
  
    return ( 
      <UserProvider>
        <Routing/>
      </UserProvider>
   );
}

function Routing() {
  const { userName ,loginUser,logoutUser,loading,loadingStatus} = useUser();

  const readSession = async () =>{
    const result = await hassignned()
    if(result.data.auth){
      loginUser(result.data.user)
    }else{
      logoutUser()
    }
  }

  useEffect(() => {
    // loadingStatus(true)
    readSession()
    // loadingStatus(false)
  });

  if(loading){
    return(<Loading/>)
  }

  return (
    <BrowserRouter>
      <div className="position-relative">
        <div className="position-absolute top-0 start-50 translate-middle-x">
          {/* shows the active route and other available routes */}
          <ActiveRoute/>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<RouteRegistration element={Login} auth={userName} />} />
        <Route path="/home" element={<RouteProtected element={Home} auth={userName} />} />
        {/* <Route path="/about" element={<RouteProtected element={About} auth={userName} />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Outlet />
    </BrowserRouter>
  );
}

const RouteRegistration = ({ auth, element: Component, ...rest }) => {
  return (
    auth ? <Navigate to="/home" replace /> : <Component {...rest} />
  );
};

const RouteProtected = ({ auth, element: Component, ...rest }) => {
  return (
    auth ? <Component {...rest} /> : <Navigate to="/" replace />
  );
};


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
