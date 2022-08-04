import './App.css';
import Listcategory from './containers/ListCategory';
import ListItem from './containers/ListItem';
import Header from './containers/Header';
import { Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';

function App() {
  
  return (
    <div className="App">
    <div style={{height:'50vh'}}>
      <Routes className="itemNav">
      <Route path="/" element={<Dashboard/>} />
      <Route path="Login" element={<Login/>} />
     </Routes>
    </div>

     {/* <ListItem select="Pizza"/> */}
    </div>
  );
}

export default App;
