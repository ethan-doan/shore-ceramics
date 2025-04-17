import "../styles/ShopItem.css";
import { Link } from "react-router-dom";

type ShopItemProps = {
    imageUrl: string;
    description: string;
    price: string;
};

function ShopItem({ imageUrl, description, price }: ShopItemProps) {
    return (
        <div className="shop-item-container">
            <div className="shop-item">
                <img
                    src={imageUrl}
                    alt={description}
                    className="shop-item-image"
                />
                <div className="shop-item-content">
                    <p className="shop-item-description">
                        {description} | {price}
                    </p>
                    <Link to="/contact">
                        <button className="shop-item-buy">Buy</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ShopItem;
