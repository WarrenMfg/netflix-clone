import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;

export const HTMLFormElement = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: white;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f40612;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const Link = styled(RouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.small`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const TAC = styled.a``;

export const Error = styled.p`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;
