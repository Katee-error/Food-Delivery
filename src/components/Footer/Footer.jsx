import React from 'react'
import styles from './styles.module.scss'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className={styles.footer} id='footer'>
      <div className={styles.footer__content}>
        <div className={styles.footer__content__left}>
          <img src={assets.logo} alt="logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem, quibusdam ipsam, soluta doloribus excepturi incidunt nobis quae debitis nostrum minus nam laborum impedit eveniet. Blanditiis eius voluptate voluptates odit!</p>
          <div className={styles.footer__social__links}>
            <img src={assets.facebook_icon} alt="fasebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className={styles.footer__content__center}>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className={styles.footer__content__right}>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <a href="tel:+12124567890" class="tel">
						    <p>+1-212-456-7890</p>
					    </a>
            </li>
            <li>
              <a href="mailto:marketing@spectr-ait.ru" class="email">
						    <p>contact@tomato.com</p>
					    </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p> Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
// сделать анимацию fadeIn