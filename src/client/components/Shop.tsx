import "../styles/Shop.css";
import Socials from "./Socials.tsx";
import ShopItem from "./ShopItem.tsx";

function Shop() {
    return (
        <div className="shop-container fade-in">
            <div className="shop-content">
                <ShopItem
                    imageUrl="/media/GreenMugTall.jpg"
                    description="Dark Planter"
                    price="$40.00"
                />
                <ShopItem
                    imageUrl="/media/CactusMug.jpg"
                    description="Cactus Mug"
                    price="$20.00"
                />
                <ShopItem
                    imageUrl="/media/ModernLineVase.jpg"
                    description="Modern Line Vase"
                    price="$40.00"
                />
                <ShopItem
                    imageUrl="/media/BubblegumMug.jpg"
                    description="Bubblegum Mug"
                    price="$25.00"
                />
                <ShopItem
                    imageUrl="/media/MoodyBowl.jpg"
                    description="Moody Bowl"
                    price="$45.00"
                />
            </div>
            <Socials />
        </div>
    );
}

export default Shop;
