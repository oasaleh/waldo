import { Link, useRouteMatch } from 'react-router-dom';

function LevelCard({ levelData }) {
  return (
    <div>
      <div>
        <Link
          to={{
            pathname: '/level',
            state: {
              level: levelData,
            },
          }}
        >
          <img
            style={{ width: '200px' }}
            src={levelData.imgUrl}
            alt={levelData.difficulty}
          />
        </Link>
      </div>
      <div>
        <p>{levelData.difficulty}</p>
        <div>
          <p>Information about the level</p>
        </div>
      </div>
    </div>
  );
}

export default LevelCard;
