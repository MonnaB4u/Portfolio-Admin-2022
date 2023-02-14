import React, { useContext, useState } from 'react';
import { getAuth, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import { UserContext } from '../../App';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import initializeAuth from '../firebase/firebase.initialize';
const provider = new GithubAuthProvider();
initializeAuth();

const GithubLogin = () => {
       const navigate = useNavigate()
    const [logUser, setlogUser] = useState({})
    const [loggedInuser, setLoggedInUser] = useContext(UserContext);
    console.log("github", loggedInuser)

    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                let user = {
                    name: displayName,
                    email: email,
                    photoURL: photoURL
                }
                setlogUser(user);
                setLoggedInUser(user)
                navigate(from)

            })
            .catch(err => {
                alert(err.message)
            })
    }

    const auth = getAuth();
    const handleSignOut = () => {

        signOut(auth)
            .then(() => {
                setlogUser({});
            })
    }

    return (

            <div className="">
            {
                !logUser.name ?
                    <button className="btn bg-dark text-white w-25  b-block" onClick={() => handleLogin()}>Github</button>
                    :
                    <button className="btn bg-danger w-75 text-white w-25 b-block" onClick={() => handleSignOut()}>Github Sign Out</button>

            }

            {
                logUser.name &&
                <div>
                    <h1>WellCome {logUser.name}</h1>
                    <p>Your Github Email is:-- <a href="">{logUser.email}</a></p>
                </div>
            }
        </div>

    );
};

export default GithubLogin;
