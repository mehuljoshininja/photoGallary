import React from 'react'
import styles from '../styles.module.scss'
import GallaryCard from './GallaryCard'

function GallaryList ({ data = [], showPreivew }) {
  return (
    <div className={styles.GallaryList}>

      {data.map(o => (
        <GallaryCard showPreivew={showPreivew} card={o} key={o.id} />
      ))}
    </div>
  )
}

export default GallaryList
