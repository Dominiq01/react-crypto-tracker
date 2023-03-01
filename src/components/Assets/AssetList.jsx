import classes from "./AssetList.module.css";
import AssetItem from "./AssetItem";
import AssetFilter from "./AssetFilter";
import { useState } from "react";
import { Temporal } from "@js-temporal/polyfill";
import { useAutoAnimate } from '@formkit/auto-animate/react';

function AssetList({ assets }) {
  const [filter, setFilter] = useState("");
  const [parent, enableAnimations] = useAutoAnimate();

  let filteredAssets = assets;

  if (filter === "name") {
    filteredAssets = assets.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  } else if (filter === "price") {
    filteredAssets = assets.sort((a, b) => a.price - b.price);
  } else if (filter === "quantity") {
    filteredAssets = assets.sort((a, b) => a.quantity - b.quantity);
  } else if (filter === "date") {
    filteredAssets = assets.sort((a, b) =>
      Temporal.PlainDate.compare(
        Temporal.PlainDate.from(a.date),
        Temporal.PlainDate.from(b.date)
      )
    );
  }

  return (
    <>
      <AssetFilter onFilter={setFilter} filterVal={filter} />
      <ul className={classes.assets} ref={parent}>
        {filteredAssets.length === 0 && (
          <p>No assets to display. Please add some.</p>
        )}
        {filteredAssets.map((asset) => (
          <AssetItem
            key={asset.id}
            name={asset.name}
            date={asset.date}
            price={asset.price}
            quantity={asset.quantity}
          />
        ))}
      </ul>
    </>
  );
}

export default AssetList;
