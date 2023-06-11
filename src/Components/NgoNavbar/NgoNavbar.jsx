import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NgoNavbar.module.css'
import Modal from '../Modal/Modal'

const NgoNavbar = () => {
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('token')
    navigate('/');
  }

  return (
    <>
      <div className={`${styles.nav} d-flex align-items-center justify-content-between`}>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div className={styles.logo} onClick={() => { navigate('/Ngo') }}>donate</div>
        {/* <div className={styles.logo} onClick={()=>{navigate('/cate')}}>cate</div> */}
        <div>
          {/* <button type="button" className="btn btn-danger mx-2" onClick={() => navigate('/')}>
            Login
          </button> */}
          <button type="button" className="btn btn-danger mx-2" onClick={() => navigate('/Aboutus')}>
            AboutUs
          </button>
          <button type="button" className="btn btn-warning mx-2" onClick={handleLogOut}>
            LogOut
          </button>
          {/* <button type='button' className='btn btn-warning ' onClick={()=>navigate('/')}> HOME</button> */}
        </div>
      </div>
      <Modal />
    </>
  )
}

export default NgoNavbar
