import React from 'react'

function ProductItem() {
    return (
        <>
            <div className="item" key={item.id}>
                <div className="content">
                    <img src={item.image} />
                    <p>{item.name}</p>
                    <p>Giá: {item.price}</p>
                </div>
            </div>
        </>
    )
}

export default ProductItem