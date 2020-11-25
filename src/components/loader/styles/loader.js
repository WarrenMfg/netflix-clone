import styled, { createGlobalStyle } from 'styled-components';

export const LockBody = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

export const Spinner = styled.img`
  position: fixed;
  width: 150px;
  height: 150px;
  top: 50vh;
  left: 50vw;
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @-ms-keyframes spin {
    from {
      -ms-transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      -ms-transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @-moz-keyframes spin {
    from {
      -moz-transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      -moz-transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    from {
      -webkit-transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      -webkit-transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export const Picture = styled.img`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;
