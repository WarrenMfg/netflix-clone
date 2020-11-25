import styled from 'styled-components';

export const Meta = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  background-color: #0000008f;
  height: 100%;
  width: 100%;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to bottom, transparent, black 90%);
  }
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: bold;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-sizing: border-box;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === 'row' ? 'row' : 'column'};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
`;

export const Genre = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
  margin: 0 56px 10px;
  z-index: 2;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 20px black;
  z-index: 1;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
    z-index: 3;
  }

  @media (min-width: 1000px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${Title} {
      display: block;
      z-index: 3;
    }
  }

  &:first-of-type {
    margin-left: 56px;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;

export const Image = styled.img`
  /* border: 0; */
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  /* margin: 0; */
`;

export const FeatureTitle = styled(Title)`
  display: block;
  margin-left: 0;
  font-size: 24px;
`;

export const FeatureText = styled.p`
  font-size: 18px;
  /* color: white; */
  font-weight: ${({ fontWeight }) => {
    fontWeight === 'bold' ? 'bold' : 'normal';
  }};
  /* margin: 0; */

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 320px;
  background-position-x: center;
  background-repeat: no-repeat;
  background-color: black;
  background-size: auto;
  margin: 0 56px;

  @media (max-width: 1000px) {
    height: 320px;
    margin: 0 30px;

    ${FeatureTitle} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const Content = styled.div`
  padding: 25px 56px;
  max-width: 600px;
  line-height: normal;

  @media (max-width: 1000px) {
    padding: 30px;
    max-width: 75%;
  }
`;

export const FeatureCloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  padding: 5px;
  text-align: center;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;
