import waldo from '../assets/waldo.png';
import wenda from '../assets/wenda.png';
import odlaw from '../assets/odlaw.png';
import wizard from '../assets/wizard.png';
import woof from '../assets/woof.png';

const CharHead = ({ char }) => {
  switch (char) {
    case 'waldo':
      return <img style={{ width: '50px' }} src={waldo} alt={char} />;
    case 'wenda':
      return <img style={{ width: '50px' }} src={wenda} alt={char} />;
    case 'odlaw':
      return <img style={{ width: '50px' }} src={odlaw} alt={char} />;
    case 'wizard':
      return <img style={{ width: '50px' }} src={wizard} alt={char} />;
    default:
      return null;
  }
};
export default CharHead;
