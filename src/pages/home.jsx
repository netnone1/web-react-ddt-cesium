import React from 'react'
import { useEffect, useState, useRef } from "react"

// Swiper
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Firebase
import { ref, get, child } from "firebase/database";
import firebase from "../firebase"

// Components
import Layout from "../components/partials/layout"

const Home = () => {
    const Cesium = window.Cesium;
    const dbRef = ref(firebase);
    const [data, setData] = useState([])
    const [firebaseData, setFirebasedata] = useState([])

    useEffect(() => {
        fetch('https://api.erdi.cmu.ac.th/cmu/eng?fbclid=IwAR3b0t5t_jI_y-CwD_4Wy1YBnyxSxTzK5W0xQ1O3sIbgdBihTX70bOn6hzo')
            .then(response => response.json())
            .then(data => {
                const unqiueData = {};
                data.data.sort((itemOne, itemTwo) => itemTwo.timeIn.localeCompare(itemOne.timeIn));
                data.data.forEach(item => {
                    if (!unqiueData[item.site_id]) {
                        unqiueData[item.site_id] = { location: item.location, kW: item.kW, timeIn: item.timeIn };
                    }
                });
                console.log(unqiueData)
                setData(unqiueData);
            }).catch(error => {
                console.error(error);
            });

        // Firebase
        get(child(dbRef, `SensorsOutdoor/`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val())
                setFirebasedata(snapshot.val())
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });

        // Supermap
        var viewer = new Cesium.Viewer('cesiumContainer')
        var scene = viewer.scene
        var promise = scene.open('http://localhost:8090/iserver/services/3D-CMU/rest/realspace')

        return () => {
            viewer.destroy()
        }
    }, []);


    return (
        <Layout>
            <div className="m-3">
                <div className="h-screen grid grid-cols-3">
                    <div className="col-span-2">
                        <div className="h-screen mr-3 rounded-lg">
                            {/* SuperMap */}
                            <div id='cesiumContainer' className='h-full'></div>
                            <div id="bubble" className='bubble'>
                                <span className='ful-export' id='bubbleposition'></span>
                            </div>
                        </div>
                    </div>

                    {/* Slide */}
                    <div className="bg-white rounded p-3">
                        <Swiper className="h-full" modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 5000 }}>
                            <SwiperSlide>
                                <p className="text-center">การใช้พลังงานไฟฟ้า</p>
                                {Object.keys(data).map(id => (
                                    <div className="flex justify-between mx-auto" key={id}>
                                        <p className="p-2 text-sm">{data[id].location}</p>
                                        <p className="text-sm">{data[id].kW} kW</p>
                                        {/* <p className="text-sm">{data[id].timeIn}</p> */}
                                    </div>
                                ))}
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className="text-center">ความชื้น</p>
                                {Object.keys(firebaseData).map(id => (
                                    <div className="flex justify-between mx-auto" key={id}>
                                        <p className="p-2 text-sm">{firebaseData[id].id}</p>
                                        <p className="text-sm">{firebaseData[id].Humidity} g/m3</p>
                                    </div>
                                ))}
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className="text-center">PM2.5</p>
                                {Object.keys(firebaseData).map(id => (
                                    <div className="flex justify-between mx-auto" key={id}>
                                        <p className="p-2 text-sm">{firebaseData[id].id}</p>
                                        <p className="text-sm">{firebaseData[id].PM25} µg./m3</p>
                                    </div>
                                ))}
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className="text-center">อุณหภูมิ</p>
                                {Object.keys(firebaseData).map(id => (
                                    <div className="flex justify-between mx-auto" key={id}>
                                        <p className="p-2 text-sm">{firebaseData[id].id}</p>
                                        <p className="text-sm">{firebaseData[id].Temp} °C</p>
                                    </div>
                                ))}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Home;