import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/partials/layout";
import BarChart from "../components/chart/bar";
import DoughnutChart from "../components/chart/donghnut";

const Room = () => {
    const { buildingId, floorId, roomId } = useParams();

    useEffect(() => {
        
    }, [])
    
    return (
        <Layout>
            <div className="m-3">
                <div className='grid grid-cols-4 grid-rows-8 gap-3'>
                    <div className='bg-white rounded-md row-span-6 p-3'>
                        <p className='text-center'>อุปกรณ์</p>
                    </div>
                    <div className='bg-white rounded-md col-span-2 row-span-2 p-3'>
                        <div className='flex justify-center'>
                            <p className='pr-2'>ห้อง</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-md row-span-4 p-3'>
                        <BarChart label='' dataenergy='' datasolar='' />
                    </div>
                    <div className='col-span-2 row-span-6 p-3'></div>
                    <div className='bg-white rounded-md row-span-4 p-3'>
                        <p className='text-center'>การใช้งานพื้นที่</p>
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

export default Room;