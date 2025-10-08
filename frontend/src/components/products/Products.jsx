import { useEffect, useContext, useState } from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import ItemCard from "../item-card/ItemCard";
import { ProductContext } from "../../contexts/ProductContext";
import ViewAllButton from "../view-all-button/ViewAllButton";

const Products = ({ onShowDiscount }) => {
  const [scroll, setScroll] = useState({ start: 11, end: 19 });
  const [isScrolling, setIsScrolling] = useState(false);
  const { products, error } = useContext(ProductContext);
  const [discount] = useState(false);

  useEffect(() => {
    if (error) {
      console.log("Error during fetch " + error.message);
    } else {
      // console.log(products);
      null;
    }
  }, [products, error]);

  function scrollItem(e) {
    if (isScrolling) return; //we wouldn't want an error to occur from more than one scrolling effect
    setIsScrolling(true);
    let { className } = e.currentTarget;
    const totalProducts = products.length;

    setScroll((prev) => {
      const newScroll = { ...prev };
      switch (className) {
        case "left-arrow":
          (newScroll.start = Math.max(0, prev.start - 1)), //display the first item if we happen to go the first item index, so we don't have negative indices
            (newScroll.end = Math.max(19, prev.end - 1)); //display the last item if we happen to go beyond the first item index
          break;
        case "right-arrow":
          (newScroll.start = Math.min(prev.start + 1, totalProducts - 11)),
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
  const displayProducts = products.slice(start, end).map((product, i) => {
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
            <div className="left-arrow" onClick={scrollItem}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="right-arrow" onClick={scrollItem}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="our-products-items-container">{displayProducts}</div>
          <div className="our-products-button">
            <ViewAllButton/>
          </div>
      </div>
    </>
  );
};

export default Products;
