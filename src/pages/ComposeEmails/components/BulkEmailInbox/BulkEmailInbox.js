import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Skeleton from '@material-ui/lab/Skeleton';
import CSVReader from "react-csv-reader";

const handleForce = (data, fileInfo) => console.log(data, fileInfo);

const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};
const useStyles = makeStyles(() => ({
    noBorder: {
        border: "none",
    },
}));


const BulkEmailInbox = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <p className='text-gray-500 border-b border-gray-200 py-2 text-sm font-bold rounded-sm px-4'>
                {props.title}
            </p>
            <section className='bg-white  w-full flex flex-col space-y-2'>
                <div className='mx-10'>
                    <TextField
                        className='w-full'
                        id="outlined-textarea"
                        label="To"
                        placeholder="To"
                        multiline
                        margin="dense"
                        variant="outlined"
                    />
                    <TextField
                        className='w-full'
                        id="outlined-textarea"
                        label="Subject"
                        placeholder="Subject"
                        multiline
                        margin="dense"
                        variant="outlined"
                    />
                    <div className='flex flex-row space-x-2'>
                        <TextField
                            className='w-full'
                            id="outlined-textarea"
                            label="CC"
                            placeholder="CC"
                            multiline
                            variant="outlined"
                            margin="dense"
                        />
                        <TextField
                            className='w-full'
                            id="outlined-textarea"
                            label="BCC"
                            placeholder="BCC"
                            multiline
                            variant="outlined"
                            margin="dense"
                        />
                    </div>
                </div>
                <div className='mx-10'>
                    <Skeleton variant="rect" className='w-full' height={props.bodyHeight} />
                </div>
                <div className='mx-10'>
                    <Button variant="contained" color="primary">
                        Send &nbsp;<SendIcon />
                    </Button>
                    {
                        props.isBulkMail ? <div className="bulk-container cursor-pointer">
                            <CSVReader cssClass="react-csv-input"
                                label=""
                                onFileLoaded={handleForce}
                                parserOptions={papaparseOptions}
                            />
                        </div> : null
                    }
                </div>
            </section>
        </React.Fragment>
    )
}

export default BulkEmailInbox;