import {useState, useEffect} from 'react';

export const useSearchHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('searchHistory') || '[]');
        setHistory(saved);
    }, []);

    const addSearch = (username) => {
        const updated = [username, ...history.filter(u => u !== username)].slice(0, 5);
        setHistory(updated);
        localStorage.setItem('searchHistory', JSON.stringify(updated));
    };

    return {history, addSearch};
};