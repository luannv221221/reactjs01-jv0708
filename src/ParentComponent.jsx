import React from 'react'
import ChildrenComponent from './ChildrenComponent'
import ChildrenComponent2 from './ChildrenComponent2'
import ButtonClick from './ButtonClick'

function ParentComponent() {
    return (
        <>
            <div>ParentComponent</div>
            <ChildrenComponent fullName="Nguyễn Văn A" age="17" />
            <ChildrenComponent2 username="Ngueyenx Van C" status={true} />
            <ButtonClick colorBtn="blue" titleBtn="Nut của Parent" hrefBtn="Link" />
        </>

    )
}

export default ParentComponent