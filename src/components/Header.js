/* --------------------------------- imports -------------------------------- */
// style
import styled from 'styled-components';
// react-router

import { Link } from 'react-router-dom';
import PageLogoTitle from './PageLogoTitle';

/* ---------------------------------- style --------------------------------- */
const MenuItem = styled.li`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen;
  font-size: 18px;
  font-weight: 600;
  padding: 13px;
  border-radius: 6px;
  width: fit-content;
  height: fit-content;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
  background-color: rgba(239, 68, 68);
  margin: 0 5px 0 5px;
  text-decoration: none;
  color: white;
  list-style: none;
  :hover {
    background-color: #5a80e7;
  }
  & > a {
    text-decoration: none;
    color: white;
  }
`;
const NavMenu = styled.ul`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const PageHeader = styled.header`
  display: grid;
  grid-template-columns: 1.8fr 1.5fr;
  width: 100%;
  /* grid-template-rows: auto; */
  margin: 0px auto 0 auto;
  padding: 0;
  & > * {
    max-height: 85px;
  }
  /* box-sizing: border-box; */
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  & > a {
    display: flex;
    flex-direction: row;
    justify-self: end;
    align-items: center;
    text-decoration: none;
    flex-wrap: nowrap;
    margin: 0;
    padding: 0;
  }
`;
/* -------------------------------- component ------------------------------- */
function Header() {
  return (
    <PageHeader>
      <PageLogoTitle />
      <NavMenu>
        <Link style={{ textDecoration: 'none' }} to="/levels">
          <MenuItem>Levels</MenuItem>
        </Link>
        {/* <Link to="/credits">
          <MenuItem>Credits</MenuItem>
        </Link> */}
        <Link style={{ textDecoration: 'none' }} to="/leaderboard">
          <MenuItem>Leaderboard</MenuItem>
        </Link>
      </NavMenu>
    </PageHeader>
  );
}

export default Header;
