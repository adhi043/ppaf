import { message } from 'antd';
import axios from 'axios'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DaakAdmin = () => {

  const navigate=useNavigate()

  const addDaak = (values) => {

    const param=new FormData()
    param.append('file',values.file.files[0])
    param.append('category',values.category.value)
    param.append('outward',values.outward.value)
    param.append('subject',values.subject.value)
    param.append('created',values.created.value)

    axios.post(`https://daak.sargodhacci-org.com/daak/create`, param).then(res => {
      if (res.data?.status === "ok") {
        message.success("Daak Created Successfully")
        navigate('/users')
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
        <form onSubmit={(e) => { e.preventDefault(); addDaak(e.target) }}>
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
            <input type='text' className='form-control border-0 border-bottom border-secondary' name='subject' id='subject' />
          </div>
          <div className='mb-3'>
            <p className=' text-white mb-0' style={{background:'rgb(128,128,128)'}}>
              <i>CATEGORY.</i>
            </p>
            <input type='text' className='form-control border-0 border-bottom border-secondary' name='category' id='category' />
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
            <input type='datetime-local' className='form-control border-0 border-bottom border-secondary' name='created' id='created' />
          </div>
          <div className='mb-3'>
            <p className=' text-white mb-0' style={{background:'rgb(128,128,128)'}}>
              <i>OUTWARD NO.</i>
            </p>
            <input type='text' className='form-control border-0 border-bottom border-secondary' name='outward' id='outward' />
          </div>
          <div>

            <button type='submit' className='btn btn-primary text-white'>
                <i className="bi bi-file-earmark-arrow-down-fill">Save</i>
            </button>



          </div>
        </form>
      </div>

    </div>
      
    </div>
  )
}

export default DaakAdmin
