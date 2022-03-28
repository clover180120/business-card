import React from 'react';
import './index.css'

function Name() {
  return (
    <div className='info--name'>
      <h1>Claire Lin</h1>
      <span>Frontend Developer at KKLAB.</span>
    </div>
  )
}

function Contact() {
  return (
    <div className='info--contact'>
      <button>Email</button>
      <button>LinkedIn</button>
    </div>
  )
}

function Bio() {
  return (
    <div className='info--bio'>
      <div>
        <h2>About</h2>
        <span>Hi I am Claire. I am a frontend developer and I am learning React.</span>
      </div>
      <div>
        <h2>Interests</h2>
        <span>I enjoy playing drums and watching movies.</span>
      </div>
    </div>
  )
}

export default function Info() {
  return (
    <div className='info'>
      <Name />
      <Contact />
      <Bio />
    </div>
  )
}
