import React, { useState } from 'react';
import { useSubscription } from '../SubscriptionContext';

function PaymentForm() {
  const { totalAmount } = useSubscription();
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log({ cardNumber, cardHolderName, expirationDate, securityCode, totalAmount });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!cardNumber) {
      errors.cardNumber = 'Card Number is required';
      isValid = false;
    }

    if (!cardHolderName) {
      errors.cardHolderName = 'Cardholder Name is required';
      isValid = false;
    }

    if (!expirationDate) {
      errors.expirationDate = 'Expiration Date is required';
      isValid = false;
    }

    if (!securityCode) {
      errors.securityCode = 'Security Code is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <div className="flex justify-center items-center m-5">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white w-96 overflow-hidden p-4">
        <div>
          <label htmlFor="cardNumber" className="block text-gray-700 font-bold">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.cardNumber ? 'border-red-500' : ''}`}
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
          />
          {errors.cardNumber && <p className="text-red-500">{errors.cardNumber}</p>}
        </div>
        <div>
          <label htmlFor="cardHolderName" className="block text-gray-700 font-bold">
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardHolderName"
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.cardHolderName ? 'border-red-500' : ''}`}
            placeholder="John Doe"
            value={cardHolderName}
            onChange={(event) => setCardHolderName(event.target.value)}
          />
          {errors.cardHolderName && <p className="text-red-500">{errors.cardHolderName}</p>}
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="expirationDate" className="block text-gray-700 font-bold">
              Expiration Date
            </label>
            <input
              type="text"
              id="expirationDate"
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.expirationDate ? 'border-red-500' : ''}`}
              placeholder="MM/YY"
              value={expirationDate}
              onChange={(event) => setExpirationDate(event.target.value)}
            />
            {errors.expirationDate && <p className="text-red-500">{errors.expirationDate}</p>}
          </div>
          <div className="w-1/2">
            <label htmlFor="securityCode" className="block text-gray-700 font-bold">
              Security Code
            </label>
            <input
              type="text"
              id="securityCode"
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.securityCode ? 'border-red-500' : ''}`}
              placeholder="123"
              value={securityCode}
              onChange={(event) => setSecurityCode(event.target.value)}
            />
            {errors.securityCode && <p className="text-red-500">{errors.securityCode}</p>}
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <p>Amount:</p>
            <p>{totalAmount}</p>
          </div>
          <button
            type="submit"
            className="py-2 mt-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;


