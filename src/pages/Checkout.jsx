import React, { useState } from 'react';

const CheckoutPage = ({ cart, total, setView, setPaymentMethod, paymentMethod }) => {
  const [onlineType, setOnlineType] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCompletePurchase = () => {
        if (paymentMethod === 'online' && !onlineType) {
      alert("Please select a payment method: UPI, Card, or Paytm");
      return;
    }

    setIsProcessing(true);
      setTimeout(() => {
      setIsProcessing(false);
      setView('success');
    }, 3000);
  };

    if (isProcessing) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white space-y-6">
        <div className="w-16 h-16 border-4 border-zinc-200 border-t-black rounded-full animate-spin"></div>
        <h2 className="text-2xl font-serif italic">Processing Payment...</h2>
      </div>
    );
  }

  return (
    <div className="w-full px-8 md:px-16 py-24 grid md:grid-cols-2 gap-24 bg-[#FAF9F6]">
      <div className="space-y-16">
        <h2 className="text-6xl font-serif italic tracking-tighter">Checkout</h2>
        
        {/* Input Fields */}
        <div className="space-y-10">
          <input placeholder="Full Name" className="w-full border-b-2 border-zinc-100 py-4 outline-none text-2xl focus:border-black bg-transparent" />
          <input placeholder="Mobile Phone" className="w-full border-b-2 border-zinc-100 py-4 outline-none text-2xl focus:border-black bg-transparent" />
          <textarea placeholder="Delivery Address" className="w-full border-b-2 border-zinc-100 py-4 outline-none text-2xl h-32 focus:border-black bg-transparent" />
        </div>

        {/* Payment Modes */}
        <div className="pt-10">
          <h3 className="text-3xl font-serif italic mb-10">Payment Mode</h3>
          <div className="grid grid-cols-2 gap-6">
            <button 
              onClick={() => { setPaymentMethod('cod'); setOnlineType(''); }} 
              className={`py-8 rounded-3xl font-bold uppercase tracking-widest transition-all ${paymentMethod === 'cod' ? 'bg-black text-white' : 'border border-zinc-200 text-zinc-400'}`}
            >
              COD
            </button>
            <button 
              onClick={() => setPaymentMethod('online')} 
              className={`py-8 rounded-3xl font-bold uppercase tracking-widest transition-all ${paymentMethod === 'online' ? 'bg-black text-white' : 'border border-zinc-200 text-zinc-400'}`}
            >
              Online Pay
            </button>
          </div>

          {/* Online Sub-Options */}
          {paymentMethod === 'online' && (
            <div className="mt-10 space-y-4">
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Select Method</p>
              
              <div 
                onClick={() => setOnlineType('upi')}
                className={`flex items-center justify-between p-6 rounded-2xl border-2 cursor-pointer transition-all ${onlineType === 'upi' ? 'border-black bg-white shadow-lg' : 'border-zinc-100 bg-white/50'}`}
              >
                <span className="text-xl font-medium">Google Pay / UPI</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${onlineType === 'upi' ? 'border-black' : 'border-zinc-300'}`}>
                  {onlineType === 'upi' && <div className="w-3 h-3 bg-black rounded-full"></div>}
                </div>
              </div>

              <div 
                onClick={() => setOnlineType('card')}
                className={`flex items-center justify-between p-6 rounded-2xl border-2 cursor-pointer transition-all ${onlineType === 'card' ? 'border-black bg-white shadow-lg' : 'border-zinc-100 bg-white/50'}`}
              >
                <span className="text-xl font-medium">Debit / Credit Card</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${onlineType === 'card' ? 'border-black' : 'border-zinc-300'}`}>
                  {onlineType === 'card' && <div className="w-3 h-3 bg-black rounded-full"></div>}
                </div>
              </div>

              <div 
                onClick={() => setOnlineType('paytm')}
                className={`flex items-center justify-between p-6 rounded-2xl border-2 cursor-pointer transition-all ${onlineType === 'paytm' ? 'border-black bg-white shadow-lg' : 'border-zinc-100 bg-white/50'}`}
              >
                <span className="text-xl font-medium">Paytm Wallet</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${onlineType === 'paytm' ? 'border-black' : 'border-zinc-300'}`}>
                  {onlineType === 'paytm' && <div className="w-3 h-3 bg-black rounded-full"></div>}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bill Section */}
      <div className="bg-zinc-50 p-16 rounded-[4rem] h-fit sticky top-32">
        <h2 className="text-4xl font-serif mb-12 italic border-b pb-6">Your Bill</h2>
        <div className="space-y-6 mb-12">
          {cart.map((item, i) => (
            <div key={i} className="flex justify-between text-xl italic font-light">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-5xl font-bold pt-12 mb-16 border-t border-zinc-200">
          <span>Total</span>
          <span className="text-pink-600">₹{total}</span>
        </div>
        <button 
          onClick={handleCompletePurchase} 
          className="w-full bg-black text-white py-8 rounded-3xl font-bold uppercase tracking-[0.3em] shadow-2xl hover:bg-zinc-800 transition-all"
        >
          {paymentMethod === 'online' ? `Pay Now ₹${total}` : 'Confirm Order'}
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;