import React from 'react';


export default function Show({product}) {
   

    return (
        <div>
            <h1>Product Details</h1>
            <div>
                <strong>Name:</strong> {product.name}
            </div>
            <div>
                <strong>Description:</strong> {product.description}
            </div>
            <div>
                <strong>Price:</strong> {product.price}
            </div>
            <div>
                <strong>Image:</strong> <img src={product.image} alt={product.name} width="100" />
            </div>
            <div>
                <strong>Stock:</strong> {product.stock}
            </div>
            <div>
                <strong>Active:</strong> {product.active ? 'Yes' : 'No'}
            </div>
            <div>
                <InertiaLink href="/products">Back to Products</InertiaLink>
            </div>
        </div>
    );
}
