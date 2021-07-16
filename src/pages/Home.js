import { Navbar } from '../components/Navbar';
import { Banner } from '../components/Banner';
import { CardList } from '../components/CardList';

import { SubscriptionProvider } from '../context/subscriptions';

export function Home() {
  return (
    <SubscriptionProvider>
      <Navbar />
      <Banner />
      <CardList />
    </SubscriptionProvider>
  )
}