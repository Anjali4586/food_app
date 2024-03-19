import React, { useContext } from 'react'
import './PlaceOrder.css';
import { StoreContext } from '../../../Context/StoreContext';

const PlaceOrder = () => {
  const {getCartTotalAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className='multi-fileds'>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='Last name'/>
        </div>
        <input type='email' placeholder='Email Address'/>
          <input type='text' placeholder='Street'/>
          <div className='multi-fileds'>
          <input type='text' placeholder='City'/>
          <input type='text' placeholder='State'/>
        </div>
        <div className='multi-fileds'>
          <input type='text' placeholder='Zipcode'/>
          <input type='text' placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getCartTotalAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getCartTotalAmount()+2}</b>
            </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
            </div>
            <div className="cart-promocode">
              <div>
                <p>If you have promo code,Enter here</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder='promocode'/>
                  <button>Submit</button>
                </div>
              </div>

            </div>


      </div>

    </form>
  )
}

export default PlaceOrder