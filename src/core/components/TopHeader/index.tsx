import './style.css';
import { IoRocketSharp } from 'react-icons/io5';

const TopHeader = () => {
    return (
        <header className='container-fluid top-header'>
            <div className="top-cover">
                <div className="top">
                    <IoRocketSharp className='top-icon' />
                </div>
                <div className="page-title">
                    <h1>Space Flight News</h1>
                </div>
            </div>
        </header>
    )
}

export default TopHeader;