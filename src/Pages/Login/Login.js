import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useToken from '../../hocks/useToken';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
                toast.success('Login Successfully')
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-5 '>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type='email' {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full" />
                        {errors.email && <p role='alert' className='text-red-700'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type='password' {...register("password", { required: 'Password is required', minLength: { value: 8, message: 'Password Must be minimum 8 Characters' } })}
                            className="input input-bordered w-full" />
                        {errors.password && <p role='alert' className='text-red-700'>{errors.password?.message}</p>}
                    </div>
                    <label className="label mb-2">
                        <span className="label-text">Forget Password?</span>
                    </label>

                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    <div>
                        {
                            loginError && <p className='text-red-700 my-5'>{loginError}</p>
                        }
                    </div>
                </form>
                <p className='text-center pt-2'>New to Doctor's Portal? <Link className='text-secondary' to='/signup'>Create New Account</Link></p>
                <div className="divider my-5">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;