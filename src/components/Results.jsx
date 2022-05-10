
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';


import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext();
    const location = useLocation(); 
    
    
    useEffect(() => {
        getResults(`/search/q=JavaScript Mastery&num=40`);
    },[])



    if(isLoading) return <Loading />;
    console.log(location.pathname)

switch (location.pathname) {

        case '/search':
            return  'SEARCH'
        case '/images':
            return  'SEARCH'
        case '/news':
            return  'SEARCH'
        case '/videos':
            return  'SEARCH'
        default:
             return 'ERROR'
}
}
