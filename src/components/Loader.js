import React from 'react';
//gif
import spinner from '../assets/spinner.gif'
//styles
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={spinner} alt='loading'/>
            <h2>Loading...</h2>
        </div>
    );
};

export default Loader;