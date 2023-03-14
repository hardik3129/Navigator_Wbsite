import React, { useEffect, useState } from "react";
import { FaBars, FaTable } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiFillAudio, AiOutlineForm } from "react-icons/ai";

const ToggleSidebar = (props) => {
    const Location = useLocation
    const [isOpen, setIsopen] = useState(false);
    const [user, setuser] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('userLogin')) {
            setuser(true)
        } else {
            setuser(false)
        }   
    },[Location])

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    const OnClickLogout = () => {
        localStorage.removeItem('userLogin')
    }

    return (
        <>
            <div className="container-fluid mt-3">
                    <nav className="navbar navbar-light bg-white shadow-md">
                        <div className="container-fluid p-2">
                            <div className="form-inline">
                                <div className="btn btn-primary d-flex" onClick={ToggleSidebar} >
                                <FaBars fontSize='20px' />
                                </div>
                                <div>
                                    <input className="search" type='search' placeholder="Search" />
                                </div>
                            </div>
                            {
                                user === true ? <Link to='/login' className="navbar-brand text-primary" onClick={OnClickLogout}>Logout</Link> : 
                                <Link to='/login' className="navbar-brand text-primary">Login</Link>
                            }
                        </div>
                    </nav>
                    <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0">City Hospital</h4>
                            <div className="btn"onClick={ToggleSidebar}><GrFormClose fontSize='30px'/></div>
                        </div>
                        <div className="sd-body">
                            <ul>
                                <li><Link onClick={ToggleSidebar} to='/' className="sd-link"><MdDashboard className="me-2 fs-5" />Home</Link></li>
                                {
                                    JSON.parse(localStorage.getItem('userLogin'))?.role === 'admin' ?
                                    <li><Link onClick={ToggleSidebar} to='/tablelist' className="sd-link"><FaTable className="me-2 fs-5" />List Apoinment</Link></li> :
                                    <li><Link onClick={ToggleSidebar} to='/bookapoinment' className="sd-link"><AiOutlineForm className="me-2 fs-5" />Book Apoinment</Link></li>
                                }
                                <li><Link onClick={ToggleSidebar} to='/audio' className="sd-link"><AiFillAudio className="me-2 fs-5" />Audio Recorder</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
           {props.children}
           </div>
        </>
    )
}


export default ToggleSidebar;