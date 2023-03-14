import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Data from '../DoctorData.json'

const UserProfile = () => {

  const {id} = useParams()
  const [Profile, setProfile] = useState()

  useEffect(() => {
    setProfile(Data.find((i) => i.id === id))
  },[])
  
  return (
    <>
      <section className='my-4 p-5 d-flex align-items-center'>
        <div className='profile-img me-5 col-4'>
          <img src={Profile?.profileURL} width='100%' alt='' />
        </div>
        <div className='col-6'>
          <h2>{Profile?.firstName} {Profile?.lastName}</h2>
          <h6>{Profile?.specialisation}</h6>
          <p className='my-3'>"Dr Mahesh Deshay belives that once you start being more aware of your thoughts and actions, you will start appreciating life in a new way. This is why he specializes in depression, mood disorders, but aimed at direct interaction to help the patient bring about a visible change in himself or herself."</p>
          <b>Languages : </b>{Profile?.language}
          <div className='d-flex mt-2'>
            <div>
              <b className='me-2'>Experience : </b>
            </div>
            {
              Profile?.experience.map((i) => {
                return (
                  <div className='me-2'>
                    <span className='text-info fw-bold d-block'>Company <span className='text-black fw-normal'>: {i.company}</span></span>
                    <span className='text-info fw-bold d-block'>Years <span className='text-black fw-normal'>: {i.years}</span></span>
                    <span className='text-info fw-bold d-block'>desc <span className='text-black fw-normal'>: {i.desc}</span></span>
                    <span className='text-info fw-bold d-block'>awards <span className='text-black fw-normal'>: {i.awards}</span></span>
                  </div>
                )
              })
            }
          </div>
          <div className='d-flex mt-2'>
            <b className='me-1'>Conversations : </b> {Profile?.conversations}
            <b className='ms-3 me-1'>Rating : </b>{Profile?.rating}
          </div>
          <h3 className='mt-3'>Contact Me : </h3>
          <b className='me-1'>Mobile No. : </b> <a href={`tel:${Profile?.mobile}`}>{Profile?.mobile}</a> <br />
          <b className='me-1'>Email : </b> {Profile?.email}
          <div className='mt-3'>
            <b>License : </b>
            <h6>{Profile?.license}</h6>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserProfile
