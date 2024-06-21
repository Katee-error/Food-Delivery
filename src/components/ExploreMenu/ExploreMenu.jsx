import React from 'react'
import './ExploreMenu.scss'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore__menu" id='explore-menu'>
      <h1>Explore our menu</h1>
      <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore__menu__list">
        {menu_list.map((item, i) => {
          return (
            <div 
            onClick={()=>setCategory(prev=>prev===item.menu_name? "All" :item.menu_name)} 
            key={i} 
            className="explore__menu__list__item">
              <img className={category===item.menu_name ? "active": ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div> 
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
// проверить работу класса активности6 почему-то не срабатывает переключение и применение класса 