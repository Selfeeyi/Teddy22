import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddRestaurant from './pages/AddRestaurant/AddRestaurant'
import ShowCase from './pages/ShowCase/ShowCase'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage'
import User from './pages/User/User'
import GetTheApp from './pages/GetTheApp/GetTheApp'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import SkipedPage from './pages/SkipedPage/SkipedPage'
import UserSettingsPage from './pages/UserSettingsPage/UserSettingsPage'

import TestPage from './pages/TestPage/TestPage'
// import AddRestaurantHeader from './components/AddRestaurantHeader/AddRestaurantHeader'
import App from './App'
import './index.css'
import RestaurantList from './components/Map/RestaurantList'
import LoginPage from './pages/Login/LoginPage'
import Landing from './pages/Landing/Landing'

import Caters from './pages/Caters/Caters'
import Resturants from './pages/Resturants/Resturants'
import LightMarque from './pages/LightMarque/LightMarque'
import HelpSupport from './pages/HelpSupport/HelpSupport'
 import Profile from './pages/Profile/Profile'
import Quotation from './pages/Quotation/Quotation'
import Billing from './pages/Billing/Billing'
import Invoice from './pages/Invoice/Invoice'
import Corporate from './pages/Corporate/Corporate'
import 'react-calendar/dist/Calendar.css';
import InvoicePage from './pages/InvoiceDownload/InvoicePage'
import { Provider } from 'react-redux'
import store from './store'
import QuotationTable from './pages/Quotation/QuotationTable'
import Cart from './pages/Cart/Cart'
import Contactus from './pages/ContactUs/Contactus'
import Blog from './pages/BlogArticle/Blog'
import Aboutus from './pages/AboutUs/Aboutus'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dummy from './pages/Dummy'
import DeleteAccount from './pages/DeleteAccount/DeleteAccount'
import Review from './pages/Review/Review'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
  <BrowserRouter>
  <ToastContainer autoClose={2000} position="top-right" />
    <Routes>
      {/* <Route index element={<ShowCase
       />} /> */}
      {/* <Route path="/" element={<ShowCase/>} /> */}
      {/* <Route path="/add-restaurant" element={<AddRestaurant />} /> */}
      <Route path="/show-case" element={<ShowCase />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/user/:userId/:hashId" element={<User />} />
      <Route path="/user/:userId/notifications" element={<SkipedPage />} />
      <Route path="/user/:userId/network" element={<SkipedPage />} />
      <Route path="/user/:userId/find-friends" element={<SkipedPage />} />
      <Route path="/user/:userId/settings" element={<UserSettingsPage />}/>
      <Route path="/get-the-app" element={<GetTheApp />} />
      <Route path="/:city/:hotel" element={<RestaurantPage />} />
      <Route path="/resturant/:id" element={<RestaurantPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/resturantList" element={<RestaurantList />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/caters" element={<Caters />} />
      <Route path="/resturants" element={<Resturants />} />
      <Route path="/corporate" element={<Corporate />} />
      <Route path="/geztemart" element={<LightMarque />} />
      <Route path="/helpandsupport" element={<HelpSupport />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/quotation" element={<QuotationTable />} />
      <Route path="/quotation/:id" element={<Quotation />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/invoices/:id" element={<InvoicePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/dummy' element={<Dummy/>}/>
      <Route path='/deleteaccount' element={<DeleteAccount/>}/>
      <Route path='/review' element={<Review/>}/>
   
    </Routes>
  </BrowserRouter>
  </Provider>
)
