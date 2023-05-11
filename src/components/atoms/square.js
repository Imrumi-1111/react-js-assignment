import styles from './square.module.css'

const Square = ( props ) => {
  return (
    <div onClick={props.onClick}className={styles.square}>
        <h1>{props.value}</h1>
        
    
    </div>
  );
};

export default Square;
