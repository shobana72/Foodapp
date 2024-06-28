import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Search from './Pages/Search';
import Offers from './Pages/Offers';
import Food from './Pages/Food';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Help from './Pages/Help';
import Cart from './Pages/Cart';
import Admin from './Admin/Admin';
import Updateitems from './Admin/Updateitems';
import UploadItems from './Admin/Uploaditems';
import EditItems from './Admin/EditItems';
import Users from './Admin/Users';
import Search2 from './Pages/Search2'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/home' element={<Home/>}></Route>
          <Route path="/search" element={<Search/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path='/food/:id' element={<Food/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/' element={<Signin/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/admin/upload' element={<UploadItems/>}/>
          <Route path='/admin/update' element={<Updateitems/>}/>
          <Route path='/admin/edititems/:id' element={<EditItems />} loader={({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)}/>
          <Route path='/admin/users' element={<Users/>}/>
          <Route path='/search2' element={<Search2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
