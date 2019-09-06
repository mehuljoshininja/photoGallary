import React from 'react'
import styles from '../styles.module.scss'
import GallaryCard from './GallaryCard'

function GallaryList ({ data = [] }) {
  return (
    <div className={styles.GallaryList}>
      {data.map(o => (
        <GallaryCard card={o} key={o.id} />
      ))}
    </div>
  )
}

export default GallaryList
