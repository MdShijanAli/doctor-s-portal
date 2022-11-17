import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useToken from '../../hocks/useToken';
const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();
    const [createdUserEMail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEMail);

    if (token) {
        navigate('/');
    }

    const handleSignup = data => {
        console.log(data)
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;

                console.log(user);
                toast.success('Registered Successfull!!!')

                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(error => console.error(error))


            })
            .catch(error => {
                setSignUpError(error.message);
            })
    }


    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);

            })
    }





    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-5 '>
                <h2 className='text-xl text-center'>Signup</h2>
                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            type='text' {...register("name", { required: "Full Name is required", pattern: { value: /[A-Za-z]+$/i, message: 'You Can not use Numbers or Special Charecters' } })}
                            className="input input-bordered w-full" />
                        {errors.name && <p role='alert' className='text-red-700'>{errors.name?.message}</p>}
                    </div>

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
                            type='password' {...register("password",
                                {
                                    required: 'Password is required',
                                    minLength: { value: 8, message: 'Password Must be minimum 8 Characters' },
                                    pattern: { value: /(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/, message: 'Password Must be Strong' }
                                })}
                            className="input input-bordered w-full" />
                        {errors.password && <p role='alert' className='text-red-700'>{errors.password?.message}</p>}
                    </div>


                    <input className='btn btn-accent w-full my-5' value='Signup' type="submit" />
                    {
                        signUpError && <p className='text-red-700 my-5'>{signUpError}</p>
                    }
                </form>
                <p className='text-center pt-2'>Already Have an Account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider my-5">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;