import React, { useState } from "react";
import { Card, Text } from "../../../../components";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DetailsModelView from "./DetailsModelView/DetailsModelView";

const Stats = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [isModelOpen, setIsModelOpen] = React.useState(false);
  const [modelTitle, setModelTitle] = React.useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDetailModalToggle = (title) => {
    setModelTitle(title);
    setIsModelOpen(!isModelOpen);
  }

  return (
    <React.Fragment>
      <DetailsModelView isModelOpen={isModelOpen} modelTitle={modelTitle} />
      <div className="grid grid-cols-10 gap-2">
        <div className="col-span-5 w-full">

          <div className='stats-data-container space-y-1 w-full'>
            <div className='bg-white w-full shadow-xs border border-gray-200 rounded-md flex flex-col items-start space-y-1'>
              <div className='w-full'>
                <div class="w-full">
                  <div class="h-full flex items-center p-2">
                    <div class="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-2">
                      <svg class="w-6 h-6 text-center text-indigo-600 mx-auto mt-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                    </div>
                    <div class="flex-grow">
                      <div className='flex flex-row justify-between items-center'>
                        <div>
                          <p class="text-gray-600 text-sm title-font font-bold">Total Stats <sup style={{ padding: '0.2rem' }} className='bg-yellow-300 text-white rounded-sm'>Today</sup></p>
                          <small class="text-gray-500">Below are the updated stats.Click for detailed view.</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='avaliable-stats-container w-full p-2 pt-0'>
                <div className='w-full flex flex-row justify-between space-x-1'>
                  <div onClick={() => handleDetailModalToggle('Total Users')} className='cursor-pointer w-full bg-indigo-50 border border-gray-100 rounded-md shadow-sm p-2 flex flex-col space-y-1'>
                    <div>
                      <div class="w-7 h-7 bg-red-300 object-cover object-center flex-shrink-0 rounded-md mr-3">
                        <svg class="w-6 h-6 mx-auto pt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>
                      </div>
                    </div>
                    <div className='inline inline-block items-center'>
                      <p className='text-lg font-bold text-blue-600'>48</p>
                      <p className='text-sm font-bold text-gray-700 capitalize'>
                        Total Users
                      </p>
                    </div>
                  </div>
                  <div onClick={() => handleDetailModalToggle('Total Employees')} className='cursor-pointer w-full bg-indigo-50 border border-gray-100 rounded-md shadow-sm p-2 flex flex-col space-y-1'>
                    <div>
                      <div class="w-7 h-7 bg-blue-400 object-cover object-center flex-shrink-0 rounded-md mr-3">
                        <svg class="w-6 h-6 mx-auto pt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                      </div>
                    </div>
                    <div className='inline inline-block items-center'>
                      <p className='text-lg font-bold text-blue-600'>18</p>
                      <p className='text-sm font-bold text-gray-700 capitalize'>
                        Total Employees
                      </p>
                    </div>
                  </div>
                  <div onClick={() => handleDetailModalToggle('Total Venders')} className='cursor-pointer w-full bg-indigo-50 border border-gray-100 rounded-md shadow-sm p-2 flex flex-col space-y-1'>
                    <div>
                      <div class="w-7 h-7 bg-purple-400 object-cover object-center flex-shrink-0 rounded-md mr-3">
                        <svg class="w-6 h-6 mx-auto pt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                      </div>
                    </div>
                    <div className='inline inline-block items-center'>
                      <p className='text-lg font-bold text-blue-600'>45</p>
                      <p className='text-sm font-bold text-gray-700 capitalize'>
                        Total Venders
                      </p>
                    </div>
                  </div>
                  <div onClick={() => handleDetailModalToggle('Total Sales Boy')} className='cursor-pointer w-full bg-indigo-50 border border-gray-100 rounded-md shadow-sm p-2 flex flex-col space-y-1'>
                    <div>
                      <div class="w-7 h-7 bg-green-400 object-cover object-center flex-shrink-0 rounded-md mr-3">
                        <svg class="w-6 h-6 mx-auto pt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path></svg>
                      </div>
                    </div>
                    <div className='inline inline-block items-center'>
                      <p className='text-lg font-bold text-blue-600'>67</p>
                      <p className='text-sm font-bold text-gray-700 capitalize'>
                        Total Sales Boy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 w-full">
          <div className='overalldata-main-container bg-white rounded-md border border-gray-200 w-full flex flex-col py-2 space-y-2 px-2'>
            <div className='w-full grid grid-cols-12 gap-2'>
              <div className="col-span-6 w-full">
                <div class="w-full">
                  <div style={{ background: '#F6F6FB' }} class="border border-gray-100 shadow-sm h-full flex items-center  p-2 rounded-lg">
                    <div class="w-8 h-8 bg-red-300 rounded-md mr-2 mb-5">
                      <svg class="w-7 h-7 mx-auto pt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div class="ml-1 flex-grow">
                      <p style={{ fontFamily: 'Nunito' }} class="w-20 text-gray-800 text-xs title-font font-extrabold break-words">Packages</p>
                      <p style={{ fontFamily: 'Nunito' }} class="w-10 text-gray-800 text-xs title-font font-extrabold break-words">Sold</p>
                      <p class="text-blue-600 text-sm font-semibold">250</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-6 w-full">
                <div class="w-full">
                  <div style={{ background: '#F6F6FB' }} class="bg-white border border-gray-100 shadow-sm h-full flex items-center p-2 rounded-lg">
                    <div class="w-8 h-8 bg-green-300 rounded-md mr-2 mb-5">
                      <svg class="w-7 h-7 mx-auto pt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div class="ml-1 flex-grow">
                      <h2 style={{ fontFamily: 'Nunito' }} class="w-10 text-gray-800 text-xs title-font font-extrabold break-words">Cakes Total</h2>
                      <p class="text-blue-600 text-sm font-semibold">689</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full grid grid-cols-12 gap-2'>
              <div className="col-span-6 w-full">
                <div class="w-full">
                  <div style={{ background: '#F6F6FB' }} class="bg-white border border-gray-100 shadow-sm h-full flex items-center p-2 rounded-lg">
                    <div class="w-8 h-8 bg-blue-300 rounded-md mr-2 mb-5">
                      <svg class="w-7 h-7 mx-auto pt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                    </div>
                    <div class="ml-1 flex-grow">
                      <h2 style={{ fontFamily: 'Nunito' }} class="w-14 text-gray-800 text-xs title-font font-extrabold break-words">Cakes Delivered</h2>
                      <p class="text-blue-600 text-sm font-semibold">250</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-6 w-full">
                <div class="w-full">
                  <div style={{ background: '#F6F6FB' }} class="bg-white border border-gray-100 shadow-sm h-full flex items-center p-2 rounded-lg">
                    <div class="w-8 h-8 bg-yellow-300 rounded-md mr-2 mb-5">
                      <svg class="w-7 h-7 mx-auto pt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div class="ml-1 flex-grow">
                      <p style={{ fontFamily: 'Nunito' }} class="text-gray-800  text-xs title-font font-extrabold">Total </p>
                      <p style={{ fontFamily: 'Nunito' }} class="text-gray-800  text-xs title-font font-extrabold"> Utilities</p>
                      <p class="text-blue-600 text-sm font-semibold">689</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Stats;
