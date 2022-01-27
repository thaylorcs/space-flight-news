import React from 'react';
const SearchBar = () => {
    return (
        <>
        <div className="container">
            <input className='input-group' type="text" placeholder='Pesquisar' />
            <select className='form-select' name="sort" id="sort">
                <option value="older">Mais antigas</option>
                <option value="newer">Mais novas</option>
            </select>
        </div>
        <div className="topo">
            MDI
        </div>
        </>
    )    
}

export default SearchBar;