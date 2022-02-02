import { useEffect, useState } from 'react';
import { Article } from '../../../../core/Types/article';
import Modal from '../Modal';
import './style.css';

type Props = {
    article: Article
}

const ArticleCard = ({ article }: Props) => {
    const [articleDate, setArticleDate] = useState('');
    const [visibleModal, setVisibleModal] = useState(false);

    const handleModal = () => {
        setVisibleModal(!visibleModal);
        document.body.addEventListener("click", handleModal);
    }

    useEffect(() => {
        const date = new Date(article.publishedAt);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        setArticleDate(`${day}/${month}/${year}`);
    }, [article.publishedAt])

    return (
        <>
            <article className={article.id % 2 === 0 ? "article-even" : "article-odd"} key={article.id}>
                <div className="article-img">
                    <img className="article-img" src={article.imageUrl} alt={article.title} />
                </div>
                <div className="article-text" >
                    <h2 className="article-title">{article.title}</h2>
                    <div className="date-source">
                        <p className='article-date'> {articleDate}</p>
                        <a href={article.url} target="_blank" className="btn btn-primary btn-source" rel="noreferrer">{article.newsSite}</a>
                    </div>
                    <p className="article-content">{article.summary}</p>
                    <button className="btn btn-primary btn-more" onClick={handleModal} >Ver mais</button>
                </div>

            </article>
            <Modal
                title={article.title}
                content={article.summary}
                imageUrl={article.imageUrl}
                visible={visibleModal}
                date={articleDate}
                url={article.url}
                source={article.newsSite}
            />
        </>
    )
}

export default ArticleCard;