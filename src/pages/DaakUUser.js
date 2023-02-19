import { message } from 'antd';
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom';
import urlDaak from './dbConfig';
import React, { useEffect, useState } from 'react';

const DaakUUser = () => {

  const navigate=useNavigate()


  const {id}=useParams()
  const [data,setData]=useState()

  useEffect(()=>{
      axios.get(`${urlDaak}/get/${id}`).then(res=>{
          setData(res.data?.data)
      })

  },[])



  const updateDaak = (values) => {

    const param=new FormData()
    param.append('file',values.file.files[0])
    param.append('category',document.getElementById('category').value)
    param.append('outward',document.getElementById('outward').value)
    param.append('subject',document.getElementById('subject').value)
    param.append('created',document.getElementById('created').value)

    axios.put(`${urlDaak}/update/${id}`, param).then(res => {
      if (res.data?.status === "ok") {
        message.success("Daak Updated Successfully")
        navigate('/getletters')
      } else {
        message.error(res.data.status)
      }
    })
      .catch(err => message.error('Something went wrong'))

  }


  return (
    <div>
        <div className="container my-5">
      <div className='card cardvv rounded p-4 bg-white'>
        <form onSubmit={(e) => { e.preventDefault(); updateDaak(e.target) }}>
          <div className=''>
            <img src={require('../lo.jpg')} alt='logo' width='140px' />
          </div>
          <div className='mb-4'>
            <h5>FINANCE DEPARTMENT</h5>
          </div>
          <div className='mb-3'>
            <p className=' text-white mb-0' style={{background:'rgb(128,128,128)'}}>
              <i>SUBJECT.</i>
            </p>
            <input type='text' className='form-control border-0 border-bottom border-secondary' name='subject' id='subject' defaultValue={data?.subject} />
          </div>
          <div className='mb-3'>
            <p className=' text-white mb-0' style={{background:'rgb(128,128,128)'}}>
              <i>CATEGORY.</i>
            </p>
            <input type='text' className='form-control border-0 border-bottom border-secondary' name='category' id='category' defaultValue={data?.category} />
          </div>
          <div className='mb-3'>
            <p className=' text-white mb-0' style={{background:'rgb(128,128,128)'}}>
              <i>UPLOAD FILE</i>
            </p>
            <input type='file' className='form-control border-0 border-bottom border-secondary' name='file' id='file' />
          </div>
          <div className='mb-3'>
            <p className=' text-white mb-0' style={{background:'rgb(128,128,128)'}}>
              <i>CREATED AT</i>
            </p>
            <input type='datetime-local' step='1' className='form-control border-0 border-bottom border-secondary' name='created' id='created' defaultValue={data?.created} />
          </div>
          <div className='mb-3'>
            <p className=' text-white mb-0' style={{background:'rgb(128,128,128)'}}>
              <i>OUTWARD NO.</i>
            </p>
            <input type='text' className='form-control border-0 border-bottom border-secondary' name='outward' id='outward' defaultValue={data?.outward} />
          </div>
          <div>

            <button type='submit' className='btn btn-primary text-white'>
                <i className="bi bi-file-earmark-arrow-down-fill">Update</i>
            </button>



          </div>
        </form>
      </div>

    </div>
      
    </div>
  )
}

export default DaakUUser
