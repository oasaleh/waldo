/* --------------------------------- imports -------------------------------- */
// react-router
import { Link } from 'react-router-dom';
// syled-components
import styled from 'styled-components';
// assets
import titleLogo from '../assets/titleLogo.png';
/* ---------------------------------- style --------------------------------- */
const PageLogo = styled.img`
  width: 8rem;
  margin-bottom: 0;
  padding-bottom: 0;
`;
const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2.25rem;
  line-height: 2.5rem;
  letter-spacing: -0.025em;
  font-weight: 800;
  padding: 0;
  margin: 0;
  word-wrap: normal;
  & > #firstWord {
    color: rgba(59, 130, 246);
  }
  & > #secondWord {
    color: rgba(239, 68, 68);
  }
`;

/* -------------------------------- component ------------------------------- */
function PageLogoTitle() {
  return (
    <>
      <Link to="/levels">
        <PageLogo src={titleLogo} alt="Waldo waving hello" />
        <Title>
          <span id="secondWord">Where&apos;s</span>{' '}
          <span id="firstWord">Waldo?</span>
        </Title>
      </Link>
    </>
  );
}

export default PageLogoTitle;
