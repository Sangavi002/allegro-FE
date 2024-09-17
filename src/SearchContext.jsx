
import {useState,useEffect}  from 'react';
import { createContext } from 'react';
import axios from 'axios';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length === 0) {
        setResults([]);
        return;
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://allegro-be.onrender.com/user/products/?title=${query}`);
            console.log(response.data)
            setResults(response.data);
        } catch (err) {
            console.log(err)
        } 
    };

    const debounceTimeout = setTimeout(() => {
        fetchData();
    }, 1000); 

    return () => clearTimeout(debounceTimeout);
}, [query]);

  return (
    <SearchContext.Provider value={{ query,setQuery,results,}}>
      {children}
    </SearchContext.Provider>
  );
};


