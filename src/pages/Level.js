/* --------------------------------- imports -------------------------------- */
// react
import { useEffect, useState, useRef } from 'react';
// react-router
import { useLocation } from 'react-router-dom';
// styled-component
import styled from 'styled-components';
// components
import CharacterHead from '../components/CharacterHead';
import HeadsMenu from '../components/HeadsMenu';
import SubmitScore from '../components/SubmitScore';
// assets
import cursor from '../assets/cursor.svg';
/* ---------------------------------- style --------------------------------- */
const MainView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
const LevelImg = styled.img`
  cursor: url(${cursor}) 25 25, pointer;
  width: 95vw;
  text-align: center;
  margin: auto;
  border: 1px solid gray;
  border-radius: 8px;
  /* position: relative; */
`;
const GameInformationTab = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 0px auto 5px auto;
  padding: 15px;
  background-color: white;
  width: fit-content;
  border-radius: 6px;
`;
const Timer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: white;
  padding: 10px 10px;
  width: 60px;
  margin: auto 20px;
  text-align: center;
  background-color: #4e81ee;
  border-radius: 8px;
  :hover {
    background-color: rgba(239, 68, 68);
  }
`;
const Chars = styled.div`
  text-align: center;
  margin: auto 20px;
  & > img {
    height: 45px;
  }
`;
const CharactersMenu = styled.menu`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid lightgray;
  overflow: auto;
  border-radius: 8px;
  padding: 8px 15px;
  z-index: 1;
  text-align: center;
  position: absolute;
  /* display: block;
  visibility: visible; */
`;
/* -------------------------------- component ------------------------------- */
function Level() {
  const location = useLocation();
  const { level } = location.state;
  const [characters, setCharacters] = useState([]);
  const [coords, setCoords] = useState([]);
  const [timer, setTimer] = useState(0);
  const increment = useRef(null);
  const [headsMenu, setHeadsMenu] = useState(false);
  const [mouseCoord, setMouseCoord] = useState([]);
  const [clickedChar, setClickedChar] = useState('');
  const [selectedChars, setSelectedChars] = useState([]);
  const [won, setWon] = useState(false);
  useEffect(() => {
    const allowedChars = ['waldo', 'odlaw', 'wenda', 'wizard', 'woof'];
    const charsObj = Object.fromEntries(
      Object.entries(level).filter(([key, val]) => allowedChars.includes(key)),
    );
    const chars = Object.keys(charsObj).map((key) => key);
    setCharacters(chars);
  }, []);
  useEffect(() => {
    function isWon(arr, target) {
      return (
        arr.length !== 0 &&
        target.length !== 0 &&
        target.every((v) => arr.includes(v))
      );
    }
    // let gameWon = (arr, target) => target.every((v) => arr.includes(v));
    setWon(isWon(selectedChars, characters));
    // setWon(true);
    console.log(isWon(selectedChars, characters), characters, selectedChars);
  }, [selectedChars]);
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
    setHeadsMenu(true);
    setCoords(selectedCoords);
    setMouseCoord([x, y]);
    // isCorrect('waldo', selectedCoords);
  }

  // useEffect(() => {
  //   increment.current = setInterval(() => {
  //     setTimer((timer) => timer + 1);
  //   }, 1000);
  // }, []);
  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  const charsHeads = characters.map((char) => (
    <CharacterHead char={char} key={char} />
  ));
  const menuItems = characters.map((char) => (
    <HeadsMenu
      char={char}
      selectedChars={selectedChars}
      setSelectedChars={setSelectedChars}
      characters={characters}
      // gameWon={gameWon}
      clickedCoords={coords}
      level={level}
      toggleMenu={setHeadsMenu}
      key={char}
    />
  ));
  return (
    <>
      <MainView>
        <GameInformationTab>
          <Chars>{charsHeads}</Chars>
          <Timer>{timer}</Timer>
        </GameInformationTab>
        <LevelImg src={level.imgUrl} alt={level.id} onClick={handleClick} />

        {headsMenu ? (
          <CharactersMenu
            style={{
              top: mouseCoord[1],
              left: mouseCoord[0] + 50,
              display: 'block',
              visibility: 'visible',
              backgroundColor: '#fefefe',
            }}
          >
            {menuItems}{' '}
          </CharactersMenu>
        ) : null}

        {won ? <SubmitScore setWon={setWon} time={timer} /> : null}
      </MainView>
    </>
  );
}

export default Level;
