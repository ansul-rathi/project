import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from './About.css';

const Aboutus = () => {
  return (<>

    <Navbar />
    <h1 style={{ textAlign: "center" }}>About us</h1>
    <div className="container">
      <div className='row contain-1'>
        <div className='col-md-6 p-3 d-flex justify-content-center align-items-center'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facilis illo eum ad sint impedit molestias tenetur, pariatur dicta velit consequuntur aspernatur sit temporibus ullam repellendus tempora quibusdam quisquam doloribus ut totam perferendis magnam rerum! Quaerat id facilis eligendi incidunt provident alias sit, labore laborum deleniti ea, voluptatibus nesciunt neque impedit ipsum nemo est esse. Ab omnis ut, molestias nihil et sit similique voluptates fugit voluptas eius, quis reprehenderit dolor totam laboriosam cupiditate, est iusto vitae itaque! Ratione reiciendis quidem incidunt nulla modi blanditiis ipsa natus accusamus consectetur alias, mollitia ex molestiae asperiores optio explicabo suscipit quos enim nostrum dicta!</p>
        </div>
        <div className='col-md-6'>
          <div className="p-3"><img src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp" className="card-img-top" alt="..." />></div>
        </div>
      </div>
    </div>


    <div className='container'>
      <div className='row contain-1'>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facilis illo eum ad sint impedit molestias tenetur, pariatur dicta velit consequuntur aspernatur sit temporibus ullam repellendus tempora quibusdam quisquam doloribus ut totam perferendis magnam rerum! Quaerat id facilis eligendi incidunt provident alias sit, labore laborum deleniti ea, voluptatibus nesciunt neque impedit ipsum nemo est esse. Ab omnis ut, molestias nihil et sit similique voluptates fugit voluptas eius, quis reprehenderit dolor totam laboriosam cupiditate, est iusto vitae itaque! Ratione reiciendis quidem incidunt nulla modi blanditiis ipsa natus accusamus consectetur alias, mollitia ex molestiae asperiores optio explicabo suscipit quos enim nostrum dicta!</p>
        </div>
        <div className='col-md-6'>
          <label htmlFor="">ngo name</label>
          <br />
          <h1>abc ngo</h1>
          <label htmlFor="">ngo location</label>
          <h1>delhi</h1>
          <label htmlFor="">ngo email </label>
          <h1>amc@gmail.com</h1>
          <label htmlFor="">ngo phone number </label>
          <h1>+91 9898989878</h1>
          <label htmlFor="">ngo registration number</label>
          <h1>3434232345344334</h1>
          <label htmlFor="">ngo social media handles </label>
          <h1>ngohut</h1>
        </div>
      </div>
    </div>
  </>
  )
}

export default Aboutus