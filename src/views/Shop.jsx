import React, { useState, useEffect } from 'react'
import Product from '../components/Product';

const BACK_END_URL = process.env.REACT_APP_BACK_END_URL

export default function Shop({ addToCart }) {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const res = await fetch(BACK_END_URL + '/api/products');
        const data = await res.json();
        if (data.status === 'ok') {
            setProducts(data.products)
        }
    };

    useEffect(() => { getProducts() }, [])

    return (
        <div>
            <h1>My Shop</h1>
            <div className="row">
                {products.map(p => <Product key={p.id} product={p} addToCart={addToCart}/>)}
            </div>
        </div>
    )
}
