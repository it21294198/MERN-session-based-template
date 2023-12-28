import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './routes/App';
import Home from './routes/Home';
import Error from './routes/Error';
import Protected from './routes/Protected';
import ActiveRoute from '../src/components/ActiveRoute'
import { useUser } from './context/UserContext';
import { UserProvider } from './context/UserContext';
import { BrowserRouter,Routes,Route,Link,Outlet } from "react-router-dom";

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

  const { userName } = useUser();

  return ( 
    <BrowserRouter>

    <div className="position-relative">
      <div className="position-absolute top-0 start-50 translate-middle-x">
        <Link to="/"><button>Login Test</button></Link>
        <Link to="/home"><button>Home Test</button></Link>
      </div>
      <ActiveRoute/>
    </div>

      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/home" 
          element={
            <Protected isLoggedIn={userName}>
              <Home />
            </Protected>
          }/>
        {/* <Route path="/home" element={<Home/>}/> */}
        <Route path="*" element={<Error/>}/> {/* Gives for any path not in Routes */}
      </Routes>

      <Outlet/> {/* Render the router outputs */}

  </BrowserRouter>
   );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
