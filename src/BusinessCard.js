import Photo from './components/Photo';
import Info from './components/Info';
import Footer from './components/Footer';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
	min-height: 550px;
	background-color: #3a3a3a;
	color: white;
	border-radius: 12px;
	padding: 12px;
`

export default function BusinessCard() {
  return (
    <CardContainer>
      <Photo />
      <Info />
      <Footer />
    </CardContainer>
  );
}
