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
  max-width: 1400px;
  margin: auto;
  padding: 2rem;
  justify-content: center;
  opacity: 1;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
/* -------------------------------- component ------------------------------- */
function Levels() {
  const [loading, setLoading] = useState(true);
  const [levels, setLevels] = useState([]);
  const updatedLevels = JSON.parse(localStorage.getItem('localLevels') || '[]');

  useEffect(() => {
    if (updatedLevels.length === 0) {
      db.collection('levels')
        .get()
        .then((levelsData) => {
          levelsData.forEach((levelData) => {
            updatedLevels.push(levelData.data());
            // console.log(levelData.data());
          });
          setLevels(updatedLevels);
          localStorage.setItem('localLevels', JSON.stringify(updatedLevels));
          setLoading(false);
          console.log(updatedLevels);
        });
    } else {
      console.log(updatedLevels, 'from localStorage');
      setLevels(updatedLevels);
      setLoading(false);
    }
  }, []);

  const newLevels = levels.map((levelData) => (
    <LevelCard levelData={levelData} key={levelData.id} />
  ));
  return loading ? 'Loading...' : <GameView>{newLevels}</GameView>;
}

export default Levels;
