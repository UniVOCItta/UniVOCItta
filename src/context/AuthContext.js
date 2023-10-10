import { auth } from '../firebase';
import { createContext, useContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut, 
        onAuthStateChanged} from 'firebase/auth';
import 'firebase/auth';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const[bookmarks, setBookmarks] = useState([]);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) =>  {
        return signInWithEmailAndPassword(auth, email, password)
       }
    
      const logout = () => {
          return signOut(auth)
      }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

  
  // Add to Favorites  
  const addToFavorites = (item) => {
      if (!favorites.some((fav) => fav.id === item.id)) {
        setFavorites((prevFavorites) => [...prevFavorites, item]);
        updateFavoritesStorage();
      }
    };
    
    const removeFromFavorites = (item) => {
      setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== item.id));
      updateFavoritesStorage();
    };
    
    const updateFavoritesStorage = () => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    };
    
    useEffect(() => {
      const storedFavorites = localStorage.getItem('favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    }, []);

  // Add to Bookmarks
  const addToBookmarks = (item) => {
    if (!bookmarks.some((book) => book.id === item.id)) {
      setBookmarks((prevBookmarks) => [...prevBookmarks, item]);
      updateBookmarksStorage();
    }
  };
  
  const removeFromBookmarks = (item) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((book) => book.id !== item.id));
    updateBookmarksStorage();
  };
  
  const updateBookmarksStorage = () => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  };
  
  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);


    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn, favorites, addToFavorites, removeFromFavorites, updateFavoritesStorage, bookmarks, addToBookmarks, removeFromBookmarks, updateBookmarksStorage }}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};