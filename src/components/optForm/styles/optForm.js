import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  /* max-width: 64%; */
  width: 64%;
  border: 0;
  padding: 10px 20px;
  height: 70px;
  background-color: white;
  color: black;
  font-size: 26px;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  width: 36%;
  background-color: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f40612;
  }

  img {
    margin-left: 16px;
    background-color: rgba(0, 0, 0, 0);
    filter: invert(1);
    width: 24px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    img {
      width: 16px;
    }
  }
`;

export const Text = styled.p`
  font-size: 19px;
  color: white;
  text-align: center;
  margin-top: 8px;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
