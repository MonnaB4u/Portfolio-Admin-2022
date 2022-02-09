import React from 'react';
import AddProject from '../AddProject/AddProject';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
    return (
        <div>
            <Sidebar />
            <AddProject />
        </div>
    );
};

export default Header;
