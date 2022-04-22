import React from 'react';
import styled from 'styled-components';
import fb from '../assets/icons8-facebook.svg';
import ig from '../assets/icons8-instagram.svg';
import github from '../assets/icons8-github.svg';

const FooterContainer = styled.div`
  display: flex;
	justify-content: center;
`

const SocialMediaIcon = styled.div`
  background-repeat: no-repeat;
	background-position: center;
	width: 40px;
	height: 40px;
	margin: 8px 12px;
	cursor: pointer;
  background-image: url(${props => props.source});;
`

export default function Footer() {
  return (
    <FooterContainer>
      <SocialMediaIcon source={fb} />
      <SocialMediaIcon source={ig} />
      <SocialMediaIcon source={github} />
    </FooterContainer>
  )
}
