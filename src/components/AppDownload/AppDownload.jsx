import React from 'react'
import styles from './styles.module.scss'
import { assets } from '../../assets/assets'


const AppDownload = () => {
  return (
    <>
    <div className={styles.app__download} id='app-download'>
      <p>For Better Experience Download <br/> Tomato App</p>
      <div className={styles.app__download__platforms}>
        <img src={assets.play_store} alt="play-store" />
        <img src={assets.app_store} alt="app-store" />
      </div>
    </div>
    </>
  )
}

export default AppDownload
// проверить работу класса активности6 почему-то не срабатывает переключение и применение класса 