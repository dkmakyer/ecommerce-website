import { useContext, useEffect, useState, useMemo } from "react";
import "./ViewAll.css";
import { ProductContext } from "../../contexts/ProductContext";
import ItemCard from "../../components/item-card/ItemCard";
import BackButton from "../../components/back-button/BackButton";

const ViewAll = () => {
  const { products, error } = useContext(ProductContext);
  const [discount] = useState(false);

  useEffect(() => {
    if (error) {
      console.log("Error during fetch " + error.message);
    } else {
      console.log("Product fetched successfully ", products);
    }
  }, [products, error]);

  function displayAllItems() {
    if (!products) return <p>Loading...</p>;

    const productObject = {};
    products.forEach((product) => {
      if (!productObject[product.category]) {
        productObject[product.category] = [];
      }
      productObject[product.category].push(product);
    });

    return Object.entries(productObject).map(([category, productList]) => {
      return (
        <div className="category-section" key={category}>
          <h2 className="category-header">{category}</h2>
          <div className="category-items">
            {productList.map((item) => {
              return (
                <ItemCard
                  key={item.id}
                  title={item.title}
                  category={item.category}
                  image={item.image}
                  price={item.price}
                  rating={item.rating.rate}
                  hasDiscount={discount}
                />
              );
            })}
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <div className="view-all-container">
        <div className="view-all-back-button">
          <BackButton />
        </div>
        <div className="view-all-items-container">{displayAllItems()}</div>
      </div>
    </>
  );
};

export default ViewAll;
