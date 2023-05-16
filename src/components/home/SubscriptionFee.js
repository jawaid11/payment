import React from 'react';
import { Link } from 'react-router-dom';
import { useSubscription } from '../SubscriptionContext';
import RazorpayBadge from './RazorpayBadge';

function SubscriptionFee() {
  const { totalAmount } = useSubscription();

  return (
    <div className="container py-3">
      <div className='flex justify-between'>
        <h2 className="text-xl font-bold border-gray-300">Subscription Fee</h2>
        <p className="text-xl font-bold">₹18,500</p>
      </div>
      <div className=' border rounded-md p-1 bg-red-300'>
      <p>Limited time offer</p>
      <div className='flex justify-between'>
        <p>Offer valid till 25th March 2023</p>
        <p> - ₹18,401</p>
      </div>
      </div>
      <div className='flex justify-between'>
        <p className="mt-4">Total (Incl. of 18% GST)</p>
        <p className="text-2xl font-bold">{totalAmount}</p>
      </div>
      <div className="my-2 flex justify-between">
        <button className="bg-red-500 text-white px-4 py-1 rounded-md">Cancel</button>
        <Link to="/payment" className="bg-blue-500 text-white px-4 py-1 rounded-md">
          Proceed to Pay
        </Link>
      </div>
      <RazorpayBadge />
    </div>
  );
}

export default SubscriptionFee;

