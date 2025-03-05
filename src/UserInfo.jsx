import React from 'react'

function UserInfo() {

    let userInfo = {
        id: 1,
        userName: "Phạm Băng Băng",
        avatar: "https://truyenhinhvov.qltns.mediacdn.vn/239964650902032384/2021/3/29/truoc-khi-noi-tieng-voi-vai-tro-hot-tiktoker-le-bong-tung-la-cosplayer-van-nguoi-me-9b6-5437309-16170118609001619489335.jpg",
        status: false
    }
    // let statusElement;
    // if (userInfo.status) {
    //     statusElement = <div style={{ width: 10, height: 10, borderRadius: "50%", background: "green" }}></div>
    // } else {
    //     statusElement = <div style={{ width: 10, height: 10, borderRadius: "50%", background: "red" }}></div>
    // }
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <img style={{ borderRadius: "50%" }} src={userInfo.avatar} width={50} height={50} />
                </div>
                <div>
                    <span style={{ color: 'white' }}>{userInfo.userName}</span>
                </div>
                {/* {userInfo.status ?
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "green" }}></div>
                    : <div style={{ width: 10, height: 10, borderRadius: "50%", background: "red" }}></div>} */}
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: userInfo.status ? "green" : "red" }}></div>
            </div>
        </>
    )
}

export default UserInfo