import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Header, Loader } from '../components';
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
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  // simulate profile fetching
  useEffect(() => {
    if (profile.displayName) {
      setTimeout(() => setIsLoading(false), 0);
    }
  }, [profile]);

  // initial update of slideRows with preselected category
  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides]);

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
            {/* category */}
            <Header.Group>
              <Header.Logo />
              <Header.TextLink
                active={category === 'series' ? true : false}
                onClick={() => {
                  setCategory('series');
                  setSlideRows(slides.series);
                }}
              >
                Series
              </Header.TextLink>
              <Header.TextLink
                active={category === 'films' ? true : false}
                onClick={() => {
                  setCategory('films');
                  setSlideRows(slides.films);
                }}
              >
                Films
              </Header.TextLink>
            </Header.Group>

            {/* search and logout */}
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

          {/* feature */}
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

        {/* all content */}
        <Card.Group>
          {slideRows.map(slideRow => (
            // cards container with useContext
            <Card key={`${category}-${slideRow.genre.toLowerCase()}`}>
              {/* genre */}
              <Card.Genre>{slideRow.genre}</Card.Genre>

              {/* single row of content */}
              <Card.Items>
                {slideRow.data.map(item => (
                  // content
                  <Card.Item key={item.docID} item={item}>
                    <Card.Image
                      src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                    />
                    <Card.Meta>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Items>

              {/* feature */}
              <Card.Feature category={category} />
            </Card>
          ))}
        </Card.Group>

        <FooterContainer />
      </>
    )
  ) : (
    <SelectProfileContainer users={users} setProfile={setProfile} />
  );
}
