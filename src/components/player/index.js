import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Overlay, Inner, Button } from './styles/player';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  const children = (
    <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
      <Inner>
        <video id='netflix-player' controls>
          <source src='/videos/bunny.mp4' type='video/mp4' />
        </video>
      </Inner>
    </Overlay>
  );
  return showPlayer ? ReactDOM.createPortal(children, document.body) : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer(!showPlayer)} {...restProps}>
      Play
    </Button>
  );
};
