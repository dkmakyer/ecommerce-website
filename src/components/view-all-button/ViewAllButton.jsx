import React from 'react'
import "./ViewAllButton.css"
import { Link } from 'react-router-dom'

const ViewAllButton = () => {
  return (
    <>
      <Link to="/View-all"><button className="view-all-button">View All Products</button></Link>
    </>
  )
}

export default ViewAllButton
