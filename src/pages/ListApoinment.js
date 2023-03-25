import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const TableList = () => {

  const [AppoinData, setAppoinData] = useState([])

  const obj = {
    dataField : 'FACESURGERY',
    text : 'Facesurgery',
    null_Number : null,
    undefined_Number : undefined
  }

  useEffect(() => {
    setAppoinData(JSON.parse(localStorage.getItem('BookApoinmentData')) || [])
    const newObj = Object.entries(obj).filter(([ key , val]) => val != null)
    console.log(Object.fromEntries(newObj));
  },[])
  
  const columns = [
    {
      dataField : 'id',
      text : 'Id',
    },
    {
      dataField : 'name',
      text : 'Name',
      filter : textFilter()
    },
    {
      dataField : 'dob',
      text : 'DOB'
    },
    {
      dataField : 'appoinment',
      text : 'Appoinment'
    },
    {
      dataField : 'email',
      text : 'Email'
    },
    {
      dataField : 'phone',
      text : 'Phone'
    },
    {
      dataField : 'gender',
      text : 'Gender'
    },
    {
      dataField : 'dentalsurgery',
      text : 'Dentalsurgery'
    },
    {
      dataField : 'facesurgery',
      text : 'Facesurgery'
    }
  ]
  
  return (
    <>
      <h2>Searching TableList</h2>
      <BootstrapTable filter={filterFactory()} keyField='id' data={ AppoinData } columns={ columns } search />
      <h2>Simple TableList</h2>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Appoinment <br /> Date</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Dental <br /> Service</th>
            <th>Facesurgery</th>
          </tr>
          {
            AppoinData?.map((i) => {
              return(
                <tr className='align-middle' key={Math.random()}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.dob}</td>
                  <td>{i.appoinment}</td>
                  <td>{i.email}</td>
                  <td>{i.phone}</td>
                  <td>{i.gender}</td>
                  <td>{i.dentalsurgery}</td>
                  <td>{i.facesurgery}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default TableList
