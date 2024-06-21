import React, { useContext } from 'react'
import styles from './styles.module.scss'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div>
      <div className={styles.food__display} id='food-display'>
        <h2>Food dishes near you</h2>
        <div className={styles.food__display__list}>
            {food_list.map((item, i)=> {
                if(category==="All" || category===item.category) {
                    return <FoodItem key={i} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
                }            
            })}
        </div>
      </div>
    </div>
  )
}

export default FoodDisplay
