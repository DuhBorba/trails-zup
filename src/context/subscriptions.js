import { useContext, createContext, useState } from 'react'

const SubscriptionContext = createContext({
  subscriptions: 0,
  setSubscriptions: () => { },
  subscribed: [],
  setSubscribed: () => { },
})

export const SubscriptionProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState(0);
  const [subscribed, setSubscribed] = useState([]);

  return (
    <SubscriptionContext.Provider value={{ subscriptions, setSubscriptions, subscribed, setSubscribed }}>
      {children}
    </SubscriptionContext.Provider>
  )
}

export function useSubscription() {
  const context = useContext(SubscriptionContext)
  return context
}