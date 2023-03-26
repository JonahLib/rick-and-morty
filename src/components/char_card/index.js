  import Link from 'next/link'
import styles from './styles.module.css'
  
  export const CharCard = (props) => {
    return (
      <Link href={`/charactors/${props?.props?.id}`}>
        <li className={styles.container}>
            <img src={props?.props.image} alt={props?.props?.name}/>
            <h1 className={styles.title}>{props?.props?.name}</h1>
        </li>
      </Link>
    )
  }