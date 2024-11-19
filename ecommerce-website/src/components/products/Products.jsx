import {useEffect, useContext} from 'react'
import "./Products.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft,faArrowRight,faShop} from "@fortawesome/free-solid-svg-icons";
import ItemCard from '../item-card/ItemCard';
import { ProductContext } from '../../contexts/ProductContext';

const Products = ({onShowDiscount}) => {
  const { products, error } = useContext(ProductContext);
  useEffect(() => {
    if (error) {
      console.log("Error during fetch " + error.message);
    } else {
      console.log(products);
    }
  }, [products, error]);

  const displayProducts = products.slice(11,19).map((product, i) => {
      return (
        <ItemCard
          key={product.id}
          title={product.title}
          category={product.category}
          image={product.image}
          price={product.price}
          rating={product.rating.rate}
          onShowDiscount={onShowDiscount}
        />
      );
  });

  return (
    <>
        <div className="our-products-container">
          <div className="our-products-heading">
            <FontAwesomeIcon
              style={{ fontSize: "30px", marginRight: "10px" }}
              icon={faShop}
            />
            <p>Our Products</p>
          </div>
          <div className="our-products-navigation">
            <h1>Explore Our Products</h1>
            <div className="scroll">
              <div className="left-arrow">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className="right-arrow">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
          <div className="our-products-items-container">
            {displayProducts}
          </div>
          <button className="our-products-button">View All Products</button>
        </div>      
    </>
  )
}

export default Products
