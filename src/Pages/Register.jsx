import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import Alert from '../Components/common/Alert';
import Loading from './../Components/common/Loading';
import Arrow from './../Components/common/Arrow';

// tomorrow I should make these forms a component

export const Register = () => {
    const { registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading } = useContext(AuthContext);
    return (
        <section className="p-4 flex justify-center items-center bg-gradient-to-r from-cyan-600 to-blue-600 h-screen">
            <div className="flex flex-col w-full bg-white p-8 rounded shadow-gray-600 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">

                <h2 className="w-full h-10 text-2xl text-center my-8 font-medium">Sign Up</h2>
                <form onSubmit={registerUser}>
                    <div className="w-full mb-5 relative">
                        <input type="text" className="w-full h-12 p-3 shadow border border-gray-300 rounded outline-0 transition-shadow ease-out focus:border-blue-400 focus:ring-0 focus:shadow-lg" placeholder="Full Name" onChange={(e) => updateRegisterInfo({ ...registerInfo, name: e.target.value })} />
                        <i className="ion-ios-person text-gray-400 absolute top-3 right-4"></i>
                    </div>
                    <div className="w-full mb-5 relative">
                        <input type="email" className="w-full h-12 p-3 shadow border border-gray-300 rounded outline-0 transition-shadow ease-out focus:border-blue-400 focus:ring-0 focus:shadow-lg" placeholder="Email" onChange={(e) => updateRegisterInfo({ ...registerInfo, email: e.target.value })} />
                        <i className="ion-ios-email text-gray-400 absolute top-3 right-4"></i>
                    </div>
                    <div className="w-full mb-5 relative">
                        <input type="password" className="w-full h-12 p-3 shadow border border-gray-300 rounded outline-0 transition-shadow ease-out focus:border-blue-400 focus:ring-0 focus:shadow-lg" placeholder="Password" onChange={(e) => updateRegisterInfo({ ...registerInfo, password: e.target.value })} />
                        <i className="ion-ios-locked text-gray-400 absolute top-3 right-4"></i>
                    </div>
                    <div className="w-full mb-5 ">
                        <button type='submit' className="w-full flex justify-center cursor-pointer items-center gap-4 h-12 pointer bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center font-base rounded-full shadow-md transition-all ease-in">
                            <span id="loginText" className="transition-all eas-out">Sign Up</span>
                            {
                                isRegisterLoading ? <Loading /> : <Arrow />     
                            } 
                        </button>
                    </div>
                </form>
                <div>
                    <span className='text-medium'>Already have account?
                        <Link to="/login" className='ml-1 text-blue-800'>Log In</Link></span>
                </div>

                {
                    registerError?.error && <Alert errorMessage={registerError?.message} />
                }

            </div>
        </section>
    )
}
