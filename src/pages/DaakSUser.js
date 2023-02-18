import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import React,{ useEffect, useState } from 'react';

const DaakSUser = () => {

    const navigate=useNavigate()

    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`https://daak.sargodhacci-org.com/daak/get`).then(res => {
            setData(res.data?.data)
        })

    })

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
                                        <div>
                                            <button className='btn btn-primary' onClick={()=>{navigate(`/user/${i?.uid}`)}}>View</button>
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
