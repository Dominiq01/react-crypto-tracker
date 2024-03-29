import classes from './Card.module.css';

function Card({children, className }) {
  const styles = classes.card +" "+ className;
  return <div className={styles}>
    {children}
  </div>
}

export default Card;