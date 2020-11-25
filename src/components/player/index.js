import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { LockBody, Overlay, Inner, Button, Close } from './styles/player';

export const PlayerContext = createContext();

export default function Player({ children }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  const children = (
    <>
      <LockBody />
      <Overlay
        onClick={({ target }) =>
          target.tagName !== 'VIDEO' && setShowPlayer(false)
        }
        {...restProps}
      >
        <Inner>
          <video id='netflix-player' controls autoPlay>
            <source src='/videos/bunny.mp4' type='video/mp4' />
          </video>
          <Close onClick={() => setShowPlayer(false)}>
            <img src='/images/icons/close.png' alt='Close' title='Close' />
          </Close>
        </Inner>
      </Overlay>
    </>
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
