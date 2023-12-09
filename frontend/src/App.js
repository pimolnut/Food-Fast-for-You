import './style/App.css';

// Routing
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import ContectUs from './Pages/ContectUs';
import ChoiceForOrder from './Pages/ChoiceForOrder';
import EditProfile from './Pages/EditProfile'
import RoutingOrderPage from './Pages/RoutingOrderPage';
import ChooseStore from './Pages/ChooseStore';
import OrderText from './Pages/OrderText';
import OrderDetail from './Pages/OrderDetail';


import ReceiveOrder from './Pages/ReceiveOrder';
import StatusOrder from './Pages/StatusOrder';
import YourOrder from './Pages/YourOrder';

import MenuTechNoIntger from './Pages/MenuTechNoInter';
import MenuPaSri from './Pages/MenuPaSri';
import MenuINhauy from './Pages/MenuINhauy';
import MenuMaMa from './Pages/MenuMaMa';
import MenuNaRong from './Pages/MenuNaRong';
import MenuBillion from './Pages/MenuBillion';
import MenuItList from './Pages/MenuItList';
import MenuIyen from './Pages/MenuIYen';
import MenuPFon from './Pages/MenuPFon';
import MenuOChaNa from './Pages/MenuOChaNa';
import MenuCurry from './Pages/MenuCurry';




const App = () => {

  return (
    <div className="App font-noto">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/contact' element={<ContectUs />}/>

          {/*After login*/}
          <Route path='/user' element={<ChoiceForOrder/>} />
          <Route path='/user/editprofile' element={<EditProfile />}/>
          <Route path='/user/restaurant' element={<ChooseStore/>} />

          {/* Order */}
          <Route path='/user/order' element={<OrderText/>} />
          <Route path='/user/order/statusorder' element={<StatusOrder />} />


          {/* Rider */}
          <Route path='/user/rider' element={<RoutingOrderPage/>} />
          <Route path='/user/rider/receiveorder' element={<ReceiveOrder />} />
          <Route path='/user/rider/order' element={<YourOrder />} />
          <Route path='/user/rider/update' element={<OrderDetail />} />
          

          {/*  Restaurant menu */}
          <Route path='/user/restaurant/technointer' element={<MenuTechNoIntger/>} />
          <Route path='/user/restaurant/pasri' element={<MenuPaSri />} />
          <Route path='/user/restaurant/inhauy' element={<MenuINhauy/>} />
          <Route path='/user/restaurant/mama' element={<MenuMaMa/>} />
          <Route path='/user/restaurant/narong' element={<MenuNaRong/>} />
          <Route path='/user/restaurant/billion' element={<MenuBillion/>} />
          <Route path='/user/restaurant/itlist' element={<MenuItList/>} />
          <Route path='/user/restaurant/iyen' element={<MenuIyen/>} />
          <Route path='/user/restaurant/pfon' element={<MenuPFon/>} />
          <Route path='/user/restaurant/ochana' element={<MenuOChaNa/>} />
          <Route path='/user/restaurant/curry' element={<MenuCurry/>} />

          <Route path='/orderdetail-path/:id' element={<OrderDetail />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
