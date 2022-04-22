import React from 'react';
import panda from '../assets/panda-innocence.png'
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
	box-sizing: border-box;
	border-radius: 12px;
`

export default function Photo() {
  return <Img src={panda} alt="my selfie" />
}
