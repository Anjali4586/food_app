import React,{useContext} from 'react'
import './FoodItem.css';
import rating_stars from '../assets/assets/rating_starts.png';
import  add_icon_white from '../assets/assets/add_icon_white.png';
import remove_icon from '../assets/assets/remove_icon_red.png';
import add_icon_green from '../assets/assets/add_icon_green.png';
import { StoreContext } from '../../Context/StoreContext';




const FoodItem = ({id,name,price,description,image}) => {

  

 const{ cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className='food-item-image-container'>
            <img className='food-item-image' src={image} alt="food"/>
            {
              !cartItems[id] 
               ?<img onClick={()=>addToCart(id)} className="add" src={add_icon_white} alt=""/>
              :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={remove_icon} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={add_icon_green} alt=""/>
              </div>
            }
        </div>
        <div className="food-item-info">
            <div className='food-item-rating'>
            <p>{name}</p>
            <img src={rating_stars} alt="star-rating"/>
        </div>
        <p className='food-item-description'>{description}</p>
        <p className='food-item-price'>${price}</p>
        </div>

    </div>
  )
}

export default FoodItem
