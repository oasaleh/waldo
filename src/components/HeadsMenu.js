import styled from 'styled-components';
import waldo from '../assets/waldo.jpg';
import wenda from '../assets/wenda.jpg';
import odlaw from '../assets/odlaw.jpg';
import wizard from '../assets/wizard.jpg';
import { useState } from 'react';

const MenuCard = styled.div`
  width: 110px;
  /* height: 30px; */
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 5px 30px;
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
    padding-right: 15px;
    margin-right: 15px;
  }
  & > p {
    font-size: 1em;
    text-align: left;
    font-weight: 400;
    padding: 5px;
  }
`;
const HeadsMenu = ({ char, selectedCoords, clickedChar, setClickedChar }) => {
  const [heads, setHeads] = useState([]);
  const [MenuPosition, setMenuPosition] = useState({});
  const updatedHeads = [];
  console.log(char);
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
      style={{ left: selectedCoords[0] + 'px', top: selectedCoords[1] + 'px' }}
    >
      {charImg.length > 0 ? <img src={charImg} alt={charImg} /> : null}
      {/* <div>{charImg}</div> */}
      <p>{char}</p>
    </MenuCard>
  );
};

export default HeadsMenu;
