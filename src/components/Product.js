import React from 'react';
//functions
import { shorten } from '../functions/helper';

const Product = ({productData}) => {
    return (
            <tr>
                <td><img src={productData.image} alt={productData.title} /></td>
                <td>{shorten(productData.title)}</td>
                <td>{productData.category}</td>
                <td>{productData.price}$</td>
            </tr>
        
    );
};

export default Product;