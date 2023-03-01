import AssetList from "./Assets/AssetList";
import NewAsset from "./NewAsset/NewAsset";
import Card from "./UI/Card";
import classes from "./Display.module.css";
import { useEffect, useState } from "react";

function Display() {
  const [assetsArray, setAssetsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const onAddNewAsset = (newAsset) => {
    setAssetsArray((prevAssets) => [newAsset, ...prevAssets]);
  };


  useEffect(() => {
    const fetchAssetsHandler = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-crypto-assets-app-default-rtdb.europe-west1.firebasedatabase.app/assets.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const loadedAssets = [];
      for (const key in data) {
        loadedAssets.push({
          id: key,
          name: data[key].name,
          date: data[key].date,
          price: data[key].price,
          quantity: data[key].quantity,
        });
      }
      setAssetsArray(loadedAssets);
      setIsLoading(false);
    };

    fetchAssetsHandler().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <div className={classes.loading}>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className={classes.error}>
        <p>{error}! :/</p>
      </div>
    );
  }

  return (
    <Card className={classes.wrapper}>
      <h1 className={classes.title}>Crypto Tracker</h1>
      <NewAsset onAddNewAsset={onAddNewAsset} />
      <AssetList assets={assetsArray} />
    </Card>
  );
}

export default Display;
