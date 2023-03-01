import classes from "./AssetItem.module.css";

function AssetItem({ name, price, date, quantity }) {
  return (
    <li className={classes.asset}>
      <h2 className={classes.asset__name}>{name}</h2>
      <div className={classes.asset__date}>{date.toString()}</div>
      <div className={classes.asset__price}>${price}</div>
      <div className={classes.asset__quantity}>{quantity}x</div>
    </li>
  );
}

export default AssetItem;
