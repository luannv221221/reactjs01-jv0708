import styles from './Header.module.css'
import UserInfo from './UserInfo';
function Header() {
    return (
        <>
            <div style={{ background: "gray", padding: 10, marginBottom: 15 }}>
                {/* <h1 style={{ textAlign: "center", fontStyle: "italic", color: "white" }}>Đây là Header</h1> */}
                <h1 className={styles.textHeader}>Đây là Header</h1>
                <UserInfo />
            </div>
        </>
    );
}
export default Header;