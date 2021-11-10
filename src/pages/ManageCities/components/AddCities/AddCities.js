import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const people = [
    {
        name: '1',
        title: 'Mumbai',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // More people...
]

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '24%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        },
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function AddCities() {
    const classes = useStyles();
    const [city, setCity] = useState('');
    const [cityData, setCityData] = useState('');

    useEffect(() => {
        getCities();
    }, []);
    const handleCitySave = () => {
        axios.post('https://partyfyd.com/api/v1/city/create', {
            "cityName": city
        })
            .then(function (response) {
                if (response.data.status == 'success') {
                    document.getElementById('CityName').value = '';
                    getCities();
                    alert('New City Added Successfully');
                }
            })
            .catch(e => console.log('Error', e));
    }

    const getCities = () => {
        axios.get('https://partyfyd.com/api/v1/city')
            .then(function (response) {
                if (response.data.status == 'success') {
                    setCityData(response.data.cities);
                }
            })
            .catch(e => console.log('Error', e));
    }

    const deleteCity = (cityId) => {
        let value = window.confirm('Are You Sure You Want To Delete');
        if (value) {
            axios.delete(`https://partyfyd.com/api/v1/city/remove/${cityId}`)
                .then(function (response) {
                    if (response.data.status == 'success') {
                        alert('Record Deleted Successfully');
                        getCities();
                    }
                })
                .catch(e => console.log('Error', e));
        } else {
        }
    }
    return (
        <div className='flex flex-col mx-7'>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Add New Cities
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                onChange={(e) => setCity(e.target.value)}
                                autoComplete="CityName"
                                name="CityName"
                                variant="outlined"
                                required
                                fullWidth
                                id="CityName"
                                label="City Name"
                                autoFocus
                            />
                        </Grid>
                    </Grid>
                    <Button
                        onClick={() => handleCitySave()}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Add
                    </Button>
                </form>
            </div>
            <div className="flex flex-col w-full mt-6">
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
                                            City Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Created On
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
                                    {cityData && cityData.map((el, index) => (
                                        <tr key={index}>
                                            <td className="px-9 py-4 whitespace-nowrap">
                                                <div className="text-sm font-bold text-gray-900">{index + 1}</div>
                                            </td>
                                            <td className="px-8 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{el.cityName}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{new Date(el.createdAt).toDateString()}</div>
                                            </td>
                                            <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <p onClick={() => deleteCity(el.id)} className='bg-red-400 px-4 py-1 text-white w-20 rounded-sm text-xs'>DELETE</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}