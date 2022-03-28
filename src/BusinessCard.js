import './BusinessCard.css';
import Photo from './components/Photo';
import Info from './components/Info';
import Footer from './components/Footer';

export default function BusinessCard() {
  return (
    <div className="Card">
      <Photo />
      <Info />
      <Footer />
    </div>
  );
}
