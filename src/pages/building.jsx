import React from 'react'
import { useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom";

// Components
import Layout from "../components/partials/layout";
import BarChart from "../components/chart/bar";
import DoughnutChart from "../components/chart/donghnut";

const Building = () => {
    const { buildingId } = useParams();

    useEffect(() => {
        // Supermap
    }, []);


    return (
        <Layout>
            <div className="m-3">
                <div className='grid grid-cols-4 grid-rows-8 gap-3'>
                    <div className='bg-white rounded-md row-span-6 p-3'>
                        <p className='text-center pb-3'>การใช้ไฟฟ้ารายชั้น</p>
                    </div>
                    <div className='bg-white rounded-md col-span-2 row-span-2 p-3'>
                        <div className='flex justify-center cursor-pointer'>
                            <p className='pr-2'>อาคาร</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-md row-span-4 p-3'>
                        <BarChart label='' dataenergy='' datasolar='' />
                    </div>
                    <div className='col-span-2 row-span-6 p-3'>
                    </div>
                    <div className='bg-white rounded-md row-span-4 p-3'>
                        <p className='text-center'>ลักษณะการใช้งานพื้นที่รวม</p>
                        <DoughnutChart label='Outlet,Light,Aircon' data='' />
                    </div>
                    <div className='bg-white rounded-md row-span-2 p-3'>
                        <div className='pb-3'>
                            <div className="flex justify-between mx-auto">
                                <p className="p-2 text-sm">อุณหภูมิ</p>
                                <p className="text-sm">30 °C</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className="flex justify-between mx-auto">
                                <p className="p-2 text-sm">PM</p>
                                <p className="text-sm">0 µg./m3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Building;