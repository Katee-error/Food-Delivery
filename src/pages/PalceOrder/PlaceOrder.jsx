import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Place-order.scss'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div>
      <form className='place__order'>
        <div className="place-order-left">
          <h2>Delivery Information</h2>
          <div className="multi-flelds">
            < input type="text" placeholder='First name' />
            <input type="text" placeholder='Last name' />
          </ div>
            <input type="email" placeholder='Email address' />
            < input type="text" placeholder='Street' />
          <div className="multi-flelds">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multi-flelds">
            <input type="text" placeholder='Zip Code' />
            <input type="text" placeholder='Country'/>
          </div>
          <input type="phone" placeholder='Phone' />
        </div>
        <div className="place-order-right">
        <div className="cart__total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart__total__details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart__total__details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart__total__details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
        </div>
        </form>
        </div>
        )}
 
export default PlaceOrder
