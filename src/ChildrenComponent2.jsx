import React from 'react'

function ChildrenComponent2({ username, status }) {
    return (
        <>
            <h1>Usser name : {username}</h1>
            <h1>Trạng thái : {status ? 'active' : 'Inactive'}</h1>
        </>
    )
}

export default ChildrenComponent2