import React from 'react'
import "./Card.css"

const Card = ({ url, title, description }) => {
  return (
    <div className="container">
        <div>
            <img className="img" src={url} alt="" />
        </div>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card