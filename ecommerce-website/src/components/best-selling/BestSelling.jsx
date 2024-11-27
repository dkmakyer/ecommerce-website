import {useState, useEffect, useContext} from 'react'
import "./BestSelling.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import ItemCard from '../item-card/ItemCard';
import { ProductContext } from '../../contexts/ProductContext';
import ViewAllButton from '../view-all-button/ViewAllButton';

const BestSelling = () => {
  const [discount] = useState(false);
  const { products, error } = useContext(ProductContext);

  useEffect(() => {
    if (error) {
      console.log("Error during fetch " + error.message);
    }
  }, [products, error, discount]);

  const displayBestSellingItems = products.slice(7,11).map((product, i) => {
      return (
        <ItemCard
          key={product.id}
          title={product.title}
          category={product.category}
          image={product.image}
          price={product.price}
          rating={product.rating.rate}
          hasDiscount={discount}
        />
      );
  });


  return (
    <>
        <div className="best-selling-container">
          <div className="best-selling-heading">
            <FontAwesomeIcon
              style={{ fontSize: "30px", marginRight: "10px" }}
              icon={faFire}
            />
            <p>This Month</p>
          </div>
          <div className="best-selling-navigation">
            <h1>Best Selling Products</h1>
            <div className="best-selling-button">
              <ViewAllButton/>
            </div>
          </div> 
          <div className="best-selling-items-container">
            {displayBestSellingItems}
          </div>         
        </div>      
    </>
  )
}

export default BestSelling
