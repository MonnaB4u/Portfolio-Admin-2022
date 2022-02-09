import React, { useContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';

const EmailPassLogin = () => {
    const navigate = useNavigate()
    const [loggedInuser, setLoggedInUser] = useContext(UserContext);

    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    ///////////////////

    const [email, setEmail] = useState("")
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    //////////////

    const [password, setPassword] = useState("")
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    ///////////////////
    const [error, setError] = useState("")
    const auth = getAuth();

    const handleRegistrations = e => {
        e.preventDefault()
        console.log(email, password)
        if (password.length < 6) {
            setError("Password must be at least 6 characters long")
            return;
        }

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("Password must contain 2 uppercase letters")
        }

        isLogin ? processLogin(email, password) : CreateNewUser(email, password)


    }

    /////////////////////////////////Login By Email Password////////////////////////////////////////////////////

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                let user = {
                    name: displayName,
                    email: email,
                    photoURL: photoURL
                }
                setLoggedInUser(user)
                navigate(from)
                console.log(user)
                setError("")

            })
            .catch(err => {
                setError(err.message)
            })
    }

    //////////////////////////Create New User/////////////////////////////////////////
    const CreateNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setError('')
                verifyEmail();
                setUserName();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }


    //////////////

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(res => {
                console.log(res)
            })

    }

    ///////////////Check Login Or Not//////////////////////

    const [isLogin, setisLogin] = useState(false)

    const toggleLogin = e => {
        setisLogin(e.target.checked)
    }
    //////////////////////////
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(res => {
                console.log(res)
                setError('Check Your Email')
            })
            .catch(err => {
                setError(err.message)
            })
    }
    ////// Update Name //////////
    const [name, setName] = useState('')
    console.log("display", name)
    const handleNameChange = e => {
        console.log(e.target.value)
        setName(e.target.value)

    }


    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                setError('')
            }).catch((error) => {
                setError(error.message)
            });
    }


    return (
        <div className="d-flex justify-content-center mt-3">
            <div className=" login-form text-white p-5">
                <form onSubmit={handleRegistrations}>
                    <p className="h3 text-center">Please {isLogin ? "Login" : "Register"}</p>
                    {
                        !isLogin &&
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">User Name</label>
                            <input onBlur={handleNameChange} type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    }

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" onBlur={handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input onChange={toggleLogin} className="form-control" id="example" type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Already Have an Account? </label>
                    </div>

                    <div className="text-danger my-2">{error}</div>

                    <div className="text-center my-2">
                        <button type="submit" className="btn btn-primary btn-sm w-75 text-center">{isLogin ? "Login" : "Register"}</button>
                        {
                            isLogin &&
                            <button onClick={handleResetPassword} type="button" className="btn btn-primary btn-sm m-2 ">Reset Password</button>
                        }
                    </div>

                </form>
            </div>
        </div>
    );
};

export default EmailPassLogin;
