import React, { useState, useContext, useEffect } from 'react';
import Fuse from 'fuse.js';
import { Card, Header, Loader, Player } from '../components';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

export function BrowseContainer({ slides, user }) {
  // using dummy data of multiple users with actual user
  const users = [
    {
      displayName: 'Reed',
      photoURL: '1'
    },
    {
      displayName: 'Jeff',
      photoURL: '2'
    },
    {
      displayName: 'Tim',
      photoURL: '3'
    },
    {
      displayName: user.displayName,
      photoURL: '4'
    }
  ];
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  // simulate selected user profile fetching
  useEffect(() => {
    if (profile.displayName) {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [profile]);

  // initial update of slideRows with preselected category
  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides]);

  // live search
  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: [
        { name: 'data.title', weight: 3 },
        { name: 'data.description', weight: 2 },
        { name: 'data.genre', weight: 1 }
      ],
      ignoreLocation: true, // search entire string
      threshold: 0.2 // almost an exact match; still case-insensitive
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);
    // if search results, then show; otherwise show all from category
    if (searchTerm.length > 3 && results.length) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  // logout function
  const logout = () => {
    firebase
      .auth()
      .signOut()
      // useAuthListener will trigger redirect to home page
      .catch(err => {
        console.log('LOGOUT FUNC:', err);
      });
  };

  return profile.displayName ? (
    isLoading ? (
      <Loader photo={profile.photoURL} />
    ) : (
      <>
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
            <Player>
              <Player.Button />
              <Player.Video />
            </Player>
          </Header.Feature>
        </Header>

        {/* all content */}
        <Card.Group alignItems={'center'} justifyContent={'center'}>
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

              {/* feature & player */}
              <Card.Feature category={category}>
                <Player>
                  <Player.Button />
                  <Player.Video />
                </Player>
              </Card.Feature>
            </Card>
          ))}
        </Card.Group>

        <FooterContainer />
      </>
    )
  ) : (
    // pass down 'user' prop instead of 'users' dummy data to retrieve actual user.displayName and user.photoURL
    // then change .map() in SelectProfileContainer to render the one user
    <SelectProfileContainer users={users} setProfile={setProfile} />
  );
}
