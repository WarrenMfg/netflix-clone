import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const backgroundSrcUrl = ({ src }) =>
  src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg';

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  background: url(${backgroundSrcUrl}) top left / cover no-repeat;
  border-bottom: 8px solid #222;

  @media (max-width: 1000px) {
    background: ${({ src, isVisibleOnMobile }) =>
      isVisibleOnMobile
        ? `url(${backgroundSrcUrl({ src })}) top left / cover no-repeat;`
        : `url(${backgroundSrcUrl({
            src: false
          })}) top left / cover no-repeat;`};
    height: 100%;
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

export const Group = styled.div`
  display: flex;
  align-items: center;
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

export const TextLink = styled.p`
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active ? '700' : 'normal')};
  cursor: pointer;
  transition: font-weight 0.2s ease;

  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Text = styled.p`
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.66);
`;

export const Feature = styled(Frame)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Callout = styled.h2`
  font-size: 50px;
  font-weight: bold;
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ff1e1e;
    color: white;
  }
`;
