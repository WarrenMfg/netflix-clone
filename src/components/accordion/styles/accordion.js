import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  border-bottom: 8px solid #222;
  background-color: black;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 45px;
  width: 815px;
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 70px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Header = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;

  img {
    filter: invert(1);
    width: 24px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    img {
      width: 16px;
    }
  }
`;

export const BodyContainer = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '600px;' : '0px;')};
  transition: max-height 250ms linear;
`;

export const Body = styled.p`
  font-size: 26px;
  line-height: 1.2;
  background: #303030;
  padding: 20px;
  user-select: none;

  ${Item} &:nth-of-type(2) {
    padding: 0 20px 20px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
