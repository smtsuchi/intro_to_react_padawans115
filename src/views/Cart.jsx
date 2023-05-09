import React from 'react'

export default function Cart({ cart, removeFromCart, user }) {
    const getUniqueCart = (cart) => {
        const uniqueCart = []
        const ids = new Set();

        for (let item of cart){
            if (!ids.has(item.id)){
                uniqueCart.push(item)
                ids.add(item.id)
            }
        }
        return uniqueCart
    };
    const getQuanitity = (target, cart) => {
        let count = 0;
        for (let item of cart){
            if (item.id === target.id){
                count ++
            }
        }
        return count
    };

    const removeFromCartAPI = async (item) => {
        if (user.apitoken){
            const res = await fetch(`http://127.0.0.1:5000/api/cart/${item.id}`, {
                method: "DELETE",
                headers: {Authorization: `Bearer ${user.apitoken}`}
            })
            const data = await res.json()
            console.log(data)
        }
    };
    const handleClick = (item)=>{
        removeFromCart(item);
        removeFromCartAPI(item)
    }

    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th></th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {getUniqueCart(cart).map(item => (
                    <tr key={item.id}>
                        <th>{item.id}</th>
                        <td><img src={item.img_url} style={{ width:'50px' }}/></td>
                        <td>{item.product_name}</td>
                        <td>{getQuanitity(item,cart)}</td>
                        <td>{item.price}</td>
                        <td>{(getQuanitity(item,cart)*item.price).toFixed(2)}</td>
                        <td>
                            <button className='btn btn-danger' onClick={()=>handleClick(item)}>
                                Remove
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
