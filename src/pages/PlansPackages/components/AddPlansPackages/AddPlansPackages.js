import React, { useState } from 'react';
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

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function AddPlansPackages() {
    const classes = useStyles();

    const [cakesList, setCakesList] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setCakesList(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const [formData, setFormData] = useState({
        "name": "",
        "members": '',
        "validity": '',
        "price": '',
    });

    const handlePlanFields = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        );
    }

    const handlePlanSave = () => {
        console.log('formData', formData);
        axios.post('https://partyfyd.com/api/v1/plan/create', formData)
            .then(function (response) {
                if (response.data.status == 'success') {
                    document.getElementById('Name').value = '';
                    document.getElementById('Members').value = '';
                    document.getElementById('Validity').value = '';
                    document.getElementById('Price').value = '';
                    alert('New Plan Added Successfully');
                }
            })
            .catch(e => console.log('Error', e));
    }

    return (
        <React.Fragment>
            <div class="container px-5 py-4 mx-auto">
                <div class="flex flex-col text-center w-full">
                    <h1 class="sm:text-2xl text-left text-2xl font-medium title-font mb-1 text-gray-900">Add Plans</h1>
                    <p class="text-left text-xs text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                </div>
            </div>

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>

                    {/* <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar> */}
                    <Typography component="h1" variant="h5">
                        Create New Plans / Packages
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    onChange={(e) => handlePlanFields(e)}
                                    autoComplete="planname"
                                    name="planname"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="planname"
                                    label="Plan Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    onChange={(e) => handlePlanFields(e)}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="baseprice"
                                    label="Base Price"
                                    name="baseprice"
                                    type="number"
                                    autoComplete="baseprice"
                                />
                            </Grid>
                            <h4 className='text-gray-600 text-lg font-medium w-full p-2'>Events</h4>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={(e) => handlePlanFields(e)}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="defaultevents"
                                    label="Default Events"
                                    type="number"
                                    id="defaultevents"
                                    autoComplete="defaultevents"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={(e) => handlePlanFields(e)}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="maximumevents"
                                    label="Maximum Events"
                                    type="number"
                                    id="maximumevents"
                                    autoComplete="maximumevents"
                                />
                            </Grid>
                            <h4 className='text-gray-600 text-lg font-medium w-full p-2'>Years</h4>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={(e) => handlePlanFields(e)}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="defaultyears"
                                    label="Default Years"
                                    type="number"
                                    id="defaultyears"
                                    autoComplete="defaultyears"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={(e) => handlePlanFields(e)}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="maximumyears"
                                    label="Maximum Years"
                                    type="number"
                                    id="maximumyears"
                                    autoComplete="maximumyears"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className='w-full'>
                                    <InputLabel id="cakes">Select Cakes</InputLabel>
                                    <Select
                                        labelId="Select Cakes"
                                        id="cakes"
                                        multiple
                                        value={cakesList}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Select Cakes" />}
                                        renderValue={(selected) => selected.join(', ')}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox checked={cakesList.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl className='w-full'>
                                    <InputLabel id="utilities">Select Utilities</InputLabel>
                                    <Select
                                        labelId="Select Utilities"
                                        id="utilities"
                                        multiple
                                        value={cakesList}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Select Utilities" />}
                                        renderValue={(selected) => selected.join(', ')}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox checked={cakesList.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                        </Grid>
                        <Button
                            onClick={() => handlePlanSave()}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Add
                        </Button>
                    </form>
                </div>
            </Container>
        </React.Fragment>
    );
}