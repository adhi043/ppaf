import axios from 'axios'
import React,{ useEffect, useState } from 'react';
import { saveAs } from 'file-saver'
import { useParams } from 'react-router-dom';

const DaakUser = () => {


    const {id}=useParams()
    const [data,setData]=useState()

    useEffect(()=>{
        axios.get(`https://daak.sargodhacci-org.com/daak/get/${id}`).then(res=>{
            setData(res.data?.data)
        })

    })


    const ext=data?.file.split(".")

    console.log(ext)




  return (
    <div>
        <div className="container my-5">
      <div className='card cardvv rounded p-4 bg-white'>
        <form>
          <div className=''>
            <img src={require('../lo.jpg')} className='img-fluid' alt='logo' width='140px' />
          </div>
          <div className='mb-4'>
            <h5 className='text-bold' style={{fontWeight:'bold'}}>FINANCE DEPARTMENT</h5>
          </div>
          <div className='m-0'>
            <p className=' text-white m-0' style={{background:'rgb(128,128,128)',fontSize:'15px'}}>
              <i>DAAK ID #.</i>
            </p>
            <p className='pt-2' style={{fontSize:'15px'}}>
            {data?.uid}
            </p>
          </div>
          <div className='m-0'>
            <p className=' text-white m-0' style={{background:'rgb(128,128,128)',fontSize:'15px'}}>
              <i>SUBJECT.</i>
            </p>
            <p className='pt-2' style={{fontSize:'15px'}}>
            {data?.subject}
            </p>
          </div>
          <div className='m-0'>
            <p className=' text-white m-0' style={{background:'rgb(128,128,128)',fontSize:'15px'}}>
              <i>CATEGORY.</i>
            </p>
            <p className='pt-2' style={{fontSize:'15px'}}>
            {data?.category}
            </p>
            
          </div>
          <div className='m-0'>
            <p className=' text-white m-0' style={{background:'rgb(128,128,128)',fontSize:'15px'}}>
              <i>CREATED ON.</i>
            </p>
            <p className='pt-2' style={{fontSize:'15px'}}>
            {data?.created}
            </p>
          </div>
          <div className='m-0'>
            <p className=' text-white m-0' style={{background:'rgb(128,128,128)',fontSize:'15px'}}>
              <i>OUTWARD NO.</i>
            </p>
            <p className='pt-2' style={{fontSize:'15px'}}>
            {data?.outward}
            </p>
          </div>
          <div>

            <button type='button' className='btn btn-primary m-0 p-0'>
              <a className='btn btn-primary text-dark'
                href={data?.file}
                onClick={() => saveAs(data?.file, `${data?.subject}.${ext[1]}`)}
              >
                <i className="fa fa-download">  DOWNLOAD</i>
              </a>
            </button>



          </div>
        </form>
      </div>

    </div>
      
    </div>
  )
}

export default DaakUser
