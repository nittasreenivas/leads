
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <div  className='border border-2  m-2 p-2'>
      <Provider store={store}>
     <Navbar></Navbar>
     <Outlet></Outlet>
     </Provider>
    </div>
  );
}

export default App;
