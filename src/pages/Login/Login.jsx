import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const Login = () => {

    useEffect(() => {
        Aos.init();
    },[])

    const { signIn } = useContext(AuthContext);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('')
    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }


    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        setSuccess('')

        signIn(email, password)
            .then(result => {
                console.log(result.user);

                // navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message)
            })


    }



    return (
        <div className="max-w-6xl mx-auto mt-16 mb-36">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>


            

            <form onSubmit={handleLogin} className="max-w-3xl mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt text-base link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary text-xl font-extrabold">Login</button>
                </div>
            </form>
            <div className="text-center text-xl font-medium" data-aos ="fade-right">
                Sign in with<button className="text-blue-500 border-2 border-blue-800 font-extrabold mt-4 ml-3 px-5 py-1 rounded-lg" onClick={handleGoogleSignIn}>Google</button>
            </div>

            {
                success && { success }
            }
            {
                registerError && <p className='text-center font-semibold  text-red-600'>{registerError}</p>
            }

            <p className="text-xl text-center p-5 font-semibold" >
                Do not have any account? Please <Link to={'/register'} className="text-blue-600 ">Register</Link>
            </p>







        </div>
    );
};

export default Login;