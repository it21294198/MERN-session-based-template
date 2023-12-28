### run app
```
npm start
```

### Add `componentes`,`hooks` and `routes` to root folder

### packages installed

`npm i bootstrap`

`npm install react-router-dom`

### Frontend Configs

[Setup bootstrap](https://getbootstrap.com/)

1. Add `link` and `script` to `index.html` in public folder in root
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
 
```
```
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
```

[Setup react router dom](https://reactrouter.com/en/main)

1. Edit `index.js` file for `Routing`
```js
import { BrowserRouter,Routes,Route,Link,Outlet } from "react-router-dom";

function Routing() {
  return ( 
    <BrowserRouter>

    <div className="position-relative">
      <div className="position-absolute top-0 start-50 translate-middle-x">
        <Link to="/"><button>Login Test</button></Link>
        <Link to="/home"><button>Home Test</button></Link>
      </div>
    </div>

      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<Error/>}/> {/* Gives for any path not in Routes */}
      </Routes>

      <Outlet/> {/* Render the router outputs */}

  </BrowserRouter>
   );
}
```
[See More Details about BrowserRouter](https://reactrouter.com/en/main/router-components/browser-router)

[See More Details about Navigation in Routes](https://reactrouter.com/en/main/hooks/use-navigate)

2. Edit `index.js` file for `Context` and Create Context folder to implement `UserProvider`
```js
import { UserProvider } from './context/UserContext';

function Context() {
    return ( 
      <UserProvider>
        <Routing/>
      </UserProvider>
   );
}
```
[See More Details](https://www.freecodecamp.org/news/context-api-in-react/)

3. Moved `App.js` to `routes` folder and renamed it as `App.jsx`