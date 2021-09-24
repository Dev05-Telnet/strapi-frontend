import styles from "./product-card2.module.css";
const ProductCard = ({ page }) => {
  return (
    <div className="w-full col-s-6 col-m-4 col-3">
      <div className={styles.productcard}>
        <div
          className={styles.productImage}
          style={{
            backgroundImage: `url(http://localhost:1337${page.image?.url})`,
          }}
        >
          <div className={styles.productRating}>
            <div className={styles.rating}>
              <svg className={styles.smallbox} viewBox="0 0 1792 1792">
                <path
                  fill="#f6ad55"
                  d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                ></path>
              </svg>
              4.8
            </div>
            <div className={styles.ratingCount}>({page.product_id})</div>
          </div>
        </div>
        <div className={styles.productdetails}>
          <h5 className={styles.productName}>{page.name}</h5>
          <p className={styles.productTag}>{"page.tags"}</p>
          <p className={styles.productPrice}>{page.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
