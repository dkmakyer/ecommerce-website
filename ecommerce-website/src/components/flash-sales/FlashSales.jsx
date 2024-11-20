import { useContext, useEffect, useState } from "react";
import "./FlashSales.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import ItemCard from "../item-card/ItemCard";
import { ProductContext } from "../../contexts/ProductContext";

const FlashSales = ({ seconds, minutes, hours, days }) => {
  const [discount, setDiscount] = useState(true);
  const { products, error } = useContext(ProductContext);
  
  useEffect(() => {
    if (error) {
      console.log("Error during fetch " + error.message);
    } else {
      console.log(products);
    }
  }, [products, error]);

  const renderedItems = products.slice(0,6).map((product, i) => {
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
    <div className="flash-sales-container">
      <div className="today">
        <FontAwesomeIcon
          style={{ fontSize: "30px", marginRight: "10px" }}
          icon={faMapPin}
        />
        <p>Today's</p>
      </div>
      <div className="timer">
        <h1>Flash Sales</h1>
        <div className="countdown">
          <p>
            <span className="reduce-time-size">Days</span> <span>{days}</span>
            <span className="colon">:</span>
          </p>
          <p>
            <span className="reduce-time-size">Hours</span> <span>{hours}</span>
            <span className="colon">:</span>
          </p>
          <p>
            <span className="reduce-time-size">Minutes</span>
            <span>{minutes}</span> <span className="colon">:</span>
          </p>
          <p>
            <span className="reduce-time-size">Seconds</span>
            <span>{seconds}</span>
          </p>
        </div>
        <div className="scroll">
          <div className="left-arrow">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="right-arrow">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
      <div className="items-container">{renderedItems}</div>
      <button className="view-all-products-button">View All Products</button>
    </div>
  );
};

export default FlashSales;
