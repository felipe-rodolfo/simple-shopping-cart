import React from 'react'

const Product = (props) => {
    const {product, onAdd} = props;
    return (
        <div>
            <img className="small" src={product.image} alt={product.namez}/>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={() => onAdd(product)}>Add to card</button>
            </div>
        </div>
    )
}

export default Product
