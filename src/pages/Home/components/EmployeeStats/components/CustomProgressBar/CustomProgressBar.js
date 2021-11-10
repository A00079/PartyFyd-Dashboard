import React from 'react';

const CustomProgressBar = (props) => {
    return (
        <React.Fragment>
            <div className="relative">
                <div className="flex flex-col mb-1 justify-start">
                    <div>
                        <span className="text-sm font-bold inline-block capitalize rounded-sm text-gray-500">
                            {props.label}
                        </span>
                    </div>
                    <div className="text-left">
                        <span className="text-sm font-bold inline-block text-blue-700">
                            {props.prog_no}
                        </span>
                    </div>
                </div>
                <div className="overflow-hidden h-2 text-xs flex flex-row rounded-sm bg-gray-300">
                    <div style={{ width: props.width_barone + "%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-400"></div>
                    <div style={{ width: props.width_bartwo + "%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"></div>
                    <div style={{ width: props.width_barthree + "%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-900"></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CustomProgressBar;