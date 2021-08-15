import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase/config';
import PlayerScoreCard from '../components/PlayerScoreCard';

const LeaderboardTable = styled.div`
  text-align: center;
  width: 70%;
  margin: 30px auto;
`;
const TableHead = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 900;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  background-color: lightgreen;
  border-radius: 8px;
  height: 40px;
`;
const TableHeading = styled.div``;
const TableBody = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  text-align: center;
  justify-content: center;
  align-items: stretch;
`;

function Leaderboard() {
  const [players, setPlayers] = useState([]);
  let currentPlayers = [];
  useEffect(() => {
    db.collection('leaderboard')
      .where('time', '<', 20)
      .where('time', '>', 0)
      .orderBy('time', 'asc')
      .get()
      .then((player) => {
        player.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          currentPlayers.push(doc.data());
        });
        setPlayers(currentPlayers);
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }, []);

  const playerScore = players.map((player) => (
    <PlayerScoreCard playerData={player} key={player.name} />
  ));

  return (
    <LeaderboardTable>
      <TableHead>
        <TableHeading>Name</TableHeading>
        <TableHeading>Time (seconds)</TableHeading>
      </TableHead>
      <TableBody>
        {players.length > 0 ? (
          playerScore
        ) : (
          <h1 style={{ marginTop: '14%', fontWeight: '800', fontSize: '2em' }}>
            Be the first on the leaderboard!
          </h1>
        )}
      </TableBody>
    </LeaderboardTable>
  );
}

export default Leaderboard;
//
