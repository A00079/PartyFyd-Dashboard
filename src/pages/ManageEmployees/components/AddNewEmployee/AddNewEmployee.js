import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

export default function Addnewemployee(props) {
    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <>
            <div class="container px-5 py-4 mx-auto">
                <div class="flex flex-col text-center w-full">
                    <h1 class="sm:text-2xl text-left text-2xl font-medium title-font mb-1 text-gray-900">Add Employee</h1>
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
                                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                                <button class="inline-flex text-right text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">Save</button>
                            </div>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        autoComplete="mname"
                                        name="middleName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="middleName"
                                        label="Middle Name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        autoComplete="lname"
                                        name="lastName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl variant="outlined" className='w-full'>
                                        <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={gender}
                                            onChange={handleChange}
                                            label="Gender"
                                        >
                                            <MenuItem value={10}>Male</MenuItem>
                                            <MenuItem value={20}>Female</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="dob"
                                        name="dob"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="dob"
                                        label="Date Of Birth"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="adharcard"
                                        name="Adhar Card No."
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="adharcard"
                                        label="Aadhaar Card No."
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="panno"
                                        name="panno."
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="panno"
                                        label="PAN No."
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
