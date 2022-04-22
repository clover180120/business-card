import React from 'react';
import styled from 'styled-components';

const CenterDiv = styled.div`
  text-align: center;
	padding: 0 16px;
`

const InfoName = styled.div`
  margin-bottom: 20px;
`

const InfoContact = styled.div`
  display: flex;
	justify-content: space-around;
`

const InfoButton = styled.button`
  position: relative;
  width: 100%;
  height: 46px;
  box-sizing: border-box;
  padding: 10px 15px;
	margin: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.47;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
	background-color: #355894;
`

const InfoBio = styled.div`
  text-align: left;
	margin: 28px 0;
`


function Name() {
  return (
    <InfoName>
      <h1>Claire Lin</h1>
      <span>Frontend Developer at KKLAB.</span>
    </InfoName>
  )
}

function Contact() {
  return (
    <InfoContact>
      <InfoButton>Email</InfoButton>
      <InfoButton>LinkedIn</InfoButton>
    </InfoContact>
  )
}

function Bio() {
  return (
    <InfoBio>
      <div>
        <h2>About</h2>
        <span>Hi I am Claire. I am a frontend developer and I am learning React.</span>
      </div>
      <div>
        <h2>Interests</h2>
        <span>I enjoy playing drums and watching movies.</span>
      </div>
    </InfoBio>
  )
}

export default function Info() {
  return (
    <CenterDiv>
      <Name />
      <Contact />
      <Bio />
    </CenterDiv>
  )
}
