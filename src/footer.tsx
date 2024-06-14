import { FunctionComponent} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: rgba(29, 119, 138, 1);
  color: #fff;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem 0;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 600px) {
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const IconLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  margin: 15px
`;

const Footer: FunctionComponent = () => {
    return (
        <FooterContainer>
      <LeftColumn>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/mijnVerhaal">Mijn Verhaal</StyledLink>
        <StyledLink to="/projecten">Projecten</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </LeftColumn>
      <RightColumn>
        <IconLink href="https://github.com/Lender97?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/lender-boeckx-07770a235/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </IconLink>
      </RightColumn>
    </FooterContainer>
    )
}
export default Footer