import waldo from '../assets/waldo.jpg';
import wenda from '../assets/wenda.jpg';
import odlaw from '../assets/odlaw.jpg';
import wizard from '../assets/wizard.jpg';
import woof from '../assets/woof.png';

const CharHead = ({ char }) => {
  switch (char) {
    case 'waldo':
      return <img style={{ height: '50px' }} src={waldo} alt={char} />;
    case 'wenda':
      return <img style={{ height: '50px' }} src={wenda} alt={char} />;
    case 'odlaw':
      return <img style={{ height: '50px' }} src={odlaw} alt={char} />;
    case 'wizard':
      return <img style={{ height: '50px' }} src={wizard} alt={char} />;
    default:
      return null;
  }
};
export default CharHead;
