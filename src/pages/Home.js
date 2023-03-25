import React from 'react'
import DoctorData from '../DoctorData.json'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { countMinushaction, countPlushaction } from '../redux/action/count.action'

const Home = () => {

  const Navigate = useNavigate()
  const dispatch = useDispatch()
  
  const OnClickView = (id) => {
    Navigate(`/UserPrfile/${id}`)
  }

  const newcount = useSelector((data) => data.countreducer.count)

  const increment = () => {
    dispatch(countPlushaction(newcount))
  }
  const dicrement = () => {
    dispatch(countMinushaction(newcount))
  }
  
  return (
    <>
    <section id="testimonials" className="testimonials">
        <div>
          <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay={100}>
            <div className="swiper-wrapper d-flex col-12 flex-wrap">
            {
              DoctorData.map((i) => {
                return (
                  <div className="swiper-slide col-md-6" key={Math.random()}>
                    <div className="testimonial-item d-md-flex">
                      <div className='doctor-profile row'>
                        <img src={i.profileURL} className="testimonial-img" alt="" />
                      </div>
                      <div className='col-md-8'>
                        <h3>{i.firstName} {i.lastName}</h3>
                        <p>
                            {i.profileDesc}
                        </p>
                        <button className='btn btn-primary' onClick={() => OnClickView(i.id)}>Read More</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
      </section>
      <section className='d-flex align-items-center'>
        <button onClick={dicrement} className='btn btn-primary me-2'>-</button>
          <h5>{newcount}</h5>
        <button onClick={increment} className='btn btn-primary ms-2'>+</button>
      </section>
    </>
  )
}

export default Home
