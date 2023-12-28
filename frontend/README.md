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

1. Edit `index.js` file
```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

2. Add routeing config to `index.js` file
```js
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from '../src/routes/Error'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>
  },
]);
```

3. Moved `App.js` to `routes` folder and renamed it as `App.jsx`