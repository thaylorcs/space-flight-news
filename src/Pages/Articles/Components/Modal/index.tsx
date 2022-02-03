import './style.css';

type Props = {
    title: string,
    content: string,
    date: string,
    imageUrl: string,
    url: string,
    hide: () => void
}

const Modal = ({ title, content, date, imageUrl, url,  hide }: Props) => {
    return (
        <div className="modal modal-visible modal-hidden" >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="article-img">
                            <img className="article-img" src={imageUrl} alt={title} />
                        </div>
                        <div className="article-text" >
                            <h2 className="article-title">{title}</h2>
                            <div className="date-source">
                                <p className='article-date'> {date}</p>
                            </div>
                            <p className="article-content">{content}</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a href={url} target="_blank" className="btn btn-more" rel="noreferrer">Go to Site</a>
                        <button type="button" className="btn btn-source" onClick={hide}>Close</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Modal;