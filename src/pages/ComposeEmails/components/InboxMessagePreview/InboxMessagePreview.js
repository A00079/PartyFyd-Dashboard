import React from 'react';

const InboxMessagePreview = () => {
    return (
        <React.Fragment>
            <div className='main-inbox-content mx-5 flex flex-col'>
                <div class="p-2 w-full">
                    <div class="h-full flex items-center p-4 rounded-lg">
                        <img alt="team" class="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                        <div class="flex-grow">
                            <div className='flex flex-row justify-between'>
                                <h2 class="text-gray-400 text-xs title-font font-medium">
                                    <span className='text-gray-900 border-b border-gray-300'>HoldenCaulfield@gmail.com</span> to <span className='text-gray-900 border-b border-gray-300'>Clerkkent@gmail.com</span></h2>
                                <h2 class="text-gray-900 title-font font-medium inline-flex space-x-1">
                                    <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></h2>
                            </div>
                            <p class="text-gray-500 text-xs">UI Designer</p>
                        </div>
                    </div>
                </div>
                <div className='inbox-body mx-5'>
                    <div className='flex flex-col space-y-2'>
                        <p style={{ fontFamily: 'Nunito' }} className='text-xs font-bold text-gray-400'>Today 1:25 PM</p>
                        <p style={{ fontFamily: 'Nunito' }} className='text-lg font-bold text-gray-500'>Phuket is waiting for you</p>
                        <div className='space-y-8'>
                            <p style={{ fontFamily: 'Nunito' }} className='text-xs font-bold text-gray-700'>
                                Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </p>
                            <p style={{ fontFamily: 'Nunito' }} className='text-xs mt-8 font-bold text-gray-500 flex flex-col'>
                                <span>Best Regards</span>
                                <span>Clerk kent</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default InboxMessagePreview;