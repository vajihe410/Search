import React, { useEffect, useState } from 'react';
//API
import { getProducts } from '../services/api';

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
            
        </div>
    );
};

export default Store;