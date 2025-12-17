import { useContext, useState } from "react";
import "./WishList.css";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import BackButton from "../../components/back-button/BackButton";
import ItemCard from "../../components/item-card/ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";

const WishList = () => {
  const { favorites } = useContext(FavoritesContext);
  const [isWishlistPage] = useState(true);
  const displayProducts = favorites.map((product) => {
    return (
      <ItemCard
        key={product.title}
        title={product.title}
        image={product.image}
        price={product.price}
        rating={product.rating.rate}
        hasDiscount={product.hasDiscount}
        isWishlistPage={isWishlistPage}
      />
    );
  });
  return (
    <>
      <div className="wishlist-container">
        <div className="wishlist-navigation">
          <div className="wishlist-back-button">
            <BackButton />
          </div>
          <h2>Your Wishlist</h2>
        </div>
        {
          favorites.length === 0 ? (<h3 className="empty-favorites-text">Empty     <FontAwesomeIcon icon={faSadCry} /></h3>) : (<div className="wishlist-items-container">{displayProducts}</div>)
        }
      </div>
    </>
  );
};

export default WishList;
