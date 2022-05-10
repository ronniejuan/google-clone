  
import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';


export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (url) =>{
        setIsLoading(true);

        const res = await fetch(`${baseUrl}${url}`,{
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '09c07c704amsh0ae8683e6bfeeb0p1e6e3djsn85ee0b0bb3e8'
            },
          });

          const data = await res.json();
          console.log(data)

          setResults(data);
          setIsLoading(false);
        };

        return (
            <ResultContext.Provider value={{getResults, results, searchTerm,setSearchTerm, isLoading}}>
                {children}
            </ResultContext.Provider >

        )
    }

    export const useResultContext = () => useContext(ResultContext);
  