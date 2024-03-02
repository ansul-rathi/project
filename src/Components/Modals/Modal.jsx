import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate()
  const [ name, setname] = useState('');
  const email = localStorage.getItem('email');
  const DonationHistory = () => {
    navigate('/itemsbox')
  }

  const getDetails = async () => {
    // TODO : API Call
    const response = await fetch(`https://donationsystembackendproject.onrender.com/api/ngo/getngo`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });

    const json = await response.json()
    console.log(json)
    setname(json.name);
    // localStorage.setItem('name', json.name)
  }

  useEffect(() => {
      getDetails();
  }, [])

  return (
    <>
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className={`${styles.modal} modal-content text-white`}>
              <div className={`${styles.modalHeader} modal-header`}>
                <div className="d-flex flex-column">
                  {/* <img className={styles.img} src="./images/Logo.png" alt="" /> */}
                  <div className={`${styles.desc} d-flex flex-column justify-content-center`}>
                    <h5 className={`${styles.name} d-flex align-items-center `}>{name}</h5>
                    <p>{email}</p>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <div className={`${styles.container} container`}>
                  <div className={`${styles.row} row`}>
                    <div className="col-12">
                      <div className="row d-flex align-items-center">
                        <div className={`${styles.col} col-2`}><i className="fa-solid fa-gift"></i></div>
                        <div className={`${styles.col1} col-10 text-white`} onClick={() => { navigate('/Ngo') }}>Home</div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.row} row`}>
                    <div className="col-12">
                      <div className="row d-flex align-items-center">
                        <div className={`${styles.col} col-2`}><i class="fa-solid fa-heart"></i></div>
                        <div className={`${styles.col1} col-10 text-white`} onClick={() => navigate('/Aboutus')}>About Us</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;