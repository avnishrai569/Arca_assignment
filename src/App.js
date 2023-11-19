// import logo from './logo.svg';
// import './App.css';
// import Fetch from './Fetch';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element= {Fetch}/>
        
        
//       </Routes>
//       </BrowserRouter>
//      <Fetch/>
     
//     </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import Fetch from './Fetch';
import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Home from './Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Fetch/>,
    },
    {
      path: "/home",
      element: <Home/>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}>
        {/* The rest of your JSX code goes here */}
      </RouterProvider>
    </div>
  );
}

export default App;


