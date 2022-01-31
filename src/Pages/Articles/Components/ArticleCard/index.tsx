import { Article } from '../../../../core/Types/article';
import './style.css';

type Props = {
    article: Article
}

const ArticleCard = ({ article }: Props) => {
    return (
        <article className={article.id % 2 === 0 ? "article-even" : "article-odd"}>
            <div className="article-img col-md-5">
                <img className="article-img" src={article.imageUrl} alt={article.title} />
            </div>
            <div className="article-text col-md-7" >
                <h2 className="article-title">{article.title}</h2>
                <div className="date-source">
                    <p className='article-date'> {article.publishedAt}</p>
                    <a href={article.url} target="_blank" className="btn btn-primary btn-source" rel="noreferrer">{article.newsSite}</a>
                </div>
                <p className="article-content">{article.summary}</p>
                <button className="btn btn-primary">Ver mais</button>
            </div>
        </article>
    )
}

export default ArticleCard;