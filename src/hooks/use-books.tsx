import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface Book {
  id: string;
  title: string;
  author: string;
  // Add more fields if needed
}

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'books'), (snapshot) => {
      const booksData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Book, 'id'>),
      }));
      setBooks(booksData);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  return { books, loading };
};
