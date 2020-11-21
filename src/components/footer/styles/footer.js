import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  padding: 70px 56px;
  margin: auto;

  @media (max-width: 1000px) {
    padding: 70px 100px;
  }

  @media (max-width: 600px) {
    padding: 70px 56px;
    margin-left: 25px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 1000px) {
    margin-bottom: 0;
  }
`;

export const ColumnGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 50%;

  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
`;
