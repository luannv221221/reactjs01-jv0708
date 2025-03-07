import React from 'react'

function ProductItem(props) {
    return (
        <>
            <div className="item" key={props.id}>
                <div className="content">
                    <img src={props.image} />
                    <p>{props.name}</p>
                    <p>Giá: {props.price}</p>
                </div>
            </div>
        </>
    )
}

export default ProductItem