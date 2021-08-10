/* --------------------------------- imports -------------------------------- */
import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import LevelCard from '../components/LevelCard';
import { db, storage } from '../firebase/config';
/* ---------------------------------- style --------------------------------- */
const GameView = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 4rem auto 4rem auto;
  padding: 2rem;
  justify-content: center;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
/* -------------------------------- component ------------------------------- */
function Levels() {
  const [loading, setLoading] = useState(true);
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    if (levels.length === 0) {
      const updatedLevels = [];
      db.collection('levels')
        .get()
        .then((levelsData) => {
          levelsData.forEach((levelData) => {
            updatedLevels.push(levelData.data());
          });
          setLevels(updatedLevels);
          setLoading(false);
          // console.log(updatedLevels);
        });
    }
  }, []);

  const newLevels = levels.map((levelData) => (
    <LevelCard levelData={levelData} key={levelData.id} />
  ));
  return loading ? 'Loading...' : <GameView>{newLevels}</GameView>;
}

export default Levels;
