import React from 'react'
import './styles/footer.css'

const Footer = () => {
    let time = new Date();
  return (
    <footer>
      <p>copyright @{time.getFullYear()}</p>
    </footer>
  )
}

export default Footer
