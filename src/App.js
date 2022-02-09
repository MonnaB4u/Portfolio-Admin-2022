import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Component/Home/Header/Header';
import Sidebar from './Component/Home/Sidebar/Sidebar';
import Update from './Component/Home/Update/Update';
import Skills from './Component/Home/Skills/Skills';
import Blog from './Component/Home/Blog/Blog';
import EditBlog from './Component/Home/Blog/EditBlog';
import Achivement from './Component/Home/Achivement/Achivement';
import HeaderMain from './Component/Home/Header/HeaderMain';
import EditAchivement from './Component/Home/Achivement/EditAchivement';
import Resume from './Component/Home/Resume/Resume';
import Login from './Component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AuthProvider from './Component/AuthProvider/AuthProvider';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState([])

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <div className="row">

        <div className="">
          <BrowserRouter>
            <Routes>

              <Route element={<PrivateRoute />}>
                <Route path="/" element={<HeaderMain />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path="/project" element={<Header />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path="/skill" element={<Skills />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path="/blog" element={<Blog />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path="/achivment" element={<Achivement />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path="/resume" element={<Resume />} />
              </Route>

              <Route path="/update/:id" element={<Update />} />
              <Route path="/updateBlog/:id" element={<EditBlog />} />
              <Route path="/Editachivment/:id" element={<EditAchivement />} />
              <Route path="/login" element={<Login />} />


            </Routes>
          </BrowserRouter>
        </div>
      </div>
</UserContext.Provider>

  );
}

export default App;
