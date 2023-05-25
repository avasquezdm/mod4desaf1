import React from 'react'
import Button from "react-bootstrap/Button"
import './Footer.css'

const Footer = ({FooterText}) => {
  return (
    <div className="footer">
        <div>
          {FooterText}
        </div>
        <div className="button">
          <Button variant="dark">Contáctanos!</Button>
        </div>
    </div>
  )
}

export default Footer