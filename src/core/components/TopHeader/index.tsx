import './style.css';
import { IoRocketSharp } from 'react-icons/io5';

const TopHeader = () => {
    return (
        <header className='container-fluid top-header'>
            <div className="container top-filters">
                <div className="form-group filters">
                    <input className='form-control' type="text" placeholder='Pesquisar' />
                    <select className='form-select' name="sort" id="sort">
                        <option value="older">Mais antigas</option>
                        <option value="newer">Mais novas</option>
                    </select>
                </div>
            </div>
            <div className="topo-destaque">
                <div className="topo">
                    <IoRocketSharp className='topo-icon' />
                </div>
                <div className="page-title">
                    <h1>Space Flight News</h1>
                </div>
            </div>
        </header>
    )
}

export default TopHeader;