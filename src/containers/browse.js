import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Loader } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

export function BrowseContainer({ slides }) {
  console.log('slides', slides);
  // dummy data
  const users = [
    {
      displayName: 'Reed Hastings',
      photoURL: '1'
    },
    {
      displayName: 'Jeff Bezos',
      photoURL: '2'
    },
    {
      displayName: 'Tim Cook',
      photoURL: '3'
    },
    {
      displayName: 'Sundar Pichai',
      photoURL: '4'
    }
  ];
  const history = useHistory();
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (profile.displayName) {
      setTimeout(() => setIsLoading(false), 3000);
    }
  }, [profile]);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => history.replace(ROUTES.HOME))
      .catch(console.log);
  };

  return profile.displayName ? (
    isLoading ? (
      <Loader photo={profile.photoURL} />
    ) : (
      <>
        <Loader.UnlockBody />
        <Header src='joker1'>
          <Header.Frame>
            <Header.Group>
              <Header.Logo />
              <Header.TextLink
                active={category === 'series' ? true : false}
                onClick={() => setCategory('series')}
              >
                Series
              </Header.TextLink>
              <Header.TextLink
                active={category === 'films' ? true : false}
                onClick={() => setCategory('films')}
              >
                Films
              </Header.TextLink>
            </Header.Group>

            <Header.Group>
              <Header.Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <Header.Profile>
                <Header.Picture src={profile.photoURL} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={profile.photoURL} />
                    <Header.TextLink>{profile.displayName}</Header.TextLink>
                  </Header.Group>
                  <Header.Group onClick={logout}>
                    <Header.TextLink onClick={logout}>Sign out</Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>

          <Header.Feature>
            <Header.Callout>
              Watch
              <br />
              The Joker
              <br />
              Now
            </Header.Callout>
            <Header.Text>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks
              connection as he walks the streets of Gotham City. Arthur wears
              two masks -- the one he paints for his day job as a clown, and the
              guise he projects in a futile attempt to feel like he's part of
              the world around him.
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>

        {/* Content goes here */}

        <FooterContainer />
      </>
    )
  ) : (
    <SelectProfileContainer users={users} setProfile={setProfile} />
  );
}
