import React from "react"
import { title } from "./constants"
import styles from './styles.module.css'

export const Header = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.container}>{title}</h1> 
        </div>
    )
}