import React from 'react'
import './ExploreMenu.css';
import { menu_list } from '../assets/assets/assets';


const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='exploreMenu' id="explore">
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with finest ingredients,satisfy your cravings and elevate your dining experience.one delicious meal at a time.</p>
         <div className="explore-menu-list">
            {
                menu_list.map((item,index)=>{
                    return(
                        <div className='explore-menu-list-items' key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="items"/>
                            <p>{item.menu_name}</p>
                        </div>

                    )
                })
            }
         </div>
         <hr/>
    </div>
  )
}

export default ExploreMenu