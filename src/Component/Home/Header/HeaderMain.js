import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const HeaderMain = () => {
  const [loggedInuser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="container">
        <div className="mt-5 p-5">
          <div className="mt-5 p-5 border text-center" >

            <h1>Hello {loggedInuser.name}</h1>
            <h2>WellCome to the admin Page </h2>
            <p>You can update , Delete And Edit  information,</p>

          </div>
        </div>
      </div>
    </div>

  );
};

export default HeaderMain;
