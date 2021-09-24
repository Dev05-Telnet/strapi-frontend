import { useQuery, gql } from "@apollo/client";
import Grid from "../components/List/grid";
import ProductCard1 from "../components/products/product-card1";
import ProductCard2 from "../components/products/product-card2";

const PRODUCTS = gql`
  query GetProducts {
    pages {
      id
      name
      price
      product_id
      sku
      image {
        url
        alternativeText
      }
    }
  }
`;

const AllPages = () => {
  const { loading, error, data } = useQuery(PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Some ERROR occured :(</p>;

  return (
    <div>
      <h1>List of pre-made Pages to meet any need</h1>
      <Grid>
        {data.pages.map((page) => {
          return <ProductCard2 key={page.id} page={page} />;
        })}
      </Grid>
      <Grid>
        {data.pages.map((page) => {
          return <ProductCard1 key={page.id} page={page} />;
        })}
      </Grid>
    </div>
  );
};

export default AllPages;
