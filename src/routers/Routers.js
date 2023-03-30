import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Blog from "../pages/blog/Blog"
import BulkPartyOrder from "../pages/bulkpartyorder/BulkPartyOrder"
import CakeOrder from "../pages/cakeorder/CakeOrder"
import Careers from "../pages/careers/Careers"
import CorporateOrdering from "../pages/corporateordering/CorporateOrdering"
import ErrorPage from "../pages/errorpage/Error"
import Faq from "../pages/faq/Faq"
import FreshClub from "../pages/freshclub/FreshClub"
import Offers from "../pages/offers/Offers"
import OderHistory from "../pages/orderhistory/OrderHistory"
import Privacy from "../pages/privacy/Privacy"
import Search from "../pages/search/Serach"
import Signin from "../pages/signin/Signin"
import Signup from "../pages/signup/Signup"
import SignOut from "../pages/signout/Signout"
import Terms from "../pages/terms/Terms"
import UserProfile from "../pages/useraccount/UserAccount"
import AddressBook from "../pages/addressbook/AddressBook"
import FreshMoney from "../pages/freshmoney/FreshMoney"
import GiftCard from "../pages/giftcard/GiftCard"
import PaymentMethods from '../pages/paymentmethods/PaymentMethods';
import Favorite from '../pages/favorite/Favorite';
import Help from "../pages/helpcenter/HelpCenter"
import Cart from "../pages/cart/Cart"

const Routers = () => {
  return (
   
      <Routes>
        {/* Normal pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/bulkpartyorder" element={<BulkPartyOrder />} />
        <Route path="/cakeorder" element={<CakeOrder />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/freshclub" element={<FreshClub />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/helpcenter" element={<Help />} />
        <Route path="/cart" element={<Cart />} />
        
        {/* After login this will show */}
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/corporateordering" element={<CorporateOrdering />} />
        <Route path="/addressbook" element={<AddressBook />} />
        <Route path="/freshmoney" element={<FreshMoney />} />
        <Route path="/giftcard" element={<GiftCard />} />
        <Route path="/paymentmethods" element={<PaymentMethods />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/orderhistory" element={<OderHistory />} />
        <Route path="/signout" element={<SignOut />} />

      </Routes>
    
  );
};

export default Routers;
