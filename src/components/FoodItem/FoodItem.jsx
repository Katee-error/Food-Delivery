import React, { useContext } from 'react'
import './FoodItem.scss'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { StoreContext } from '../../context/StoreContext'


const FoodItem = ({id,name,price,description,image}) => {
  const [itemCount, setItemCount] = useState(0);
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className="food__item">
      <div className="food__item__img__wrapper">
        <img className="food__item__img" src={image} alt="food" />
        {
          !cartItems[id]
          ? <img onClick={()=>addToCart(id)} className="add" src={assets.add_icon_white} alt="" />
          : <div className="food__item__counter">
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className="food__item__info">
        <div className="food__item__rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food__item__desc">{description}</p>
        <p className="food__item__price">${price}</p>
      </div>
    </div>
    
  )
}

export default FoodItem
