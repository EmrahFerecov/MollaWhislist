import React, { useEffect, useState } from 'react'
import './details.css'
import axios from 'axios'
import { useParams } from 'react-router'


function Details() {
    const {id}=useParams()
    const [details, setDetails] = useState([])

    const baseUrl = `http://localhost:5000/clothes/${id}`
    const datas = async () => {
      const response = await axios.get(`${baseUrl}`)
      setDetails(response.data)
    }
    useEffect(() => {
      datas()
    }, [id])

  return (
    <div className='details'>
        <div className='detailsImage'>
        <img src={details.image} alt="" />
        </div>
        <div className='detailscom'>
        <p>Type: {details.product}</p>
        <p>Color: {details.color}</p>
        <p>Price: {details.price}</p>
        <p>Rating: {details.rating}</p>
        <p>Size: {details.size}</p>
        <p>Weight: {details.weight}</p>
        <p>Status: {details.status}</p>
        <p>Sell: {details.sell}</p>
        </div>
    </div>
  )
}

export default Details