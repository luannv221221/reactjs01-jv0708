import './Product.css'
import styles from './Product.module.css'
import ProductItem from './ProductItem';
function Product() {
    const products = [
        { id: 1, name: "sp1", price: 500, image: "https://anhnail.com/wp-content/uploads/2024/11/Hinh-anh-gai-xinh-2k8-de-thuong.jpg" },
        { id: 2, name: "sp2", price: 300, image: "https://anhnail.com/wp-content/uploads/2024/11/Hinh-anh-gai-xinh-2k8-de-thuong.jpg" },
        { id: 3, name: "sp3", price: 700, image: "https://anhnail.com/wp-content/uploads/2024/11/Hinh-anh-gai-xinh-2k8-de-thuong.jpg" },
    ];
    return (
        <>
            <h2 style={{ textAlign: "center" }}>Danh sách sản phẩm</h2>
            <p className={styles.textHeader} >Danh sách</p>
            <div className="_product_list">

                {/* {products.map((item) => <li>{item.name}</li>)} */}
                {products.map((item) =>
                    <ProductItem id={item.id} image={item.image} name={item.name} price={item.price} />
                )}

            </div>
        </>
    );
}
export default Product;