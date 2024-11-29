import React from 'react'
import "./BackButton.css"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const BackButton = () => {
    const navigate = useNavigate();//create an instance of the useNavigate hook so that you can use the methods in it
  return (
      <button onClick={() => navigate(-1)} className='back-button'><FontAwesomeIcon icon={faArrowLeft}/></button>//instead of using link and useNavigate, use the onclick since use navigate is not compatible with Link
  )
}

export default BackButton
