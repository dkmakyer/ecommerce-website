import { useContext, useEffect, useState, useMemo } from 'react'
import "./ViewAll.css"
import { ProductContext } from '../../contexts/ProductContext';
import ItemCard from '../../components/item-card/ItemCard';


const ViewAll = () => {
    const {products, error} = useContext(ProductContext);
    const [discount] = useState(false);

    useEffect(() => {
        if (error) {
          console.log("Error during fetch " + error.message);
        } else {
          console.log(products);
        }
    }, [products, error]);

    const groupedItems = useMemo(() => {
        return products.reduce((acc, product) => {
          if (!acc[product.category]) {
            acc[product.category] = [];
          }
          acc[product.category].push(product);
          return acc;
        }, {});
      }, [products]);
      
      const renderedItems = Object.entries(groupedItems).map(([category, items]) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          {/* Category Heading */}
          <h2 style={{ marginBottom: "10px" }}>{category}</h2>
      
          {/* Items Section */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "space-between", // Ensure items spread across the row
            }}
          >
            {items.map((product) => (
              <div
                key={product.id}
                style={{
                  flex: "1 0 calc(25% - 10px)", // 25% width with gap adjustment
                  boxSizing: "border-box", // Prevent overflow
                }}
              >
                <ItemCard
                  title={product.title}
                  category={product.category}
                  image={product.image}
                  price={product.price}
                  rating={product.rating.rate}
                  hasDiscount={discount}
                />
              </div>
            ))}
          </div>
        </div>
      ));
      
  return (
    <>
      <div className="view-all-container">
        <div className="view-all-items-container">
            {renderedItems}
        </div>
      </div>
    </>
  )
}

export default ViewAll
