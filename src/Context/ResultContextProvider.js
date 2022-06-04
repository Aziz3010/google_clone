import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Egypt');

    const getResults = async (type) => {
        setIsLoading(true);
        
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '13838d6427msh445c198dfda133ep18736fjsn51a7b0ea011e',
                // 'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            }
        });
        const data = await response.json();
        
        if (type.includes('/search')) {
            setResults(data.results);
        } else if (type.includes('/image')) {
            setResults(data.image_results);
        } else if(type.includes('/news')) {
            setResults(data.entries);
        } else if (type.includes('/vidoes')) {
            setResults(data.results);
        }
        
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, isLoading, searchTerm, setSearchTerm }}>
            {children}
        </ResultContext.Provider>
    )
};

export const useResultContext = () => useContext(ResultContext);