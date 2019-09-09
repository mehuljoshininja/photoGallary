import React from 'react'
import { useSelector } from 'react-redux'
import GallaryCard from './GallaryCard'
import styles from '../styles.module.scss'

function Favourite (props) {
  const images = useSelector(state => state.photos.favourite) || []
  return (
    <div className={styles.Favourite}>
      <div className={styles.Favourite__header}>
        <p> My Favourite List </p>
      </div>
      <div className={styles.Favourite__body}>
        {
          images.length === 0 &&
            <p> No Favourite Images found. </p>
        }
        {
          images.map(o => (
            <GallaryCard onlyPreview card={o} key={o.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Favourite
