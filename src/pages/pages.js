import { useQuery, gql } from "@apollo/client";
import ProductCard from "../components/product-card";

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
      <div >
        {data.pages.map((page) => {
          return <ProductCard key={page.id} page={page} />;
        })}
      </div>
    </div>
  );
};

export default AllPages;
