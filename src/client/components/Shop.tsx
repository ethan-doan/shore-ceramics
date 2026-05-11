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
            imageUrl={Media.CrystalLargeBowl}
            description="Large Crystal Bowl"
            price="$40.00"
          />
        </div>
        <div className="shop-grid-item">
          <ShopItem
            imageUrl={Media.SingleServePitcher}
            description="Single Serve Pitcher"
            price="$20.00"
          />
        </div>
        <div className="shop-grid-item">
          <ShopItem
            imageUrl={Media.BubblyGrippyCup}
            description="Desert Sand Thumb Cup"
            price="$10.00"
          />
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default Shop;
