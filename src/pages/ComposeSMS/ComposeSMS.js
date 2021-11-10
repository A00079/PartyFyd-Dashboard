import React, { useState } from 'react';
import List from "@material-ui/core/List";
import { DynamicListSms, SmsForm } from './components';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ComposeSms = () => {
    const [listData, setListData] = React.useState([
        {
            id: "sendsms",
            itemname: "Send Sms",
            hasdropdown: false,
            isexpanded: false,
            subitemlist: [],
            route: false,
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>'
        },
        {
            id: "viewdetails",
            itemname: "View Details",
            hasdropdown: false,
            isexpanded: false,
            subitemlist: [],
            route: false,
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>'
        }
    ]);

    const [ActiveWindow, setActiveWindow] = useState('sendsms');
    const [smsMessage, setSmsMessage] = useState('');
    const handleListItemClick = (data) => {
        console.log('Call Received...', data);
        setActiveWindow(data);
    }
    const handleSmsMessage = (data) => {
        console.log('Message Received...', data);
        setSmsMessage(data);
    }

    return (
        <React.Fragment>
            <section className='grid grid-cols-12 gap-0 bg-white h-screen'>
                <div className="col-span-2 w-full">
                    <div className='bg-white border-r border-gray-200 w-full mx-auto py-2 h-screen'>
                        <div className='flex flex-col w-full'>
                            <div className='mx-2 screen-title flex flex-row items-center justify-start'>
                                <img alt="team" class="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2" src="./img/gmail.svg" />
                                <p className='text-sm font-bold text-gray-500'>
                                    Message
                                </p>
                            </div>
                            <div className='w-full'>
                                <button className='flex flex-row items-center justify-center bg-red-400 w-40 mx-auto rounded-md text-xs text-white p-1'>
                                    <p className='font-bold'>Compose Message</p>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className='list-container py-2'>
                                <div className='border-t border-gray-200 border-b border-gray-200'>
                                    <ListItem button>
                                        <ListItemText>
                                            <p style={{ fontFamily: 'Nunito' }} className='text-xs font-bold text-gray-500 capitalize'>Bulk Messages</p>
                                        </ListItemText>
                                    </ListItem>
                                </div>
                                <List id="drawer-item-container-sms">
                                    <DynamicListSms funcProvider={handleListItemClick} itemsData={listData} open={true} />
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className='bg-white border-r border-gray-200 w-full mx-auto py-2 h-screen'>
                        <div className='w-full border-b border-gray-200'>
                            <div className='flex flex-col w-full mx-4 py-2'>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>Send messages in bulk globally to anyone</p>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>Below are the action to send bulk messages to peoples</p>
                            </div>
                        </div>
                        <div className='w-full border-b border-gray-200 px-2'>
                            <div className='flex flex-row mx-0 py-2 items-center space-x-1 border-b border-gray-600 w-24'>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-600 font-bold'>Primary </p>
                            </div>
                        </div>
                        <div className='inbox-msg-container flex flex-col'>
                            <div class="w-full border-b border-gray-200 cursor-pointer hover:bg-gray-50">
                                <div className='flex flex-row justify-between mx-2 items-center py-1'>
                                    <p className='text-gray-600 text-sm font-semibold'>New Message</p>
                                    <p className='text-sm text-indigo-600 font-bold'>Balance: Rs 54.80</p>
                                </div>
                            </div>
                            <div className='parent-main-form-container w-full'>
                                <SmsForm smsFuncProvider={(val) => handleSmsMessage(val)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <div className='bg-white border-r border-gray-200 w-full mx-auto py-2 h-screen'>
                        <div className='w-full border-b border-gray-200'>
                            <div className='flex flex-col w-full mx-4 py-2'>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>View the updated inbox data</p>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>Below are the inbox data and are live updated</p>
                            </div>
                        </div>
                        <div className='w-full border-b border-gray-200'>
                            <div className='flex flex-col w-full mx-4 py-3'>
                                <p style={{ fontFamily: 'Nunito' }} className='text-sm text-gray-500 font-medium'>Mobile Preview</p>
                            </div>
                        </div>
                        <div className="mobile-preview mx-40 py-5">
                            <div className='mobile-container bg-white flex flex-col border border-gray-300 rounded-lg'>
                                <div className='status-bar px-2 border-b border-gray-300 py-1 flex flex-row justify-between items-center '>
                                    <div className='network-sign'>
                                        <small className='text-xs text-gray-700 font-semibold'>JIO</small>
                                    </div>
                                    <div className='network-sign flex flex-row justify-between items-center space-x-1'>
                                        <small className='text-xs text-gray-600 font-medium'>
                                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                                        </small>
                                        <div className='network-no'>
                                            <small className='text-xs text-gray-700 font-semibold'>4G</small>
                                        </div>
                                        <small className='text-xs text-gray-600 font-medium'>
                                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                                        </small>
                                        <small className='text-xs text-gray-600 font-medium'>
                                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>
                                        </small>
                                    </div>
                                </div>
                                <div className='py-2 border-b border-gray-300'>
                                    <div className='flex flex-row justify-start items-center'>
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clip-rule="evenodd"></path></svg>
                                        <p className='text-sm text-gray-500 font-extrabold px-2'>AZ-000567</p>
                                    </div>
                                </div>
                                <div className='mobile-msg-body h-72'>
                                    <div className='space-y-3'>
                                        <p className='text-xs text-center mt-3 text-gray-500 font-medium'>07/05/2021 Fri</p>
                                        <div class="p-2 w-full flex">
                                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-md bg-gray-200 text-indigo-500 mb-4 flex-shrink-0">
                                                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                                            </div>
                                            <div class="flex-grow pl-0 mt-3">
                                                <p class="mx-4 text-xs text-gray-700 font-medium rounded-md text-base bg-gray-100 p-2">
                                                    {smsMessage}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mobile-footer-menu border-t border-gray-300 mt-20'>
                                    <div className='flex flex-row justify-between  items-center mx-7 py-2'>
                                        <p className='bg-gray-500 w-3 h-3 rounded-full'></p>
                                        <p className='bg-gray-500 w-3 h-3 rounded-sm'></p>
                                        <p>
                                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ComposeSms;