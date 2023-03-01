import Card from "../UI/Card";
import classes from "./AssetFilter.module.css";

function AssetFilter({ onFilter, filterVal }) {
  const sortByNameHandler = () => {
    onFilter("name");
  };
  const sortByPriceHandler = () => {
    onFilter("price");
  };
  const sortByQuantityHandler = () => {
    onFilter("quantity");
  };
  const sortByDateHandler = () => {
    onFilter("date");
  };
  return (
    <>
      <h3 className={classes.title}>Your assets</h3>
      <div>
        <div className={classes.filter}>
          <div onClick={sortByNameHandler}>
            Name
            <div className={classes.filter__sign}>
              <i
                className={
                  filterVal === "name"
                    ? `fa-solid fa-sort-up ${classes.active}`
                    : "fa-solid fa-sort-up"
                }
              ></i>
            </div>
          </div>
          <div onClick={sortByDateHandler}>
            Date
            <div className={classes.filter__sign}>
              <i
                className={
                  filterVal === "date"
                    ? `fa-solid fa-sort-up ${classes.active}`
                    : "fa-solid fa-sort-up"
                }
              ></i>
            </div>
          </div>
          <div onClick={sortByPriceHandler}>
            Price
            <div className={classes.filter__sign}>
              <i
                className={
                  filterVal === "price"
                    ? `fa-solid fa-sort-up ${classes.active}`
                    : "fa-solid fa-sort-up"
                }
              ></i>
            </div>
          </div>
          <div onClick={sortByQuantityHandler}>
            Quantity
            <div className={classes.filter__sign}>
              <i
                className={
                  filterVal === "quantity"
                    ? `fa-solid fa-sort-up ${classes.active}`
                    : "fa-solid fa-sort-up"
                }
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssetFilter;
