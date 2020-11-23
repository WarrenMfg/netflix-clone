import React, { useState } from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

export function BrowseContainer() {
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

  const [profile, setProfile] = useState({});

  return profile.displayName ? (
    <>
      <p>Browse Container</p>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer users={users} setProfile={setProfile} />
  );
}
