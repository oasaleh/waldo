import waldo from '../assets/waldo.jpg';
import wenda from '../assets/wenda.jpg';
import odlaw from '../assets/odlaw.jpg';
import wizard from '../assets/wizard.jpg';
import woof from '../assets/woof.png';

const CharacterHead = ({ char }) => {
  switch (char) {
    case 'waldo':
      return <img src={waldo} alt={char} />;
    case 'wenda':
      return <img src={wenda} alt={char} />;
    case 'odlaw':
      return <img src={odlaw} alt={char} />;
    case 'wizard':
      return <img src={wizard} alt={char} />;
    default:
      return null;
  }
};
export default CharacterHead;
