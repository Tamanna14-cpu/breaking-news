import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-05-25&sortBy=publishedAt&apiKey=73049fb33b58462ca8bcc585d0699b28';
        fetch (url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])

    return (
        <div>
           <h1>Top headlines : {articles.length}</h1>

           {
               articles.map(article => <News article = {article}></News>)
           }
        </div>
    );
};

export default TopHeadline;