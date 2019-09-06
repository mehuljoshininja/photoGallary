import React from 'react'
import styles from '../styles.module.scss'

function GallaryCard ({ card }) {
  const { thumbnailUrl } = card
  return (
    <div className={styles.GallaryCard}>
      <div>
        <img src={thumbnailUrl} className={styles.GallaryCard__image} />
      </div>
    </div>
  )
}

export default GallaryCard
