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
      <section className='my-4 p-5 d-flex'>
        <div className='profile-img me-5 col-4'>
          <img src={Profile?.profileURL} width='100%' alt='' />
        </div>
        <div className='col-6'>
          <h2>{Profile?.firstName} {Profile?.lastName}</h2>
          <h6>{Profile?.specialisation}</h6>
          <p className='my-3'>{Profile?.profileDesc}</p>
          <b>Languages : </b>{Profile?.language}
          <div className='d-flex mt-2'>
            <div>
              <b className='me-2'>Experience : </b>
            </div>
            {
              Profile?.experience.map((i) => {
                return (
                  <div className='me-2 user-experience'>
                    <span className='text-info fw-bold d-block'>Company <p className='fw-normal'>: {i.company}</p></span>
                    <span className='text-info fw-bold d-block'>Years <p className='fw-normal'>: {i.years}</p></span>
                    <span className='text-info fw-bold d-block'>desc <p className='fw-normal'>: {i.desc}</p></span>
                    <span className='text-info fw-bold d-block'>awards <p className='fw-normal'>: {i.awards}</p></span>
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
