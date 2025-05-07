import "../styles/Shop.css";
import Socials from "./Socials.tsx";
import ShopItem from "./ShopItem.tsx";

function Shop() {
    return (
        <div className="shop-container fade-in">
            <div className="shop-content">
                <div className="shop-grid-item">
                    <ShopItem
                        imageUrl="/media/GreenMugTall.jpg"
                        description="Dark Planter"
                        price="$40.00"
                    />
                </div>
                <div className="shop-grid-item">
                    <ShopItem
                        imageUrl="/media/ModernLineVase.jpg"
                        description="Modern Line Vase"
                        price="$40.00"
                    />
                </div>
                <div className="shop-grid-item">
                    <ShopItem
                        imageUrl="/media/BubblegumMug.jpg"
                        description="Bubblegum Mug"
                        price="$25.00"
                    />
                </div>
                <div className="shop-grid-item">
                    <ShopItem
                        imageUrl="/media/MoodyBowl.jpg"
                        description="Moody Bowl"
                        price="$45.00"
                    />
                </div>
            </div>
            <Socials />
        </div>
    );
}

export default Shop;
