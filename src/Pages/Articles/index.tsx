import { useEffect, useState } from 'react';
import Filters from '../../core/components/Filters';
import { Article } from '../../core/Types/article';
import { makeRequest } from '../../core/Utils/request';
import ArticleCard from './Components/ArticleCard';
import CardLoader from './Components/CardLoader';
import './style.css';

const Articles = () => {

    const [articlesResponse, setArticlesResponse] = useState<Article[]>();
    const [articlesLimit, setArticlesLimit] = useState(10);
    const [order, setOrder] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const params = {
            _limit: articlesLimit,
            _sort: order
        }
        setIsLoading(true);
        makeRequest({ url: "/articles", params })
            .then(response => setArticlesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [articlesLimit, order]);

    const loadMore = () => {
        setArticlesLimit(articlesLimit + 10);
    }

    const handleSortOrder = (selectedValue: string) => {
        setOrder(selectedValue);
    }

    return (
        <>
            <Filters
                order={order}
                handleSortOrder={value => handleSortOrder(value)}
            />
            <main className='main-content container-fluid'>
                {isLoading ? <CardLoader /> : (
                    articlesResponse?.map(article => (
                        <ArticleCard article={article} key={article.id} />
                    ))
                )}
                <button onClick={loadMore} className="btn btn-primary carregar-mais">
                    Carregar Mais
                </button>
            </main >
        </>
    )
}

export default Articles;