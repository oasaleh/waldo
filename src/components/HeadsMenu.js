/* --------------------------------- imports -------------------------------- */
// react
import { useState } from 'react';
// styled-component
import styled from 'styled-components';
// assets
import waldo from '../assets/waldo.jpg';
import wenda from '../assets/wenda.jpg';
import odlaw from '../assets/odlaw.jpg';
import wizard from '../assets/wizard.jpg';
/* ---------------------------------- style --------------------------------- */
const MenuCard = styled.div`
  width: 110px;
  /* height: 30px; */
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 5px 0px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  align-self: center;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-bottom: solid 0.5px lightgray;
  :last-child {
    border-bottom: solid 0 lightgray;
  }
  :hover {
    font-size: large;
    cursor: pointer;
  }
  & > img {
    width: 30px;
  }
  & > p {
    font-size: 1em;
    text-align: left;
    font-weight: 400;
  }
`;
/* -------------------------------- component ------------------------------- */
const HeadsMenu = ({
  char,
  clickedCoords,
  clickedChar,
  setClickedChar,
  level,
  toggleMenu,
}) => {
  const [heads, setHeads] = useState([]);
  const updatedHeads = [];
  let selectedChars = [];

  function isCorrect(character, selectedCoords) {
    console.log(level[character][0]);
    const range = 90;
    function checkXCoord(xCoord) {
      const upperXLimit = level[character][0] + range;
      const lowerXLimit = level[character][0] - range;
      return xCoord >= lowerXLimit && xCoord <= upperXLimit;
    }
    function checkYCoord(yCoord) {
      const upperYLimit = level[character][1] + range;
      const lowerYLimit = level[character][1] - range;
      return yCoord >= lowerYLimit && yCoord <= upperYLimit;
    }
    console.log(
      checkXCoord(selectedCoords[0]) && checkYCoord(selectedCoords[1]),
    );
    return checkXCoord(selectedCoords[0]) && checkYCoord(selectedCoords[1]);
  }

  function handleClick(character) {
    toggleMenu(false);
    // selectedChars = [...selectedChars, event.target.textContent];
    // setClickedChar(selectedChars);
    // console.log(character);
    isCorrect(character, clickedCoords);
  }

  let charImg = '';
  switch (char) {
    case 'waldo':
      charImg = waldo;
      break;
    case 'wenda':
      charImg = wenda;
      break;
    case 'odlaw':
      charImg = odlaw;
      break;
    case 'wizard':
      charImg = wizard;
      break;
    default:
      return null;
  }
  return (
    <MenuCard
      key={char}
      // style={{ left: selectedCoords[0] + 'px', top: selectedCoords[1] + 'px' }}
      onClick={() => handleClick(char)}
    >
      {charImg.length > 0 ? <img src={charImg} alt={charImg} /> : null}
      <p>{char}</p>
    </MenuCard>
  );
};

export default HeadsMenu;
