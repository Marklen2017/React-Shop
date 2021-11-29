import React, { useState } from 'react';

export default function Products({ addToCart }) {
    const [products] = useState([
        {
          name: 'CPUs / Processors',
          const: '$3.34',
          image: 'https://images10.newegg.com/NeweggImage/ProductImage/19-117-795-S05.jpg'
        },
        {
          name: 'Motherboards',
          const: '$6․66',
          image: 'https://images10.newegg.com/ProductImage/13-132-568-03.jpg'
        },
        {
          name: 'Video Graphic Devices',
          const: '$9.99',
          image: 'https://images10.newegg.com/ProductImage/14-127-908-02.jpg'
        },
        {
          name: 'Computer Cases',
          const: '$9.99',
          image: 'https://images10.newegg.com/NeweggImage/ProductImage/11-147-237-01.jpg'
        }
      ]);


    return (
        <>
            <h1>Products</h1>
            <div className="products">
            {products.map((product, idx) => (
                <div className="product" key={idx}>
                <h3>{product.name}</h3>
                <h4>{product.const}</h4>
                <img src={product.image} alt={product.name}/>
                <button onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
                </div>
            ))}
            </div>
        </>
    )
}
