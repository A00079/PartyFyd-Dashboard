import React, { useState } from 'react';
import List from "@material-ui/core/List";
import { DynamicListEmail, ComposeForm, InboxMessagePreview, BulkEmail, BulkEmailInbox } from './components';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ComposeEmails = () => {
    const [isTemplateView, setTemplateView] = useState(false);
    const [listData, setListData] = React.useState([
        {
            id: "sent",
            itemname: "sent",
            hasdropdown: false,
            isexpanded: false,
            subitemlist: [],
            route: false,
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>'
        },
        {
            id: "quickmail",
            itemname: "quick mail",
            hasdropdown: false,
            isexpanded: false,
            subitemlist: [],
            route: false,
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>'
        },
        {
            id: "bulkmail",
            itemname: "bulk mail",
            hasdropdown: false,
            isexpanded: false,
            subitemlist: [],
            route: false,
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"></path></svg>'
        }
    ]);
    const [templatelistData, setTemplateListData] = React.useState([
        {
            id: "template-quickmail",
            itemname: "quick mail",
            hasdropdown: false,
            isexpanded: false,
            subitemlist: [],
            route: false,
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>'
        },
        {
            id: "template-bulkmail",
            itemname: "bulk mail",
            hasdropdown: false,
            isexpanded: false,
            subitemlist: [],
            route: false,
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"></path></svg>'
        }
    ]);

    const [ActiveWindow, setActiveWindow] = useState('sent');

    const handleListItemClick = (data) => {
        console.log('Call Received...', data);
        setActiveWindow(data);
        if (data.includes('template')) {
            setTemplateView(true);
        }
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
                                    Email
                                </p>
                            </div>
                            <div className='w-full'>
                                <button className='flex flex-row items-center justify-center bg-red-400 w-40 mx-auto rounded-md text-xs text-white p-1'>
                                    <p className='font-bold'>Compose Email</p>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className='list-container py-2'>
                                <div className='border-t border-gray-200 border-b border-gray-200'>
                                    <ListItem button>
                                        <ListItemText>
                                            <p style={{ fontFamily: 'Nunito' }} className='text-xs font-bold text-gray-500 capitalize'>Normal Email</p>
                                        </ListItemText>
                                    </ListItem>
                                </div>
                                <List id="drawer-item-container-email">
                                    <DynamicListEmail funcProvider={handleListItemClick} itemsData={listData} open={true} />
                                </List>
                                <div className='border-t border-gray-200 border-b border-gray-200'>
                                    <ListItem button>
                                        <ListItemText>
                                            <p style={{ fontFamily: 'Nunito' }} className='text-xs font-bold text-gray-500 capitalize'>Templated Email</p>
                                        </ListItemText>
                                    </ListItem>
                                </div>
                                <List id="template-item-container">
                                    <DynamicListEmail funcProvider={handleListItemClick} itemsData={templatelistData} open={true} />
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className='bg-white border-r border-gray-200 w-full mx-auto py-2 h-screen'>
                        <div className='w-full border-b border-gray-200'>
                            <div className='flex flex-col w-full mx-4 py-2'>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>View the updated inbox data</p>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>Below are the inbox data and are live updated</p>
                            </div>
                        </div>
                        <div className='w-full border-b border-gray-200 px-2'>
                            <div className='flex flex-row mx-0 py-2 items-center space-x-1 border-b border-gray-600 w-24'>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-600 font-bold'>{isTemplateView ? 'Templates' : 'Primary'} </p>
                            </div>
                        </div>
                        {
                            isTemplateView ?
                                <div className='template-inbox-msg-container py-3 space-y-3'>
                                    <div className='space-y-2 px-2'>
                                        <p className='text-gray-500 font-semibold text-xs'>Buisness Service</p>
                                        <div className='flex flex-row justify-start px-1 space-x-2 w-full'>
                                            <div className='bg-gray-200 w-28 rounded-md h-32'>

                                            </div>
                                            <div className='bg-gray-200 w-28 rounded-md h-32'>

                                            </div>
                                            <div className='bg-gray-200 w-28 rounded-md h-32'>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='space-y-2 px-2'>
                                        <p className='text-gray-500 font-semibold text-xs'>Marketing</p>
                                        <div className='flex flex-row justify-start px-1 space-x-2 w-full'>
                                            <div className='bg-gray-200 w-28 rounded-md h-32'>

                                            </div>
                                            <div className='bg-gray-200 w-28 rounded-md h-32'>

                                            </div>
                                            <div className='bg-gray-200 w-28 rounded-md h-32'>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='space-y-2 px-2'>
                                        <p className='text-gray-500 font-semibold text-xs'>Thankyou</p>
                                        <div className='flex flex-row justify-start px-1 space-x-2 w-full'>
                                            <div className='bg-gray-200 w-28 rounded-md h-32'>

                                            </div>
                                            <div className='bg-gray-200 w-28 rounded-md h-32'>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='inbox-msg-container flex flex-col'>
                                    <div class="w-full border-b border-gray-200 cursor-pointer hover:bg-gray-50">
                                        <div class="flex py-3 px-2 sm:flex-row flex-col">
                                            <div class="w-10 h-10 sm:mr-2 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-100 text-indigo-500 flex-shrink-0">
                                            </div>
                                            <div class="flex-grow">
                                                <div className='flex flex-row justify-between items-center'>
                                                    <h2 style={{ fontFamily: 'Nunito' }} class="text-gray-700 text-sm title-font font-bold mb-1">Shooting Stars</h2>
                                                    <small style={{ fontFamily: 'Nunito' }} class="text-gray-500 font-bold">4:12 PM</small>
                                                </div>
                                                <p style={{ fontFamily: 'Nunito' }} class="text-gray-500 text-xs font-bold">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }

                    </div>
                </div>
                {
                    isTemplateView ?
                        <div className="col-span-6">
                            <div className='bg-white border-r border-gray-200 w-full mx-auto py-2 h-screen'>
                                <div className='w-full border-b border-gray-200'>
                                    <div className='flex flex-col w-full mx-4 py-2'>
                                        <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>View the updated inbox data</p>
                                        <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>Below are the inbox data and are live updated</p>
                                    </div>
                                </div>
                                {
                                    ActiveWindow == 'template-quickmail' ? <BulkEmailInbox bodyHeight={200} isBulkMail={false} title="Quick Template Mail" /> : null
                                }
                                {
                                    ActiveWindow == 'template-bulkmail' ? <BulkEmailInbox bodyHeight={150} isBulkMail={true} title="Bulk Template Mail" /> : null
                                }
                            </div>
                        </div>
                        :
                        <div className="col-span-6">
                            <div className='bg-white border-r border-gray-200 w-full mx-auto py-2 h-screen'>
                                <div className='w-full border-b border-gray-200'>
                                    <div className='flex flex-col w-full mx-4 py-2'>
                                        <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>View the updated inbox data</p>
                                        <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>Below are the inbox data and are live updated</p>
                                    </div>
                                </div>
                                {
                                    ActiveWindow == 'sent' ? <InboxMessagePreview /> : null
                                }
                                {
                                    ActiveWindow == 'quickmail' ? <div className='compose-mail-form py-0'>
                                        <ComposeForm title="New Message" messageBodyHeight={10} />
                                    </div> : null
                                }
                                {
                                    ActiveWindow == 'bulkmail' ? <BulkEmail /> : null
                                }
                            </div>
                        </div>
                }
            </section>
        </React.Fragment>
    )
}

export default ComposeEmails;