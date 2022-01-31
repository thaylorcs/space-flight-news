import './style.css';

const Articles = () => {
    return (
        <main>
            <article className="article-odd container">
                <div className="row">
                    <div className="img col-md-3">

                        <img className="article-img" src="https://via.placeholder.com/245x195" alt="" />
                    </div>

                    <div className="article-text col-md-9" >
                        <h2 className="article-title">Lorem Title</h2>
                        <p> <time dateTime="2022-01-28">28/01/2022</time></p>
                        <button className="btn btn-primary">Source Site</button>
                        <p className="article-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero eveniet eius dolor, iure voluptas deleniti cum, error repellat non vel ut tempore eum accusantium obcaecati eaque cupiditate reprehenderit numquam!</p>
                    </div>
                </div>
            </article>
            <article className="article-even container">
                <div className="row">
                    <div className="article-text col-md-9" >
                        <h2 className="article-title">Lorem Title</h2>
                        <p> <time dateTime="2022-01-28">28/01/2022</time></p>
                        <button className="btn btn-primary">Source Site</button>
                        <p className="article-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero eveniet eius dolor, iure voluptas deleniti cum, error repellat non vel ut tempore eum accusantium obcaecati eaque cupiditate reprehenderit numquam!</p>
                    </div>
                    <div className="img col-md-3">
                        <img className="article-img" src="https://via.placeholder.com/245x195" alt="" />
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Articles;