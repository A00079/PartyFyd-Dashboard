import React, { useState } from 'react';
import EmblaCarousel from "embla-carousel";
import { setupPrevNextBtns, disablePrevNextBtns } from "./js/prevAndNextButtons";
import { setupDotBtns, generateDotBtns, selectDotBtn } from "./js/dotButtons";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import "./css/base.css";
import "./css/reset.css";
import "./css/embla.css";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));

const BannerSlider = () => {
    const classes = useStyles();
    const [bannersData, setBannersData] = useState([]);

    React.useEffect(() => {
        setTimeout(() => {
            const setupEmblaCarousel = (emblaNode, options) => {
                const viewPort = emblaNode.querySelector(".embla__viewport");
                const prevBtn = emblaNode.querySelector(".embla__button--prev");
                const nextBtn = emblaNode.querySelector(".embla__button--next");
                const dots = emblaNode.querySelector(".embla__dots");
                const embla = EmblaCarousel(viewPort, options);
                const dotsArray = generateDotBtns(dots, embla);
                const setSelectedDotBtn = selectDotBtn(dotsArray, embla);
                const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

                setupPrevNextBtns(prevBtn, nextBtn, embla);
                setupDotBtns(dotsArray, embla);

                embla.on("select", setSelectedDotBtn);
                embla.on("select", disablePrevAndNextBtns);
                embla.on("init", setSelectedDotBtn);
                embla.on("init", disablePrevAndNextBtns);
            };

            const options = { loop: false };
            const emblaNodes = [].slice.call(document.querySelectorAll(".embla"));
            const emblaCarousels = emblaNodes.map(emblaNode =>
                setupEmblaCarousel(emblaNode, options)
            );
        }, 1500);

        fetchBanners();
    }, []);

    const fetchBanners = () => {
        axios.get('https://partyfyd.com/api/v1/banner')
            .then((response) => {
                if (response.data.status == 'success') {
                    setBannersData(response.data.banners);
                }
            }).catch((err) => {
                console.log('Error:', err);
            });
    }

    const deleteBanner = (banId) => {
        let value = window.confirm('Are You Sure You Want To Delete');
        if (value) {
            axios.delete(`https://partyfyd.com/api/v1/banner/remove/${banId}`)
                .then(function (response) {
                    if (response.data.status == 'success') {
                        alert('Record Deleted Successfully');
                        fetchBanners();
                    }
                })
                .catch(e => console.log('Error', e));
        } else {
        }
    }

    const handleImage = (e) => {
        var formData = new FormData();
        var imagefile = document.querySelector('#bannerImg');
        formData.append("imageUrl", imagefile.files[0]);
        axios.post('https://partyfyd.com/api/v1/banner/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                if (response.data.status == 'success') {
                    alert('Banner Uploaded Successfully');
                    fetchBanners();
                }
            })
            .catch(e => console.log('Error', e));
    }

    const handleImageUpdate = (id) => {
        console.log('ajaajaaja');
        var formData = new FormData();
        var imagefile = document.querySelector('#bannerImg-update');
        formData.append("imageUrl", imagefile.files[0]);
        axios.patch(`https://partyfyd.com/api/v1/banner/update/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                if (response.data.status == 'success') {
                    alert('Banner Updated Successfully');
                    fetchBanners();
                }
            })
            .catch(e => console.log('Error', e));
    }
    return (
        <React.Fragment>
            <section>
                <div className='py-2 border border-gray-300 rounded-lg pl-4'>
                    <h4 className='text-sm font-bold text-indigo-700 mb-2'>Upload Banner</h4>
                    <input type='file' name='bannerImg' onChange={(e) => handleImage(e)} id='bannerImg' />
                </div>
                <div className="carousel">
                    <div className="embla">
                        <div className="embla__viewport">
                            <div className="embla__container">
                                {
                                    bannersData && bannersData.map((el, index) => {
                                        return (
                                            <div key={index} className="embla__slide bg-white rounded-xl mr-5 border border-gray-300">
                                                <div className="embla__slide__inner">
                                                    <div class="p-2 w-full mt-1">
                                                        <div class="h-full flex pb-1 items-center rounded-lg">
                                                            <img src={el.imageUrl} className='object-cover h-96 w-96' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="embla__dots"></div>

                        <button className="embla__button embla__button--prev" type="button">
                            <svg
                                className="embla__button__svg"
                                viewBox="137.718 -1.001 366.563 643.999"
                            >
                                <path
                                    d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
                                ></path>
                            </svg>
                        </button>
                        <button className="embla__button embla__button--next" type="button">
                            <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
                                <path
                                    d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-20">
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
                                                Image
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
                                        {bannersData && bannersData.map((el, index) => (
                                            <tr key={index}>
                                                <td className="px-9 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-bold text-gray-900">{index + 1}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <img className="h-10 w-10 object-cover" src={el.imageUrl} alt="" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{new Date(el.createdAt).toDateString()}</div>
                                                </td>
                                                <td className=" flex flex-row justify-center space-x-7 items-center cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <p onClick={() => deleteBanner(el.id)} className='bg-red-400 px-4 py-1  text-white w-20 rounded-sm text-xs'>DELETE</p>
                                                    <div class="mt-4 mb-4">
                                                        <input
                                                            onChange={(e) => handleImageUpdate(el.id)}
                                                            type="file"
                                                            name="bannerImgupdate"
                                                            id='bannerImg-update'
                                                            hidden />
                                                        <label id='label-file' for="bannerImg-update">Modify</label>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default BannerSlider;