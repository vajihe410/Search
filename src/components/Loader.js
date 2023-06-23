import React from 'react';
//gif
import spinner from '../assets/spinner.gif'

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt='loading'/>
            <h2>Loading...</h2>
        </div>
    );
};

export default Loader;