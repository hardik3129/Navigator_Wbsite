import React from 'react'
import DoctorData from '../DoctorData.json'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const Navigate = useNavigate()
  
  const OnClickView = (id) => {
    Navigate(`/UserPrfile/${id}`)
  }
  
  return (
    <>
    <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay={100}>
            <div className="swiper-wrapper d-flex col-12 flex-wrap">
            {
              DoctorData.map((i) => {
                return (
                  <div className="swiper-slide col-md-6">
                    <div className="testimonial-item d-md-flex">
                      <div className='doctor-profile row'>
                        <img src={i.profileURL} className="testimonial-img" alt />
                      </div>
                      <div className='col-md-8'>
                        <h3>{i.firstName} {i.lastName}</h3>
                        <h4></h4>
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
    </>
  )
}

export default Home
