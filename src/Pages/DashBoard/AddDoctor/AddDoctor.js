import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const { data: specilities, isLoading } = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpeciality');
            const data = res.json();
            return data;
        }
    })
    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        photo: imgData.data.url
                    }

                    // save doctor information to the database

                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success(`${data.name} is Added Successfully`);
                                navigate('/dashboard/manage-doctors')
                            }
                            console.log(result)
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-5 '>
                <h2 className='text-xl text-center'>Add A Doctor</h2>
                <form onSubmit={handleSubmit(handleAddDoctor)}>

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
                            <span className="label-text">Speciality</span>
                        </label>
                        <select
                            {...register("speciality", { required: "Speciality Address is required" })}
                            className="select select-bordered w-full">
                            {
                                specilities.map(speciality => <option key={speciality._id} value={speciality.name}>
                                    {speciality.name}
                                </option>)
                            }
                        </select>
                        {errors.speciality && <p role='alert' className='text-red-700'>{errors.speciality?.message}</p>}

                    </div>

                    <div className="form-control w-full my-5">

                        <label className="label">
                            <span className="label-text">Upload Photo</span>
                        </label>
                        <input
                            type='file' {...register("image", { required: "Image is required", pattern: { value: /[A-Za-z]+$/i, message: 'You Can not use Numbers or Special Charecters' } })}
                            className="input input-bordered w-full" />
                        {errors.image && <p role='alert' className='text-red-700'>{errors.image?.message}</p>}
                    </div>


                    <input className='btn btn-accent w-full my-5' value='Add Doctor' type="submit" />

                </form>

            </div>
        </div>
    );
};


/**
 * Three place to store images
 * 1. Third Party image hosting server
 * 2. File System of your server
 * 3. mongoDB (database)
*/

export default AddDoctor;