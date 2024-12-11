import React from 'react'
import "../styles/Me.css"

export default function Me() {
  return (
    <footer className='me-container'>
      <h3>Valentino Villella</h3>
      <div className='links-container'>
        <a href="https://www.linkedin.com/in/villella30/" target='_blank' rel="noreferrer">
          <h2>Linkedin</h2>
        </a>
        <a href="https://github.com/villella30" target='_blank'  rel="noreferrer">
          <h2>Github</h2>
        </a>
      </div>
      <div className='copy' style={{ textAlign: 'center', marginBottom: 5}}>
      ©2024 Valentino Villella. Todos los derechos reservados.
      </div>
    </footer>
  )
}