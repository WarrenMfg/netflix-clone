import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  transition: all 0.2s ease;
`;

export const Name = styled.p`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  transition: all 0.2s ease;
`;

export const User = styled.li`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
  list-style-type: none;
  margin-right: 30px;
  cursor: pointer;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover > ${Name} {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 600px) {
    margin: 0 0 20px;
  }
`;
