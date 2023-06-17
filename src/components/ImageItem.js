import React from 'react'
import styles from '../styles/ImageItem.module.css'

const ImageItem = ({image}) => {
  return (
    <div className={styles.imageItemContainer}>
        <img className={styles.images} src={image.link} alt={image.name}/>
    </div>
  )
}

export default ImageItem