import { useState } from "react";
import classes from "./AssetForm.module.css";

function AssetForm({ addNewAsset, onCancel, setIsSuccess }) {
  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [quantityInput, setQuantityInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (nameInput.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const newAssetData = {
      name: nameInput,
      price: priceInput,
      date: dateInput,
      quantity: quantityInput,
    };
    addNewAsset(newAssetData);
    setNameInput("");
    setDateInput("");
    setPriceInput("");
    setQuantityInput("");
  };

  const nameInputHandler = (e) => {
    setIsValid(true);
    setIsSuccess(false);
    setNameInput(e.target.value);
  };

  const priceInputHandler = (e) => {
    setPriceInput(e.target.value);
  };

  const dateInputHandler = (e) => {
    setDateInput(e.target.value);
  };

  const quantityInputHandler = (e) => {
    setQuantityInput(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.form__value}>
        {!isValid && (
          <p>
            <i className="fa-solid fa-triangle-exclamation"></i>This is not a valid
            name!
          </p>
        )}
        <label htmlFor="name">Cryptocurrency:</label>
        <input
          id="name"
          type="text"
          required
          value={nameInput}
          onChange={nameInputHandler}
        />
      </div>
      <div className={classes.form__value}>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          min="0"
          step="0.0001"
          required
          value={priceInput}
          onChange={priceInputHandler}
        />
      </div>
      <div className={classes.form__value}>
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          min="1"
          step="0.0001"
          required
          value={quantityInput}
          onChange={quantityInputHandler}
        />
      </div>
      <div className={classes.form__value}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          min="2012-01-01"
          required
          value={dateInput}
          onChange={dateInputHandler}
        />
      </div>
      <div className={classes.form__actions}>
        <button type="submit">Add Asset</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AssetForm;
