import React from 'react'
import { Icon } from 'antd'
import styles from '../styles.module.scss'

function GallaryCard ({ card, onlyPreview, showPreivew, removeFromFavourite = () => {}, addToFavourite = () => {} }) {
  const { thumbnailUrl, id, fav } = card
  return (
    <>
      <div className={styles.GallaryCard}>
        <div onClick={() => showPreivew(id)}>
          <img src={thumbnailUrl} className={styles.GallaryCard__image} />
        </div>
        {
          !onlyPreview &&
            <div
              className={styles.GallaryCard__favImg}
              onClick={!fav ? () => addToFavourite(id) : () => removeFromFavourite(id)}
            >
              {fav
                ? <Icon type='heart' theme='filled' />
                : <Icon type='heart' />}
            </div>
        }

      </div>

    </>
  )
}

export default GallaryCard
