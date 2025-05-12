import "../styles/Shop.css";
import Socials from "./Socials.tsx";
import ShopItem from "./ShopItem.tsx";
import { Media } from "../constants/Media.ts";

function Shop() {
    return (
        <div className="shop-container fade-in">
            <div className="shop-content">
                <div className="shop-grid-item">
                    <ShopItem
                        imageUrl={Media.GreenMugTallThumbnail}
                        description="Dark Planter"
                        price="$40.00"
                    />
                </div>
                <div className="shop-grid-item">
                    <ShopItem
                        imageUrl={Media.ModernLineVaseThumbnail}
                        description="Modern Line Vase"
                        price="$40.00"
                    />
                </div>
                <div className="shop-grid-item">
                    <ShopItem
                        imageUrl={Media.BubblegumMugThumbnail}
                        description="Bubblegum Mug"
                        price="$25.00"
                    />
                </div>
                <div className="shop-grid-item">
                    <ShopItem
                        imageUrl={Media.MoodyBowlThumbnail}
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
