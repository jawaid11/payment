import { createContext, useContext, useState } from 'react';

const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState(null);

  const setAmount = (amount) => {
    setTotalAmount(amount);
  };

  return (
    <SubscriptionContext.Provider value={{ totalAmount, setAmount }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => useContext(SubscriptionContext);
