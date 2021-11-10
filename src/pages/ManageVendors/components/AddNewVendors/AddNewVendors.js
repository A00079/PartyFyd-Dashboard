import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

export default function AddNewVendors(props) {
    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <>
            <div class="container px-5 py-4 mx-auto">
                <div class="flex flex-col text-center w-full">
                    <h1 class="sm:text-2xl text-left text-2xl font-medium title-font mb-1 text-gray-900">Add Vendors</h1>
                    <p class="text-left text-xs text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                </div>
                <div className='grid grid-cols-12 mx-60'>
                    {/* <div className='col-span-4 w-full h-full mt-2'>
                        <section class="text-gray-600 body-font">
                            <div class="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
                                <img class="w-60 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                                <div class="text-center w-full">
                                    <div class="flex justify-center">
                                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">Upload</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div> */}
                    <div className='col-span-12 w-full h-full mt-2'>
                        <div className='form-container mx-5 my-5'>
                            <div className='flex flex-row justify-between items-center pb-4'>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                <button class="inline-flex text-right text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">Save</button>
                            </div>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        autoComplete="companyname"
                                        name="companyname"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="companyname"
                                        label="Company Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        autoComplete="gstno"
                                        name="gstno"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="gstno"
                                        label="GST No."
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        autoComplete="companypanno"
                                        name="companypanno"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="companypanno"
                                        label="Company PAN No."
                                    />
                                </Grid>
                                <h4 className='text-gray-600 text-lg font-medium w-full p-2'>Contact Details</h4>
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        autoComplete="email"
                                        name="email"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="mobile"
                                        name="mobile"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="mobile"
                                        label="Mobie"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        className='w-full'
                                        id="outlined-multiline-static"
                                        label="Permanent Address"
                                        multiline
                                        rows={4}
                                        defaultValue=""
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
