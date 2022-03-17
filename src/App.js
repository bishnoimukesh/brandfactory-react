import './App.css';
import {HomePage} from './pages/HomePage/HomePage';
import {ProductPage} from './pages/ProductPage/ProductPage';
import {LoginPage} from './pages/LoginPage/LoginPage';
import {SignUpPage} from './pages/SignUpPage/SignUpPage';
import {CartPage} from './pages/CartPage/CartPage';
import {WishListPage} from './pages/WishListPage/WishListPage';
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute';
// import Data from './data/data.json';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MockMan from "mockman-js";

function App() {
  return (
    <div>
      <ToastContainer
        position='top-right'
        autoClose={1500}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={5}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/WishListPage" element={<WishListPage />} />
        </Route>
        <Route path="/LoginPage" element={<LoginPage  />} />
        <Route path="/SignUpPage" element={<SignUpPage  />} />
        
        <Route path="/mock" element={<MockMan  />} />
      </Routes>
    </div>
  );
}

export default App;