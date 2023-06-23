import React, { useEffect, useState } from 'react';
//API
import { getProducts } from '../services/api';
//components
import Product from './Product';

const Store = () => {

    const [products,setProducts]=useState([])
    const [searchedProduct,setSearchedProduct]=useState("")

    useEffect(()=>{
        const fetchApi =async()=>{
            setProducts(await getProducts())
        }
        fetchApi()
    },[])

    const changeHandler =(event)=>{
        setSearchedProduct(event.target.value)
    }
    return (
        <div>
            <input type='text' placeholder='Search...' value={searchedProduct} onChange={changeHandler} />
            <table >
                <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
                {
                products.map((product)=><Product key={product.id} productData={product} />)
                }
            </table>

        </div>
    );
};

export default Store;