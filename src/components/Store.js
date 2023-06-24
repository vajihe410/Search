import React, { useEffect, useState } from 'react';
//API
import { getProducts } from '../services/api';
//components
import Product from './Product';
import Loader from './Loader';
//styles
import styles from './Store.module.css'

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
    const resultSearch= products.filter((product)=>product.title.toUpperCase().includes(searchedProduct.toUpperCase()))

    return (
        <div className={styles.productList}>
            {
                products.length >0 ?
                 <div>
                       <input className={styles.inputSearch} type='text' placeholder='Search...' value={searchedProduct} onChange={changeHandler} />
                    <table >
                        <thead>
                            <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        resultSearch.map((product)=><Product key={product.id} productData={product} />)
                        }
                        </tbody>
                    </table>
                </div>  
                   : <Loader />

            }
            {
                
            }
    
        </div>
    );
};

export default Store;