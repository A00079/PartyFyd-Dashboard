import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Viewplanspackages(props) {

    const [plansData, setPlansData] = useState([]);

    useEffect(() => {
        getPlans();
    }, []);

    const getPlans = () => {
        axios.get('https://partyfyd.com/api/v1/plan')
            .then(function (response) {
                if (response.data.status == 'success') {
                    setPlansData(response.data.plans);
                }
            })
            .catch(e => console.log('Error', e));
    }

    const deletePlan = (planId) => {
        let value = window.confirm('Are You Sure You Want To Delete');
        if (value) {
            axios.delete(`https://partyfyd.com/api/v1/plan/remove/${planId}`)
                .then(function (response) {
                    if (response.data.status == 'success') {
                        alert('Record Deleted Successfully');
                        getPlans();
                    }
                })
                .catch(e => console.log('Error', e));
        } else {
        }
    }

    return (
        <>
            <div className="flex flex-col m-7">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Sr.No
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Plan Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Members
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Validity
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Created At
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {plansData && plansData.map((el, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{el.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{el.members}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{el.validity}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{el.price}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(el.createdAt).toDateString()}</td>
                                            <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <p onClick={() => deletePlan(el.id)} className='bg-red-400 px-4 py-1 text-white w-20 rounded-sm text-xs'>DELETE</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
