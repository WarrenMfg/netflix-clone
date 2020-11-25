import styled, { createGlobalStyle } from 'styled-components';

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 0 20px;
  z-index: 4;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Button = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  width: 130px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ff1e1e;
    color: white;
  }
`;
