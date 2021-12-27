import React from 'react';

const Box = ( {value, onClick }) => {
    return (
        <div>
            <button className='boxbtn' onClick={onClick}>{value}</button>
        </div>
    )
}

export default Box;
