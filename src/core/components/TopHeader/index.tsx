import './style.css';
import { IoRocketSharp } from 'react-icons/io5';

const TopHeader = () => {
    return (
        <header className='container-fluid top-header'>
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