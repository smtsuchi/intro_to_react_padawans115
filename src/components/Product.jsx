import React from 'react'

export default function Product({ product, addToCart, user }) {
    const p = product

    const addToCartAPI = async () => {
        if (user.apitoken){
            const url = 'http://127.0.0.1:5000/api/cart'   
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.apitoken}`
                },
                body: JSON.stringify({product_id: product.id})
            }

            const res = await fetch(url, options)
            const data = await res.json();

            if (data.status === 'ok'){
                //show message
            }
        }
    };

    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={ p.img_url } className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ p.product_name }</h5>
                <h6 className="card-subtitle">{ p.price }</h6>
                <p className="card-text">{ p.description }</p>
                <button className="btn btn-primary" onClick={()=>{addToCart(p); addToCartAPI()}}>Add To Cart</button>
            </div>
        </div>
    )
}
