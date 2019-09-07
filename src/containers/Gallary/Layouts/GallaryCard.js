import React from 'react'
import styles from '../styles.module.scss'

function GallaryCard ({ card, showPreivew }) {
  const { thumbnailUrl, id } = card
  return (
    <div className={styles.GallaryCard} onClick={() => showPreivew(id)}>
      <div>
        <img src={thumbnailUrl} className={styles.GallaryCard__image} />
      </div>
    </div>
  )
}

export default GallaryCard
