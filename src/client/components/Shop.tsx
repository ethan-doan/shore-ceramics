import "../styles/Shop.css";
import Socials from "./Socials.tsx";
import ShopItem from "./ShopItem.tsx";
import CactusMug from "../media/CactusMug.jpeg";
import GreenMugTall from "../media/GreenMugTall.jpeg";
import PurpleBubbleVase from "../media/PurpleBubbleVase.jpeg";
import ModernLineVase from "../media/ModernLineVase.jpeg";
import BubblegumMug from "../media/BubblegumMug.jpeg";
import MoodyBowl from "../media/MoodyBowl.jpeg";

function Shop() {
    return (
        <div className="shop-container">
            <div className="shop-content">
                <ShopItem
                    imageUrl={GreenMugTall}
                    description="Dark Planter"
                    price="$40.00"
                />
                <ShopItem
                    imageUrl={CactusMug}
                    description="Cactus Mug"
                    price="$20.00"
                />
                <ShopItem
                    imageUrl={PurpleBubbleVase}
                    description="Purple Bubble Vase"
                    price="$40.00"
                />
                <ShopItem
                    imageUrl={ModernLineVase}
                    description="Modern Line Vase"
                    price="$40.00"
                />
                <ShopItem
                    imageUrl={BubblegumMug}
                    description="Bubblegum Mug"
                    price="$25.00"
                />
                <ShopItem
                    imageUrl={MoodyBowl}
                    description="Moody Bowl"
                    price="$45.00"
                />
            </div>
            <Socials />
        </div>
    );
}

export default Shop;
