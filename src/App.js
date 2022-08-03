import './App.css';
import Listcategory from './containers/ListCategory';
import ListItem from './containers/ListItem';
import Header from './containers/Header';
import { Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
    <Header/>
    <div style={{height:'50vh'}}>
      <Routes className="itemNav">
      <Route path="/" element={<Listcategory select="Burger"/>} />
      <Route path="Burger" element={<Listcategory select="Burger"/>} />
      <Route path="Pizza" element={<Listcategory select="Pizza"/>} />
      <Route path="Pasta" element={<Listcategory select="Pasta"/>} />
      <Route path="Dessert" element={<Listcategory select="Dessert"/>} />
      <Route path="Rice" element={<Listcategory select="Rice"/>} />
      <Route path="Lumpia" element={<Listcategory select="Lumpia"/>} />
     </Routes>
    </div>
     
    
    <Footer />


     
     {/* <ListItem select="Pizza"/> */}
    </div>
  );
}

export default App;
