import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './../Components/common/Loading';
import Arrow from './../Components/common/Arrow';
import { AuthContext } from '../Context/AuthContext';
import Alert from './../Components/common/Alert';

export const Login = () => {
    const { loginInfo,
            loginUser,
            loginError,
            updateLoginInfo,
            isLoginLoading, } = useContext(AuthContext);
    return (
        <section className="p-4 flex justify-center items-center bg-gradient-to-r from-cyan-600 to-blue-600 h-screen">
            <div className="flex flex-col w-full bg-white p-8 rounded shadow-gray-600 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">

                <h2 className="w-full h-10 text-2xl text-center my-8 font-medium">Login</h2>
                <form onSubmit={ loginUser }>
                <div className="w-full mb-5 relative">
                    <input type="email" className="w-full h-12 p-3 shadow border border-gray-300 rounded outline-0 transition-shadow ease-out focus:border-blue-400 focus:ring-0 focus:shadow-lg" placeholder="Email" onChange={(e)=> updateLoginInfo({...loginInfo, email: e.target.value}) } />
                    <i className="ion-ios-email text-gray-400 absolute top-3 right-4"></i>
                </div>
                <div className="w-full mb-5 relative">
                    <input type="password" className="w-full h-12 p-3 shadow border border-gray-300 rounded outline-0 transition-shadow ease-out focus:border-blue-400 focus:ring-0 focus:shadow-lg" placeholder="Password" onChange={(e)=> updateLoginInfo({...loginInfo, password: e.target.value}) } />
                    <i className="ion-ios-locked text-gray-400 absolute top-3 right-4"></i>
                </div>
                <div className="w-full mb-5 ">
                    <button type='submit' className="w-full flex justify-center cursor-pointer items-center gap-4 h-12 pointer bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center font-base rounded-full shadow-md transition-all ease-in">
                        <span id="loginText" className="transition-all eas-out">Login</span>
                        {
                            isLoginLoading ? <Loading /> : <Arrow />
                        }
                    </button>
                </div>
                </form>
                <div className='mb-3'>
                    <span className="text-medium">Don't have account?
                        <Link to="/register" className="ml-1 text-blue-800">Sign Up</Link></span>
                </div>
                {
                    loginError?.error && <Alert errorMessage={loginError?.message} />
                }

            </div>
        </section>
    )
}
