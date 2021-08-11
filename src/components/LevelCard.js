import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import CharacterHead from './CharacterHead';
/* ---------------------------------- style --------------------------------- */
const LevelCardBox = styled.div`
  margin: 15px 15px;
  /* height: 100px; */
  padding: 2px 2px 2px 2px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 6px;
  padding: 10px;
`;
const LevelImageBox = styled.div`
  border: 0.5px solid lightgray;
  display: block;
  font-size: 0;
  border-radius: 5px;
`;
const LevelImage = styled.img`
  height: 200px;
  width: 300px;
  border-radius: 5px;
`;
const LevelInformationBox = styled.div`
  padding: 15px 5px 2px 5px;
  height: 47px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;
const Difficulty = styled.p`
  padding: 8px;
  border-radius: 6px;
  color: #4e81ee;
  background-color: aliceblue;
`;
const Chars = styled.div`
  & > img {
    height: 28px;
    padding: 0 2px;
  }
`;
/* -------------------------------- component ------------------------------- */
function LevelCard({ levelData }) {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const allowedChars = ['waldo', 'odlaw', 'wenda', 'wizard', 'woof'];
    const charsObj = Object.fromEntries(
      Object.entries(levelData).filter(([key, val]) =>
        allowedChars.includes(key),
      ),
    );
    const chars = Object.keys(charsObj).map((key) => key);
    setCharacters(chars);
    console.log(chars);
    // return () => {
    //   cleanup
    // }
  }, []);
  const charsHeads = characters.map((char) => (
    <CharacterHead char={char} key={char} />
  ));
  return (
    <LevelCardBox>
      <LevelImageBox>
        <Link
          to={{
            pathname: '/level',
            state: {
              level: levelData,
            },
          }}
        >
          <LevelImage src={levelData.imgUrl} alt={levelData.difficulty} />
        </Link>
      </LevelImageBox>
      <LevelInformationBox>
        <Difficulty>{levelData.difficulty}</Difficulty>
        <Chars>{charsHeads}</Chars>
      </LevelInformationBox>
    </LevelCardBox>
  );
}

export default LevelCard;
