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
  margin-right: 30px;
  font-weight: ${({ active }) => (active ? '700' : 'normal')};
  transition: scale(1);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
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

export const Search = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
    position: relative;
    top: 3px;
  }
`;

export const SearchInput = styled.input`
  background-color: #44444450;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${({ active }) => (active === true ? '10px' : 0)};
  padding: ${({ active }) => (active === true ? '0 10px' : 0)};
  opacity: ${({ active }) => (active === true ? 1 : 0)};
  width: ${({ active }) => (active === true ? '200px' : 0)};

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: lightgrey;
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: lightgrey;
  }
  &:-ms-input-placeholder {
    /* IE 10+ */
    color: lightgrey;
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    color: lightgrey;
  }
`;

export const Picture = styled.div`
  background: url(${({ src }) => src});
  background-size: contain;
  object-fit: cover;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 150px;
  top: 32px;
  transform: translate(calc(-100% + 32px), 0);

  ${Group} {
    margin-bottom: 10px;
    height: 32px;
  }

  ${Group}:first-of-type ${TextLink} {
    cursor: default;
  }

  ${Group}:last-of-type {
    cursor: pointer;
    margin-bottom: 0;
  }

  ${Picture} {
    margin-right: 10px;
    cursor: default;
  }

  ${TextLink} {
    transform: none;
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
