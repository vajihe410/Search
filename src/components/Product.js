import React from 'react';
//functions
import { shorten } from '../functions/helper';
//styles 
import styles from './Product.module.css'
const Product = ({productData}) => {
    return (
            <tr className={styles.tableRow}>
                <td><img className={styles.productPicture} src={productData.image} alt={productData.title} /></td>
                <td>{shorten(productData.title)}</td>
                <td>{productData.category}</td>
                <td>{productData.price}$</td>
            </tr>
        
    );
};

export default Product;