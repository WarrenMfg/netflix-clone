import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(collection) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(collection)
      .get()
      .then(snapshot => {
        const allContent = snapshot.docs.map(contentObj => ({
          ...contentObj.data(),
          docID: contentObj.id
        }));
        setContent(allContent);
      })
      .catch(console.log);
  }, []);

  return content;
}
