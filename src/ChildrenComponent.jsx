import React from 'react'
import ButtonClick from './ButtonClick';

function ChildrenComponent(props) {

    console.log(props);

    return (
        <>
            <div>ChildrenComponent</div>
            <h1>Họ và tên {props.fullName}</h1>
            <h1>Age {props.age}</h1>
            <ButtonClick colorBtn="red" titleBtn="BTN Thằng con" hrefBtn="link" />
        </>
    )
}

export default ChildrenComponent