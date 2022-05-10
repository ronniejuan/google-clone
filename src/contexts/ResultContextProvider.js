  
import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1/';


export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) =>{
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`,{
            method: 'GET',
            headers: {
              'x-rapidapi-host': 'google-search3.p.rapidapi.com',
              'x-rapidapi-key': '09c07c704amsh0ae8683e6bfeeb0p1e6e3djsn85ee0b0bb3e8',
            },
          });

          const data = await response.json();

          setResults(data);
          setIsLoading(false);
        };

        return (
            <ResultContext.Provider value={{getResults, results, searchTerm,setSearchTerm, isloading}}>
                {children}
            </ResultContext.Provider >

        )
    }

    export const useResultContext = () => useContext(ResultContext);
  