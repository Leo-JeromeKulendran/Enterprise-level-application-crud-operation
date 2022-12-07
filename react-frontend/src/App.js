import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Emloyees from './pages/Emloyees';
import EmployeeView from './pages/EmployeeView';
import EmployeeAdd from './pages/EmployeeAdd';
import AddCustomer from './pages/AddCustomer';
import AddRoom from './pages/AddRoom';
import RoomView from './pages/RoomView';
import CustomerView from './pages/CustomerView';
import Customer from './pages/Customer';
import Rooms from './pages/Rooms';
import EditRoom from './pages/EditRoom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/emp' element={<Emloyees/>} />
          <Route path='/empview' element={<EmployeeView/>} />
          <Route path='/empadd' element={<EmployeeAdd/>} />
          <Route path='/addcustomer' element={<AddCustomer/>} />
          <Route path='/addroom' element={<AddRoom/>} />
          <Route path='/roomview' element={<RoomView/>} />
          <Route path='/customview' element={<CustomerView/>} />
          <Route path='/customer' element={<Customer/>} />
          <Route path='/rooms' element={<Rooms/>} />
          <Route path='/editroom/:id' element={<EditRoom/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
