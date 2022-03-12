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
import useLocalStorageState from 'use-local-storage-state';


export const SelectedServiceContext = createContext([])
export const UserContext = createContext([])

function App() {
  const [loggedInUser, setLoggedInUser] = useLocalStorageState('userInfo', {
    isSignedIn: false,
    name: '',
    email: '',
    image: ''
  })
  const [selectedService, setSelectedService] = useLocalStorageState('selectedService', {})



  return (
    //  <SelectedServiceContext.Provider value={[selectedService, setSelectedService]}>
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <div className="row">

        <div className="">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HeaderMain />} />
              <Route element={<PrivateRoute />}>

                <Route path="/project" element={<Header />} />
                <Route path="/skill" element={<Skills />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/achivment" element={<Achivement />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/update/:id" element={<Update />} />
                <Route path="/updateBlog/:id" element={<EditBlog />} />
                <Route path="/Editachivment/:id" element={<EditAchivement />} />
                <Route path="/login" element={<Login />} />
              </Route>




            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </UserContext.Provider>
    // </SelectedServiceContext.Provider>


  );
}

export default App;
