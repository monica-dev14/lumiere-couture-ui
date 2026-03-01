import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import StoryPage from './pages/Story';
import Collections from './pages/Collections';
import NewArrivals from './pages/NewArrivals';
import Customized from './pages/Customized';
import CheckoutPage from './pages/Checkout';
import LoginPage from './pages/Login';
import OrderSuccess from './pages/OrderSuccess';
import AnnouncementBar from './components/AnnouncementBar'
const App = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home'); 
  const [user, setUser] = useState(null); 
  const [orderDate] = useState("March 05, 2026");
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const addToBag = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to bag!`);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const renderView = () => {
    switch(view) {
      case 'login': 
        return <LoginPage setUser={setUser} setView={setView} />;
      case 'story': 
        return <StoryPage />;
      case 'collection': 
        return <Collections addToBag={addToBag} />;
      case 'customize': 
        return <Customized addToBag={addToBag} />;
      case 'arrivals': 
        return <NewArrivals addToBag={addToBag} />;
      case 'checkout': 
        return <CheckoutPage 
          cart={cart} 
          total={totalPrice} 
          setView={setView} 
          setPaymentMethod={setPaymentMethod} 
          paymentMethod={paymentMethod} 
        />;
      case 'success': 
        return <OrderSuccess date={orderDate} setView={setView} setCart={setCart} />;
      default: 
        return <HomePage setView={setView} user={user} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden p-0 m-0">
      <AnnouncementBar />
       <Navbar 
        setView={setView} 
        user={user} 
        setUser={setUser} 
        cartLength={cart.length} 
      />

      <main className="w-full">
        {renderView()}
      </main>

      <Footer />
    </div>
  );
};

export default App;