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

export default function AddItems() {
    const classes = useStyles();
    const [item, setItem] = useState('');
    const [itemData, setItemData] = useState('');

    useEffect(() => {
        getItems();
    }, []);
    const handleItemSave = () => {
        axios.post('https://partyfyd.com/api/v1/item/create', {
            "itemName": item
        })
            .then(function (response) {
                if (response.data.status == 'success') {
                    document.getElementById('ItemName').value = '';
                    getItems();
                    alert('New Item Added Successfully');
                }
            })
            .catch(e => console.log('Error', e));
    }

    const handleItemModify = (itemId,itemVal) => {
        var itemName = prompt("Please Enter Item Name", itemVal);
        if (!!itemName) {
            axios.patch(`https://partyfyd.com/api/v1/item/update/${itemId}`, {
                "itemName": itemName
            })
                .then(function (response) {
                    if (response.data.status == 'success') {
                        getItems();
                        alert('Item Updated Successfully');
                    }
                })
                .catch(e => console.log('Error', e));
        }
    }

    const getItems = () => {
        axios.get('https://partyfyd.com/api/v1/item/allItems')
            .then(function (response) {
                if (response.data.status == 'success') {
                    setItemData(response.data.result);
                }
            })
            .catch(e => console.log('Error', e));
    }

    const deleteItem = (itemId) => {
        let value = window.confirm('Are You Sure You Want To Delete');
        if (value) {
            axios.delete(`https://partyfyd.com/api/v1/item/remove/${itemId}`)
                .then(function (response) {
                    if (response.data.status == 'success') {
                        alert('Record Deleted Successfully');
                        getItems();
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
                    Add New Items
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                onChange={(e) => setItem(e.target.value)}
                                autoComplete="ItemName"
                                name="ItemName"
                                variant="outlined"
                                required
                                fullWidth
                                id="ItemName"
                                label="Item Name"
                                autoFocus
                            />
                        </Grid>
                    </Grid>
                    <Button
                        onClick={() => handleItemSave()}
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
                                            Item Name
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
                                    {itemData && itemData.map((el, index) => (
                                        <tr key={index}>
                                            <td className="px-9 py-4 whitespace-nowrap">
                                                <div className="text-sm font-bold text-gray-900">{index + 1}</div>
                                            </td>
                                            <td className="px-8 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{el.itemName}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{new Date(el.createdAt).toDateString()}</div>
                                            </td>
                                            <td className="flex flex-row justify-start space-x-5 cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <p onClick={() => deleteItem(el.id)} className='bg-red-400 px-4 py-1 text-white w-20 rounded-sm text-xs'>DELETE</p>
                                                <p onClick={() => handleItemModify(el.id,el.itemName)} className='bg-blue-400 px-4 py-1 text-white w-20 rounded-sm text-xs'>MODIFY</p>
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