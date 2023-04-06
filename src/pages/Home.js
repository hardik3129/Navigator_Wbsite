import React, { useEffect, useState } from 'react'
import DoctorData from '../DoctorData.json'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { countMinushaction, countPlushaction } from '../redux/action/count.action'
import axios from 'axios'
import { apigetaction } from '../redux/action/apiget.action'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { auth, db } from '../firebase'

const Home = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [Product, setProduct] = useState([])

  // =========================== VIEW-PROFILE ==========================
  const OnClickView = (id) => {
    navigate(`/UserPrfile/${id}`)
  }

  // ============================== COUNTER ============================
  const newcount = useSelector((data) => data.countreducer.count)

  const increment = () => {
    dispatch(countPlushaction(newcount))
  }
  const dicrement = () => {
    dispatch(countMinushaction(newcount))
  }

  // ========================= GETDATA TO API ========================
  useEffect(() => {
    // getdata()8
    getorder()
  },[])

  const getdata = () => {
    dispatch(apigetaction()) 
  }

  // ===================== DELETE =======================
  const OnclickDelete = async (id) => {
    const del =  await deleteDoc(doc(db,'orders',toString(id)))
    console.log(del);
    // ========================== DELETE BY API =========================
    // await axios.delete(`${process.env.REACT_APP_BASE_URL}/items/${id}`)

    getorder()
    console.log(id);
  }

  // ======================== UPDATE ======================
  const OnclickEdit = (id) => {
    navigate(`/additems/${id}`)
  }

  // ============================= GETDTA FROM FIRESTORE ===============================
  const getorder = async () => {
    const getod = await getDocs(collection(db,'orders'))
    getod.forEach(doc => {
      console.log(doc.id);
      setProduct([doc.data()])
    })
  }
  console.log(Product);
  // =========================== PETTERN =====================
  // useEffect(() => {
  //   let n = 5;
  //   let string = '';
  //   for(let i = 0; i <= n; i++) {
  //       for (let j = 0; j <= i*n - 1; j++) {
  //           string += ' '
  //       }
  //       for (let k = 1; k <= i * - 1; k++) {
  //         string += '*'
  //       }
  //       string += "\n"
  //   }
  //   console.log(string);
  // },[])
  
  return (
    <>
    {/* ========================= DOCTER-DATA ============================== */}
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

      {/* ========================= COUNTER ============================== */}
      <section className='d-flex align-items-center'>
        <button onClick={dicrement} className='btn btn-primary me-2'>-</button>
          <h5>{newcount}</h5>
        <button onClick={increment} className='btn btn-primary ms-2'>+</button>
      </section>

      {/* ========================= PRODUCT-ITEMS[API] ============================== */}
      <section>
        <h2>Api Product List</h2>
            <table>
              <tbody>
                <tr>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Product Quantity</th>
                  <th className='text-end'>Delete | Edit</th>
                </tr>
                {
                  Product?.map((i) => {
                    return (
                      <tr key={Math.random()}>
                        <td>{i.productName}</td>
                        <td>${i.productPrice}</td>
                        <td>{i.productQauntity}</td>
                        <td className='text-end'>
                          <button onClick={() => OnclickDelete(i.id)} className='btn btn-danger me-2'>Delete</button>
                          <button onClick={() => OnclickEdit(i.id)} className='btn btn-success'>Edit</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
      </section>
    </>
  )
}

export default Home
