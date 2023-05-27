import { useParams } from "react-router-dom";

import Layout from "../components/partials/layout";
import BarChart from "../components/chart/bar";
import DoughnutChart from "../components/chart/donghnut";

const Floor = () => {
    const { buildingId, floorId } = useParams();

    return (
        <Layout>
            <div className="m-3">
                <div className='grid grid-cols-3 grid-rows-8 gap-3'>
                    <div className='bg-white rounded-md col-span-2 p-3'>
                        <div className='flex justify-center cursor-pointer'>
                            <p className='pr-2'>ชั้น</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-md row-span-4 p-3'>
                        <BarChart label='' dataenergy='' datasolar='' />
                    </div>
                    <div className='rounded-md col-span-2 row-span-5 p-3'>
                    </div>
                    <div className='bg-white rounded-md row-span-4 p-3'>
                        <p className='text-center'>ลักษณะการใช้งานพื้นที่รวม</p>
                        <DoughnutChart label='Outlet,Light,Aircon' data='' />
                    </div>
                    <div className='col-span-2'>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='bg-white rounded-md p-3'>
                                <p className='text-center'>ดาวน์โหลดแปลน</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='bg-white rounded-md p-3'>
                                <p className='text-center'>PM</p>
                            </div>
                            <div className='bg-white rounded-md p-3'>
                                <p className='text-center'>Temperature</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Floor;