import '../style/dashboard.css';
import Header from './Header';
import Footer from '../components/Footer';
import JsonFood from '../data/food.json'
import ListCategoryCard from "./ListCategoryCard";
import ListItemCard from "./ListItemCard";
import { useState } from 'react';


const Dashboard =(props)=>{

const [category, setCategory] = useState("Burger");

const ubahCategory =(data)=>{
  setCategory(data)
}
return (
    <div className="App">
    <Header/>
    <div style={{height:'60vh'}}>
      {/* <Routes className="itemNav">
      <Route path="/" element={<Listcategory select="Pizza"/>} />
      {/* <Route path="Burger" element={<Listcategory select="Burger"/>} />
      <Route path="Pizza" element={<Listcategory select="Pizza"/>} />
      <Route path="Pasta" element={<Listcategory select="Pasta"/>} />
      <Route path="Dessert" element={<Listcategory select="Dessert"/>} />
      <Route path="Rice" element={<Listcategory select="Rice"/>} />
      <Route path="Lumpia" element={<Listcategory select="Lumpia"/>} /> */} 
        <div className='itemNav'> 
            {<ListCategoryCard key={JsonFood.menu[0]} propsFood={JsonFood.menu[0]} tekan={()=>ubahCategory('Burger')} />} 
            {<ListCategoryCard key={JsonFood.menu[9]} propsFood={JsonFood.menu[9]} tekan={()=>ubahCategory('Pizza')}/>} 
            {<ListCategoryCard key={JsonFood.menu[17]} propsFood={JsonFood.menu[17]} tekan={()=>ubahCategory('Pasta')}/> } 
            {<ListCategoryCard key={JsonFood.menu[25]} propsFood={JsonFood.menu[25]} tekan={()=>ubahCategory('Dessert')}/> } 
            {<ListCategoryCard key={JsonFood.menu[33]} propsFood={JsonFood.menu[33]} tekan={()=>ubahCategory('Rice')}/> } 
            {<ListCategoryCard key={JsonFood.menu[47]} propsFood={JsonFood.menu[47]} tekan={()=>ubahCategory('Lumpia')}/> }    
        </div>
        
        <div className="Container">
            {JsonFood.menu.filter((food)=> food.category == category).map((food)=> {
            return <ListItemCard key={food.id} propsFood={food}/>})}
        </div>

        </div>
    
    <Footer />
    </div>
  );

}
  
  

export default Dashboard;
