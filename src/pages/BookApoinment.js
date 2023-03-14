import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookApoinment = () => {

  const navigate = useNavigate()

  const OnPatientAdd = (event) => {
      event.preventDefault()
      const {target} = event
      const patientObj = {
          id : new Date().getTime(),
          name : target.name.value,
          email : target.email.value,
          age : target.age.value,
          phone : target.phone.value,
          dob : target.Dob.value,
          appoinment : target.appoinment.value,
          gender : target.Gender.value,
          dentalsurgery : target.dental.value,
          facesurgery : target.facesurgery.value,
      }
      
      if (localStorage.getItem('BookApoinmentData')) {
          let val = JSON.parse(localStorage.getItem('BookApoinmentData'))
          val.push(patientObj)
          localStorage.setItem('BookApoinmentData',JSON.stringify(val))
      } else {
          localStorage.setItem('BookApoinmentData',JSON.stringify([patientObj]))
      }
      alert('Youre Appoinment is Booked')
      navigate('/')
  }
  
  return (
    <div className='my-5'>
      <form onSubmit={OnPatientAdd}>
        <div className='d-flex justify-content-center'>
            <div className="form-group col-md-6">
                <h2>Book Apoinment</h2>
                <h6>Name</h6>
                <div className='mb-4'>
                    <input type="text" name="name" className={`form-control`} placeholder="Enter Your Name" required />
                </div>
                <h6>Email</h6>
                <div className='mb-4'>
                    <input type="email" name="email" className={`form-control`} placeholder="Enter Your Email" required />
                </div>
                <div className='d-flex mb-4'>
                    <div className='me-2 col-3'>
                        <h6>Age : </h6><input type="number" className={`form-control`} name="age" required />
                    </div>
                    <div className='col-9'>
                        <h6>Phone No. : </h6><input type="number" name="phone" className={`form-control`} placeholder='Enter Your Number' required />
                    </div>
                </div>
                <div className='mb-4'>
                    <h6>Date Of Birth : </h6>
                    <input type="date" name="Dob" className={`form-control`} required />
                </div>
                <div className='mb-4'>
                    <h6>Appoinment Date : </h6>
                    <input type="date" name="appoinment" className={`form-control`} required />
                </div>
                <div className='mb-4'>
                    <h6 className='d-inline'>Gender : </h6>
                    <label className='me-1'>Male</label><input type="radio" className='me-3' value='male' name="Gender" required />
                    <label className='me-1'>Female</label><input type="radio" className='me-3' value='female' name="Gender" required />
                </div>
                <div className='mb-4'>
                    <h6>Do you require dental surgery? : </h6>
                    <label className='me-1'>Yes</label><input type="radio" className='me-3' value='yes' name="dental" required />
                    <label className='me-1'>No</label><input type="radio" className='me-3' value='no' name="dental" required />
                </div>
                <div className='mb-4'>
                    <h6>Do you require face surgery? : </h6>
                    <label className='me-1'>Yes</label><input type="radio" className='me-3' value='yes' name="facesurgery" required />
                    <label className='me-1'>No</label><input type="radio" className='me-3' value='no' name="facesurgery" required />
                </div>
                <div className="text-center"><button type="submit" className='btn btn-primary'>Done</button></div>
            </div>
        </div>
      </form>
    </div>
  )
}

export default BookApoinment
