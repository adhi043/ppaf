import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Modal } from "antd";
import urlDaak from './dbConfig';

const DaakSUser = () => {

    const navigate = useNavigate()

    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`${urlDaak}/get`).then(res => {
            setData(res.data?.data)
        })

    },[])





    return (
        <div>
            <div className="container my-5">
                <div className='card cardvv rounded p-4 bg-white'>
                    <form>
                        <div className=''>
                            <img src={require('../lo.jpg')} alt='logo' width='140px' />
                        </div>
                        <div className='mb-4'>
                            <h5>FINANCE DEPARTMENT DATA</h5>
                        </div>
                        {data?.map((i) => {
                            return (
                                <>
                                    <div className='mb-3 d-flex justify-content-between flex-wrap'>
                                        <div>
                                            {i?.uid}
                                        </div>
                                        <div className='d-flex gap-4'>
                                            <i className="fa fa-eye text-primary" onClick={() => { navigate(`/getletter/${i?.uid}`) }} style={{ cursor: 'pointer' }}></i>

                                            <i className="fa fa-pen text-success" style={{ cursor: 'pointer' }} onClick={() => { navigate(`/updategetletter/${i?.uid}`) }}></i>

                                            <i className="fa fa-trash text-danger" style={{ cursor: 'pointer' }} onClick={() => {
                                                Modal.confirm({
                                                    title: "Are you sure you want to delete?",
                                                    onOk: () => {
                                                        axios.delete(`${urlDaak}/delete/${i?.id}`).then(res => {
                                                            if (res.data.status === "ok") {
                                                                window.location.reload(true)
                                                            }
                                                        })
                                                    }
                                                });
                                            }}></i>
                                        </div>
                                    </div>
                                </>
                            )
                        })}


                    </form>
                </div>

            </div>

        </div>
    )
}

export default DaakSUser
