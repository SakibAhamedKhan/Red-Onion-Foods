import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartAdded from './Pages/CartAdded/CartAdded';
import FoodDetails from './Pages/FoodDetails/FoodDetails';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Loading from './Pages/Shared/Loading/Loading';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/food/:foodId/:type' element={<FoodDetails></FoodDetails>}></Route>
        <Route path='/cart' element={<CartAdded></CartAdded>}></Route>
      </Routes>
    </div>
  );
}

export default App;
