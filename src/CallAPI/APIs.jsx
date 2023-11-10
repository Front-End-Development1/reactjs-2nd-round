import React, { useState, useEffect } from 'react';
import axios from 'axios';

function APIs(){
        const [products, setProducts] = useState([]);

        useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const response = await axios.get('https://fakestoreapi.com/products');
                    setProducts(response.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }

            fetchProducts();
        }, [])

    return (
        <div>
            <h1>FakeStore Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.title} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default APIs;