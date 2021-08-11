import styled from 'styled-components';
import github from '../assets/github.png';

const PageFooter = styled.footer`
  margin-top: auto;
  width: 100%;
  height: 100px;
  text-align: center;
`;

function Footer() {
  return (
    <PageFooter>
      <a href="www.github.com">
        <img
          style={{ width: '24px', paddingTop: '40px' }}
          src={github}
          alt="GitHub"
        />
      </a>
    </PageFooter>
  );
}

export default Footer;
