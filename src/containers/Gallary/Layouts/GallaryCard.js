import React from 'react'
import { Icon } from 'antd'
import styles from '../styles.module.scss'

function GallaryCard ({ card, onlyPreview, showPreivew, addToFavourite = () => {} }) {
  const { thumbnailUrl, id, fav } = card
  return (
    <>
      <div className={styles.GallaryCard}>
        <div onClick={() => showPreivew(id)}>
          <img src={thumbnailUrl} className={styles.GallaryCard__image} />
        </div>
        {
          !onlyPreview &&
            <div onClick={!fav ? () => addToFavourite(id) : () => {}} className={fav ? styles.GallaryCard__favBtnDisable : styles.GallaryCard__favBtn}>
            Add to Favourite
            </div>
        }

        {
          fav &&
            <div className={styles.GallaryCard__favImg}>
              <Icon type='heart' theme='filled' />
            </div>
        }

      </div>

    </>
  )
}

export default GallaryCard
