
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';


import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext();
    const location = useLocation(); 
    
    
    useEffect(() => {
        if(searchTerm){
            if(location.pathname=== '/videos'){
                getResults(`/search/q=${searchTerm} videos`);
            }
        }
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
    },[searchTerm,location.pathname,getResults]);



    if(isLoading) return <Loading />;
    console.log(location.pathname)

switch (location.pathname) {

        case '/search':
            return  (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {results?.results?.map(({link,title, description},index)=>(
                        <div key={index} className="md:w-2/5 w-full">
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-sm">
                                    {link.lenght > 30 ? link.substring(0, 30) : link}
                                </p>
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {title}
                                </p>
                            </a>
                        </div>
                         
                    ))}

                </div>
            )
        case '/images':
            return  (
                <div className="flex flex-wrap justify-content items-center">
                    {results?.image_results?.map(({image,link:{href,title },index})=>(
                        <a className="sm:p-3 p-5" href={href} key={index} target="_blank" rel="noreferrer" >
                            <img src={image?.src}  alt={title} loading="lazy" />
                            <p className="w-36 break-words text-sm mt-2"> 
                            {title}
                            
                            </p>
                        </a>

                    ))}

                </div>
                
            )
        case '/news':
            return  'SEARCH'
        case '/videos':
            return  'SEARCH'
        default:
             return 'ERROR'
}
}
