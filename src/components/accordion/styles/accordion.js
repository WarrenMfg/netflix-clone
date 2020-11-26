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
  max-height: ${({ isOpen }) => (isOpen ? '100%' : '70.59px')};

  overflow: hidden;
  animation: ${({ isOpen }) => (isOpen ? 'open' : 'close')};
  animation-duration: 350ms;
  animation-timing-function: ease;
  animation-fill-mode: ${({ isOpen }) => (isOpen ? 'backwards' : 'forwards')};

  @keyframes open {
    from {
      max-height: 70.59px;
    }
    to {
      max-height: 100%;
    }
  }

  @keyframes close {
    from {
      max-height: 100%;
    }
    to {
      max-height: 70.59px;
    }
  }

  @media (max-width: 600px) {
    max-height: ${({ isOpen }) => (isOpen ? '100%' : '43.59px')};
    @keyframes open {
      from {
        max-height: 43.59px;
      }
      to {
        max-height: 100%;
      }
    }

    @keyframes close {
      from {
        max-height: 100%;
      }
      to {
        max-height: 43.59px;
      }
    }
  }

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

export const BodyContainer = styled.div``;

export const Body = styled.p`
  font-size: 26px;
  line-height: 1.2;
  background: #303030;
  padding: 20px;
  user-select: none;
  transition: all 0.5s linear;

  ${Item} &:nth-of-type(2) {
    padding: 0 20px 20px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
