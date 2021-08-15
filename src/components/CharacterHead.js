import waldo from '../assets/waldo.jpg';
import wenda from '../assets/wenda.jpg';
import odlaw from '../assets/odlaw.jpg';
import wizard from '../assets/wizard.jpg';
import woof from '../assets/woof.png';

const CharacterHead = ({ char, found }) => {
  // console.log(found);
  switch (char) {
    case 'waldo':
      return (
        <img style={found ? { opacity: '0.2' } : null} src={waldo} alt={char} />
      );
    case 'wenda':
      return (
        <img style={found ? { opacity: '0.2' } : null} src={wenda} alt={char} />
      );
    case 'odlaw':
      return (
        <img style={found ? { opacity: '0.2' } : null} src={odlaw} alt={char} />
      );
    case 'wizard':
      return (
        <img
          style={found ? { opacity: '0.2' } : null}
          src={wizard}
          alt={char}
        />
      );
    default:
      return null;
  }
};
export default CharacterHead;
