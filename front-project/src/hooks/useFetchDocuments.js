/*  
import { useState, useEffect } from 'react';
import 'firebase/firestore';
import { db } from '../firebase/config';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
  where,
} from 'firebase/firestore';

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  const { documents, setDocuments } = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadData() {
      if (cancelled) return;

      setLoading(true);

      const collectionRef = await collection(db, docCollection);

      try {
        let q;

        q = await query(collectionRef, orderBy('createdAt', 'desc'));

        onSnapshot(q, (querySnapshot) => {
          console.log('query', querySnapshot.docs);

          /* let list = [];
          querySnapshot.forEach((doc) => ({
            list.push({id: doc.id,
            ...doc.data()})
          })), */

          /*setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            })),
          ); */
/*        });
        //console.log(documents);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);

        setLoading(false);
      }
    }
    loadData();
  }, [docCollection, search, uid, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { documents, loading, error };
};
*/