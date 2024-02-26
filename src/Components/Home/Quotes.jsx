import React from 'react'
import styles from './Quotes.module.css'

const Quotes = () => {
 
  return (
    <>
        <div className={`${styles.containerFluid} container-fluid p-3`}>
            <div className={styles.box}>
              <span className={styles.span}></span>
              <p className={`${styles.text} fs-4 fw-bold text-center`}>Life gives you 100 reasons to smile. Be a reason for someone</p>
            </div>
        </div>
    </>
  )
}

export default Quotes
