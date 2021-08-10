import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import cursor from '../assets/cursor.svg';
import waldo from '../assets/waldo.png';
import CharHead from '../components/CharHead';

const LevelImg = styled.img`
  cursor: url(${cursor}) 25 25, pointer;
  width: 100vw;
`;
const GameInformationTab = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`;
const Timer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: purple;
  padding: 10px 10px;
  width: 60px;
  margin: auto 20px;

  text-align: center;
  background-color: yellow;
  border-radius: 8px;
`;
const Chars = styled.div`
  text-align: center;
  margin: auto 20px;
`;
function Level() {
  const location = useLocation();
  const { level } = location.state;
  const [characters, setCharachters] = useState([]);
  const [coords, setCoords] = useState([]);
  const [timer, setTimer] = useState(0);
  const increment = useRef(null);

  function isCorrect(character, selectedCoords) {
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
    //3504, 1916
    console.log(
      checkXCoord(selectedCoords[0]) && checkYCoord(selectedCoords[1]),
    );
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
    console.log(selectedCoords);
    console.log(timer);
    isCorrect('wenda', selectedCoords);
  }
  useEffect(() => {
    const allowedChars = ['waldo', 'odlaw', 'wenda', 'wizard', 'woof'];
    const charsObj = Object.fromEntries(
      Object.entries(level).filter(([key, val]) => allowedChars.includes(key)),
    );
    const chars = Object.keys(charsObj).map((key) => key);
    setCharachters(chars);
    console.log(chars);
    // return () => {
    //   cleanup
    // }
  }, []);
  useEffect(() => {
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }, []);
  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  const charsHeads = characters.map((char) => (
    <CharHead char={char} key={char} />
  ));
  return (
    <>
      <GameInformationTab>
        <Chars>{charsHeads}</Chars>
        <Timer>{timer}</Timer>
      </GameInformationTab>
      <LevelImg src={level.imgUrl} alt={level.id} onClick={handleClick} />
    </>
  );
}

export default Level;
