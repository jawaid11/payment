import React, { useState } from 'react';
import SubscriptionFee from './SubscriptionFee';
import { useSubscription } from '../SubscriptionContext';

function Subscription() {
  const { setAmount } = useSubscription();
  const subscriptionPlans = [
    {
      duration: '12 Months',
      total: '₹99',
      perMonth: '₹8/mo',
      recommended: false,
      expaired: true
    },
    {
      duration: '12 Months',
      total: '₹179',
      perMonth: '₹15/mo',
      recommended: true,
      expaired: false
    },
    {
      duration: '6 Months',
      total: '₹149',
      perMonth: '₹25/mo',
      recommended: false,
      expaired: false
    },
    {
      duration: '3 Months',
      total: '₹99',
      perMonth: '₹33/mo',
      recommended: false,
      expaired: false
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelection = (index) => {
    setSelectedPlan(index);
    setAmount(subscriptionPlans[index].total);
  };
 
  return (
    <div className="container bg-white mr-7 p-1">
      <h1 className="text-xl font-bold px-3 mb-3">Choose your subscription plan</h1>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
        {subscriptionPlans.map((plan, index) => (
          <div
            key={index}
            className={`border p-1 rounded-md ${plan.recommended ? 'bg-green-300' : 'bg-gray-100' && plan.expaired ? 'bg-gray-500' : 'bg-gray-100'
              }`}
          >
            <div className="flex justify-between">
              <label>
                <input
                  type="radio"
                  name="subscriptionPlan"
                  checked={selectedPlan === index}
                  onChange={() => handlePlanSelection(index)}
                  className="mr-2"
                />
                <span className="font-bold">{plan.duration}</span>
              </label>
              <div>
                <p>Total: {plan.total}</p>
                <p>Per Month: {plan.perMonth}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-3">
        <SubscriptionFee />
      </div>
    </div>
  );
}

export default Subscription;
