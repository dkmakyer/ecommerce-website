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
import ViewAllButton from "../view-all-button/ViewAllButton";

const FlashSales = ({ seconds, minutes, hours, days }) => {
  const [discount] = useState(true);
  const { products, error } = useContext(ProductContext);
  const [scroll, setScroll] = useState({ start: 0, end: 4 });
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (error) {
      console.log("Error during fetch " + error.message);
    }
  }, [products, error]);

  function scrollItem(e) {
    if (isScrolling) return; 
    setIsScrolling(true);
    let { className } = e.currentTarget;
    const totalProducts = products.length;

    setScroll((prev) => {
      const newScroll = { ...prev };
      switch (className) {
        case "left-arrow":
          (newScroll.start = Math.max(0, prev.start - 1)), //display the first item if we happen to go the first item index, so we don't have negative indices
            (newScroll.end = Math.max(4, prev.end - 1)); //display the last item if we happen to go beyond the first item index
          break;
        case "right-arrow":
          (newScroll.start = Math.min(prev.start + 1, totalProducts - 4)),
            (newScroll.end = Math.min(prev.end + 1, totalProducts));
          break;
        default:
          break;
      }
      return newScroll;
    });
    setTimeout(() => setIsScrolling(false), 300); //so that we can scroll again subsequently after 300ms
  }

  const { start, end } = scroll;
  const renderedItems = products.slice(start, end).map((product) => {
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
      <div className="flash-sales-header">
        <div className="today-container">
          <div className="today">
            <FontAwesomeIcon
              style={{ fontSize: "30px", marginRight: "10px" }}
              icon={faMapPin}
            />
            <p>Today's</p>
          </div>
          <h1>Flash Sales</h1>
        </div>
        <div className="countdown-container">
          <div className="countdown">
            <p>
              <span className="timer-figure">{days}</span>
              <span className="reduce-time-size">Days</span>
            </p>
            <p>
              <span className="timer-figure">{hours}</span>
              <span className="reduce-time-size">Hours</span>
            </p>
            <p>
              <span className="timer-figure">{minutes}</span>
              <span className="reduce-time-size">Minutes</span>
            </p>
            <p>
              <span className="timer-figure">{seconds}</span>
              <span className="reduce-time-size">Seconds</span>
            </p>
          </div>
          <div className="scroll">
            <div className="left-arrow" onClick={scrollItem}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="right-arrow" onClick={scrollItem}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
      <div className="items-container">{renderedItems}</div>
      <div className="view-all-products-button">
        <ViewAllButton />
      </div>
    </div>
  );
};

export default FlashSales;
