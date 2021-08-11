import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
/* ---------------------------------- style --------------------------------- */
const LevelCardBox = styled.div`
  margin: 0 15px;
  /* height: 100px; */
  padding: 2px 2px 2px 2px;
`;
const LevelImageBox = styled.div`
  border: 0.5px solid lightgray;
  display: block;
  font-size: 0;
  border-radius: 5px;
`;
const LevelImage = styled.img`
  width: 250px;
  border-radius: 5px;
`;
/* -------------------------------- component ------------------------------- */
function LevelCard({ levelData }) {
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
      <div>
        <p>{levelData.difficulty}</p>
        <div>
          <p>Information about the level</p>
        </div>
      </div>
    </LevelCardBox>
  );
}

export default LevelCard;
