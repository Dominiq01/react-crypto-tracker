import { useState } from "react";
import AssetForm from "./AssetForm";
import classes from "./NewAsset.module.css";

function NewAsset({ onAddNewAsset }) {
  const [formIsShown, setFormIsShown] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState();
  
  const addNewAsset = async (newAsset) => {
    const response = await fetch(
      "https://react-crypto-assets-app-default-rtdb.europe-west1.firebasedatabase.app/assets.json",
      {
        method: "POST",
        body: JSON.stringify(newAsset),
      }
    );

    if(!response.ok) {
      setIsSuccess(false);
      setError("Something went wrong!");
      throw new Error("Something went wrong!");
    }

    const data = await response.json();

    onAddNewAsset({
      id: data.name,
      ...newAsset,
    });
    setIsSuccess(true);
  };

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const closeFormHandler = () => {
    setFormIsShown(false);
    setIsSuccess(false);
  };

  if (!formIsShown) {
    return (
      <div className={classes["panel-button"]}>
        <button className={classes.button} onClick={showFormHandler}>
          Add New Asset
        </button>
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <AssetForm addNewAsset={addNewAsset} onCancel={closeFormHandler} setIsSuccess={setIsSuccess}/>
      {isSuccess && <p className={classes.success}><i className="fa-solid fa-circle-check"></i>Success!</p>}
      {error && <p className={classes.error}><i className="fa-solid fa-circle-exclamation"></i>{error}</p>}
    </div>
  );
}

export default NewAsset;
