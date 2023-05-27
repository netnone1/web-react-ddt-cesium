import { useParams, Link } from "react-router-dom";

import Layout from "../components/partials/layout";

const Manage = (props) => {
    const { buildingId } = useParams();

    return (
        <Layout>
            <div className="m-3">
                <div className="bg-white rounded p-3 w-full">
                    <p className="text-center text-2xl mb-3">หน้าตึก</p>
                    <div className="">
                        <Link to="/building/1">
                            <div className="w-full hover:bg-gray-300 p-3 rounded link">
                                ตึก
                            </div>
                        </Link>
                    </div>


                    <div className="ml-5">
                        <Link to="/building/1/1">
                            <div className="w-full hover:bg-gray-300 p-3 rounded link">
                                ชั้น
                            </div>
                        </Link>
                    </div>
                    <div className="ml-10">
                        <Link to="/building/1/1/1">
                            <div className="w-full hover:bg-gray-300 p-3 rounded link">
                                ห้อง
                            </div>
                        </Link>
                    </div>
                    <div className="ml-10">
                        <Link to="/building/1/1/1">
                            <div className="w-full hover:bg-gray-300 p-3 rounded link">
                                ห้อง
                            </div>
                        </Link>
                    </div>


                    <div className="ml-5">
                        <Link to="/building/1/1">
                            <div className="w-full hover:bg-gray-300 p-3 rounded link">
                                ชั้น
                            </div>
                        </Link>
                    </div>
                    <div className="ml-10">
                        <Link to="/building/1/1/1">
                            <div className="w-full hover:bg-gray-300 p-3 rounded link">
                                ห้อง
                            </div>
                        </Link>
                    </div>
                    <div className="ml-10">
                        <Link to="/building/1/1/1">
                            <div className="w-full hover:bg-gray-300 p-3 rounded link">
                                ห้อง
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Manage;