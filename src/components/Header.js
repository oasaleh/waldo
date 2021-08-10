/* --------------------------------- imports -------------------------------- */
// style
import styled from 'styled-components';
// react-router

import { Route, Switch, NavLink, Link } from 'react-router-dom';
import PageLogoTitle from './PageLogoTitle';

/* ---------------------------------- style --------------------------------- */
const MenuItem = styled.li`
  border-radius: 6px;
  width: 90px;
  height: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(239, 68, 68);
  background-color: rgba(239, 68, 68);
  margin: 0 5px 0 5px;
  & > a {
    font-size: 15px;
    font-weight: 500;
    list-style: none;
    margin: 10px 0 0 0;
    padding: 0.75rem 5px 0.75rem 5px;
    text-decoration: none;
    color: snow;
  }
  & :hover {
    color: black;
  }
`;
const NavMenu = styled.ul`
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
        <MenuItem>
          <Link to="/levels">Levels</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/credits">Credits</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/leaderboard">Leaderboard</Link>
        </MenuItem>
      </NavMenu>
    </PageHeader>
  );
}

export default Header;
