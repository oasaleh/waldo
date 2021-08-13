import styled from 'styled-components';

const TableRow = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  background-color: #4e81ee4d;
  margin: 5px 0;
  height: 40px;
  /* padding: 20px 18%; */
  /* padding-top: 30px; */
  /* border-bottom: 1px solid lightgray; */
  border-radius: 8px;
`;
function PlayerScoreCard({ playerData }) {
  console.log(playerData);
  return (
    <TableRow>
      <p style={{ width: '47px' }}>{playerData.name}</p>
      <p style={{ width: '128px' }}>{playerData.time}</p>
    </TableRow>
  );
}

export default PlayerScoreCard;
