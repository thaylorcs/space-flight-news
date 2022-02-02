import './style.css';

type Props = {
    title: string,
    content: string,
    date: string,
    imageUrl: string,
    url: string,
    source: string,
    className: string,
}

const Modal = ({ title, content, date, imageUrl, url, source, className }: Props) => {
    return (
        <div className={`modal-article ${className}`} id="modal">
            <div className="modal-content">
                <div className="article-img">
                    <img className="article-img" src={imageUrl} alt={title} />
                </div>
                <div className="article-text" >
                    <h2 className="article-title">{title}</h2>
                    <div className="date-source">
                        <p className='article-date'> {date}</p>
                        <p className="btn btn-primary btn-source">{source}</p>
                    </div>
                    <p className="article-content">{content}</p>
                    <a href={url} className="btn btn-primary" rel="noreferrer">Ir para o site</a>
                </div>
            </div>
        </div >
    )
}
export default Modal;