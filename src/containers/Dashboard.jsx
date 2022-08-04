import '../style/dashboard.css';
import Header from './Header';
import Footer from '../components/Footer';
import JsonFood from '../data/food.json'
import ListCategoryCard from "./ListCategoryCard";
import ListItemCard from "./ListItemCard";
import { useState, useEffect } from 'react';
import axios from 'axios';



const Dashboard =(props)=>{

const [category, setCategory] = useState("Burger");
const ubahCategory =(data)=>{
  setCategory(data)
}

const [foodnya,setFood] =useState([]);

useEffect(()=>{
  const fetchDataFood = async () => {

    try {
      const response  = await axios.get("https://62e7fcde249bb1284ea68714.mockapi.io/api/v1/food"); 
      setFood(response.data) ; 
      console.log(response.data)
    } catch (err) {
      console.log("error", err);
  }}
    fetchDataFood();
  }); 

return (
    <div className="App">
    <Header/>
    <div style={{height:'60vh'}}>
      {/* Ambil gambar category dari JSON  */}
        <div className='itemNav'> 
            {<ListCategoryCard key={JsonFood.image[0]} propsFood={JsonFood.image[0]} tekan={()=>ubahCategory('Burger')} />} 
            {<ListCategoryCard key={JsonFood.image[1]} propsFood={JsonFood.image[1]} tekan={()=>ubahCategory('Pizza')}/>} 
            {<ListCategoryCard key={JsonFood.image[2]} propsFood={JsonFood.image[2]} tekan={()=>ubahCategory('Pasta')}/> } 
            {<ListCategoryCard key={JsonFood.image[3]} propsFood={JsonFood.image[3]} tekan={()=>ubahCategory('Dessert')}/> } 
            {<ListCategoryCard key={JsonFood.image[4]} propsFood={JsonFood.image[4]} tekan={()=>ubahCategory('Rice')}/> } 
            {<ListCategoryCard key={JsonFood.image[5]} propsFood={JsonFood.image[5]} tekan={()=>ubahCategory('Lumpia')}/> }    
        </div>
        
        <div className="Container">
            { foodnya.filter((food)=> food.category == category).map((food)=> {
            return <ListItemCard key={food.id} propsFood={food}/>})}
        </div>
 
        </div>
    
    <Footer />
    </div>
  );

}
  
  

export default Dashboard;
