import React, { useState, useEffect } from "react";
import styles from "./Items.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Quote from '../Home/Quote';

const Items = () => {
  // Get All Details
  const host = "https://donationsystembackendproject.onrender.com"
  const [details, setDetails] = useState([])
  const navigate = useNavigate()
  const getDetails = async () => {
    // TODO : API Call
    const response = await fetch(`${host}/api/details/fetchalldetails`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });

    const json = await response.json()
    console.log(json)
    setDetails(json)
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getDetails();
    }
    else {
      // redirect
      navigate("/login")
    }
  }, [])

  return (
    <>
      <Navbar />
      <Quote />
      <div className="container text-center">
        <div className="mt-2 mb-2 fs-2 fw-bold">Your Items</div>
        <div className="row my-2">
          <div className="col-md-4 p-2">
            <div className="box w-100 btn btn-warning">
              <h3 className="p-1">Footwear</h3>
            </div>
            <div className={`${styles.entries} box w-100 btn btn-danger`}>
              {details.map((item) => {
                {console.log(item,"e;lmcrkfn")}
                return (
                  <>
                    {item.category == "shoes" && (
                      <div className="row mx-1 mt-1 p-1 border border-warning rounded" style={{ backgroundColor: `${item.status}`=="default"?'black':`${item.status}`=="Accepted"?"Green":"Red"}}>
                        <div className="col-12 p-1" style={{ backgroundColor: `${item.status}`=="default"?'black':`${item.status}`=="Accepted"?"Green":"Red" }}>
                          <div className="row">
                            <div className="col-12 d-flex justify-content-around align-items-center"><span style={{color: 'white', fontWeight: 'bold', }}>Title</span>{item.title}</div>
                            <div className="col-12 d-flex justify-content-around align-items-center"><span style={{color: 'white', fontWeight: 'bold'}}>Description</span>{item.description}</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {item.category == "shoes" && item.status == "Accepted" && (
                      <div className="row mx-1 mt-1 p-1 border border-warning rounded" style={{ backgroundColor: 'white' }}>
                        <div className="col-12 p-1" style={{ backgroundColor: 'white' }}>
                          <div className="row">
                            <div className="col-12 text-dark fw-bold">{item.status} &#x1F603;</div>
                            {/* <div className="col-6 d-flex justify-content-center align-items-center">{item.title}</div>
                            <div className="col-3 d-flex align-items-center">{item.description}</div> */}
                          </div>
                        </div>
                      </div>
                    )}
                    {item.category == "shoes" && item.status == "Rejected" && (
                      <div className="row mx-1 mt-1 p-1 border border-warning rounded" style={{ backgroundColor: 'white' }}>
                        <div className="col-12 p-1" style={{ backgroundColor: 'white' }}>
                          <div className="row">
                            <div className="col-12 text-dark fw-bold">{item.status} &#128532;</div>
                            {/* <div className="col-6 d-flex justify-content-center align-items-center">{item.title}</div>
                            <div className="col-3 d-flex align-items-center">{item.description}</div> */}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )
              })}
            </div>
          </div>
          <div className="col-md-4 p-2">
            <div className="box w-100 btn btn-warning">
              <h3 className="p-1">Clothes</h3>
            </div>
            <div className={`${styles.entries} box w-100 btn btn-danger`}>
              {details.map((item) => {
                return (
                  <>
                    {item.category == "clothes" && (
                      <div className="row mx-1 mt-1 p-1 border border-warning rounded" style={{ backgroundColor: `${item.status}`=="default"?'black':`${item.status}`=="Accepted"?"Green":"Red"}}>
                        <div className="col-12 p-1" style={{ backgroundColor: `${item.status}`=="default"?'black':`${item.status}`=="Accepted"?"Green":"Red" }}>
                          <div className="row">
                            <div className="col-12 d-flex justify-content-around align-items-center"><span style={{color: 'white', fontWeight: 'bold'}}>Title</span>{item.title}</div>
                            <div className="col-12 d-flex justify-content-around align-items-center"><span style={{color: 'white', fontWeight: 'bold'}}>Description</span>{item.description}</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {item.category == "clothes" && item.status == "Accepted" && (
                      <div className="row mx-1 mt-1 p-1 border border-warning rounded" style={{ backgroundColor: 'white' }}>
                        <div className="col-12 p-1" style={{ backgroundColor: 'white' }}>
                          <div className="row">
                            <div className="col-12 text-dark fw-bold">{item.status} &#x1F603;</div>
                            {/* <div className="col-6 d-flex justify-content-center align-items-center">{item.title}</div>
                            <div className="col-3 d-flex align-items-center">{item.description}</div> */}
                          </div>
                        </div>
                      </div>
                    )}
                    {item.category == "clothes" && item.status == "Rejected" && (
                      <div className="row mx-1 mt-1 p-1 border border-warning rounded" style={{ backgroundColor: 'white' }}>
                        <div className="col-12 p-1" style={{ backgroundColor: 'white' }}>
                          <div className="row">
                            <div className="col-12 text-dark fw-bold">{item.status} &#128532;</div>
                            {/* <div className="col-6 d-flex justify-content-center align-items-center">{item.title}</div>
                            <div className="col-3 d-flex align-items-center">{item.description}</div> */}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )
              })}
            </div>
          </div>
          <div className="col-md-4 p-2">
            <div className="box w-100 btn btn-warning">
              <h3 className="p-1">Books</h3>
            </div>
            <div className={`${styles.entries} box w-100 btn btn-danger`}>
              {details.map((item) => {
                return (
                  <>
                    {item.category == "books" && (
                      <div className="row mx-1 mt-1 p-1 border border-warning rounded" style={{ backgroundColor: `${item.status}`=="default"?'black':`${item.status}`=="Accepted"?"Green":"Red"}}>
                        <div className="col-12 p-1" style={{ backgroundColor: `${item.status}`=="default"?'black':`${item.status}`=="Accepted"?"Green":"Red" }}>
                          <div className="row">
                            <div className="col-12 d-flex justify-content-around align-items-center"><span style={{color: 'white', fontWeight: 'bold'}}>Title</span>{item.title}</div>
                            <div className="col-12 d-flex justify-content-around align-items-center"><span style={{color: 'white', fontWeight: 'bold'}}>Description</span>{item.description}</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {item.category == "books" && item.status == "Accepted" && (
                      <div className="row mx-1 mt-1 p-1 border border-warning rounded" style={{ backgroundColor: 'white' }}>
                        <div className="col-12 p-1" style={{ backgroundColor: 'white' }}>
                          <div className="row">
                            <div className="col-12 text-dark fw-bold">{item.status} &#x1F603;</div>
                            {/* <div className="col-6 d-flex justify-content-center align-items-center">{item.title}</div>
                            <div className="col-3 d-flex align-items-center">{item.description}</div> */}
                          </div>
                        </div>
                      </div>
                    )}
                    {item.category == "books" && item.status == "Rejected" && (
                      <div className="row mx-1 mt-1 p-1 border border-warning rounded" style={{ backgroundColor: 'white' }}>
                        <div className="col-12 p-1" style={{ backgroundColor: 'white' }}>
                          <div className="row">
                            <div className="col-12 text-dark fw-bold">{item.status} &#128532;</div>
                            {/* <div className="col-6 d-flex justify-content-center align-items-center">{item.title}</div>
                            <div className="col-3 d-flex align-items-center">{item.description}</div> */}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
