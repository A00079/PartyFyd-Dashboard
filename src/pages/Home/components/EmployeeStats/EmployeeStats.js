import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
const EmployeeStats = () => {

    return (
        <React.Fragment>
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12">
                    <div className='flex flex-col w-full'>
                        <div className='grid grid-cols-12 gap-4 emp-stats-total-main'>
                            <div className='col-span-6 create-emp-shortcut w-full h-full mt-2'>
                                <div className='bg-white w-full rounded-md py-6 border shadow-sm border-gray-200 flex flex-col space-y-4'>
                                    <div className='content-media w-full mx-auto'>
                                        <img alt="team" class="w-24 h-20 bg-gray-100 mx-auto object-cover object-center flex-shrink-0" src="./img/addemp.svg" />
                                    </div>
                                    <div className='flex flex-col w-full mx-auto'>
                                        <p className='text-center text-sm font-bold text-gray-700'>No vendor created yet</p>
                                        <p className='text-center text-xs font-medium text-gray-400'>Simply create your first vendor</p>
                                        <p className='text-center text-xs font-medium text-gray-400'>Just click on the button</p>
                                    </div>
                                    <button className="flex flex-row justify-evenly items-center w-40 rounded-md mx-auto p-2 text-sm font-bold text-white bg-indigo-500">
                                        <Link to='create-vendor' className='flex flex-row justify-evenly items-center'>
                                            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                                            </svg>
                                            <span>Create Vendor</span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className='col-span-6 create-emp-shortcut w-full h-full mt-2'>
                                <div className='bg-white w-full rounded-md py-6 border shadow-sm border-gray-200 flex flex-col space-y-4'>
                                    <div className='content-media w-full mx-auto'>
                                        <img alt="team" class="w-24 h-20 bg-gray-100 mx-auto object-cover object-center flex-shrink-0" src="./img/addemp.svg" />
                                    </div>
                                    <div className='flex flex-col w-full mx-auto'>
                                        <p className='text-center text-sm font-bold text-gray-700'>No employee created yet</p>
                                        <p className='text-center text-xs font-medium text-gray-400'>Simply create your first employee</p>
                                        <p className='text-center text-xs font-medium text-gray-400'>Just click on the button</p>
                                    </div>
                                    <button className="flex flex-row justify-evenly items-center w-40 rounded-md mx-auto p-2 text-sm font-bold text-white bg-indigo-500">
                                        <Link to='create-employee' className='flex flex-row justify-evenly items-center'>
                                            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                                            </svg>    
                                            <span>Create Employee</span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EmployeeStats;