import React from 'react';
import { Header, Profiles } from '../components';

export function SelectProfileContainer({ users, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          {users.map((user, i) => (
            <Profiles.User
              key={i}
              onClick={() =>
                setProfile({
                  displayName: user.displayName,
                  photoURL: user.photoURL
                })
              }
            >
              <Profiles.Picture src={user.photoURL} />
              <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
          ))}
        </Profiles.List>
      </Profiles>
    </>
  );
}
