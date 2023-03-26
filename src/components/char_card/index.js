  import styles from './styles.module.css'
  
  export const CharCard = (props) => {
    return (
        <li className={styles.container}>
            <img src={props?.props.image} alt={props?.props?.name}/>
            <h1>{props?.props?.name}</h1>
        </li>
    )

  }