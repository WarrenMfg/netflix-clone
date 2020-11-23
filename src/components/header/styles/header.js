import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const backgroundSrcUrl = ({ src }) =>
  src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg';

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  background: url(${backgroundSrcUrl}) top left / cover no-repeat;
  border-bottom: 8px solid #222;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && 'background: none;'}
  }
`;

export const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 56px;
  padding: 18px 0;
  min-height: 64px;

  @media (min-width: 1449px) {
    height: 90px;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const Button = styled(RouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f40612;
  }
`;
