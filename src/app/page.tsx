'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Banner from '../components/banner/banner'
import Category from '../components/category/category'
import Carroussel from '@/components/carroussel/carroussel'
import NavBar from '@/components/navbar/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
              <NavBar />
      <div className={styles.content}>
        <div className={styles.banner}>
          <Banner
            src="https://th.bing.com/th/id/R.6db651919d180d4b5d8be16397970981?rik=70WITgrJ7VYMIg&pid=ImgRaw&r=0"
            alt="Banner"
          />
        </div>
        <div className={styles.categories}>
          <Category/>
          <Category/>
          <Category/>
          <Category/>
          <Category/>
        </div>
        <div className={styles.carroussel}>
          <Carroussel/>
        </div>
      </div>
    </div>
  )
}
