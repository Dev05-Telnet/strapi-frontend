import Flex from "../list/flex";
import SimpleRating from "../rating/simple";
import styles from "./product-card2.module.css";

const ProductCard = ({ page }) => {
  return (
    <div className="w-full col-s-6 col-m-4 col-3">
      <Flex
        direction="column"
        height="100%"
        backgroundColor="rgba(237, 242, 247)"
      >
        <div
          className={styles.productImage}
          style={{
            backgroundImage: `url(${process.env.REACT_APP_URL}${page.image?.url})`,
          }}
        >
          <SimpleRating count={page.product_id} />
        </div>
        <Flex direction="column" padding="1rem" takeRemainingSpace>
          <div>
            <h5 className={styles.productName}>{page.name}</h5>
            <p className={styles.productTag}>{"page.tags"}</p>
          </div>
          <Flex alignItems="center">
            <div className={styles.productPrice}>{page.price}</div>
            <div className={styles.buybutton}>Add to cart</div>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default ProductCard;
