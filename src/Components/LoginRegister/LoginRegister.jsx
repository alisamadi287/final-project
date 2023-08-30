import React, { useState } from 'react'

export const LoginRegister = () => {
    const [action, setAction] = useState("Sign Up");
  return (
    <section className="p-4 flex justify-center items-center bg-gradient-to-r from-cyan-600 to-blue-600 h-full">
        <div className="flex flex-col w-full bg-white p-8 rounded shadow-gray-600 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        
            <h2 className="w-full h-10 text-2xl text-center my-8 font-medium">{action}</h2>
            {action === "Sign Up" ?
                <div className="w-full mb-5 relative">
                <input type="text" className="w-full h-12 p-3 shadow border border-gray-300 rounded outline-0 transition-shadow ease-out focus:border-blue-400 focus:ring-0 focus:shadow-lg" placeholder="Full Name" />
                <i className="ion-ios-person text-gray-400 absolute top-3 right-4"></i>
                </div>:
                <div></div>}
            <div className="w-full mb-5 relative">
                <input type="email" className="w-full h-12 p-3 shadow border border-gray-300 rounded outline-0 transition-shadow ease-out focus:border-blue-400 focus:ring-0 focus:shadow-lg" placeholder="Email" />
                <i className="ion-ios-email text-gray-400 absolute top-3 right-4"></i>
            </div>
            <div className="w-full mb-5 relative">
                <input type="password" className="w-full h-12 p-3 shadow border border-gray-300 rounded outline-0 transition-shadow ease-out focus:border-blue-400 focus:ring-0 focus:shadow-lg" placeholder="Password" />
                <i className="ion-ios-locked text-gray-400 absolute top-3 right-4"></i>
            </div>
            <div className="w-full mb-5 ">
                <a id="loginBtn" className="w-full flex justify-center items-center gap-4 h-12 pointer bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center font-base rounded-full shadow-md transition-all ease-in">
                    <span id="loginText" className="transition-all eas-out pointer">Sign Up</span>
                    <svg xmlns="http://www.w3.org/2000/svg" id="arrow" className="w-5 h-5 transition-all eas-out sm:block rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <svg id="waitIcon" width="32" height="32" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" className="hidden transition-all ease-out" stroke="#fff">
                        <g fill="none" fill-rule="evenodd" stroke-width="2">
                            <circle cx="22" cy="22" r="1">
                                <animate attributeName="r"
                                    begin="0s" dur="1.8s"
                                    values="1; 20"
                                    calcMode="spline"
                                    keyTimes="0; 1"
                                    keySplines="0.165, 0.84, 0.44, 1"
                                    repeatCount="indefinite" />
                                <animate attributeName="stroke-opacity"
                                    begin="0s" dur="1.8s"
                                    values="1; 0"
                                    calcMode="spline"
                                    keyTimes="0; 1"
                                    keySplines="0.3, 0.61, 0.355, 1"
                                    repeatCount="indefinite" />
                            </circle>
                            <circle cx="22" cy="22" r="1">
                                <animate attributeName="r"
                                    begin="-0.9s" dur="1.8s"
                                    values="1; 20"
                                    calcMode="spline"
                                    keyTimes="0; 1"
                                    keySplines="0.165, 0.84, 0.44, 1"
                                    repeatCount="indefinite" />
                                <animate attributeName="stroke-opacity"
                                    begin="-0.9s" dur="1.8s"
                                    values="1; 0"
                                    calcMode="spline"
                                    keyTimes="0; 1"
                                    keySplines="0.3, 0.61, 0.355, 1"
                                    repeatCount="indefinite" />
                            </circle>
                        </g>
                    </svg>
                </a>
            </div>
            <div>
                {action === "Login" ? 
                    <span className="text-medium">Don't have account? <a onClick={() => {setAction("Sign Up")}} className="text-blue-800" href="#">Sign Up</a></span>:
                    <span className='text-medium'>Already have account? <a onClick={() => {setAction("Login")}} href="" className='text-blue-800'>Log In</a></span>}
            </div>
            
        </div>
    </section>
  )
}
