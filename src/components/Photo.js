import React from 'react';
import panda from '../assets/panda-innocence.png'
import './index.css';

export default function Photo() {
  return <img className='selfie' src={panda} alt="my selfie" />
}
