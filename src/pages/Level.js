import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import cursor from '../assets/cursor.svg';

const LevelImg = styled.img`
  cursor: url(${cursor}) 25 25, pointer;
  width: 100vw;
`;
function Level() {
  const location = useLocation();
  const { level } = location.state;
  const [coords, setCoords] = useState([]);

  function isCorrect(character, selectedCoords) {
    // check if x and y is within a certain distance from the correct coords
    function checkXCoord(xCoord) {
      const upperXLimit = level[character][0] + 90;
      const lowerXLimit = level[character][0] - 90;
      return xCoord >= lowerXLimit && xCoord <= upperXLimit;
    }
    function checkYCoord(yCoord) {
      const upperYLimit = level[character][1] + 90;
      const lowerYLimit = level[character][1] - 90;
      return yCoord >= lowerYLimit && yCoord <= upperYLimit;
    }
    //3504, 1916
    return checkXCoord(selectedCoords[0]) && checkYCoord(selectedCoords[1]);
  }
  function handleClick(event) {
    const bounds = event.target.getBoundingClientRect();
    const { left, top } = bounds;
    const x = event.pageX - left - window.pageXOffset;
    const y = event.pageY - top - window.pageYOffset;
    const cw = event.target.clientWidth;
    const ch = event.target.clientHeight;
    const iw = event.target.naturalWidth;
    const ih = event.target.naturalHeight;
    const px = (x / cw) * iw;
    const py = (y / ch) * ih;
    const selectedCoords = [px, py];
    setCoords(selectedCoords);
    isCorrect('waldo', selectedCoords);
    // call the menu to select chars return it to const

    // call the isCorrect function with x,y array and return of char func
  }

  return <LevelImg src={level.imgUrl} alt={level.id} onClick={handleClick} />;
}

export default Level;
