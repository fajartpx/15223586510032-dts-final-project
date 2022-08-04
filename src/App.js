import './App.css';
import Listcategory from './containers/ListCategory';
import ListItem from './containers/ListItem';
import Header from './containers/Header';
import { Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import Signup from './containers/Signup';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  
  return (
    <div className="App">
    <div>
      <Routes>
      <Route path="/" element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>} />
      <Route path="Login" element={<Login/>} />
      <Route path="Signup" loginOnly={false} element={<Signup/>} />
     </Routes>
    </div>

     {/* <ListItem select="Pizza"/> */}
    </div>
  );
}

export default App;
